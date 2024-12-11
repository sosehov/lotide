const eqArrays = require("./eqArrays");

//This function prints a Pass message if the eqArrays return true or Fail message if eqArrays returns false
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`🟢 Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🔴 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

module.exports = assertArraysEqual;