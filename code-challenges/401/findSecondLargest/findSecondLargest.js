'use strict';

const BinarySearchTree = require('../../../data-structures/tree/binarySearchTree.js');

function findSecondBiggestByRemovingMax(arr){
  const indexOfBiggest = arr.indexOf(Math.max(...arr));
  arr[indexOfBiggest] = null;
  return Math.max(...arr);
}

function findSecondBiggestWithBST(arr){
  const tree = new BinarySearchTree();
  arr.forEach(element => {
    tree.add(element);
  });

  let current = tree.root;
  let additionalCheck = true;
  while((current.right || current.left) && additionalCheck ) {
    if(current.right && (current.right.right || current.right.left)){
      current = current.right;
    }
    else if (current.left) {
      current = current.left;
    }
    else if(current.right) {
      additionalCheck = false;
    }
  }
  return current.value;
}

function findSecondBiggest(arr){
  let largest = arr[0];
  let second = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > largest) {
      second = largest;
      largest = arr[i];
    }
    else if(arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}

module.exports = {
  findSecondBiggestByRemovingMax,
  findSecondBiggestWithBST,
  findSecondBiggest,
};