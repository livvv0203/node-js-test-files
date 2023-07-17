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

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    // delete the key from the adjacency list
    delete this.adjacencyList[vertex];
  }

  // Traversal - DFS - recursively
  // function takes a vertex to start from
  DFS(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    // Inner helper function
    (function dfsHelper(vertex) {
      if (!vertex) return null;
      // mark vertex as visited
      visited[vertex] = true;
      // add vertex to the result list
      result.push(vertex);
      // for each neiborgh, if not visited, recursively call DFS neighbor
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfsHelper(neighbor);
        }
      });
    })(start);

    return result;
  }

  DFSIterative(start) {
    
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.DFS("B"));
