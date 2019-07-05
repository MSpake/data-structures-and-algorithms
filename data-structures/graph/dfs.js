'use strict';

const Stack = require('../stacksAndQueues/stack');

module.exports = (graph, startVertex, goalVertex) => {
  //Morgana - pretty sure this one is supposed to be a stack not a queue, so I did that.
  const stack = new Stack; // Vinicio - HW, make this a real queue - https://www.npmjs.com/package/queue-fifo 
  const visitedVertices = new Set();

  const paths = new Map();

  stack.push(startVertex);
  visitedVertices.add(startVertex);

  //Morgana - changed this from length to size
  while(stack.size > 0) {
    // dequeue
    // check for goal
    // loop over all the neighobrs
    const currentVertex = stack.pop();

    if(currentVertex === goalVertex) {
      return paths;
    }

    for (let neighbor of graph.getNeighbors(currentVertex)){
      if(visitedVertices.has(neighbor.vertex)) {
        continue;
      } else {
        visitedVertices.add(neighbor.vertex);
      }
      paths.set(neighbor.vertex, currentVertex);
      stack.push(neighbor.vertex);
    }
  }
  return null;
};
