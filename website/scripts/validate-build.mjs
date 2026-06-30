/**
 * Validates the Docusaurus build output before deployment.
 * Run from the website/ directory: node scripts/validate-build.mjs
 * Exits with code 1 and a descriptive message on any failure.
 */

import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const BUILD_DIR = 'build';

// Auto-detect base path from docusaurus.config.js
let BASE_PATH = '/';
try {
  const config = readFileSync('docusaurus.config.js', 'utf8');
  const match = config.match(/baseUrl:\s*['"]([^'"]+)['"]/);
  if (match) BASE_PATH = match[1];
} catch {
  // If we can't read the config, use the default
}

let failed = false;

function fail(msg) {
  console.error(`[validate-build] FAIL: ${msg}`);
  failed = true;
}

function ok(msg) {
  console.log(`[validate-build] OK:   ${msg}`);
}

console.log(`[validate-build] Checking build output for base path: ${BASE_PATH}`);

// 1. Build directory exists
if (!existsSync(BUILD_DIR)) {
  fail(`Build directory '${BUILD_DIR}' does not exist — run 'npm run build' first`);
  process.exit(1);
}
ok('build/ directory exists');

// 2. index.html exists
const indexPath = join(BUILD_DIR, 'index.html');
if (!existsSync(indexPath)) {
  fail(`${indexPath} is missing`);
  process.exit(1);
}
ok('build/index.html exists');

const html = readFileSync(indexPath, 'utf8');

// 3. HTML references the correct base path
if (BASE_PATH !== '/' && !html.includes(BASE_PATH)) {
  fail(`index.html does not reference base path '${BASE_PATH}' — check docusaurus.config.js baseUrl`);
  failed = true;
} else {
  ok(`index.html references base path '${BASE_PATH}'`);
}

// 4 & 5. Base-path enforcement — only meaningful when NOT root-hosted.
// Under baseUrl '/' (custom domain), href="/" and /assets/... are valid.
const escapedBase = BASE_PATH.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
if (BASE_PATH !== '/') {
  // 4. No root-relative href="/" that bypasses the base path
  if (html.includes('href="/"')) {
    fail(`index.html contains 'href="/"' — root-relative link bypasses base path`);
    failed = true;
  } else {
    ok('No root-relative href="/" in index.html');
  }

  // 5. No asset references outside the base path (excluding hash fragments and external URLs)
  const rootRelativePattern = new RegExp(`(?:src|href)="\\/(?!${escapedBase.slice(1)}|#)`, 'g');
  const badRootRelative = [...html.matchAll(rootRelativePattern)].map((m) => m[0]);
  if (badRootRelative.length > 0) {
    fail(
      `index.html has ${badRootRelative.length} asset/link reference(s) not under base path:\n` +
        badRootRelative.map((s) => `  ${s}`).join('\n')
    );
    failed = true;
  } else {
    ok('No root-relative paths outside the base path in index.html');
  }
} else {
  ok('Base path is "/" (custom domain) — root-relative links are valid');
}

// 6. Referenced JS and CSS assets must exist on disk
const assetPattern = new RegExp(`(?:href|src)="(${escapedBase}assets\\/[^"]+)"`, 'g');
let match;
let assetCount = 0;
while ((match = assetPattern.exec(html)) !== null) {
  const assetUrl = match[1];
  const fsPath = join(BUILD_DIR, assetUrl.replace(BASE_PATH, ''));
  if (!existsSync(fsPath)) {
    fail(`Referenced asset missing on disk: ${assetUrl}`);
    failed = true;
  }
  assetCount++;
}
if (assetCount > 0) {
  ok(`All ${assetCount} referenced assets exist on disk`);
} else {
  fail('No asset references found in index.html — build may be incomplete');
  failed = true;
}

// 7. No source-directory or localhost references
const badSourceRefs = ['/src/', 'file://', 'localhost:'];
for (const bad of badSourceRefs) {
  if (html.includes(bad)) {
    fail(`index.html contains unexpected reference '${bad}'`);
    failed = true;
  }
}
ok('No source-directory or localhost references in index.html');

// 8. 404.html exists for SPA fallback
if (!existsSync(join(BUILD_DIR, '404.html'))) {
  fail('build/404.html is missing — SPA fallback will not work on GitHub Pages');
  failed = true;
} else {
  ok('build/404.html exists');
}

if (failed) {
  console.error('\n[validate-build] Validation FAILED. Fix the errors above before deploying.');
  process.exit(1);
}

console.log('\n[validate-build] All checks passed.');
