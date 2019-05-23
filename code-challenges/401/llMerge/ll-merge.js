'use strict';

const LinkedList = require('../../../data-structures/linkedList/linked-list');

function mergeLists(firstList, secondList) {
  let current1 = firstList.head;
  let next1;
  let current2 = secondList.head;
  let next2;
  while(current1 && current2){

    // if(current1) {
    next1 = current1.next;
    if(current2){
      current1.next = current2;
      current1 = next1;
      // }
    }
    // if(current2) {
    next2 = current2.next;
    if(current1) {
      current2.next = current1;
      current2 = next2;
      // }
    } 
  }
  secondList.head = firstList.head;
  return firstList;
}

module.exports = mergeLists;