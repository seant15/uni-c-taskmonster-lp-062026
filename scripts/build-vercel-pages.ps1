# Sync web/preview HTML → lp1–lp4 for Vercel static deploy.
# Run from repo root: powershell -File scripts/build-vercel-pages.ps1

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot

$map = @{
  'lp1' = 'lp-01-circuit-breaker-tripping.html'
  'lp2' = 'lp-02-leak-under-sink.html'
  'lp3' = 'lp-03-negotiate-quote.html'
  'lp4' = 'lp-04-smart-home-setup-stuck.html'
}

function Convert-PreviewHtml([string]$html) {
  $out = $html
  $out = $out -replace '\.\./\.\./design/', '../design/'
  $out = $out -replace '\.\./app_screenshots/', '../web/app_screenshots/'
  $out = $out -replace '\.\./assets/', '../web/assets/'
  $out = $out -replace '\.\./quiz/', '../web/quiz/'
  return $out
}

foreach ($slug in $map.Keys) {
  $src = Join-Path $root "web\preview\$($map[$slug])"
  $destDir = Join-Path $root $slug
  $dest = Join-Path $destDir 'index.html'

  if (-not (Test-Path $src)) {
    throw "Missing source: $src"
  }

  New-Item -ItemType Directory -Force -Path $destDir | Out-Null
  $html = Get-Content -Path $src -Raw -Encoding UTF8
  Convert-PreviewHtml $html | Set-Content -Path $dest -Encoding UTF8 -NoNewline
  Write-Host "Built $dest from $($map[$slug])"
}

Write-Host 'Done. Routes: /lp1 /lp2 /lp3 /lp4'
