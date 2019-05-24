'use strict';

const LinkedList = require('../../../data-structures/linkedList/linked-list');
const mergeLists = require('./ll-merge.js');

describe('Merge Linked Lists', () => {

  it('given two linked lists, it merges them together', () => {
    const longerList = new LinkedList;
    longerList.insert(1,3,5,7,9);
  
    const shorterList = new LinkedList;
    shorterList.insert(2,4,6);

    const merged = mergeLists(longerList, shorterList);
    console.log(merged.print());
    expect(merged).toBeInstanceOf(LinkedList);
    expect(merged.includes(6)).toBeTruthy();
    expect(merged.includes(7)).toBeTruthy();
    expect(merged.head.value).toEqual(1);
    expect(merged.print()).toEqual(expect.arrayContaining( [ 1, 2, 3, 4, 5, 6, 7, 9 ]));
  });

  it('given the shorter list first, it still works', () => {
    const longerList = new LinkedList;
    longerList.insert(1,3,5,7,9);
  
    const shorterList = new LinkedList;
    shorterList.insert(2,4,6);

    const merged = mergeLists(shorterList, longerList);
    console.log(merged.print());
    expect(merged).toBeInstanceOf(LinkedList);
    expect(merged.includes(6)).toBeTruthy();
    expect(merged.includes(7)).toBeTruthy();
    expect(merged.head.value).toEqual(2);
    expect(merged.print()).toEqual(expect.arrayContaining( [ 2, 1, 4, 3, 6, 5, 7, 9 ]));
  });
});