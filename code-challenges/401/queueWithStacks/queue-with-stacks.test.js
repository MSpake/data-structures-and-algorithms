'use strict';

const pseudoQueue = require('./queue-with-stacks.js');

describe('pseudoQueue using stacks', () => {
  const testQueue = new pseudoQueue;
  it('should be an instance of the pseudoQueue class', () =>{
    expect(testQueue).toBeInstanceOf(pseudoQueue);
  });

  it('enqueuing should add the value to the end of the queue', () => {
    expect(testQueue.enqueue(1)).toBe(1);
    expect(testQueue.enqueue(2)).toBe(2);
    expect(testQueue.enqueue(3)).toBe(3);
    expect(testQueue.enqueue(4)).toBe(4);
  });

  it('dequing should remove the value from the front of the queue and return the value', () => {
    expect(testQueue.dequeue()).toBe(1);
    expect(testQueue.dequeue()).toBe(2);
    expect(testQueue.dequeue()).toBe(3);
  });
});