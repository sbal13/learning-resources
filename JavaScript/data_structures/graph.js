class Graph {

    // Can be directed or undirected. If directed,
    // edges are constructed only from origin
    // to destination. If undirected, edges are
    // constructed from origin to destination AND 
    // back.
    constructor(undirected = false) { 
        // Storage for graph values
        this.adjList = {}

        // Configuring Graph to be directed or 
        // undirected
        this.undirected = undirected
    } 
    
    addVertex(vertex) { 
        // Checking if value is already in graph
        // If it isn't, use vertex as key in storage
        // and initialize its value as empty array.
        // This array will be used to store
        // all other vertices that this vertex
        // is connected to.
        if (!this.adjList[vertex])
            this.adjList[vertex] = [] 
    } 

    addEdge(origin, destination) {
        // Check if origin and destination are in graph
        if (this.adjList[origin] && this.adjList[destination]) {
            // Add edge from origin to destination
            this.addEdgeUtil(origin, destination)

            // If the graph is undirected, draw edge
            // in reverse
            if (this.undirected)
                this.addEdgeUtil(destination, origin)
        }
    }

    addEdgeUtil(origin, destination){
        // If there isn't already an edge connecting
        // origin to destination, add destination
        // to array stored at key `origin`
        if (!this.adjList[origin].includes(destination))
            this.adjList[origin].push(destination)
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
        if (this.adjList[vertex]){
            // Initialize storage for vertices already
            // visited
            const visited = {}

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
                if (!visited[currentVertex]) {
                    // Comment in to see traversal
                    // order
                    // console.log(currentVertex)

                    // Get all neighbors of vertex
                    const neighbors = this.adjList[currentVertex]

                    // Add all neighbors of newly
                    // visited vertices to end of queue
                    queue = [...queue, ...neighbors]
                }

                // Mark this vertex as having been 
                // visited
                visited[currentVertex] = true
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
        if (this.adjList[vertex]){
            // Initialize storage for visited
            // vertices
            const visited = {}

            // Begin recursion
            this.dfsUtil(vertex, visited, null)
        }
    }

    dfsUtil(vertex, visited, previous){
        // Mark vertex as visited
        visited[vertex] = true

        // Comment in to see traversal order
        // console.log(previous, " -> ", vertex)

        // Get neighbors of current vertex
        const neighbors = this.adjList[vertex]


        // Iterate over neighbors
        neighbors.forEach(neighbor => {
            // Check if neighbor has already been 
            // visited
            if(!visited[neighbor]) {
                // Recursively visit this neighbor
                this.dfsUtil(neighbor, visited, vertex)
            }
        })

        
    }
} 
