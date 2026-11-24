// Dad Joke Showdown — writes one dad joke to /output/entry.txt.
// Node 22, standard library only. The grader runs `node main.ts` with
// MAKEFUN_OUTPUT_DIR set (or /output); it starts with an empty output dir,
// so there is nothing to clear — never remove the output dir itself, it is
// a bind mount in the grader and removing it throws EBUSY.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line =
  'I told my Wi-Fi router a joke, but it just kept buffering the punchline.';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), line);
