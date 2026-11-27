#!/usr/bin/env node
// Scans app/**/*.ts(x) for absolute http(s) URLs and probes each one.
// Exit 1 on any 404/410. 403/429/000 are warnings only (bot walls, timeouts).
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("../app", import.meta.url).pathname;
const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
const TIMEOUT_MS = 15000;

// Known bot-blockers: these answer 403/429 to scripted clients even when the
// page is live, so a non-404 failure here is a warning, never a failure.
const BOT_BLOCKERS = [
  "ato.gov.au",
  "scamwatch.gov.au",
  "fairwork.gov.au",
  "education.gov.au",
  "servicesaustralia.gov.au",
  "studyinaustralia.gov.au",
  "realestate.com.au",
  "flatmates.com.au",
  "domain.com.au",
];

const SKIP = [
  "hostninja",
  "vercel",
  "localhost",
  "schema.org",
  "w3.org",
  "nextjs.org",
  "googlesyndication",
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.tsx?$/.test(name)) out.push(p);
  }
  return out;
}

// Blank out template literals (keeping newlines) so URLs inside them are skipped.
function stripTemplates(src) {
  return src.replace(/`(?:\\[\s\S]|[^`\\])*`/g, (m) => m.replace(/[^\n]/g, " "));
}

const found = new Map(); // url -> "file:line"
for (const file of walk(ROOT)) {
  const src = stripTemplates(readFileSync(file, "utf8"));
  const lines = src.split("\n");
  lines.forEach((line, i) => {
    for (const m of line.matchAll(/https?:\/\/[^\s"'`<>)\\]+/g)) {
      const url = m[0].replace(/[.,;]+$/, "");
      let host;
      try {
        host = new URL(url).hostname;
      } catch {
        continue;
      }
      if (SKIP.some((s) => host.includes(s))) continue;
      if (!found.has(url)) found.set(url, `${file.replace(ROOT, "app")}:${i + 1}`);
    }
  });
}

async function probe(url) {
  const opts = (method) => ({
    method,
    redirect: "follow",
    headers: { "User-Agent": UA, Accept: "text/html,*/*" },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  try {
    let r = await fetch(url, opts("HEAD"));
    if (r.status >= 400) r = await fetch(url, opts("GET")); // some servers reject HEAD
    return r.status;
  } catch {
    return 0;
  }
}

const entries = [...found.entries()];
const results = [];
let next = 0;
async function worker() {
  while (next < entries.length) {
    const [url, where] = entries[next++];
    results.push({ url, where, status: await probe(url) });
  }
}
await Promise.all(Array.from({ length: 6 }, worker));

let dead = 0;
let warn = 0;
for (const r of results.sort((a, b) => a.where.localeCompare(b.where))) {
  const host = new URL(r.url).hostname;
  const blocker = BOT_BLOCKERS.some((b) => host.endsWith(b));
  if (r.status === 404 || r.status === 410) {
    dead++;
    console.log(`DEAD  ${r.status} ${r.url}  (${r.where})`);
  } else if (r.status === 0 || r.status === 403 || r.status === 429) {
    warn++;
    console.log(`WARN  ${r.status || "000"} ${r.url}  (${r.where})${blocker ? " [known bot-blocker]" : ""}`);
  } else if (r.status >= 400) {
    warn++;
    console.log(`WARN  ${r.status} ${r.url}  (${r.where})`);
  }
}
console.log(`checked ${results.length} URLs: ${dead} dead, ${warn} warnings`);
process.exit(dead ? 1 : 0);
