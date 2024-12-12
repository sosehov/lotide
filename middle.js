const _ = require('./index');

//This function takes an array and returns the middle-most element(s)
const middle = function(arr) {
  let lengthArr = arr.length;
  if (lengthArr < 3) {
    return [];
  } else if (lengthArr % 2 !== 0) {
    return [(arr[Math.floor((lengthArr / 2))])];
  } else {
    return [arr[(lengthArr / 2) - 1], arr[lengthArr / 2]];
  }
};

module.exports = middle;

