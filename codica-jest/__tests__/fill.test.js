// @ts-check

import fill from '../../fill.js';


// BEGIN (write your solution here)
let ar;

beforeEach(() => {
ar = [1, 2, 3, 4];
});

test('mid', () => {
  expect(fill(ar, '*', 1, 3)).toEqual([1, '*', '*', 4]);
});
test('norLast2', () => {
  expect(fill(ar, '*')).toEqual(['*', '*', '*', '*']);
});
test('norLast', () => {
  expect(fill(ar, '*', 4)).toEqual([1, 2, 3, 4]);
});
test('moreEnd', () => {
  expect(fill(ar, '*', 0, 10)).toEqual(['*', '*', '*', '*']);
});
// END
