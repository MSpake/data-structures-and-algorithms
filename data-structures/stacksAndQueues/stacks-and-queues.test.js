'use strict';

const Node = require('./node.js');
const Stack = require('./stack.js');
const Queue = require('./queue.js');

describe('Node', () => {
  it('should be an instance of the node class', () => {
    let n = new Node(4);
    expect(n).toBeInstanceOf(Node);
    expect(n.value).toBe(4);
    expect(n.next).toBeNull();
  });
});

describe('Stack', () => {
  it('should be an instance of the stack class', () => {
    let s = new Stack;
    expect(s).toBeInstanceOf(Stack);
    expect(s.top).toBeNull();
  });

  describe('push', () => {
    let s = new Stack;
    it('adds new nodes to the top of the stack', () => {
      s.push(2);
      expect(s.top.value).toBe(2);
      s.push(4);
      expect(s.top.value).toBe(4);
      s.push(6);
      expect(s.top.value).toBe(6);
    });

    it('can add multiple nodes to the stack at once', () => {
      s.push(1,3,5);
      expect(s.top.value).toBe(5);
      s.push(7,8,9);
      expect(s.top.value).toBe(9);
    });

    it('calling push without an argument returns an error message', () => {
      expect(s.push()).toBe('The push method cannot be called without one or more arguments.');
    });
  });

  describe('pop', () => {
    let s = new Stack;

    it('calling pop on a newly instantiated stack returns null', ()=> {
      expect(s.pop()).toBeNull();
    });

    it('pops an node off the top of the stack', () => {
      s.push(2,4,6);
      s.pop();
      expect(s.top.value).toBe(4);
      s.pop();
      expect(s.top.value).toBe(2);
    });

    it('can empty a stack using pop', () => {
      s.pop();
      s.pop();
      expect(s.top).toBeNull();
    });

    it('pop returns the value of the node that it removes', () => {
      s.push(1, 5, 7);
      expect(s.pop()).toBe(7);
      expect(s.pop()).toBe(5);
      expect(s.pop()).toBe(1);
      expect(s.pop()).toBeNull();
    });
  });

  describe('peek', () => {
    let s = new Stack;

    it('peek returns the value of the top.value node without modifying the stack', () => {
      expect(s.peek()).toBeNull();
      s.push(5,10);
      expect(s.peek()).toBe(10);
      s.pop();
      expect(s.peek()).toBe(5);
    });
  });

});

describe('Queue', () => {
  it('should be an instance of the queue class', () => {
    let q = new Queue;
    expect(q).toBeInstanceOf(Queue);
    expect(q.front).toBeNull();
    expect(q.rear).toBeNull();
  });

  describe('enqueue', () => {
    let q = new Queue;

    it('if the queue is empty, and only one node is enqueued, both front and rear point to the newly added node', () => {
      q.enqueue(2);
      expect(q.front.value).toBe(2);
      expect(q.rear.value).toBe(2);
    });

    it('adds nodes to the rear of the queue', () => {
      q.enqueue(4);
      q.enqueue(6);
      expect(q.front.value).toBe(2);
      expect(q.rear.value).toBe(6);
      q.enqueue(8);
      expect(q.front.value).toBe(2);
      expect(q.rear.value).toBe(8);
    });

    it('can add multiple nodes to the queue at once', () => {
      q.enqueue(1,5);
      expect(q.rear.value).toBe(5);
      q.enqueue(7,9,11);
      expect(q.rear.value).toBe(11);
    });

    it('calling enqueue without an argument returns an error message', () => {
      expect(q.enqueue()).toBe('Cannot call enqueue without an argument');
    });
  });

  describe('dequeue', () => {
    let q = new Queue;

    it('calling dequeue on an empty queue returns null', () => {
      expect(q.dequeue()).toBeNull();
    });

    it('it dequeues from the front', () => {
      q.enqueue(1,2,3,4);
      q.dequeue();
      expect(q.front.value).toBe(2);
      q.dequeue();
      expect(q.front.value).toBe(3);
      q.dequeue();
      expect(q.front.value).toBe(4);
    });

    it('can empty a queue with dequeue', () => {
      q.dequeue();
      expect(q.front).toBeNull();
    });

    it('dequeue returns the value of the removed entry', () => {
      q.enqueue(5,6,7,8);
      expect(q.dequeue()).toBe(5);
      expect(q.dequeue()).toBe(6);
      expect(q.dequeue()).toBe(7);
    });
  });

  describe('peek', () => {
    let q = new Queue;

    it('returns the value at the front of the queue without modifying the queue', () => {
      expect(q.peek()).toBeNull();
      q.enqueue(2,3,4);
      expect(q.front.value).toBe(2);
      q.dequeue();
      expect(q.front.value).toBe(3);
    });
  });

});
