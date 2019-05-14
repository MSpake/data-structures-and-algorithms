'use strict';

function arrayReverse(arr) {
  const newArr = [];
  let index = arr.length - 1;

  for (index; index >= 0; index--) {
    newArr.push(arr[index]);
  }

  return newArr;
}

// Tests

describe('Array reversal', () => {
  it('Takes in an array and returns a new array with the elements in reverse order', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(arrayReverse(arr)).toEqual([6, 5, 4, 3, 2, 1]);
  });
});