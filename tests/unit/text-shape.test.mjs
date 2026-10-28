import { test } from "node:test";
import assert from "node:assert/strict";
import { groupParagraphs, splitSentences } from "../../app/lib/text-shape.ts";

test("keeps abbreviations inside sentences", () => {
  assert.deepEqual(splitSentences("Dr. Smith lists e.g. beaches. Go now.", "en"), [
    "Dr. Smith lists e.g. beaches.",
    "Go now.",
  ]);
});

test("treats sentence-final etc. as a boundary without dropping it", () => {
  assert.deepEqual(splitSentences("Bring towels, hats, etc. Next, leave early.", "en"), [
    "Bring towels, hats, etc.",
    "Next, leave early.",
  ]);
  assert.deepEqual(splitSentences("etc.", "en"), ["etc."]);
});

test("keeps domains and email addresses intact in FAQ leads and paragraphs", () => {
  const text = "Visit example.com or email hello@example.com for details. Next sentence follows.";
  const sentences = ["Visit example.com or email hello@example.com for details.", "Next sentence follows."];
  assert.deepEqual(splitSentences(text, "en"), sentences);
  assert.equal(splitSentences(text, "en")[0], sentences[0]);
  assert.deepEqual(groupParagraphs(text, "en", 100), [text]);
  const korean = "example.com\uc5d0\uc11c hello@example.com\uc73c\ub85c \ubb38\uc758\ud558\uc138\uc694. \ub2e4\uc74c \ubb38\uc7a5\uc785\ub2c8\ub2e4.";
  assert.deepEqual(splitSentences(korean, "ko"), [
    "example.com\uc5d0\uc11c hello@example.com\uc73c\ub85c \ubb38\uc758\ud558\uc138\uc694.",
    "\ub2e4\uc74c \ubb38\uc7a5\uc785\ub2c8\ub2e4.",
  ]);
  assert.deepEqual(groupParagraphs(korean, "ko", 100), [korean]);
});

test("distinguishes URL query delimiters from sentence-ending questions", () => {
  const first = "Visit https://example.com/search?q=beach&sort=best for details.";
  assert.deepEqual(splitSentences(`${first} Is that useful? Yes!`, "en"), [first, "Is that useful?", "Yes!"]);
  assert.deepEqual(splitSentences("Is https://example.com/search?q=beach? Yes.", "en"), ["Is https://example.com/search?q=beach?", "Yes."]);
  assert.deepEqual(splitSentences("See example.com/search?q=beach. Next.", "en"), ["See example.com/search?q=beach.", "Next."]);
});

test("preserves original separators while grouping CJK sentences", () => {
  const text = "\u7b2c\u4e00\u53e5\u3002\u7b2c\u4e8c\u53e5\u3002";
  assert.deepEqual(groupParagraphs(text, "zh", 100), [text]);
});

test("retains decimal values and following sentence boundaries", () => {
  assert.deepEqual(splitSentences("Costs $5.60 or 1.2.3 dollars. Buy 0.75 kg! Done?", "en"), [
    "Costs $5.60 or 1.2.3 dollars.",
    "Buy 0.75 kg!",
    "Done?",
  ]);
});

test("keeps known abbreviations case-insensitively and etc. inside a sentence", () => {
  const text = "MR. Jones, Mrs. Smith and dr. Lee visit St. Kilda, i.e. the beach, approx. 5.5 km away, vs. town, etc. for a day. Next.";
  assert.deepEqual(splitSentences(text, "en"), [text.slice(0, -6), "Next."]);
});

test("preserves every non-whitespace character through splitting and grouping", () => {
  const cases = [
    ["  !!! Lead... (Done?) Next.\u0000 etc.  ", "en"],
    ["\uff01\u3002\u300c\u8a00\u8449\u3002\u300d\u6b21\uff01\u672b\u5c3e", "ja"],
    ["\u7b2c\u4e00\u53e5\u3002\u7b2c\u4e8c\u53e5\u3002\u7b2c\u4e09\u53e5\u3002", "zh"],
    ["\ubb38\uc7a5\uc785\ub2c8\ub2e4.  3.14\uc785\ub2c8\ub2e4! \ub05d?", "ko"],
  ];
  for (const [text, lang] of cases) {
    const compact = (value) => value.replace(/\s/g, "");
    assert.equal(compact(splitSentences(text, lang).join("")), compact(text));
    assert.equal(compact(groupParagraphs(text, lang, 1).join("")), compact(text));
  }
});

test("preserves CJK punctuation and closing quotes with their sentences", () => {
  assert.deepEqual(splitSentences("\u300c\u3053\u3093\u306b\u3061\u306f\u3002\u300d\u6b21\u3067\u3059\uff01", "ja"), [
    "\u300c\u3053\u3093\u306b\u3061\u306f\u3002\u300d",
    "\u6b21\u3067\u3059\uff01",
  ]);
});
