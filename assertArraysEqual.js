const eqArrays = require("./eqArrays");
// This assertion function prints a Pass message if the eqArrays returns true or Fail if eqArrays returns false
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`🟢 Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🔴 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};