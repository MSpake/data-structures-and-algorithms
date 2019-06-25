'use strict';

function findWithLoops(arr, num) {
  const pair = [];
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++ ) {
      if(i != j) {
        if(arr[i] + arr[j] === num) {
          pair.push(arr[i]);
          pair.push(arr[j]);
          return pair;
        }
      }
    }
  }
  return pair;
}

function findWithMap(arr, num) {
  const map = new Map;
  const pair = [];
  for (let i = 0; i < arr.length; i++){
    let current = arr[i];
    if(map.get(current)) map.set(current, map.get(current) + 1);
    else map.set(current, 1);
  }

  for (let i = 0; i < arr.length; i++) {
    let difference = num - arr[i];
    //add check for duplicate numbers
    if(map.get(difference)) {
      pair.push(arr[i]);
      pair.push(difference);
      return pair;
    }
  }
  return pair;
}

module.exports = {
  findWithLoops,
  findWithMap,
};