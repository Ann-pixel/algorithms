// jshint esversion:6
//check if there are duplicates in a given i/p of strings.
function areThereDuplicates(){
    let arr= [];      //array to call individual items.
    let arrCount ={};   //counter object to keep track of occurences of elements.
    for (let i=0; i< arguments.length; i++){
        arr.push(arguments[i]);
    // if counter for this key exists. add one to it. if not. init it at 0 then add 1.
        arrCount[arguments[i]] = (arrCount[arguments[i]] || 0) +1;
        if (arrCount[arguments[i]] > 1){ //if multiple counts have been registered; return true
         return true;
        }
    }
    return false;
}


// areThereDuplicates("a", "b", "c", "a");
