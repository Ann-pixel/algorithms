// jshint esversion:6
let newStr= "";
function reverse(str){
    if (str.length === 0) return newStr;
    newStr= newStr.concat(str[str.length -1]);
    reverse(str.slice(0, -1));
    return newStr;
    }


reverse("satya");



// better solution======
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
