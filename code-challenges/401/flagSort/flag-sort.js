'use strict';

function _swap(array, indexA, indexB) {
  let temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

function flagSort(array) {
  const center = Math.floor(array.length/2);
  let rightBluePartitionIndex = array.length - 1;
  let leftBluePartitionIndex = 0;
  
  let blueCount = 0;
  let index = 0;

  while(index < rightBluePartitionIndex + 1) {
    if(index === center) {
      index++;
      continue;
    }
    else if(array[index] === 'shield') {
      _swap(array, index, center);
    }
    else if(array[index] === 'blue') {
      blueCount++;
      if(blueCount % 2) {
        _swap(array, index, rightBluePartitionIndex);
        rightBluePartitionIndex--;
      }
      else {
        _swap(array, index, leftBluePartitionIndex);
        leftBluePartitionIndex++;
        index++;
      }
    }
    else {
      index++;
    }
  }
  return array;
}

module.exports = flagSort;