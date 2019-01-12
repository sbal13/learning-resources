// Base class. Define a new heap class type, 
// extend Heap, and add `shouldSwap` which should
// take 2 values (child and parent) and return a 
// boolean.

class Heap {

  constructor(){
    // Storage for Heap values
    this.data = []
  }
  
  add(value) { 
    // Add the data to the end of the array
    this.data.push(value);

    // Initiate bubbling using index of newly inserted
    // element and its value for comparison
    this.bubbleUp(this.data.length - 1, value); 
  };

  removeHead() {
    // Obtain value at the top of the heap
    var headNode = this.data[0]; 

    // Remove last element of the heap
    var tailNode = this.data.pop();

    // If after popping last element off heap
    // there is no data at the top, this means
    // that there was only one element in the heap,
    // so do not replace head with tail otherwise 
    // heap will never be empty
    if (this.data[0]){
      // Reassign top of heap to last element of heap
      this.data[0] = tailNode; 

      // Starting from the top, bubble down
      this.bubbleDown(0, tailNode);
    } 
    
    

    // Return removed value (old top of heap)
    return headNode;
  };

  // Time Complexity:
  //  O(K) where K is depth of heap. Because heap
  //  is always complete, K === log(n) with n being
  //  the number of values in the heap. Therefore
  //  bubbleDown is O(log(n)). All operations
  //  inside are O(1)
  // Space Complexity:
  //  O(1) since swaps are performed in place
  bubbleUp(childIndex, childData) {

    // If index is 0, you are at the top 
    // and can bubble no further
    if(childIndex > 0) {

        // Obtain index and data of parent
        var parentIndex = this.getParentIndex(childIndex);
        var parentData = this.data[parentIndex]; 
        
        // Criteria by which swaps should made
        if (this.shouldSwap(childData, parentData)) {

            // Swap the parent and child data 
            this.data[parentIndex] = childData;
            this.data[childIndex] = parentData;

            // The data that is being bubbled up (childData)
            // is currently at `parentIndex`, after the swap
            // so use this index to recursively bubble up
            this.bubbleUp(parentIndex, childData);
        }
    }
  };


  // Time Complexity:
  //  O(K) where K is depth of heap. Because heap
  //  is always complete, K === log(n) with n being
  //  the number of values in the heap. Therefore
  //  bubbleDown is O(log(n)). All operations
  //  inside are O(1)
  // Space Complexity:
  //  O(1) since swaps are performed in place
  bubbleDown(parentIndex, parentData) {

    // If index is greater than or equal to length
    // of data, you are at the end of the array 
    // and can bubble down no further
    if(parentIndex < this.data.length) {

        // Copy index and data into new variables
        var targetIndex = parentIndex;
        var targetData = parentData;
 
        // Obtain possible indices of children
        var leftChildIndex = this.getLeftChild(parentIndex);
        var rightChildIndex = this.getRightChild(parentIndex);
        
        // Checking for the existence of left child
        if(leftChildIndex < this.data.length) {

            // Obtain left child data
            var leftChildData = this.data[leftChildIndex];
            
            // Checks to see if swap criteria met
            // with left child and parent
            if (this.shouldSwap(leftChildData, targetData )) {

                // Tentatively, the target for swap
                // is now the left child
                targetIndex = leftChildIndex;
                targetData = leftChildData;
            }
        }
        
        // Checking for the existence of right child
        if(rightChildIndex < this.data.length) {

            // Obtain right child data
            var rightChildData = this.data[rightChildIndex];
            
            // Checks to see if swap criteria met
            // between right child and `targetData`

            // NOTE: If left child also met criteria,
            // `targetData` is left child data.
            // In other words, the target for swap
            // will depend on whether the swap criteria
            // is "more" true for the left or right
            // child


            if(this.shouldSwap(rightChildData, targetData )) {
                targetIndex = rightChildIndex;
                targetData = rightChildData;
            }
        }
 
        // If target index is no longer equal to
        // parent index, a swap is necessary
        if(targetIndex !== parentIndex) {

            // Swap target (either left or right child)
            // with parent and continue bubbling
            // down from parent's new index
            this.data[parentIndex] = targetData;
            this.data[targetIndex] = parentData;
            this.bubbleDown(targetIndex, parentData);
        } 
    }
};


  // Helper functions to get indices of related nodes

  // EX: Visualize a tree that looks like so:

  //         0
  //    1          2
  //  3   4     5     6 
  // 7 8 9 10 11 12 13 14 

  // where the numbers represent the node's index 
  // in the array
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  };


  getLeftChild(parentIndex) {
    return parentIndex * 2 + 1;
  };
   
  getRightChild(parentIndex){
      return parentIndex * 2 + 2;
  };

  
}

