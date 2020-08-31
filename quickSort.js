// jshint esversion:6
// one pivot, here at 0. gathers all less than starting at index 1(or depending on where you pick the pivot).
// then moves the pivot ahead.
// all of above done recursively until left with array of 1 -> left < right 
function quickSort(arr, left =0, right=arr.length-1){
    if(left<right){
    let pivotIdx= pivot(arr, left, right);
//     left
    quickSort(arr, left, pivotIdx-1);
//     right
    quickSort(arr, pivotIdx+1, right);
    }
    return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

quickSort([4,6,9,1,2,5,3]);


// ==== my solution for the pivot helper====
// === takes in only one arg. Colt's uses 3 args to accomodate for passing subarrays=======
function pivot(arr){
  let pivotPoint= arr[0];
  let count = 0;
  const swap =(arr, j, k) =>
  [arr[k], arr[j]]= [arr[j], arr[k]];


  for (let i=1; i<arr.length; i++){
      if (arr[i]<pivotPoint){
      count++;
      swap(arr, count, i);
//         console.log(arr);
      }
  }
     swap(arr, 0, count);

      return count;
}
pivot([4, 8, 2, 1, 5, 7, 6, 3]);
// ======================
