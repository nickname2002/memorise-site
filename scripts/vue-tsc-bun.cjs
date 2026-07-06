/**
 * Runs vue-tsc under Bun.
 *
 * vue-tsc normally patches tsc by intercepting `fs.readFileSync` during
 * `require('typescript/lib/tsc')`. Bun's `require` uses a native loader that
 * never touches `fs.readFileSync`, so the patch silently no-ops and plain tsc
 * runs — .vue imports stop resolving and no .vue file is ever checked.
 *
 * This wrapper applies Volar's source transform ahead of time, writes the
 * patched tsc next to the original (so its relative requires still resolve),
 * and hands that path to vue-tsc's own `run()`.
 */
const fs = require('fs');
const path = require('path');

const { transformTscContent } = require('@volar/typescript/lib/quickstart/runTsc');

const tscPath = require.resolve('typescript/lib/tsc');
const proxyApiPath = require.resolve('@volar/typescript/lib/node/proxyCreateProgram');
const runTscPath = require.resolve('@volar/typescript/lib/quickstart/runTsc');

let sourcePath = tscPath;
let source = fs.readFileSync(tscPath, 'utf8');

// TypeScript 5.7+ ships tsc.js as a shim that re-exports the real module.
const shim = /module\.exports\s*=\s*require\((?:"|')(?<real>\.\/\w+\.js)(?:"|')\)/.exec(source);

if (shim) {
  sourcePath = path.join(path.dirname(tscPath), shim.groups.real);
  source = fs.readFileSync(sourcePath, 'utf8');
}

const patched = transformTscContent(source, proxyApiPath, ['.vue'], [], runTscPath);
const patchedPath = path.join(path.dirname(sourcePath), 'tsc-bun-vue.js');

fs.writeFileSync(patchedPath, patched);

require('vue-tsc').run(patchedPath);
