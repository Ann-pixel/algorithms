// jshint esversion:6
//takes an array of nums and a single num for args. returns true if any two nums in the array average to the second arg.
//multiple pointer solution. works for a sorted array
function averagePair(arr, n){
 let start=0;       //starting point
 let end= arr.length-1;   //endpoint
 while(start<end){
     let avg = (arr[start]+arr[end])/2; //temporary avg storage.
     if (avg===n) return true;
      else if (avg<n) start++;  //to incr avg, incr start. ie. go further in the array. coz its a sorted array.
     else end--;    //if avg smaller than n then reduce end
 }
 return false;

}

averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); //true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 13); //false
