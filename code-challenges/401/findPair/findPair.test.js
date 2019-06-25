'use strict';

const { findWithLoops, findWithMap } = require('./findPair.js');

describe('Find Pair', () => {
  it('Can find by looping (brute force)', () => {
    const testArray = [3,5,2,9,1];
    const num = 6;
    expect(findWithLoops(testArray, num)).toEqual([5,1]);
  });

  it('Can find using map', () => {
    const testArray = [3,5,2,9,1];
    const num = 11;
    expect(findWithMap(testArray, num)).toEqual([2,9]);
  });
});