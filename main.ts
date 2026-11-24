import { cpSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// Copy the entry's VIDEO.json into the grader's output directory.
const repoRoot = fileURLToPath(new URL(".", import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(repoRoot, "out");

mkdirSync(outputDir, { recursive: true });
cpSync(join(repoRoot, "VIDEO.json"), join(outputDir, "VIDEO.json"));
