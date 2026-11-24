// ad7 hand-in: copy the video pointer (VIDEO.json) into the grading output.
// The video itself is the entry — the house reads its views from TikTok.
// This program only delivers the pointer, nothing else.
// Rev 2: after copying, verify the delivered file byte-for-byte so a
// truncated or stale copy can never pass silently as the hand-in.
import { cpSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const REPO_ROOT = fileURLToPath(new URL(".", import.meta.url));
const VIDEO_POINTER = join(REPO_ROOT, "VIDEO.json");

function targetDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  return fromEnv && fromEnv.length > 0 ? fromEnv : "out";
}

function checkPointer(): void {
  if (!existsSync(VIDEO_POINTER)) {
    throw new Error("VIDEO.json is missing from the repository root");
  }
  const parsed = JSON.parse(readFileSync(VIDEO_POINTER, "utf8")) as unknown;
  if (typeof parsed !== "object" || parsed === null || !("url" in parsed)) {
    throw new Error("VIDEO.json must be an object with a url field");
  }
  const url = (parsed as { url: unknown }).url;
  if (typeof url !== "string" || !url.startsWith("https://www.tiktok.com/@kzr260/video/")) {
    throw new Error("VIDEO.json url must be the full TikTok video address");
  }
}

function verifyCopy(outFile: string): void {
  const delivered = readFileSync(outFile, "utf8");
  const source = readFileSync(VIDEO_POINTER, "utf8");
  if (delivered !== source) {
    throw new Error("delivered VIDEO.json does not match the repository pointer");
  }
}

function handOverVideoFile(): void {
  const out = targetDir();
  mkdirSync(out, { recursive: true });
  checkPointer();
  const outFile = join(out, "VIDEO.json");
  cpSync(VIDEO_POINTER, outFile);
  verifyCopy(outFile);
}

handOverVideoFile();
