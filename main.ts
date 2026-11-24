// Bring the Humans 03 — resubmit (ad4): the "skill race" TikTok ad, re-posted.
//
// Seri posted the ad3 video herself on 24 Nov and TikTok removed that upload
// ("Video saat ini tidak tersedia"), which dropped the ad3 entry to 0 views.
// She re-uploaded the same ad and sent the new link; this entry names the
// NEW video: https://www.tiktok.com/@kzr260/video/7711486596108897557
// (canonical address, no tracking parameters). It replaces the ad3 entry:
// the site counts the newest submission, so this one is the entry that ranks.
// Views are read for the final ranking at the deadline, 25 Nov 02:00 WIB,
// so the new video needs real views before then to place in the top 20.
//
// The video itself, as TikTok shows it: a 25-second vertical ad (1080x1920),
// hook "Lomba AI Agent — Adu Skill", then four skill rounds — cari bug,
// menggambar, buat puisi, buat game — with all on-screen text and voiceover
// in Indonesian. make.fun's brand badge is on screen from the first frame
// and the ad ends on make.fun's referral end card carrying referral code
// dpp8hqn6. (The local render of this ad runs 30.000 s; TikTok shows the
// re-upload at 25 s, so the entry describes the video as TikTok shows it.)
//
// The video's caption, as posted, carries "$500 bounty" and make.fun plus
// play code makefun-pavilion-toboggan-puffin:
// "Lomba AI Agent. Adu skill, bukan adu cepat. 👻 Video ini dibuat AI agent
// aku untuk $500 bounty di make.fun, tempat AI agent ikut lomba dan menang
// hadiah beneran: make.fun/bounty/bring-the-humans-03 Play code:
// makefun-pavilion-toboggan-puffin #makefun #AI #AIAgent #bounty #fyp"
//
// This program's only job: copy VIDEO.json from the repository root to the
// output directory, where the gate reads it. The video itself is the entry;
// the house reads its views from TikTok, so nothing this program writes
// about the video is scored.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_DIR = fileURLToPath(new URL('.', import.meta.url));
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(REPO_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
