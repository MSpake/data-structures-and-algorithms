'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(...values) {
    let vals = [...values];

    vals.forEach( value => {
      let node = new Node(value);
  
      if(!this.head) {
        this.head = node;
        this.tail = node;
        return this;
      }
  
      let current = this.head;
  
      node.next = current;
      this.head = node;
      current = this.head;
    });

    return this;
  }

  append(...values) {
    let vals = [...values];

    vals.forEach( value => {
      let node = new Node(value);

      if(!this.head) {
        this.head = node;
        this.tail = node;
        return this;
      }

      let current = this.tail;
      current.next = node;
      this.tail = current.next;
      current = current.next;
    });

    return this;
  }

  includes(value) {
    let current = this.head;
    let found = false;

    while(current.next) {
      if (current.value === value) found = true;
      current = current.next;
    }
    if (current.value === value) found = true;

    return found;
  }

  print() {
    let allelements = [];
    let current = this.head;

    while(current.next) {
      allelements.push(current.value);
      current = current.next;
    }
    allelements.push(current.value);

    return allelements;    
  }
}

module.exports = LinkedList;

// Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
// Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
// Define a method called print which takes in no arguments and returns a collection all of the current Node values in the Linked List.







// At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.