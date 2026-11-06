# @lp-labs/line-ending-normalizer

Line ending detection and normalization for LF, CRLF and CR text.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/line-ending-normalizer
```

## Working example

```js
import { normalizeLineEndings, detectLineEndings } from '@lp-labs/line-ending-normalizer';
const text = normalizeLineEndings('a\r\nb\n', 'lf');
if (text !== 'a\nb\n' || detectLineEndings('a\r\nb').crlf !== 1)
  throw new Error('Normalization failed');
```

CommonJS: `const api = require('@lp-labs/line-ending-normalizer')`.

## Behavior, customization and limits

Counts CRLF, standalone LF and standalone CR terminators and can normalize all forms to one explicit style. It preserves whether the input ended in a line break and does not trim or alter other characters.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export interface LineEndingCounts {
  readonly crlf: number;
  readonly lf: number;
  readonly cr: number;
}
export declare function detectLineEndings(text: string): LineEndingCounts;
export declare function normalizeLineEndings(text: string, style?: 'lf' | 'crlf' | 'cr'): string;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
