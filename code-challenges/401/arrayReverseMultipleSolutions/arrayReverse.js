'use strict';

const Stack = require('../../../data-structures/stacksAndQueues/stack.js');

function reverseWithNewArray(arr) {
  const reversedArr = [];
  for(let i = arr.length; i > 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

function reverseWithStacks(arr) {
  const stack = new Stack;
  arr.forEach(element => {
    stack.push(element);
  });
  for(let i = 0; i < arr.length; i++){
    arr[i] = stack.pop();
  }
  return arr;
}

function reverseRecursively(arr){
  if(arr.length === 1) {
    return arr;
  }
  const storeValue = arr[0];
  arr = arr.slice(1, arr.length);
  const rebuilt = reverseRecursively(arr);
  rebuilt.push(storeValue);
  return rebuilt;
}

function reverseSwap(arr) {
  
}