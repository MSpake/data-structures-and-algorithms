'use strict';

const arrayShift = require('./array-shift.js');

describe('Inserts a new entry into the venter index of an array', () => {
  it('takes in an array and a value, returns the array with the new value inserted into the center index', () => {
    expect(arrayShift([1, 2, 3, 4], 12)).toEqual([1, 2, 12, 3, 4]);
  });
  it('If an array has one value, it gets instered second', () => {
    expect(arrayShift([1], 12)).toEqual([1, 12]);
  });
  it('works with an epmty array', () => {
    expect(arrayShift([], 12)).toEqual([12]);
  });
  it('Only acccepts arrays', () => {
    expect(arrayShift('hello', 12)).toBeNull();
    expect(arrayShift({0: 1, 1: 2}, 12)).toBeNull();
  });
});