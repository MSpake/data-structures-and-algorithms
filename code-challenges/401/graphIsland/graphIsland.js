'use strict';

const Queue = require('../../../data-structures/stacksAndQueues/queue');


function traverse(adjList, key, set){
  const queue = new Queue();
  queue.enqueue(key);

  while(queue.peek) {
    const current = queue.dequeue();
    set.add(current);

    let vertexToAdd = adjList.get(current).head ? adjList[current].head : null;

    while(vertexToAdd) {
      if(!set.has(vertexToAdd)) queue.enqueue(vertexToAdd);
      vertexToAdd = vertexToAdd.next;
    }
  }
}

function hasIslands(graph) {
  const set = new Set();
  let count = 0;

  Object.keys(graph._adjacencyList).forEach( key => {
    if(!set.has(key)) {
      traverse(graph._adjacencyList, key, set);
      count++;
    }
  });

  return count;
}