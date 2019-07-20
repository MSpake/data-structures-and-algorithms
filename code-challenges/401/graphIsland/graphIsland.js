'use strict';

const Queue = require('../../../data-structures/stacksAndQueues/queue');


function traverse(adjList, key, set){
  const queue = new Queue();
  queue.enqueue(key);

  while(queue.peek) {
    const current = queue.dequeue();
    set.add(current);
    console.log(current);

    let vertexToAdd = adjList.get(current).head ? adjList.get(current).head : null;

    while(vertexToAdd) {
      console.log(queue);
      if(!set.has(vertexToAdd.value.vertex)) queue.enqueue(vertexToAdd.value.vertex);

      vertexToAdd = vertexToAdd.next;
    }
  }
}

function countIslands(graph) {
  const set = new Set();
  let count = 0;
  
  graph._adjacencyList.forEach( (value, key) => {
    if(!set.has(key)) {
      traverse(graph._adjacencyList, key, set);
      count++;
    }
  });

  return count;
}

module.exports = countIslands;