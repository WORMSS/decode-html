import { expect, describe, it } from 'vitest';
import { decodeHtml } from './decodeHtml';

describe(decodeHtml.name, () => {
  it('should decode space and single quote by decimal', () => {
    expect(decodeHtml('hello&nbsp;&#39;')).toEqual("hello '");
  });
  it('should decode pound and single quote by hex', () => {
    expect(decodeHtml('hello&pound;&#x27;')).toEqual("hello£'");
  });
  it('should decode pound and single quote by uppercase hex', () => {
    expect(decodeHtml('hello&pound;&#X27;')).toEqual("hello£'");
  });
  it('should return string as is with no codes', () => {
    expect(decodeHtml('i have no codes')).toEqual('i have no codes');
  });
  it('should return string which starts a little like a hex code', () => {
    expect(decodeHtml('i have &#x; invalid number code')).toEqual(
      'i have &#x; invalid number code',
    );
  });
  it('should not fail with an invalid code', () => {
    expect(decodeHtml('i have &goats; invalid string code')).toEqual(
      'i have &goats; invalid string code',
    );
  });
});
