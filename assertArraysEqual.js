const _ = require('./index');

//This assertion function prints a Pass message if the eqArrays returns true or Fail if eqArrays returns false
const assertArraysEqual = function(array1, array2) {
  if (_.eqArrays(array1,array2)) {
    console.log(`🟢 Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🔴 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// TEST CODE
assertArraysEqual([23, 4, 0, 6], [23, 4, 6, 6]);
assertArraysEqual([23, 4, 0, 6], [23, 4, 0, 6]);