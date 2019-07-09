'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
    this.head = null;
    this.size = 0;
  }

  push(...entries) {
    if(!entries[0]) return 'The push method cannot be called without one or more arguments.';
    let toAdd = [...entries];
    toAdd.forEach( entry => {
      let node = new Node;
      node.value = entry;
      if(!this.top) this.top = node.value;
      node.next = this.top;
      this.top = node;
      this.size++;
    });
  }

  pop() {
    if(!this.top) return null;
    let node = this.top;
    this.top = this.top.next || null;
    this.size--;
    return node.value || null;
  }

  peek() {
    return this.top ? this.top.value : null;
  }
}

module.exports = Stack;