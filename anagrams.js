// jshint esversion:6
//check if two strings are anagrams of one another
//using seperate loops as opposed to nested loops reduces the bigO to O(n).
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) { //unequal in length
    return false;
  }
  //objects for counting occurance of each letter
  let strCounter1 = {};
  let strCounter2 = {};
//----start counting---
  for (let ch1 of str1) {
    strCounter1[ch1] = (strCounter1[ch1] || 0) + 1;
  } //if obj strCounter1 does not have the current value of ch1 as key. init it and set at 0 then add1. if exists - just add 1.
  for (let ch2 of str2) {
    strCounter2[ch2] = (strCounter2[ch1] || 0) + 1;
  }  //if obj strCounter2 does not have the current value of ch1 as key. init it and set at 0 then add1. if exists - just add 1.
//--- counting done---

  for (let ch of str1) {
    if (!(ch in str2)) {
      return false;
    }         //if each char in str1 does not occur in str2 =false

    if (strCounter1[ch] !== strCounter2[ch]) {
      return false;
    } //if above condition checks out, count occurances in counters 1 and 2.
  }

  return true;
}
