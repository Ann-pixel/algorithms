// jshint esversion:6
// merge sort takes 1 array and divides them into smaller and smaller arrays
// until they are arrays of 1. then sorts them back together.
// try this code again in the devtools. did not work on 8/3


// ====taking two sorted arrays and returning 1 sorted array=====
function merge(arr1, arr2) {
  let sorted = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    }
    if (arr1[i] > arr2[j]) {
      sorted.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length > arr1.length) {
    sorted.push(arr1[j]);
  }
  while (j < arr2.length) {
    sorted.push(arr2[j]);
  }
  return sorted;
}




function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);

}


mergeSort([60, 36, 35, 47, 59]);


















// colts solution===


// // Merge function from earlier
// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }
//
// // Recrusive Merge Sort
// function mergeSort(arr){
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, sright);
// }
//
// mergeSort([10,24,76,73]);
