class WeightedGraph {

  // Can be directed or undirected. If directed,
  // edges are constructed only from origin
  // to destination. If undirected, edges are
  // constructed from origin to destination AND 
  // back.
  constructor(undirected = true) { 
    // Storage for graph values
    this.adjList = new Map()

    // Configuring Graph to be directed or 
    // undirected
    this.undirected = undirected
  } 
  
  addVertex(vertex) {
    if (vertex){
      // If not supplied with a Node, will assume that
      // `vertex` is a value and construct a Node using
      // this value
      if (vertex.constructor !== Node){
        vertex = new Node(vertex)
      }

      // Checking if value is already in graph
      // If it isn't, use vertex as key in storage
      // and initialize its value as empty array.
      // This array will be used to store
      // all other vertices that this vertex
      // is connected to.
      if (!this.adjList.get(vertex))
        this.adjList.set(vertex, new Map())
    }
    
     
  } 

  addEdge(origin, destination, weight) {
    // Check if origin and destination are in graph
    if (this.adjList.get(origin) && this.adjList.get(destination)) {
      // Add edge from origin to destination
      this.addEdgeUtil(origin, destination, weight)

      // If the graph is undirected, draw edge
      // in reverse
      if (this.undirected)
        this.addEdgeUtil(destination, origin, weight)
    }
  }

  addEdgeUtil(origin, destination, weight){
    // If there isn't already an edge connecting
    // origin to destination, add destination
    // to array stored at key `origin`
    let edges = this.adjList.get(origin)

    if (!edges.get(destination))
      edges.set(destination, weight)
  }

  // Breadth First Search: Starting at any vertex, 
  // visit that vertex and add all of its nearest 
  // neighbors to list to be visited. 

  // EX: 
  // - If 1's neighbors are 7, 3, and 10, 
  // they will be added to the end of the list. 
  // - 7 will be visited first with its neighbors
  // added after 3 and 10.
  // - 3 will then be visited with its neighbors
  // added after 7's neighbors.
  // - 10 will then be visited with its neighbors
  // added after 10's neighbors.
  // - Repeat starting with 7's first neighbor

  bfs(vertex){
    // Check if vertex is in graph
    if (this.adjList.get(vertex)){
      // Initialize storage for vertices already
      // visited
      const visited = new Map()

      // Initialize queue with target vertex
      // as queue item
      let queue = [vertex]

      // Iterate while there are still values
      // in the queue
      while(queue.length){
        // Remove the first queue item (FIFO)
        const currentVertex = queue.shift()


        // If vertex has already been visited,
        // do not go again
        if (!visited.get(currentVertex)) {
          // Comment in to see traversal
          // order
          // console.log(currentVertex)

          // Get all neighbors of vertex
          const neighbors = this.adjList.get(currentVertex).keys()

          // Add all neighbors of newly
          // visited vertices to end of queue
          queue = [...queue, ...neighbors]
        }

        // Mark this vertex as having been 
        // visited
        visited.set(currentVertex, true)
      }
    }
  }

  // Depth First Search: Starting at any vertex A,
  // visit neighboring vertex B. Then at B,
  // visit an unvisited vertex neighboring B.
  // Continue until reaching a vertex with no
  // unvisited neighboring vertices.

  // EX:
  // - A's neighbors are B, C, and D, visit B.
  // - B's neighbors are H, J, and D, visit H.
  // - H's only neighbor is A (which has already
  // been visited), return to B.
  // - Visit J from B. J has no unvisited 
  // neighbors, return to B.
  // - Visit D from B. D has no unvisited 
  // neighbors, return to B.
  // - There are no more unvisited neighbors of B, 
  // so return to A.
  // - Visit C from A. C has no unvisited 
  // neighbors, so return to A.
  // - D has already been visited.
  // - D was the last of A's neighbors, 
  // so terminate traversal.

  dfs(vertex){
    // Check if vertex is in graph
    if (this.adjList.get(vertex)){
      // Initialize storage for visited
      // vertices
      const visited = new Map()

      // Begin recursion
      this.dfsUtil(vertex, visited, null)
    }
  }

  dfsUtil(vertex, visited, previous){
    // Mark vertex as visited
    visited.set(vertex, true)

    // Comment in to see traversal order
    // console.log(previous, " -> ", vertex)

    // Get neighbors of current vertex
    const neighbors = [...this.adjList.get(vertex).keys()]
    

    // Iterate over neighbors
    neighbors.forEach(neighbor => {
      // Check if neighbor has already been 
      // visited
      if(!visited.get(neighbor)) {
        // Recursively visit this neighbor
        this.dfsUtil(neighbor, visited, vertex)
      }
    })

    
  }

  allShortestPaths(){
    const nodes = [...this.adjList.keys()]

    nodes.forEach(node => {
      let data = [...this.djikstra(node).entries()]
      console.log("*****************")
      data.forEach(datum => {
        console.log(
          `${node.value} DISTANCE TO ` 
          + (datum[0].value) 
          + ": " 
          + datum[1].weightSum
        )
      })
    })
  }

  shortestPath(origin, destination){
    let paths = this.djikstra(origin)
    console.log(
      `Shortest path from ${origin.value} to ${destination.value}:`,
      paths.get(destination).weightSum
    )
  }


  djikstra(origin){
    const visited = new Map()


    const { data, nodes } = this.createDjikstraDataStore(origin)

    let target = origin
    data.get(origin).closest = origin

    let i = 0

    while (i < nodes.length){
      visited.set(target, true)
      let neighbors = [...this.adjList.get(target).entries()]

      let minimum = Infinity
      let tempTarget = null

      // console.log("** BEGIN **")
      // console.log("TARGET: ", target)
      neighbors.forEach(neighbor => {
        let node = neighbor[0]
        let weight = neighbor[1]

        // console.log(node, weight)


        let targetNodeData = data.get(target)
        let currentNodeData = data.get(node)


        if (targetNodeData.weightSum + weight < currentNodeData.weightSum){
          currentNodeData.weightSum = targetNodeData.weightSum + weight
          currentNodeData.closest = target
        }

        if (currentNodeData.weightSum < minimum && !visited.get(node)) {
            minimum = currentNodeData.weightSum
            tempTarget = node
        }
      })

      // console.log("LOWEST WEIGHT", minimum)

      if (!tempTarget)
        break;

      target = tempTarget
      i++

      // console.log("*** END ***")
    }

    return data

  }

  createDjikstraDataStore(origin){

    const nodes = [...this.adjList.keys()]
    const data = new Map()

    nodes.forEach(node => {
      let datum = {
        weightSum: node === origin ? 0 : Infinity,
        closest: null,
      }

      data.set(node, datum)
    }) 

    return { data, nodes }

  }
} 
