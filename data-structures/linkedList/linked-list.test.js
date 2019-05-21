'use stirct';

let LinkedList = require('./linked-list.js');

describe('Linked Lists', () => {

  let list = new LinkedList;

  it('Instantiating returns an empty linked list', () => {
    const testList = new LinkedList;
    expect(testList).toBeInstanceOf(LinkedList);
    expect(testList.head).toBeNull();
  });

  it('Can add a new value to the beginning of the list', () => {
    expect(list.insert('first value').head.value).toEqual('first value');
  });

  it('Can append a new value to the end of the list', () => {
    list.append('latest value');
    expect(list.tail.value).toEqual('latest value'); 
    expect(list.tail.next).toBeNull();
  });

  it('appending to an empty list sets both head and tail', () => {
    const testList = new LinkedList;
    testList.append('new item');
    expect(testList.head.value).toEqual('new item');
    expect(testList.tail.value).toEqual('new item');
  });

  it('head property always points to the first item in the list', () => {
    list.insert(2);
    expect(list.head.value).toEqual(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);

  });

  it('can insert more than one node at a time at the head of the list', () => {
    list.insert('test', 4, 5);
    expect(list.head.value).toEqual('test');
    expect(list.includes(5)).toBeTruthy();
  });

  it('can append more than one node at a time to the end of the list', () => {
    list.append('appended', 6, 7);
    expect(list.tail.value).toEqual(7);
    expect(list.includes('appended')).toBeTruthy();
  });

  it('.includes(val) returns true if the given value is stored in the list, else returns false', () => {
    expect(list.includes(2)).toBeTruthy();
    expect(list.includes('latest value')).toBeTruthy();
    expect(list.includes(7)).toBeTruthy();
    expect(list.includes('nope')).not.toBeTruthy();
  });

  it('.print() returns an array containing all the values in the list', () => {
    expect(list.print()).toEqual([ 'test', 4, 5, 3, 2, 'first value', 'latest value', 'appended', 6, 7 ]);
  });


  const secondList = new LinkedList;
  secondList.insert(1,2,3,4,5);

  it('can insert a new node before a given value', () => {
    secondList.insertBefore(3, 'added before');
    expect(secondList.print()[2]).toEqual('added before');
    secondList.insertBefore(1, 'inserted before');
    expect(secondList.head.value).toEqual('inserted before');
  });

  it('can insert a new node after a given value', () => {
    secondList.insertAfter(3, 'added after');
    expect(secondList.print()[5]).toEqual('added after');
    secondList.insertAfter(5, 'inserted after');
    expect(secondList.tail.value).toEqual('inserted after');
  });
  //can delete a node
  it('given a value, it deletes the node containing that value', () => {
    secondList.delete('inserted before');
    expect(secondList.head.value).toEqual(1);
    secondList.delete('inserted after');
    console.log(secondList.print());
    expect(secondList.tail.value).toEqual(5);
    secondList.delete(3);
    expect(secondList.includes(3)).not.toBeTruthy();
  });
});


