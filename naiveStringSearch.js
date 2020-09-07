// jshint esversion:6
function stringSearch(str, s){
	let count=0;
    for (let i= 0; i<str.length; i++)
    		for (let j=0; j<s.length; j++){
                if(str[i+j]!==s[j]) break;

               if(j===s.length-1) count++;
    		}
    		return count;
}




stringSearch("lorie loled", "lo");
