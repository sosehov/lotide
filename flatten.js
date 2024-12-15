// This function takes an array and flattens the inner arrays
const flatten = function(arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArr = flatArr.concat(arr[i]);
      }
    else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};

module.exports = flatten;