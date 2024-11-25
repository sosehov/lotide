//This function compares two arrays and return true or false
const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
//This function prints a Pass message if the eqArrays return true or Fail message if eqArrays returns false
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`🟢 Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🔴 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};
//This function takes an array and flattens the inner arrays
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

console.log(flatten([1, 2, [3, 4], 5, [6]]));

// Example assertions:
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1], 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, 3, 4, 5, 6]]), [1, 2, 3, 4, 5, 6]);