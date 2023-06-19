import { codes } from './codes';

export function decodeHtml(input: string): string {
  return input.replace(/&(#?\w+?);/g, replacer);
}

function replacer(match: string, catcher: string): string {
  if (!isNumberCode(catcher)) {
    return codes[catcher] ?? match;
  }
  const num = getNumberCode(catcher);
  if (Number.isNaN(num)) {
    return match;
  }
  return String.fromCharCode(num);
}

function isNumberCode(catcher: string): boolean {
  return catcher[0] === '#';
}

function getNumberCode(catcher: string): number {
  const secondChar = catcher[1].toLocaleLowerCase();
  if (secondChar === 'x') {
    const code = catcher.substring(2);
    return parseInt(code, 16);
  }
  const code = catcher.substring(1);
  return parseInt(code, 10);
}
