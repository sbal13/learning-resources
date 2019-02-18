function mergeSort(array){
  // Start recursion using first and last indices
  mergeSortUtil(array, 0, array.length-1)
}

function mergeSortUtil(array, left, right){

  // Only continue recurring while the beginning index
  // is less than right index (BASE CASE)
  if (left < right){

    // Sum left and right indices and divide by 2
    // to get the midddle index. Round down
    const middle = Math.floor((left+right)/2)

    // Recurse left using the left index (beginning of 
    // left half) and the middle index (end of left 
    // half)
    mergeSortUtil(array, left, middle)
    // Recurse right using the index to the right of the
    // middle index (beginning of right half) and the 
    // right index (end of right half)
    mergeSortUtil(array, middle+1, right)

    // By the time this step is reached, left and right 
    // sub-arrays of current sub-array should each have 
    // already been merged(sorted). With the left and
    // right sides already sorted, they can now
    // be merged and sorted.

    // Call merge with the current left, middle, and
    // right indices
    merge(array, left, middle, right)

  }
  
}

function merge(array, left, middle, right){

  // Get sizes of left and right sides
  let leftSize = middle - left + 1
  let rightSize = right - middle

  // Instantiate temporary arrays representing left 
  // and right sub-arrays
  const leftArray = []
  const rightArray = []

  // Populate values of left sub-array
  for (let i = 0; i < leftSize; i++){
    // If `left` represents the starting index for left
    // sub-array, start iteration from there
    leftArray.push(array[left + i])
  }

  // Populate values of right sub-array
  for (let i = 0; i < rightSize; i++){
    // Since `middle` is the last index of the left 
    // sub-array, add one to make it the first index
    // of the right-sub-array and start iteration from
    // there
    rightArray.push(array[middle + 1 + i])
  }


  // Initialize indices for left and right sub-arrays
  let i = j = 0; 

  // `k` is the index used for traversing the original
  // array and should start at the left-most index
  let k = left; 

  // Continue looping as long as you have not reached
  // either the end of the left sub-array or right
  // sub-array
  while (i < leftSize && j < rightSize) {
    // If element in left array is less than or equal to
    // the element in the right, add the left element 
    // to the original array and iterate left index. 
    // Otherwise, add the right element and iterate
    // the right index.
    if (leftArray[i] <= rightArray[j]) { 
        array[k] = leftArray[i]; 
        i++; 
    } 
    else { 
        array[k] = rightArray[j]; 
        j++; 
    }
    k++; 
  } 

  // Example of above code
  // INITIAL: 
  // L = [1,18,29], R = [19,34,62], i = j = k = 0
  
  // 1. leftArray[0] = 1, rightArray[0] = 19
  //    1 < 19, so grab value from left sub-array
  //    and store at index 0. Increment `i` to 1 and
  //    `k` to 1, while `j` stays at 0
  // 2. leftArray[1] = 18, rightArray[0] = 19
  //    18 < 19, so grab value from left sub-array
  //    and store at index 1. Increment `i` to 2 and
  //    `k` to 2, while `j` stays at 0
  // 3. leftArray[2] = 29, rightArray[0] = 19
  //    29 > 19, so grab value from right sub-array
  //    and store at index 2. Increment `j` to 1 and
  //    `k` to 3, while `i` stays at 2
  // 4. leftArray[2] = 29, rightArray[1] = 34
  //    29 < 34, so grab value from left sub-array
  //    and store at index 3. Increment `i` to 3 and
  //    `k` to 4, while `j` stays at 1
  // 5. While loop exits because `i` is 3 and is equal
  //    to the size of the array. `j` is still 1 and
  //    `k` is still 4, which means that there are
  //    still unassigned values in the right sub-array
  // Example continued below....

  // Using the last `i` value from previous iteration,
  // check if there are any values from left sub-array
  // that are still unassigned and iteratively add
  // them to original array. This happens in the
  // case that all the values of the right sub-array
  // were less than the element in the left sub-array
  // at index `i`
  while (i < leftSize) { 
      array[k] = leftArray[i]; 
      i++; 
      k++; 
  } 

  // Using the last `j` value from previous iteration,
  // check if there are any values from right sub-array
  // that are still unassigned and iteratively add
  // them to original array. This happens in the
  // case that all the values of the left sub-array
  // were less than the element in the right sub-array
  // at index `j`
  while (j < rightSize) { 
      array[k] = rightArray[j]; 
      j++; 
      k++; 
  } 

  // ...continuing above example:
  // 6. `i`(3) is equal to `leftSize`(3) so the first 
  //    iteration does not occur. `j`(1) is still 
  //    less than `rightSize`(3), so second iteration
  //    is triggered
  // 7. Assign value in original array at index `k`(4)
  //    to element in `rightArray` at index `j`(1).
  //    Increment `k` to 5 and `j` to 2
  // 8. Assign value in original array at index `k`(5)
  //    to element in `rightArray` at index `j`(2).
  //    Increment `k` to 5 and `j` to 3
  // 9. `j`(3) is now equal to `rightSize`(3), so stop
  //    iteration. Merging is now over.


}