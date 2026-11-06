import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('detects all three newline styles', () => {
  assert.deepEqual(api.detectLineEndings('a\r\nb\nc\rd'), { crlf: 1, lf: 1, cr: 1 });
});
test('normalizes mixed input to LF', () => {
  assert.equal(api.normalizeLineEndings('a\r\nb\nc\rd', 'lf'), 'a\nb\nc\nd');
});
test('normalizes to CRLF', () => {
  assert.equal(api.normalizeLineEndings('a\nb\r', 'crlf'), 'a\r\nb\r\n');
});
test('preserves trailing line break', () => {
  assert.equal(api.normalizeLineEndings('x\r\n', 'lf'), 'x\n');
});
test('does not add a trailing break', () => {
  assert.equal(api.normalizeLineEndings('x', 'cr'), 'x');
});
test('rejects unknown style', () => {
  assert.throws(() => api.normalizeLineEndings('x', 'mixed'), TypeError);
});
