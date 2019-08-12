'use strict';

const sorts = require('./sort');

describe('Merge Sort', () => {
  it('Sorts an array', () => {
    const array = [2,1,3,6,4,9,8,7,6,3,6,9,2,6,0,4,2,6,3,7];
    const sorted = sorts.mergeSort(array);
    expect(sorted).toEqual([ 0, 1, 2, 2, 2, 3, 3, 3, 4, 4, 6, 6, 6, 6, 6, 7, 7, 8, 9, 9 ]);
  });
});

describe('Quick Sort', () => {
  it('Sorts an array', () => {
    const array = [2,1,3,6,4,9,8,7,6,3,6,9,2,6,0,4,2,6,3,7];
    sorts.quicksort(array);
    console.log(array);
    expect(array).toEqual([ 0, 1, 2, 2, 2, 3, 3, 3, 4, 4, 6, 6, 6, 6, 6, 7, 7, 8, 9, 9 ]);
  });
});