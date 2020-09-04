// jshint esversion:6
function binarySearch(arr, val){
	let left=0;
	let right=arr.length-1;
    let i;

    while(left <= right){
         i = Math.floor((left+right)/2);
    	console.log("i = ", i);
    	if (arr[i] === val) return i;
    	if (arr[i] > val) right = i-1;
    	if (arr[i] < val) left =i+1;
    	console.log("left is ",left, "right is ",right);
    }

    return -1;
}



binarySearch ([1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 59, 61, 42, 90, 150, 201, 401], 401);
