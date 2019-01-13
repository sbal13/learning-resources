class LinkedList {
  constructor(head = null){
    this.head = head
    this.tail = head
    this.length = head ? 1 : 0
  }

  append(node){
    if (!node || node.constructor !== Node){
      return;
    }

    if(this.isEmpty()){
      this.head = node
    } else {
      this.tail.next = node
    }

    this.tail = node
    this.length++
  }

  prepend(node){
    if (!node || node.constructor !== Node){
      return;
    }

    if(this.isEmpty()){
      this.tail = node
    } else {
      node.next = this.head
    }

    this.head = node
    this.length++
  }

  pop(){

    const oldTail = this.tail

    if (this.head === this.tail){
      this.head = null
      this.tail = null

      return oldTail
    }

    this.traverse((node) => {
      if (node.next === this.tail){
        node.next = null
      }
    })

    return oldTail
  }

  traverse(callback){
    let currentNode = this.head

    while(currentNode){
      callback(currentNode)
      currentNode = currentNode.next
    }
  }

  shift(){
    if (!this.head){
      return null
    }
    const oldHead = this.head

    this.head = this.head.next

    if (!this.head){
      this.tail = null
    }

    this.length--

    return oldHead
  }


  isEmpty(){
    return !this.head && !this.tail
  }
}