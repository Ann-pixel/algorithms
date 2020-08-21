// jshint esversion:6
//counts unique values in a given array
function countUniqueValues(arr){
    let counter= 0; //init counter
    let i= 0;       //to traverse the array
    let arrSize =arr.length -1;
    while(i <= arrSize){
        if (arr !==[]) {    //edge case
            if(arr[i] !== arr[i+1]){
                counter ++; //if not same, incr count
                i++;
            }  else { //else check next
                i++;
            }
        }
    }
    return counter;
}



countUniqueValues([]);
