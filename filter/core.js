function onlyEven(array) {
  var evens = array.filter(function(num) {
    return num % 2 === 0;
  });
  return evens
};

function onlyOneWord(array) {
  // your code here
  console.log(array)
  var ones = array.filter(function(phrase){
    return !phrase.includes(' ')
  })
  return ones
};

function positiveRowsOnly(array) {
  // your code here
return array.filter(function(arr){
  return arr.every(function(num){
    return num >= 0
  })
})
};

function allSameVowels(array) {
  // your code here
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
