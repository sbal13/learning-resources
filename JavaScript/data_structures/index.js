let graph = new Graph(false)

graph.addVertex(10)
graph.addVertex(3)
graph.addVertex(2)
graph.addVertex(8)
graph.addVertex(18)
graph.addVertex(23)
graph.addVertex(1)


graph.addEdge(10, 3)
graph.addEdge(10, 2)
graph.addEdge(10, 18)
graph.addEdge(10, 1)

graph.addEdge(3, 2)
graph.addEdge(3, 23)

graph.addEdge(1, 3)
graph.addEdge(1, 18)
graph.addEdge(1, 8)

graph.addEdge(2, 8)
graph.addEdge(2, 1)

graph.addEdge(8, 10)
graph.addEdge(8, 23)

graph.addEdge(18, 23)
graph.addEdge(18, 3)

graph.addEdge(23, 1)

graph.dfs(8)

