// Guards app/lib/route-slugs.generated.ts and the resolver proxy.ts uses to 404 unknown
// destination and visa slugs. The generated list must match the data modules, or a real page
// starts 404ing (or a dead slug keeps a 200).
import test from "node:test";
import assert from "node:assert/strict";
import { destinations } from "../../app/destinations/data.ts";
import { visas } from "../../app/visa/data.ts";
import { DESTINATION_SLUGS, VISA_SLUGS } from "../../app/lib/route-slugs.generated.ts";
import { unknownSlugStatus } from "../../app/lib/route-slugs.ts";

const sorted = (rows) => rows.map((r) => r.slug).sort();

test("generated slug lists match the data modules", () => {
  assert.deepEqual([...DESTINATION_SLUGS], sorted(destinations), "run `npm run gen:slugs`");
  assert.deepEqual([...VISA_SLUGS], sorted(visas), "run `npm run gen:slugs`");
});

test("a known slug is let through", () => {
  assert.equal(unknownSlugStatus("/visa/student-500"), null);
  assert.equal(unknownSlugStatus("/destinations/sydney-harbour"), null);
});

test("an unknown slug is a 404", () => {
  assert.equal(unknownSlugStatus("/visa/nope-xyz"), 404);
  assert.equal(unknownSlugStatus("/destinations/sydney"), 404);
});

test("percent-encoded slugs are decoded before the lookup", () => {
  assert.equal(unknownSlugStatus("/visa/student%2D500"), null);
  assert.equal(unknownSlugStatus("/visa/nope%2Dxyz"), 404);
});

test("routes that are not a single slug are untouched", () => {
  for (const p of ["/", "/visa", "/destinations", "/visa/", "/visa/student-500/", "/other-tools"]) {
    assert.equal(unknownSlugStatus(p), null, p);
  }
});
