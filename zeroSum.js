// jshint esversion:6
//in a sorted array, returns the first set of numbers that add to 0.
function sumZero(arr){
    let delta = 0;
    let i= 0;
    let lo= arr.length -1;

    while (i<= lo){
        if(arr[i] +  arr[lo -delta] > 0){
            delta++;
        } else if(arr[i] +  arr[lo -delta] < 0) {
            i++;
        } else{
            let newArr = [arr[i], arr[lo-delta]];
            return newArr;
        }
    }
}

sumZero([ -5, -2, 2, 3, 4]); [-2, 2]
