'use strict';

const Node = require('./node.js');
const Queue = require('../stacksAndQueues/queue.js');

class BinaryTree {
  constructor(rootValue) {
    this.root = null;
    if(rootValue) this.root = new Node(rootValue);
  }

  add(value) {
    const node = new Node(value);
    if(!this.root) {
      this.root = node;
      return;
    }

    const nodeHolder = new Queue;
    nodeHolder.enqueue(this.root);

    for(;;) {
      const nodeToCheck = nodeHolder.dequeue();
      if(!nodeToCheck.left) {
        nodeToCheck.left = node;
        break;
      }
      nodeHolder.enqueue(nodeToCheck.left);
      if(!nodeToCheck.right) {
        nodeToCheck.right = node;
        break;
      }
      nodeHolder.enqueue(nodeToCheck.right);
    }
    return;
  }

  preOrder() {
    const values = [];

    const loop = node => {
      if(node === null) {
        return;
      }
      values.push(node.value);
      loop(node.left);
      loop(node.right);
    };

    loop(this.root);
    return values;
  }

  inOrder() {
    const values = [];

    const loop = node => {
      if(node === null) {
        return;
      }
      loop(node.left);
      values.push(node.value);
      loop(node.right);
    };

    loop(this.root);
    return values;
  }

  postOrder() {
    const values = [];

    const loop = node => {
      if(node === null) {
        return;
      }
      loop(node.left);
      loop(node.right);
      values.push(node.value);
    };

    loop(this.root);
    return values;

  }

  maxValue() {
    const queue = new Queue;
    let largest = this.root.value;
    queue.enqueue(this.root);
    while(queue.peek()) {
      const nodeToCheck = queue.dequeue();
      if(nodeToCheck.left) queue.enqueue(nodeToCheck.left);
      if(nodeToCheck.right) queue.enqueue(nodeToCheck.right);
      if(nodeToCheck.value > largest) largest = nodeToCheck.value;
    }
    return largest;
  }
}

module.exports = BinaryTree;