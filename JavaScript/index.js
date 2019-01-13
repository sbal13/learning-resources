let { graph, nodes } = createWeightedGraph()

// let { linkedList, nodes } = createLinkedList()

// nodes.forEach(node => {
// 	let data = [...djikstra(graph, node).entries()]
// 	console.log("*****************")
// 	data.forEach(datum => {
// 		console.log(
// 			`${node.value} DISTANCE TO ` 
// 			+ (datum[0].value) 
// 			+ ": " 
// 			+ datum[1].weightSum
// 		)
// 	})
// })

graph.allShortestPaths()

// graph.shortestPath(nodes[0], nodes[6])
