'use strict';

const BinaryTree = require('../../../data-structures/tree/binaryTree.js');
const findPath = require('./findPath.js');

const testTree = new BinaryTree(6);
testTree.add(3);
testTree.add(5);
testTree.add(10);
testTree.add(12);
testTree.add(7);
testTree.add(9);
testTree.add(13);
testTree.add(1);

describe('Find the Path', () => {
  it('Finds the path from starting value to ending value', () => {
    const list = findPath(testTree, 3, 1);
    console.log(list);
    expect(list.head).toBeDefined();
    expect(list.head.value).toBe(3);

    const values = [];
    let current = list.head;
    while(current.next) {
      values.push(current.value);
      current = current.next;
    }
    values.push(current.value);

    expect(values).toEqual([3, 10, 1]);
  });
});
