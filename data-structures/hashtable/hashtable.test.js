'use strict';

const HashTable = require('./hashtable.js');

describe('Hashtables', () => {
  const testHash = new HashTable;

  it('Can add a key/value pair', () => {
    testHash.add('first', 1);
    testHash.add(12, 'second');
    expect(testHash.internal).toContainEqual({'first': 1});
    expect(testHash.internal).toContainEqual({12: 'second'});
  });

  it('Get takes in a key and returns the value', () => {
    expect(testHash.get('first')).toBe(1);
    expect(testHash.get(12)).toBe('second');
    expect(testHash.get('avocado')).toBeNull();
  });

  it('Has checks if the key is present', () => {
    
  });
});