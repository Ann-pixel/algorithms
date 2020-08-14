// jshint esversion:6
//check if one arr is square of the other.
function isSquare(arr1, arr2){
    if(arr1.length !== arr2.length){ // if length !==,  not same
        return false;
    }
    //count freq if each element in arr1, arr2. compare the counters to check if they are the same.
    let frequencyCounter1 = {}; //object to count frequencies of each element.
    let frequencyCounter2 = {};
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; //if obj[key] exists, add 1 to its prev value. if does not exist, create it. set it to 0 and add 1.
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    // console.log(frequencyCounter1);
    // console.log(frequencyCounter2);
    for(let key in frequencyCounter1){  //object traversing for..in
      //use eliminatation.== check for all false-y. if none of them apply- return truthy.
        if(!(key ** 2 in frequencyCounter2)){   //all (counter1.key)^2 must be present in  counter2. if not, arr2 is not the square.
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){  //if all key1^2 exist in counter2. check their values(freq- number of times they occur)
            return false;
        }
    }
    return true;
}

// isSquare([1,2,3,2,5], [9,1,4,4,25]); true
// isSquare([1,2,3,2,5], [9,1,4,4,11]); false
