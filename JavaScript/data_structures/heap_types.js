
// MinHeap - if child is less than parent,
// child should move up to parent's place
// Smallest value always at head.
class MinHeap extends Heap {
    shouldSwap(child, parent){
        return child < parent
    }
}


// MaxHeap - if child is greater than parent,
// child should move up to parent's place.
// Greatest value always at head.
class MaxHeap extends Heap {
    shouldSwap(child, parent){
        return child > parent
    }
}


// Example custom heap. If length of child is
// less than parent's length, child should move
// up to parent's place.
// String with smallest length always at head.
class MinLengthHeap extends Heap {
    shouldSwap(child, parent){
        return child.length < parent.length
    }
}