// jshint esversion:6
function maxSubArray(arr, n){
    if(arr === []) return 0;
    if(n> arr.length) return null;
    let oldSum=0;
    let i=0;
    let newSum=0;

    while(i<= arr.length-n){

        for(let j=0; j<n; j++){

            newSum= newSum+ arr[i+j];

            }

         if(oldSum < newSum){

            oldSum = newSum;
            newSum=0;

         } else {
            newSum=0;
            i++;
            }
    }
    return oldSum;
}

maxSubArray([], 0);



// better big O. colt's


function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
