'use stirct';

let LinkedList = require('./linked-list.js');

describe('Linked Lists', () => {

  let list = new LinkedList;

  it('Instantiating returns an empty linked list', () => {
    const testList = new LinkedList;
    expect(testList).toBeInstanceOf(LinkedList);
    expect(testList.head).toBeNull();
  });

  // Can properly insert into the linked list
  it('Can add a new value to the beginning of the list', () => {
    expect(list.insert('first value').head.value).toEqual('first value');
  });
  // Can properly insert into the linked list
  xit('Can append a new value to the end of the list', () => {
    expect(list.append('latest value').value).toEqual('latest value'); 
    expect(list.tail.next).toBeNull();
  });

  // The head property will properly point to the first node in the linked list 
  it('head property always points to the first item in the list', () => {
    list.insert(2);
    expect(list.head.value).toEqual(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);

  });

  // Can properly insert multiple nodes into the linked list
  it('can insert more than one node at a time', () => {
    list.insert('test', 4, 5);
    expect(list.head.value).toEqual(5);
    expect(list.includes('test')).toBeTruthy();
  });

  // Will return true when finding a value within the linked list that exists
  it('.includes(val) returns true if the given value is stored in the list, else returns false', () => {
    expect(list.includes(2)).toBeTruthy();
    expect(list.includes('first value')).toBeTruthy();
    expect(list.includes('nope')).not.toBeTruthy();
  });

  // Can properly return a collection of all the values that exist in the linked list
  it('.print() returns an array containing all the values in the list', () => {
    expect(list.print()).toEqual(expect.arrayContaining([ 5, 4, 'test', 3, 2, 'first value' ]));
    console.log(list.print());
  });
});


