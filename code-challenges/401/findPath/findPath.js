'use strict';

const Node = require('../../../data-structures/linkedList/node.js');
const LinkedList = require('../../../data-structures/linkedList/linked-list.js');


function findPath(tree, start, end) {
  if(tree === null) return null;

  const node = tree.root ? tree.root : tree;

  let toReturn = null;
  if(node.value === start) {
    toReturn = findEnd(node, end);
  } else {
    const rightPath = findPath(node.right, start, end);
    const leftPath = findPath(node.left, start, end);
    toReturn = rightPath ? rightPath : leftPath;
  }
  return toReturn;
}

function findEnd(node, end) {
  if(node === null) return null;
  let list = null;

  if(node.value === end) {
    list = new LinkedList();
    list.head = new Node(node.value);
  } else {
    const rightPath = findEnd(node.right, end);
    const leftPath = findEnd(node.left, end);
    if(rightPath || leftPath) {
      list = rightPath ? rightPath : leftPath;
      const toAdd = new Node(node.value);
      toAdd.next = list.head;
      list.head = toAdd;
    }
  }
  return list;
}

module.exports = findPath;