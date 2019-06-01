'use strict';

const BinaryTree = require('./binaryTree.js');

describe('Binary Tree class', () => {
  it('can instantiate an empty tree', () => {
    const emptyTree = new BinaryTree;
    expect(emptyTree.root).toBeNull();
  });

  it('can instantiate a tree with a root node', () => {
    const treeWithRoot = new BinaryTree(5);
    expect(treeWithRoot.root).toBeDefined();
    expect(treeWithRoot.root.left).toBeDefined();
    expect(treeWithRoot.root.right).toBeDefined();
    expect(treeWithRoot.root.value).toBe(5);
  });

  it('can add a left and right child to the root node', () => {
    const testTree = new BinaryTree(1);
    testTree.add(2);
    testTree.add(3);

    expect(testTree.root.left).not.toBeNull();
    expect(testTree.root.right).not.toBeNull();
    expect(testTree.root.left.value).toBe(2);
    expect(testTree.root.right.value).toBe(3);
  });

  describe('Binary tree traversal', () => {
    const testTree = new BinaryTree(1);
    testTree.add(2);
    testTree.add(3);
    testTree.add(4);
    testTree.add(5);
    testTree.add(6);
    testTree.add(7);
    testTree.add(8);

    it('can return values in preorder order', () => {
      //[1,2,4,8,5,3,6,7]
      expect(testTree.preOrder()).toEqual(expect.arrayContaining([1,2,4,8,5,3,6,7]));
    });
  
    it('can return values in inorder order', () => {
      //[8,4,2,5,1,6,3,7]
      expect(testTree.inOrder()).toEqual(expect.arrayContaining([8,4,2,5,1,6,3,7]));
      
    });
  
    it('can return values in postorder order', () => {
      //[8,4,5,2,6,7,3,1]
      expect(testTree.postOrder()).toEqual(expect.arrayContaining([8,4,5,2,6,7,3,1]));
    });
  });
});
