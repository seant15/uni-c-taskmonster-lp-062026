#!/usr/bin/env node
/**
 * Sync web/preview HTML → lp1–lp4 for Vercel static deploy.
 * Cross-platform (Node) — use on Vercel build; PowerShell variant for local Windows.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const map = {
  lp1: 'lp-01-circuit-breaker-tripping.html',
  lp2: 'lp-02-leak-under-sink.html',
  lp3: 'lp-03-negotiate-quote.html',
  lp4: 'lp-04-smart-home-setup-stuck.html',
};

function convertPreviewHtml(html) {
  return html
    .replace(/\.\.\/\.\.\/design\//g, '../design/')
    .replace(/\.\.\/app_screenshots\//g, '../web/app_screenshots/')
    .replace(/\.\.\/assets\//g, '../web/assets/')
    .replace(/\.\.\/quiz\//g, '../web/quiz/');
}

for (const [slug, filename] of Object.entries(map)) {
  const src = join(root, 'web', 'preview', filename);
  const destDir = join(root, slug);
  const dest = join(destDir, 'index.html');
  mkdirSync(destDir, { recursive: true });
  const html = readFileSync(src, 'utf8');
  writeFileSync(dest, convertPreviewHtml(html), 'utf8');
  console.log(`Built ${slug}/index.html from ${filename}`);
}

console.log('Done. Routes: /lp1 /lp2 /lp3 /lp4');
