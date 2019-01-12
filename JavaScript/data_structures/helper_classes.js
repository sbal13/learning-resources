// Graph nodes
class Node {
	constructor(value, isTree = false){
		this.value = value

		if (isTree){
			this.left = null
			this.right = null
		}
	}
}
