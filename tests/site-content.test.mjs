import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const script = readFileSync(new URL("../static/js/index.js", import.meta.url), "utf8");
const css = readFileSync(new URL("../static/css/index.css", import.meta.url), "utf8");

test("default English content keeps the existing published copy", () => {
  assert.match(html, /Video Production Buddy \| Agentic Video Production/);
  assert.match(html, /Open-source AI video production assistant/);
  assert.match(html, /AI-Driven,/);
  assert.match(html, /Human-Curated/);
  assert.match(html, /What it makes\./);
  assert.match(html, /From launch reels to cinematic scenes\./);
  assert.match(html, /Turn the vision in your mind precisely into a piece of art\./);
  assert.match(html, /Set up in minutes\. Start producing now\./);
  assert.match(html, /No new workflow to learn\. Open the repo with Claude Code, Codex, Cursor, Copilot, Windsurf, or an OpenClaw-style agent and start producing\./);
  assert.match(html, /make setup/);
  assert.match(html, /Create a 60-second commercial video for the 14-inch Apple MacBook Pro equipped with the M5 chip\./);
});

test("removed second-pass content changes are not present", () => {
  assert.doesNotMatch(html, /Open, governed AI video production/);
  assert.doesNotMatch(html, /zero-key demo/i);
  assert.doesNotMatch(html, /Visible provider\/model routing/);
  assert.doesNotMatch(html, /Synced with the current repository/);
  assert.doesNotMatch(html, /requirements-list/);
  assert.doesNotMatch(html, /reveal-on-scroll/);
  assert.doesNotMatch(css, /reveal-on-scroll/);
  assert.doesNotMatch(script, /IntersectionObserver/);
});

test("hero figure is replaced by localized animated banner assets", () => {
  assert.match(html, /id="heroBannerVideo"/);
  assert.match(html, /static\/media\/hero\/en\/hero-banner-loop-en-v1-hd\.webm/);
  assert.match(html, /static\/media\/hero\/en\/hero-banner-loop-en-v1-hd\.mp4/);
  assert.match(html, /static\/media\/hero\/zh\/hero-banner-loop-zh-v1-hd\.webm/);
  assert.match(html, /static\/media\/hero\/zh\/hero-banner-loop-zh-v1-hd\.mp4/);
  assert.doesNotMatch(html, /hero-production-assistant\.png/);
  assert.match(css, /\.hero-banner-video[^{]*\{[^}]*object-fit: contain;/s);
  assert.match(script, /heroBannerVideo/);
});

test("Chinese language version is available while English stays default", () => {
  assert.match(html, /<html[^>]+lang="en"/);
  assert.match(html, /data-language-option="en"/);
  assert.match(html, /data-language-option="zh-CN"/);
  assert.match(html, /aria-label="Choose language"/);
  assert.match(script, /const DEFAULT_LANGUAGE = "en"/);
  assert.match(script, /window\.localStorage\.setItem\("vpb-language"/);
  assert.match(script, /"nav.brand": "织影"/);
  assert.match(script, /"hero.title": "织影"/);
  assert.match(script, /"quick.title": "几分钟完成设置，马上开始制作。"/);
});
