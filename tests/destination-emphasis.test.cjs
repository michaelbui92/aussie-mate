// Run with: node --test tests/destination-emphasis.test.cjs
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");
const ts = require("typescript");
const React = require("react");

const root = path.resolve(__dirname, "..");

// Load the actual private renderer and its helpers without changing Next's page exports.
function loadTs(source, filename, dependencies = {}) {
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
    fileName: filename,
  }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(compiled, {
    module, exports: module.exports,
    require: (name) => dependencies[name] ?? require(name),
  }, { filename });
  return module.exports;
}

const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const shape = loadTs(read("app/lib/text-shape.ts"), "text-shape.ts");
const data = loadTs(read("app/destinations/data.ts"), "data.ts");
const pageSource = read("app/destinations/[slug]/page.tsx");
const pageAst = ts.createSourceFile("page.tsx", pageSource, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const names = new Set(["withEmphasis", "bodyParagraphs", "BodyParagraphs"]);
const functions = pageAst.statements.filter((node) => ts.isFunctionDeclaration(node) && names.has(node.name?.text));
assert.equal(functions.length, names.size, "destination renderer functions must exist");
const renderer = loadTs(
  `import { groupParagraphs } from "@/lib/text-shape";\n${functions.map((node) => node.getText(pageAst)).join("\n")}\nexport { BodyParagraphs };`,
  "destination-renderer.tsx", { "@/lib/text-shape": shape },
);

// Compare character-by-character emphasis, disregarding whitespace introduced by paragraph shaping.
function expectedCharacters(text) {
  return text.split(/\n[ \t]*\n/).flatMap((block) => {
    const parts = block.split("**");
    assert.equal(parts.length % 2, 1, "fixture must have balanced emphasis in each authored paragraph");
    return parts.flatMap((part, index) => Array.from(part).filter((c) => !/\s/.test(c)).map((c) => [c, index % 2 === 1]));
  });
}

function renderedCharacters(node, bold = false) {
  if (node == null || typeof node === "boolean") return [];
  if (typeof node === "string" || typeof node === "number") {
    return Array.from(String(node)).filter((c) => !/\s/.test(c)).map((c) => [c, bold]);
  }
  if (Array.isArray(node)) return node.flatMap((child) => renderedCharacters(child, bold));
  assert.ok(React.isValidElement(node));
  return renderedCharacters(node.props.children, bold || node.type === "strong");
}

function checkEmphasis(text, lang, label) {
  const expected = expectedCharacters(text);
  const actual = renderedCharacters(renderer.BodyParagraphs({ text, className: "body", lang }));
  assert.equal(actual.length, expected.length, `${label}: character count differs`);
  const mismatch = expected.findIndex(([char, bold], i) => char !== actual[i][0] || bold !== actual[i][1]);
  assert.equal(mismatch, -1, `${label}: mismatch at character ${mismatch}; expected ${JSON.stringify(expected[mismatch])}, got ${JSON.stringify(actual[mismatch])}`);
}

test("preserves bold spans and surrounding plain text across paragraph splitting in every language", () => {
  for (const lang of ["en", "ko", "ja", "zh"]) {
    const sentence = lang === "ja" || lang === "zh" ? "Some long sentence with a number 1.5 and text repeated many times here。" : "Some long sentence with a number 1.5 and text repeated many times here. ";
    const text = `Plain lead. **${sentence.repeat(8)}end** plain tail. **Second label:** trailing plain.`;
    checkEmphasis(text, lang, lang);
  }
});

test("long destination blocks keep punctuation, tokens and whitespace inside paragraphs", () => {
  const sentence = "Visit example.com, email hello@example.com, use version 1.2.3, or open https://example.com/search?q=beach&sort=best.  ";
  const text = `!!! ${sentence.repeat(8)}End.`;
  const element = renderer.BodyParagraphs({ text, className: "body", lang: "en" });
  const paragraphs = React.Children.toArray(element.props.children).map((p) => renderedText(p));
  let offset = 0;
  for (const paragraph of paragraphs) {
    const position = text.indexOf(paragraph, offset);
    assert.notEqual(position, -1, `altered paragraph: ${paragraph}`);
    assert.match(text.slice(offset, position), /^\s*$/);
    offset = position + paragraph.length;
  }
  assert.match(text.slice(offset), /^\s*$/);
  assert.ok(paragraphs.length > 1);
});

function renderedText(node) {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(renderedText).join("");
  return renderedText(node.props.children);
}

test("balanced emphasis retains exact separators when split across CJK sentences", () => {
  const sentence = "\u7b2c\u4e00\u53e5\u3002\u7b2c\u4e8c\u53e5\u3002";
  const emphasis = sentence.repeat(20);
  const text = `\u5f00\u5934\u3002**${emphasis}**\u7ed3\u5c3e\u3002`;
  const element = renderer.BodyParagraphs({ text, className: "body", lang: "zh" });
  const strong = [];
  function collect(node) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) return node.forEach(collect);
    if (node.type === "strong") strong.push(renderedText(node));
    collect(node.props.children);
  }
  collect(element);
  assert.deepEqual(strong, [emphasis]);
  assert.equal(renderedText(element), text.replaceAll("**", ""));
});

test("balanced emphasis preserves multiple spaces and line breaks across grouped sentences", () => {
  const emphasis = "A long sentence with details and context for the reader.  \n".repeat(9);
  const text = `Lead. **${emphasis}End** tail.`;
  const element = renderer.BodyParagraphs({ text, className: "body", lang: "en" });
  const children = React.Children.toArray(element.props.children);
  const strong = children.flatMap((p) => React.Children.toArray(p.props.children).filter((node) => node.type === "strong"));
  assert.equal(strong.length, 1);
  assert.equal(renderedText(strong[0]), `${emphasis}End`);
});

test("preserves intended emphasis in every balanced destination body for all locales", () => {
  let checked = 0;
  for (const destination of data.destinations) {
    for (const field of ["howToGetThere", "bestTimeDetailed"]) {
      for (const lang of ["en", "ko", "ja", "zh"]) {
        const localized = destination[field];
        if (!localized) continue;
        const text = localized[lang] ?? localized.en;
        // Existing malformed source paragraphs are outside the balanced-marker regression.
        if (text.split(/\n[ \t]*\n/).some((block) => (block.match(/\*\*/g) ?? []).length % 2)) continue;
        checkEmphasis(text, lang, `${destination.slug}/${field}/${lang}`);
        checked++;
      }
    }
  }
  assert.ok(checked > 100, `expected substantial locale coverage; checked ${checked}`);
});
