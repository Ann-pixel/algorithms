// jshint esversion:6

// ===commented code is for optimization for a nearly sorted array=====
// ==== if there were no swaps made, no need to iterate through the array again!====


function bubbleSort(arr){
  // let noSwaps;
        const swap = (arr, i1, i2) =>
        [arr[i1], arr[i2]]=[arr[i2], arr[i1]];
    for (let i =arr.length ; i> -1 ; i--){
// noSwaps= true;
    	for (let j=0; j< i-1; j++){
    		if(arr[j] > arr[j+1]) swap(arr, j, j+1);
        // noSwaps=false;
        // if (noSwaps) break;
    	}
    }
return arr;
}
bubbleSort([3, 2, 1, 4, 7, 4, 1, 2, 8, 4, 5, 3, 6]);
