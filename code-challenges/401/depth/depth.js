'use strict';

function depthOfValue(node, value, depth = 0) {
  if(!node) node = null;
  if(!value) value = undefined;

  if(node === null || value === undefined) return null;
  if(node.value === value){
    return depth;
  }
  const left = depthOfValue(node.left, value, depth + 1);
  const right = depthOfValue(node.right, value, depth + 1);

  return left || right;
}

module.exports = depthOfValue;