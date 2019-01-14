function djikstra(graph, origin){
  const visited = new Map()


  const { data, nodes } = createDjikstraDataStore(graph.adjList, origin)

  let target = origin
  data.get(origin).closest = origin

  let i = 0

  while (i < nodes.length){
    visited.set(target, true)
    let neighbors = [...graph.adjList.get(target).entries()]

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

function createDjikstraDataStore(adjList, origin){

  const nodes = [...adjList.keys()]
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