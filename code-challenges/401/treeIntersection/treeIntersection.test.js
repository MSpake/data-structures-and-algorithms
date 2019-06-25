'use strict';

const BinaryTree = require('../../../data-structures/tree/binaryTree');
const findIntersection = require('./treeIntersection');

const firstTree = new BinaryTree();
firstTree.add(1);
firstTree.add(2);
firstTree.add(3);
firstTree.add(4);
firstTree.add(5);
firstTree.add(6);

const secondTree = new BinaryTree();
secondTree.add(4);
secondTree.add(6);
secondTree.add(8);
secondTree.add(3);

describe('Shared values, binary trees', () => {
  it('can find all shared values', () => {
    const results = findIntersection(firstTree, secondTree);
    console.log(results);
    expect(results.has(4)).toBeTruthy();
    expect(results.has(6)).toBeTruthy();
    expect(results.has(3)).toBeTruthy();
    expect(results.has(2)).not.toBeTruthy();
  });
});