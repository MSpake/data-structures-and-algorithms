'use strict';

var Queue = require('queue-fifo');

module.exports = (graph, startVertex, goalVertex) => {
  const queue = new Queue; // Vinicio - HW, make this a real queue - https://www.npmjs.com/package/queue-fifo //Morgana - done
  const visitedVertices = new Set();

  const paths = new Map();

  //Morgana - changed from unshift to enqueue
  queue.enqueue(startVertex);
  visitedVertices.add(startVertex);


  while(queue.size > 0) {
    // dequeue
    // check for goal
    // loop over all the neighobrs
    
    //Morgana - changed from pop to dequeue
    const currentVertex = queue.dequeue();

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
      //Morgana - changed from unshift to enqueue
      queue.enqueue(neighbor.vertex);
    }
  }
  return null;
};