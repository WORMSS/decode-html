import { decodeHtml } from './index';

test('hello&nbsp;&#39;', "hello '");
test('hello&pound;&#x27;', "hello£'");
test('hello&pound;&#X27;', "hello£'");

console.log('\nPassed Tests\n');
function test(input: string, expected: string) {
  const result = decodeHtml(input);
  if (result !== expected) {
    throw `Expected "${result}" to equal "${expected}"`;
  }
}
