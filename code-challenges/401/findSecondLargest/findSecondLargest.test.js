'use strict';

const {findSecondBiggestByRemovingMax, findSecondBiggestWithBST, findSecondBiggest} = require('./findSecondLargest.js');

describe('Can find the second largest value in an array of numbers', () => {
  it('Can find by looping through and storing the largest and second largest', () => {
    let arr = [2,6,9,2,12];
    const secondLargest = findSecondBiggest(arr);
    expect(secondLargest).toBe(9);   
  });

  it('Can find by putting all the values into a binary search tree and traversing', () => {
    let arr = [2,6,9,2,12];
    const secondLargest = findSecondBiggestWithBST(arr);
    expect(secondLargest).toBe(9);    
  });

  it('Can find by looping through, removing the largest value, then looping through again', () => {
    let arr = [2,6,9,2,12];
    const secondLargest = findSecondBiggestByRemovingMax(arr);
    expect(secondLargest).toBe(9);
  });
});