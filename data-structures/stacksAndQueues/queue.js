'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(...entries) {
    if(!entries[0]) return 'Cannot call enqueue without an argument';
    let toAdd = [...entries];
    toAdd.forEach( entry => {
      let node = new Node;
      node.value = entry;
      if(!this.front) {
        this.front = node;
        this.rear = node;
      } else {
        this.rear.next = node;
        this.rear = node;
      }
    });
  }

  dequeue(){
    if(!this.front) return null;
    let node = this.front;
    this.front = node.next || null;
    if (this.front === null) this.rear = null; 
    return node.value || null;
  }

  peek() {
    return this.front ? this.front.value : null;
  }
}

module.exports = Queue;