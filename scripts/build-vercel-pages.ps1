# Sync web/preview HTML → public/lp1–lp4 for local Windows builds.
# Vercel uses scripts/build-vercel-pages.mjs (Node). Prefer: npm run build

$ErrorActionPreference = 'Stop'
& node (Join-Path $PSScriptRoot 'build-vercel-pages.mjs')
