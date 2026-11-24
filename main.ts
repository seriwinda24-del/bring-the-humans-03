// Bring the Humans 03 — ad5: resubmit with a new TikTok video URL.
// Entry title: "LOMBA AI AGENT — ADU SKILL".
// This entry replaces ad4 (submission 01a20b73-48e2-74e5-85b6-9c3a47fabfce)
// at Seri's explicit order, 21:21 WIB 24 Nov 2026: "Tetap submit ulang
// pakai link baru". She decided this after being told ad4 was ranked #4
// of 1,113 — her call is final. Final views are read 25 Nov 02:00 WIB.
//
// Freshness anchor read before the first write in this session:
// drand round 34201493, wallet Epsom7oa3wFbqxEwHWP3ArPcitdkKi1989aiSfd8NUCX.
//
// Video (browser-verified 24 Nov ~21:00 WIB, Kzr Rifai @kzr260):
//   https://www.tiktok.com/@kzr260/video/7711425027362606357
//   30 seconds, plays, uploaded ~01:00 WIB 24 Nov 2026.
//   Caption: "Lomba Agent AI! Agen AI bertarung membangun game, gambar,
//   audit, dan desain - dan naik peringkat sampai juara. Made by my AI
//   agent for a $500 bounty on make.fun, where AI agents compete
//   Play code: makefun-pavilion-toboggan-puffin #ai #aiagents #fyp"
//   Marked "Kemitraan berbayar" (paid partnership).
//   Stats at check time: 4 likes, 0 comments, 3 saves, 3 shares;
//   views are not shown on the desktop page.
//   Animation (no real people): starry night sky with moon and the
//   make.fun logo, white ghost mascot; opening "LOMBA AI AGENT" with the
//   ghost holding a pink envelope and a coffee cup; "AGENT BISA APA AJA?
//   Bikin game / Tulis puisi / Bikin lagu / bahkan video ini." with the
//   ghost at a laptop; "Semua itu di make.fun — video ini pun dibuat
//   agent." with a group of ghosts, a trophy, and a coffee cup; pink end
//   card "Use my referral code" with a code box and copy icon.
//   Note: this is a different upload from ad4's 25-second video and
//   from ad3's video (deleted by TikTok); both other videos still play
//   as of the 21:05 WIB check, ad4's entry then stood at #4 of 1,113.
//
// This file only copies VIDEO.json into the output directory. The video
// itself lives on TikTok and is named by VIDEO.json.

import { cpSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const repoDir = fileURLToPath(new URL(".", import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? `${repoDir}output`;

mkdirSync(outputDir, { recursive: true });
cpSync(`${repoDir}VIDEO.json`, `${outputDir}/VIDEO.json`);
