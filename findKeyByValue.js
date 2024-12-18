// This function takes an object and a value and returns the first key which contains the given value
const findKeyByValue = function(obj, val) {
  // Check if the input is a valid object
  if (typeof obj !== 'object' || obj === null) {
    console.log('First argument must be an object');
  }
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
  // Return undefined explicitly when no match is found
  return undefined;
};

module.exports = findKeyByValue;