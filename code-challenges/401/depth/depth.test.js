'use strict';

const BinaryTree = require('../../../data-structures/tree/binaryTree.js');
const depthOfValue = require('./depth.js');

describe('Find the depth of a given value in a binary tree', () => {
  const tree = new BinaryTree();

  it('Searching on an empty tree returns null', () => {
    expect(depthOfValue(tree.root, 13)).toBeNull();
  });

  tree.add(1);
  tree.add(2);
  tree.add(3);
  tree.add(4);
  tree.add(5);

  it('Searching for a value returns the depth', () => {
    expect(depthOfValue(tree.root, 5)).toBe(2);
  });

  it('Searching for a value that isn\'t in the tree returns null', () => {
    expect(depthOfValue(tree.root, 13)).toBeNull();
  });

  it('Searching for the value stored in the root node returns 0', () => {
    expect(depthOfValue(tree.root, 1)).toBe(0);
  });

  it('Searching for a value that is not a number returns null', () => {
    expect(depthOfValue(tree.root, 'twelve')).toBeNull();
  });

  it('Invalid arguments return null', () => {
    expect(depthOfValue(tree.root)).toBeNull();
    expect(depthOfValue(tree.root, '')).toBeNull();
    expect(depthOfValue('', 1)).toBeNull();
    expect(depthOfValue(12, 1)).toBeNull();
    expect(depthOfValue(1)).toBeNull();
  });

});