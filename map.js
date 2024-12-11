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
//This function compares two arrays and prints a Pass or Fail message
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`🟢 Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🔴 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

//This function takes in an array and a callback function and returns a modified version of the same array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
//console.log(results1);
const results2 = map(words, (word) => word.length);
const results3 = map(words, (word) => word + "ik");
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, (word) => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ["groundik", "controlik", "toik", "majorik", "tomik"]);