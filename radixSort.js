// jshint esversion:6



// === my solution for the getDigit function ===
// function getDigit(num, p){
//   let n;
//   let numStr= num.toString();

//   let idx= numStr.length-1-p;
//   let val=numStr[idx];
//   return parseInt(val, 10);
// }
// =====


function getDigit(num, p){
  return Math.floor(Math.abs(num)/ Math.pow(10, p)) %10;
}
function digitCount(num){
  if (num===0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) +1;
}
function mostDigits(arr){
  let maxDigits=0;
  for (let i=0; i <arr.length; i++){
    maxDigits= Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

function radixSort(nums){
  let maxDigitCount =mostDigits(nums);
  for (let k=0; k<maxDigitCount; k++){
    let digitBucket = Array.from({length:10}, ()=>[]);
    for (let i=0; i<nums.length; i++){
      let digit=getDigit(nums[i], k);
      digitBucket[digit].push(nums[i]);
      console.log(digitBucket);
    }
    nums= [].concat(...digitBucket);
  }
  return nums;
}

radixSort([1,2, 333, 4232, 54543, 76, 84, 243]);
