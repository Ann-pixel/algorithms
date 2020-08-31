// jshint esversion:6
//==== find min- place it at the end========



function selectionSort(arr){
    let min;
    let yesSwap;



    const swapVal =(arr, i1, i2) =>
    [arr[i1], arr[i2]]= [arr[i2], arr[i1]];



for (i=0; i<arr.length; i++){
	min =i;

	for(j=i+1; j<= arr.length; j++){
	yesSwap=false;
    if(arr[min] > arr[j]){
    min =j;
    yesSwap = true;
       if(yesSwap)  swapVal(arr, min, i);
    }

	}
}
return arr;
}


selectionSort([5, 4, 3, 2, 1]);
