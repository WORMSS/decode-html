import { decodeHtml } from './index';

test('hello&nbsp;&#39;', "hello '");
test('hello&pound;&#x27;', "hello£'");
test('hello&pound;&#X27;', "hello£'");
test('i have no codes');
test('i have &#x; invalid number code');
test('i have &goats; invalid string code');

console.log('\nPassed Tests\n');

function test(input: string, expected: string = input) {
  const result = decodeHtml(input);
  if (result !== expected) {
    throw `Expected "${result}" to equal "${expected}"`;
  }
}
