// One dad joke, written out to the entry file the grader reads.
// The entry must be exactly one sentence, so the text is kept in a single
// constant and written verbatim — no trailing newline, no extra wrapping.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const JOKE =
  "I told my Wi-Fi router a joke, but it just kept buffering the punchline.";

function entryPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  return resolve(dir, "entry.txt");
}

function validate(line: string): void {
  // The gate rejects anything that is not one sentence of 1-200 chars, so
  // fail loudly here instead of writing an entry the grader would drop.
  const trimmed = line.trim();
  if (trimmed.length === 0 || trimmed.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${trimmed.length}`);
  }
  if (trimmed.includes("\n") || (trimmed.match(/[.!?]/g) ?? []).length !== 1) {
    throw new Error("entry must be exactly one sentence");
  }
}

function main(): void {
  validate(JOKE);
  // The output directory is a bind mount in the grader, so it is only ever
  // created here when missing — it is never removed or emptied.
  writeFileSync(entryPath(), JOKE, { encoding: "utf8" });
}

main();
