'use strict';

const BinarySearchTree = require('./binarySearchTree.js');

describe('Binary Search Tree class', () => {
  it('can instantiate an empty tree', () => {
    const emptyTree = new BinarySearchTree;
    expect(emptyTree.root).toBeNull();
  });

  it('can instantiate a tree with a root node', () => {
    const treeWithRoot = new BinarySearchTree(5);
    expect(treeWithRoot.root).toBeDefined();
    expect(treeWithRoot.root.left).toBeDefined();
    expect(treeWithRoot.root.right).toBeDefined();
    expect(treeWithRoot.root.value).toBe(5);
  });

  const testTree = new BinarySearchTree(10);

  it('can add a value in the correct place', () => {
    testTree.add(15);
    console.log(testTree.root);
    testTree.add(5);
    console.log(testTree.root);
    testTree.add(13);

    expect(testTree.root.left).not.toBeNull();
    expect(testTree.root.right).not.toBeNull();
    expect(testTree.root.left.value).toBe(5);
    expect(testTree.root.right.value).toBe(15);
    expect(testTree.root.right.left.value).toBe(13);
  });

  it('can check if the tree contains a given value', () => {
    expect(testTree.contains(5)).toBeTruthy();
    expect(testTree.contains(13)).toBeTruthy();
    expect(testTree.contains(200)).toBeFalsy();
  });

});

// Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
// Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.