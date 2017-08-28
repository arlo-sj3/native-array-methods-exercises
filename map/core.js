function multiplyBy10 (array) {
 // your code here
 var multi = array.map(function (x) {
   return x*10
 })
 return multi
};

function shiftRight (array) {
 // your code here
 return array.map(function(element, i, originalArray){
   if(i===0){
     return originalArray[originalArray.length-1];
   }
   return originalArray[i-1]
 })

};

function onlyVowels (array) {
 // your code here
 return array.map(function(word){
   return word.replace(/[^aeiou]/gi,"");
 });
};

function doubleMatrix (array) {
 // your code here
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
