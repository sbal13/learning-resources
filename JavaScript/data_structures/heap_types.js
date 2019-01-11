class MinHeap extends Heap {
    shouldSwap(child, parent){
        return child < parent
    }
}

class MaxHeap extends Heap {
    shouldSwap(child, parent){
        return child > parent
    }
}

class MinLengthHeap extends Heap {
    shouldSwap(child, parent){
        return child.length < parent.length
    }
}