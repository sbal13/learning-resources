// Bubble Sort: Compare 2 adjacent elements. If they
// are in the wrong order, swap. Continue doing so
// until largest elements are sorted at end of array

// Time Complexity: 
//  O(n^2) because of nested loops
//  Best case O(n) when already sorted

// Space Complexity:
//  O(1) because operation done in place

function iterativeBubbleSort(array){


  // Iterate over array until just before last element
  for(let i=0; i < array.length - 1; i++){

    // Iterate over sub-arrays of decreasing size.
    // The largest elements bubble upwards, 
    // so it becomes unnecessary to sort the end.
    // In other words, the end of the array contains
    // the sorted portion of the array
    for(let j=0; j < array.length-i-1; j++){
      // Comment in to see array as it changes
      // console.log(j, array)

      // Checking if element is smaller than next
      if (array[j] > array[j+1]){

        // Store value in temporary variable
        const temp = array[j+1]

        // Comment in to see swaps
        // console.log("SWAP ", array[j], "<->", temp)

        //Swap adjacent values
        array[j+1] = array[j]
        array[j] = temp
      }
    }
  }
}


function recursiveBubbleSort(array){
  recursiveBubbleSortUtil(array, array.length)
}

function recursiveBubbleSortUtil(array, n){

  // `n` represents length of unsorted part of array

  // Base case - when the length of remainder of
  // array to sort is 1, sorting is complete
  if (n === 1) 
    return;

  // Iterate over sub-arrays of decreasing size.
  // The largest elements bubble upwards, 
  // so it becomes unnecessary to sort the end.
  // In other words, the end of the array contains
  // the sorted portion of the array
  for(let i=0; i < n-1; i++){
    // Comment in to see array as it changes
    // console.log(i, array)

    // Checking if element is smaller than next
    if (array[i] > array[i+1]){

      // Store value in temporary variable
      const temp = array[i+1]

      // Comment in to see swaps
      // console.log("SWAP ", array[i], "<->", temp)

      //Swap adjacent values
      array[i+1] = array[i]
      array[i] = temp
    }
  }

  // Recurse using smaller n value because only
  // values 0 -> n-1 are unsorted at each call
  recursiveBubbleSortUtil(array, n-1)
}