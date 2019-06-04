'use strict';

function fizzBuzz(node) {
  if(node === null) {
    return;
  }

  node.value = fizzBuzzCheck(node.value);
  fizzBuzz(node.left);
  fizzBuzz(node.right);
}

function fizzBuzzCheck(value) {
  if (typeof value !== 'number') return value;
  if(value % 3 === 0) {
    if(value % 5 === 0) {
      value = 'fizzbuzz';
    } else value = 'fizz';
  }
  else if (value % 5 === 0) {
    value = 'buzz';
  }
  return value;
}

module.exports = fizzBuzz;