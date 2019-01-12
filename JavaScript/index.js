let graph = new WeightedGraph(false)

let node1 = new Node(10)
let node2 = new Node(3)
let node3 = new Node(2)
let node4 = new Node(8)
let node5 = new Node(18)
let node6 = new Node(23)
let node7 = new Node(1)

graph.addVertex(node1)
graph.addVertex(node2)
graph.addVertex(node3)
graph.addVertex(node4)
graph.addVertex(node5)
graph.addVertex(node6)
graph.addVertex(node7)


graph.addEdge(node1, node2)
graph.addEdge(node1, node3)
graph.addEdge(node1, node5)
graph.addEdge(node1, node7)

graph.addEdge(node2, node3)
graph.addEdge(node2, node6)

graph.addEdge(node7, node5)
graph.addEdge(node7, node4)

graph.addEdge(node3, node4)
graph.addEdge(node3, node7)

graph.addEdge(node4, node1)

graph.addEdge(node5, node6)

graph.addEdge(node6, node7)

graph.dfs(node4)

