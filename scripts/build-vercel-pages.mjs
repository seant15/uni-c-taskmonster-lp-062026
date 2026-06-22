#!/usr/bin/env node
/**
 * Assemble static site into public/ for Vercel deploy.
 * Source: web/preview/*.html + design/ + web/assets|app_screenshots|quiz
 */
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public');

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

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

cpSync(join(root, 'index.html'), join(out, 'index.html'));
cpSync(join(root, 'design'), join(out, 'design'), { recursive: true });
mkdirSync(join(out, 'web'), { recursive: true });
cpSync(join(root, 'web', 'assets'), join(out, 'web', 'assets'), { recursive: true });
cpSync(join(root, 'web', 'app_screenshots'), join(out, 'web', 'app_screenshots'), { recursive: true });
cpSync(join(root, 'web', 'quiz'), join(out, 'web', 'quiz'), { recursive: true });

for (const [slug, filename] of Object.entries(map)) {
  const src = join(root, 'web', 'preview', filename);
  const destDir = join(out, slug);
  mkdirSync(destDir, { recursive: true });
  const html = readFileSync(src, 'utf8');
  writeFileSync(join(destDir, 'index.html'), convertPreviewHtml(html), 'utf8');
  console.log(`Built public/${slug}/index.html from ${filename}`);
}

console.log('Done. Vercel output: public/ → /lp1 /lp2 /lp3 /lp4');
