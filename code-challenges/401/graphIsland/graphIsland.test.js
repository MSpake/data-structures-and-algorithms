'use strict';

const countIslands = require('./graphIsland');
const Graph = require('../../../data-structures/graph/graph');
const Vertex = require('../../../data-structures/graph/vertex');

const a = new Vertex('A');
const b = new Vertex('B');
const c = new Vertex('C');
const d = new Vertex('D');
const e = new Vertex('E');
const f = new Vertex('F');
const g = new Vertex('G');

const testGraph = new Graph();
testGraph.addVertex(a);
testGraph.addVertex(b);
testGraph.addVertex(c);
testGraph.addVertex(d);

testGraph.addEdge(a, b);
testGraph.addEdge(b, a);
testGraph.addEdge(b, c);
testGraph.addEdge(b, d);
testGraph.addEdge(c, b);
testGraph.addEdge(c, d);
testGraph.addEdge(d, c);
testGraph.addEdge(d, b);


testGraph.addVertex(e);
testGraph.addVertex(f);
testGraph.addVertex(g);
testGraph.addEdge(e, f);
testGraph.addEdge(f, g);


describe('Count Islands', () => {
  it('can count the number of islands', () => {
    const islands = countIslands(testGraph);
    expect(islands).toBe(2);
  });
});