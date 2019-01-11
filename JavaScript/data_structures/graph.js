class Graph { 
    constructor(undirected = false) { 
        this.adjList = {}
        this.undirected = undirected
    } 
  
    addVertex(vertex) { 
        if (!this.adjList[vertex])
            this.adjList[vertex] = [] 
    } 

    addEdge(origin, destination) {

        this.addEdgeUtil(origin, destination)

        if (this.undirected)
            this.addEdgeUtil(destination, origin)
    }

    addEdgeUtil(origin, destination){
        if (!this.adjList[origin].includes(destination))
            this.adjList[origin].push(destination)
    }

    bfs(vertex){
        const visited = {}
        let queue = [vertex]

        while(queue.length){
            const currentNode = queue.shift()

            if (!visited[currentNode]) {
                console.log(currentNode)
                const neighbors = this.adjList[currentNode]
                queue = [...queue, ...neighbors]
            }

            visited[currentNode] = true
        }
    }

    dfs(vertex){

        const visited = {[vertex]: true}

        this.dfsUtil(vertex, visited, null)
    }

    dfsUtil(vertex, visited, previous){
        // console.log(previous, " -> ", vertex)
        console.log(vertex)
        const neighbors = this.adjList[vertex]

        neighbors.forEach(neighbor => {
            if(!visited[neighbor]) {
                visited[neighbor] = true
                this.dfsUtil(neighbor, visited, vertex)
            }
        })

        
    }
} 
