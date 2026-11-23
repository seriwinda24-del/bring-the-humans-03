import { cpSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Resubmit: entry now names the new ad3 "skill race" TikTok video.
const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
cpSync(`${root}VIDEO.json`, `${outDir}/VIDEO.json`);
