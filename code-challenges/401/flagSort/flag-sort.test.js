'use strict';

const flagSort = require('./flag-sort');

const testArray1 = ['white', 'blue', 'white', 'blue', 'shield'];
const testArray2 = ['blue', 'blue', 'white', 'blue', 'shield', 'white', 'blue', 'white', 'white'];
const testArray3 = ['blue', 'white', 'white', 'blue', 'shield', 'blue', 'blue'];
const testArray4 = ['shield', 'blue', 'blue', 'white', 'white'];


describe('Flag Sort', () => {
  it('Sorts into blue, white, shield, white, blue order', () => {
    flagSort(testArray1);
    flagSort(testArray2);
    flagSort(testArray3);
    flagSort(testArray4);

    expect(testArray1).toEqual(['blue', 'white', 'shield', 'white', 'blue']);
    expect(testArray2).toEqual(['blue', 'blue', 'white', 'white', 'shield', 'white', 'white', 'blue', 'blue']);
    expect(testArray3).toEqual(['blue', 'blue', 'white', 'shield', 'white', 'blue', 'blue']);
    expect(testArray4).toEqual(['blue', 'white', 'shield', 'white', 'blue']);
  });
});