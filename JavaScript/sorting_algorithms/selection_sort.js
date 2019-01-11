// Selection Sort: Iterate over array, and for each
// element, swap with smallest element found within 
// elements with higher indices than current element

// Time Complexity: 
//  O(n^2) because of nested loops
// Space Complexity: 
//  O(1) because operation done in place 

function selectionSort(array){

  // Iterate over array until just before last element
  for(let i=0; i < array.length - 1; i++){

    // Assume first element of sub-array is smallest
    let min_idx = i;

    // Iterate over sub-array beginning at `i` and 
    // ending at end of array
    for (let j = i+1; j < array.length; j++) {

      // If element of sub-array is smaller than
      // element stored at `min_idx`, replace
      // `min_idx` with `j`
      if(array[j] < array[min_idx])
        min_idx = j

    }
    // Store value of element located at final `min_idx`
    let temp = array[min_idx]; 

    // Comment in to see array before swap
    // console.log(i, array)

    // Comment in to see swapm values
    // console.log("SWAP ", array[i], "<->", temp)


    // Swap values at `i` and at `min_idx`, putting
    // smallest value of sub_array at `i`
    array[min_idx] = array[i]; 
    array[i] = temp; 

    // Comment in to see array after swap
    // console.log(i, array)
  }

}