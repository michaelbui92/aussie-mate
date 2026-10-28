// Run with: node --test tests/unit/faq-lead.test.cjs
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const root = path.resolve(__dirname, "../..");
function load(file, dependencies = {}) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
    fileName: file,
  }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(compiled, {
    module, exports: module.exports,
    require: (name) => dependencies[name] ?? require(name),
  }, { filename: file });
  return module.exports;
}
const shape = load("app/lib/text-shape.ts");
const langBlocks = load("app/components/LangBlocks.tsx");
const { FaqLead } = load("app/components/Readable.tsx", {
  "@/lib/text-shape": shape,
  "@/components/LangBlocks": langBlocks,
});

test("FAQ lead retains URL query strings without swallowing the next sentence", () => {
  const en = "Visit https://example.com/search?q=beach&sort=best for details. Next sentence follows.";
  const html = renderToStaticMarkup(React.createElement(langBlocks.LangProvider, {
    initial: "en", children: React.createElement(FaqLead, { en }),
  }));
  assert.equal(html, "<p>Visit https://example.com/search?q=beach&amp;sort=best for details.</p>");
});

test("FAQ lead renders complete domain and email in English and Korean", () => {
  const en = "Visit example.com or email hello@example.com for details. Next sentence follows.";
  const ko = "example.com\uc5d0\uc11c hello@example.com\uc73c\ub85c \ubb38\uc758\ud558\uc138\uc694. \ub2e4\uc74c \ubb38\uc7a5\uc785\ub2c8\ub2e4.";
  for (const [lang, expected] of [
    ["en", "<p>Visit example.com or email hello@example.com for details.</p>"],
    ["ko", "<p>example.com\uc5d0\uc11c hello@example.com\uc73c\ub85c \ubb38\uc758\ud558\uc138\uc694.</p>"],
  ]) {
    const html = renderToStaticMarkup(React.createElement(langBlocks.LangProvider, {
      initial: lang, children: React.createElement(FaqLead, { en, ko }),
    }));
    assert.equal(html, expected);
  }
});
