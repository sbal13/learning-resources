// Insertion Sort: For each value X, sort all 
// by iterating backwards and comparing X to each
// preceding values one. If the compared value is 
// greater than X, push it up one index, else if 
// it is less than or equal to X, insert X one 
// index ahead of this value.

// Time Complexity:
//  O(n^2) because of nested iteration (only when 
//  values sorted in reverse)
//  O(n) when values are already sorted

// Space Complexity:
//  O(1) because operations are done in place

// -----> UNCOMMENTED CODE
function insertionSort(array){
  for(let i = 1; i < array.length; i++){
    let currentValue = array[i]
    let j = i-1

    while(j >= 0 && array[j] > currentValue){
      array[j+1] = array[j]
      j -= 1
    }
    array[j+1] = currentValue
  }
}

/* 
// -----> COMMENTED CODE
function insertionSort(array){

  // Iterate from 2nd element to end of array
  for(let i = 1; i < array.length; i++){
    // Comment in to see array before sort iteration
    // console.log("Before", array)

    // Value to insert. Will be used to find first
    // element in preceding indices that are smaller
    let currentValue = array[i]

    // Start `j` at one index down from the index
    // of the value to be inserted
    let j = i-1

    // Iterate while `j` is a valid index (greater
    // than 0) and the element at index `j` is 
    // greater than the value to be inserted

    while(j >= 0 && array[j] > currentValue){
      // Comment in to see any values greater than
      // value to be inserted shift up one index
      // console.log(`Pushing value ${array[j]} one index up to position ${j+1}`)

      // Replace index ahead of `j` with value 
      // stored at index `j`. In the first
      // iteration, `j+1 === i`, so basically
      // the value at `i` (which is the value to be
      // inserted) gets overwritten with its 
      // immediate predecessor, resulting in duplication
      // of the value at index `j` into index `j+1`. 
      // Since the value to be inserted is saved 
      // in `currentValue` variable, it is not lost.
      array[j+1] = array[j]

      // Decrement `j` to move backwards through
      // elements preceding index `i`
      j -= 1

      // Comment in to see array after each shift.
      // You will notice a duplication of values
      // at indices `j+1` and `j`
      // console.log("After one shift: ", array)
    }

    // Comment in to see `j` and the array after 
    // all shifting is complete.
    // Notice that one duplicated value remains
    // at `j+1`. This will be replaced with
    // the value to be inserted.
    // console.log("J after all shifts: ", j)
    // console.log("Array after all shifts: ",array)

    // Above iteration will have stopped at -1
    // if `j` reached the beginning of the array,
    // indicating that no preceding values were
    // less than the value to be inserted.
    // Otherwise, an element less than the value
    // to be inserted was found, so insert value
    // one ahead of index `j`
    array[j+1] = currentValue

    // Comment in to see array after sort iteration
    // console.log("After", array)
  }
}
*/