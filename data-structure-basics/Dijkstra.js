/**
 * Dijkstra Algorithm:
 *
 * Find the shortest path between two vertices on a graph, point A and point B?
 */

// PriorityQueue
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value: value, priority: priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// Weighted Graph
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a vertex to the weighted graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an Edge to the weighed graph
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = []; // to return at end

    // Build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // console.log(distances);
    // PQ is not empty
    while (nodes.values.length) {
      // dequeue the smallest value in it
      smallest = nodes.dequeue().value;
      if (smallest === finish) {
        // ALL DONE
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          console.log(neighbor); // 0,1....
          // find neighbor node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // Calculate distance on new neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          // Compare to the current store of nextNode.node - "E"
          if (candidate < distances[nextNeighbor]) {
            // Updating the new smallest distance to neiborgh
            distances[nextNeighbor] = candidate;
            // Updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // Enqueue in PQ with new Priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();
// Add Vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// Add Edges
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.Dijkstra("A", "E"));
// console.log(graph.adjacencyList);
