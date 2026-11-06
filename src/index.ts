export interface LineEndingCounts {
  readonly crlf: number;
  readonly lf: number;
  readonly cr: number;
}
export function detectLineEndings(text: string): LineEndingCounts {
  if (typeof text !== 'string' || text.length > 10000000)
    throw new TypeError('Expected bounded text');
  const crlf = (text.match(/\r\n/g) ?? []).length,
    without = text.replace(/\r\n/g, '');
  return { crlf, lf: (without.match(/\n/g) ?? []).length, cr: (without.match(/\r/g) ?? []).length };
}
export function normalizeLineEndings(text: string, style: 'lf' | 'crlf' | 'cr' = 'lf'): string {
  if (typeof text !== 'string') throw new TypeError('Expected text');
  if (!['lf', 'crlf', 'cr'].includes(style)) throw new TypeError('Unknown line ending style');
  const eol = style === 'lf' ? '\n' : style === 'crlf' ? '\r\n' : '\r';
  return text.replace(/\r\n|\r|\n/g, eol);
}
