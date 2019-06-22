'use strict';

class Hashtable {
  constructor() {
    this.internal = Array(1024).fill(null);
  }

  add(key, value) {
    let hashedKey = this.hash(key);
    if(this.internal[hashedKey] === null) {
      this.internal[hashedKey] = {};
    }
    this.internal[hashedKey][key] = value;
  }

  get(key) {
    let hashedKey = this.hash(key);
    
  }

  contains() {

  }

  hash(key) {
    if(typeof key != 'string') key = key.toString();
    let total = 0;
    for(let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    total = total * 1113;
    total = total % 1024;
    return total;
  }
}

module.exports = Hashtable;