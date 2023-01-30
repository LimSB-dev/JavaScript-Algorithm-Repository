class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjList[vertex1].push(vertex2);
    this.adjList[vertex2].push(vertex1);
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

console.log(graph.adjList);
/*
Output:
{
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A'],
  D: ['B']
}
*/
