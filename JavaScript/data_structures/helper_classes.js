// Polymorphic Node - given a type, can be used for 
// different data structure implementations
class Node {
  constructor(value, type=null){
    this.value = value

    if (type === "tree"){
      this.left = null
      this.right = null
    }

    if (type === "linked list"){
      this.next = null
    }

    if (type === "doubly linked list"){
      this.next = null
      this.prev = null
    }
  }
}

