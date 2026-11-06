import * as api from '@lp-labs/line-ending-normalizer';
import { normalizeLineEndings, detectLineEndings } from '@lp-labs/line-ending-normalizer';
const text = normalizeLineEndings('a\r\nb\n', 'lf');
if (text !== 'a\nb\n' || detectLineEndings('a\r\nb').crlf !== 1)
  throw new Error('Normalization failed');
// @ts-expect-error invalid argument must be rejected by declarations
api.normalizeLineEndings('text', 'mixed');
