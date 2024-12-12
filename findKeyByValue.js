const _ = require('./index');

//This function takes an object and a value and returns the first key which contains the given value
const findKeyByValue = function(obj, val) {
  let objectKeys = Object.keys(obj);
  for (let el of objectKeys) {
    if (obj[el] === val) {
      return el;
    }
  }
};

module.exports = findKeyByValue;