function createWeightedGraph(){

	let graph = new WeightedGraph()

	let node1 = new Node(10)
	let node2 = new Node(3)
	let node3 = new Node(2)
	let node4 = new Node(8)
	let node5 = new Node(18)
	let node6 = new Node(23)
	let node7 = new Node(1)

	let nodes = [
		node1,
		node2,
		node3,
		node4,
		node5,
		node6,
		node7
	]

	graph.addVertex(node1)
	graph.addVertex(node2)
	graph.addVertex(node3)
	graph.addVertex(node4)
	graph.addVertex(node5)
	graph.addVertex(node6)
	graph.addVertex(node7)

	graph.addEdge(node1, node2, 10)
	graph.addEdge(node1, node3, 5)
	graph.addEdge(node1, node5, 3)
	graph.addEdge(node1, node7, 7)
	graph.addEdge(node2, node3, 18)
	graph.addEdge(node2, node6, 23)
	graph.addEdge(node7, node5, 2)
	graph.addEdge(node7, node4, 9)
	graph.addEdge(node3, node4, 5)
	graph.addEdge(node3, node7, 25)
	graph.addEdge(node4, node1, 2)
	graph.addEdge(node5, node6,9)
	graph.addEdge(node6, node7, 16)

	return { graph, nodes }
}

function createUnweightedGraph(){
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

	return {graph, nodes}
}

function createLinkedList(){
	const node1 = new Node(9, "linked list")
	const node2 = new Node(3, "linked list")
	const node3 = new Node(13, "linked list")
	const node4 = new Node(57, "linked list")
	const node5 = new Node(63, "linked list")
	const node6 = new Node(29, "linked list")

	const nodes = [
		node1,
		node2,
		node3,
		node4,
		node5,
		node6
	]

	const linkedList = new LinkedList()

	linkedList.append(node1)
	linkedList.append(node2)
	linkedList.append(node3)
	linkedList.append(node4)
	linkedList.append(node5)
	linkedList.prepend(node6)

	return { linkedList, nodes }
}

