/**
 * Graph - Nodes + Connections
 *
 * Tree is also a type of Graph.
 */

// Adjacency Matrix

// Adjacency List - commonly use
// Building an undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add Vertex Implementation
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add relationships between two vertices - Edge
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    // keep everything that is not vertex 2
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");

console.log(graph);
graph.removeEdge("A", "B");

console.log(graph);
