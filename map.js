// This function takes in an array and a callback function and returns a modified version of the same array
const map = function(array, callback) {
  // Ensure array is an actual array and callback is a function type
  if (!Array.isArray(array)) {
    console.log('first argument must be an array');
  }
  if (typeof callback !== 'function') {
    console.log('Second argument must be a function');
  }

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;