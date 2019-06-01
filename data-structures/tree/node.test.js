'use strict';

const Node = require('./node.js');

describe('Node Class', () => {
  const testNode = new Node(5);

  it('should be a Node', () => {
    expect(testNode).toBeInstanceOf(Node);
  });

  it('should have a value property', () => {
    expect(testNode.value).toBeDefined();
    expect(testNode.value).toBe(5);
  });

  it('should have a left property', () => {
    expect(testNode.left).toBeDefined();
    expect(testNode.left).toBeNull();
  });

  it('should have a right property', () => {
    expect(testNode.right).toBeDefined();
    expect(testNode.right).toBeNull();
  });
});