'use strict';

function arrayShift(arr, newVal) {
  if(!Array.isArray(arr)) return null; 
  if(arr.length === 0) return [newVal];

  for(let i = arr.length; i > Math.floor(arr.length/2); i--) {
    arr[i] = arr[i-1];
  }

  arr[Math.floor(arr.length/2)] = newVal;
  return arr;
}

module.exports = arrayShift;