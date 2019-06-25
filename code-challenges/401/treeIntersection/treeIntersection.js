'use strict';

function findIntersection(tree1, tree2) {
  if (!tree1 || !tree2) return null;
  const valueSet = createSet(tree1.root);
  return findSharedValues(tree2.root, valueSet);
}

function createSet(node, set = new Set()) {
  if (!node) return null;
  set.add(node.value);
  createSet(node.left, set);
  createSet(node.right, set);
  return set;
}

function findSharedValues(node, valueSet, set = new Set()) {
  if (!node) return null;
  if (valueSet.has(node.value)) {
    set.add(node.value);
  }
  findSharedValues(node.left, valueSet, set);
  findSharedValues(node.right, valueSet, set);
  return set;
}

module.exports = findIntersection;