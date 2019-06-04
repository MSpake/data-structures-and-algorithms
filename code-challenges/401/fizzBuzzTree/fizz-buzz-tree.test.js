'use strict';

const binaryTree = require('../../../data-structures/tree/binaryTree.js');
const fizzBuzz = require('./fizz-buzz-tree.js');

describe('FizzBuzz Tree', () => {
  const tree = new binaryTree(5);
  tree.add(2);
  tree.add(3);
  tree.add(11);
  tree.add(10);
  tree.add(15);
  console.log(tree.preOrder());

  fizzBuzz(tree.root);
  console.log(tree.preOrder());

  it('the head node should now be \'buzz\'', () => {
    expect(tree.root.value).toBe('buzz');
  });

  it('the preorder values should match', () => {
    expect(tree.preOrder()).toEqual(expect.arrayContaining(['buzz', 2, 11, 'buzz', 'fizz', 'fizzbuzz']));
  });

});