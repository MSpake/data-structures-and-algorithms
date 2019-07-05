'use strict';

const Linkedlist = require('../linkedList/linked-list');

module.exports = class Graph{
  constructor(){
    // Vinicio - adjacency list
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, new Linkedlist); //Morgana - changed to a linked list instance
  }

  // Vinicio - this edges are directed
  addEdge(startVertex, endVertex, weight = 0) {
    if(!this._adjacencyList.has(startVertex) ||
    !this._adjacencyList.has(endVertex)) {
      throw new Error('_INVALID_VERTEX_');
    }

    const edgeData = {
      vertex: endVertex,
      weight,
    };
    //Morgana - changed this to insert instead of push
    this._adjacencyList.get(startVertex).insert(edgeData);
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)) {
      throw new Error('_INVALID_VERTEX_');
    }
    //Morgana - added a check to make sure the list isn't empty, then return either an array of the values or an empty array
    const vertexData = this._adjacencyList.get(vertex);
    return vertexData.head ? vertexData.print() : [];
  }
};