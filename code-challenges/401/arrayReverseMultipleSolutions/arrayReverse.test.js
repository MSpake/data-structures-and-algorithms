'use strict';

const reverse = require('./arrayReverse.js');

describe('Reverse an Array', () => {
  it('Can reverse by using a new array', () => {
    const array = [1,2,3,4,5];
    const reversed = reverse.reverseWithNewArray(array);
    expect(reversed[0]).toBe(5);
    expect(reversed[4]).toBe(1);
  });

  it('Can reverse in place by using a Stack', () => {
    const array = [1,2,3,4,5];
    reverse.reverseWithStacks(array);
    expect(array[0]).toBe(5);
    expect(array[4]).toBe(1);
  });

  it('Can reverse recursively', () => {
    const array = [1,2,3,4,5];
    const reversed = reverse.reverseRecursively(array);
    expect(reversed[0]).toBe(5);
    expect(reversed[4]).toBe(1);
  });
});