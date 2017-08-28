function sum(array) {
    return array.reduce(function(acc, val) {
        return (acc + val);
    });
};

function productAll(array) {
    return array.reduce(function(acc, val){
      return (acc * val);
    });
};

function objectify(array) {
    return array.reduce(function(acc, val){
      acc[val[0]]=val[1];
      return acc;
    },{});
};

function luckyNumbers(array) {
    // your code here
};

module.exports = {
    sum: sum,
    productAll: productAll,
    objectify: objectify,
    luckyNumbers: luckyNumbers
};
