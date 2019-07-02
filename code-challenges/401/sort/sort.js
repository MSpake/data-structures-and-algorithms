'use strict';

// Improve our quicksort implementation to use "three-way partition". Document your process
const _swap = (items, indexA, indexB) => {
  const helper = items[indexA];

  items[indexA] = items[indexB];
  items[indexB] = helper;
};

const _sortWith3Partitions = (items, leftIndex, rightIndex) => {

  if(leftIndex < rightIndex){
    let lastLowIndex = leftIndex;
    let firstHighIndex = rightIndex;
    const pivot = items[leftIndex];

    let index = leftIndex;

    while(index <= firstHighIndex) {
      if(items[index] < pivot) {
        _swap(items, index, lastLowIndex);
        index++;
        lastLowIndex++;
      } else if( items[index] > pivot) {
        _swap(items, index, firstHighIndex);
        firstHighIndex--;
      } else {
        index++;
      }
    }
  
    _sortWith3Partitions(items, leftIndex, lastLowIndex - 1);
    _sortWith3Partitions(items, firstHighIndex + 1, rightIndex);
  }
};

const quicksort = items => {
  return _sortWith3Partitions(items, 0, items.length -1);
};

//==================================================


const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    return arr[0] < arr[1] ? arr : arr.reverse();
  }

  const middlePoint = Math.floor(arr.length / 2);

  const leftSide = mergeSort(arr.slice(0, middlePoint));
  const rightSide = mergeSort(arr.slice(middlePoint));

  let output = [];
  let trackL = 0;
  let trackR = 0;
  //Instead of shifting the arrays, I'm tracking two variables and incrementing them depending on which value gets pushed into the output array
  while(leftSide.length > trackL && rightSide.length > trackR) {
    if(leftSide[trackL] <= rightSide[trackR]) {
      output.push(leftSide[trackL]);
      trackL++;
      // leftSide.shift();
    }
    else {
      output.push(rightSide[trackR]);
      trackR++;
      // rightSide.shift();
    }
  }
  //Instead of checking for the array to be empty and concatinating, I check that the variable is the same as the length, then loop through the remaining values in the second array, pushing them into the output array.
  if(leftSide.length === trackL && rightSide.length - trackR > 0) {
    for(let i = trackR; i < rightSide.length; i++) output.push(rightSide[i]);
    // output = output.concat(rightSide);
  }
  if(rightSide.length === trackR && leftSide.length - trackL > 0) {
    for(let i = trackL; i < leftSide.length; i++) output.push(leftSide[i]);
    // output = output.concat(leftSide);
  }
  return output;
};

module.exports = { mergeSort, quicksort };