const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//This function takes two arrays and returns true or false based on perfect match
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
//test cases
assertEqual(eqArrays([1,2,3],[1,2,3]),true);
assertEqual(eqArrays([1,2,],[1,2,3]),false);
assertEqual(eqArrays([2,3,],[1,2]),false);
assertEqual(eqArrays([],[]),true);
assertEqual(eqArrays([1,2,3],[1,2]),false);
assertEqual(eqArrays([1],[]),false);
assertEqual(eqArrays(["hi",2,3],["hi",2,3]),true);