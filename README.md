# @wormss/decode-html

Because apparently a decent decoder doesn't exist on npm.
Commonjs and ESM

```bash
npm i @wormss/decode-html
```

## Example

```ts
import { decodeHtml } from '@wormss/decode-html';

const decoded = decodeHtml('Hello&nbsp;world'); // Hello world
const decoded = decodeHtml('&#39;Hello world&#x27;'); // 'Hello world'
```

Legacy
```js
const { decodeHtml } = require('@wormss/decode-html');
```