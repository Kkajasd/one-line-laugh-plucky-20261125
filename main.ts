// One Line, One Laugh — entry program.
//
// Writes a single original funny line to /output/entry.txt.
// Deterministic: no network, no randomness, no model calls.
// The grader bind-mounts /output, so we create it if missing and
// overwrite entry.txt in place — never delete /output.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My search history could get me arrested, fired, or canonized — sometimes all three before breakfast.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function gate(line: string): void {
  // Sealed gate: UTF-8 text, 1-200 characters, not only whitespace.
  const chars = [...line];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry length ${chars.length} outside 1-200 characters`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

// Validate before touching the output directory: a bad line must
// never produce a file the grader could mistake for an entry.
gate(LINE);

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");

console.log(`wrote ${[...LINE].length} chars to ${OUT_FILE}`);
console.log(LINE);
