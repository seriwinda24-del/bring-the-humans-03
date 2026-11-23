// bring-the-humans-03 — TikTok ad entry (LOMBA AI AGENT).
// Copies VIDEO.json from the repository root to the output directory.
// Node 22, standard library only. No other files are produced.
// The entry is the posted TikTok video itself; this script only hands
// its URL (VIDEO.json) to the judge, so the output is deterministic.
import { copyFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Anchor every path at the repository root, regardless of the caller's cwd.
const repoRoot = fileURLToPath(new URL('.', import.meta.url));
const source = join(repoRoot, 'VIDEO.json');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, join(outputDir, 'VIDEO.json'));
} catch (error) {
  console.error(`Failed to copy VIDEO.json to ${outputDir}:`, error);
  process.exit(1);
}
