'use strict';

const Stack = require('../../../data-structures/stacksAndQueues/stack.js');

class pseudoQueue {
  constructor() {
    this.stackOne = new Stack;
    this.stackTwo = new Stack;
  }

  enqueue(value) {
    this.stackOne.push(value);
    return this.stackOne.peek();
  }

  dequeue() {

    while(this.stackOne.peek()){
      this.stackTwo.push(this.stackOne.pop());
    }

    const toDequeue = this.stackTwo.pop();

    while(this.stackTwo.peek()){
      this.stackOne.push(this.stackTwo.pop());
    }

    return toDequeue;
  }
}

module.exports = pseudoQueue;