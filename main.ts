// Rev 2: also require a numeric video id after the handle, so a
// truncated or mistyped link cannot slip through the prefix check.
import { cpSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const REPO = fileURLToPath(new URL(".", import.meta.url));
const POINTER = join(REPO, "VIDEO.json");

function outputFolder(): string {
  const envDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (envDir && envDir.trim().length > 0) {
    return envDir;
  }
  return "out";
}

function loadPointer(): { url: string } {
  if (!existsSync(POINTER)) {
    throw new Error("VIDEO.json not found in the repository root");
  }
  const data: unknown = JSON.parse(readFileSync(POINTER, "utf8"));
  if (typeof data !== "object" || data === null) {
    throw new Error("VIDEO.json must contain a JSON object");
  }
  const url = (data as Record<string, unknown>).url;
  if (typeof url !== "string") {
    throw new Error("VIDEO.json must have a string url field");
  }
  if (!url.startsWith("https://www.tiktok.com/@kzr260/video/")) {
    throw new Error("VIDEO.json url must point at the @kzr260 TikTok video");
  }
  const videoId = url.slice("https://www.tiktok.com/@kzr260/video/".length);
  if (!/^\d+$/.test(videoId)) {
    throw new Error("VIDEO.json url must end with a numeric video id");
  }
  return { url };
}

function confirmDelivery(dest: string): void {
  const delivered = readFileSync(dest);
  const original = readFileSync(POINTER);
  if (!delivered.equals(original)) {
    throw new Error("copied VIDEO.json differs from the repository original");
  }
}

function deliverPointer(): void {
  loadPointer();
  const folder = outputFolder();
  mkdirSync(folder, { recursive: true });
  const dest = join(folder, "VIDEO.json");
  cpSync(POINTER, dest);
  confirmDelivery(dest);
}

deliverPointer();
