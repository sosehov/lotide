// This function takes an array and a callback function as input, keep collecting items from the array until the callback returns a truthy value
const takeUntil = function(array, callback) {
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;