'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(...values) {
    let vals = [...values].reverse();

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

  insertBefore(value, newVal) {
    let node = new Node(newVal);

    if(!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }

    if (this.head.value === value) {
      node.next = this.head;
      this.head = node;
      return this;
    }
    
    let current = this.head;
    while(current.next.value !== value) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
    return this;
  }

  insertAfter(value, newVal) {
    let node = new Node(newVal);
    
    if(!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }

    let current = this.head;
    while(current.value !== value){
      current = current.next;
    }

    node.next = current.next;
    current.next = node;
    current = current.next;
    if(!current.next) this.tail = current;

    return this;
  }

  delete(value) {
    
    if(this.head.value === value) {
      this.head = this.head.next;
      return this;
    }

    let current = this.head;
    while(current.next.value !== value) {
      current = current.next;
    }

    current.next = current.next.next;
    if(!current.next) this.tail = current;
    return this;
  }
}

module.exports = LinkedList;


// At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.