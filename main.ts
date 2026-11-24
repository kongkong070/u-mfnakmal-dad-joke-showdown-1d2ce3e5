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

function main(): void {
  // The output directory is a bind mount in the grader, so it is only ever
  // created here when missing — it is never removed or emptied.
  writeFileSync(entryPath(), JOKE, { encoding: "utf8" });
}

main();
