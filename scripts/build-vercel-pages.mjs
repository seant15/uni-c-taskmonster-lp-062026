#!/usr/bin/env node
/**
 * Assemble static site into public/ for Vercel deploy.
 * Source of truth: lp1–lp4/index.html (not web/preview).
 */
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public');

const slugs = ['lp1', 'lp2', 'lp3', 'lp4'];

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

cpSync(join(root, 'index.html'), join(out, 'index.html'));
cpSync(join(root, 'design'), join(out, 'design'), { recursive: true });
mkdirSync(join(out, 'web'), { recursive: true });
cpSync(join(root, 'web', 'assets'), join(out, 'web', 'assets'), { recursive: true });
cpSync(join(root, 'web', 'app_screenshots'), join(out, 'web', 'app_screenshots'), { recursive: true });
cpSync(join(root, 'web', 'quiz'), join(out, 'web', 'quiz'), { recursive: true });
cpSync(join(root, 'web', 'tm-site-config.js'), join(out, 'web', 'tm-site-config.js'));

for (const slug of slugs) {
  const src = join(root, slug, 'index.html');
  const destDir = join(out, slug);
  mkdirSync(destDir, { recursive: true });
  cpSync(src, join(destDir, 'index.html'));
  console.log(`Built public/${slug}/index.html from ${slug}/index.html`);
}

console.log('Done. Vercel output: public/ → /lp1 /lp2 /lp3 /lp4');
