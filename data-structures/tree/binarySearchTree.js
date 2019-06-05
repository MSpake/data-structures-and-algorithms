'use strict';

const Node = require('./node.js');
const Queue = require('../stacksAndQueues/queue.js');

class BinarySearchTree {
  constructor(rootValue) {
    this.root = null;
    if(rootValue) this.root = new Node(rootValue);
  }

  add(value) {
    const nodeToAdd = new Node(value);
    if(!this.root) {
      this.root = nodeToAdd;
      return;
    }

    const nodeHolder = new Queue;
    nodeHolder.enqueue(this.root);

    for(;;) {
      const nodeToCheck = nodeHolder.dequeue();
      if(value === nodeToCheck.value) break;
      if(value < nodeToCheck.value) {
        if(!nodeToCheck.left) {
          nodeToCheck.left = nodeToAdd;
          break;
        }
        nodeHolder.enqueue(nodeToCheck.left);
      }
      if(value > nodeToCheck.value) {
        if(!nodeToCheck.right) {
          nodeToCheck.right = nodeToAdd;
          break;
        }
        nodeHolder.enqueue(nodeToCheck.right);
      }
    }

    return;
  }

  contains(value) {

    const loop = node => {
      if(node === null || node.value === value) {
        return node;
      }
      if (value < node.value) {
        return loop(node.left);
      } 
      if (value > node.value) {
        return loop(node.right);
      } 
    };

    return loop(this.root);
    
  }

  maxValue() {
    let current = this.root;
    while(current.right){
      current = current.right;
    }
    return current.value;
  }
}

module.exports = BinarySearchTree;