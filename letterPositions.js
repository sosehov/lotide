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

//This function takes a string and returns an object with letters found and their indices
const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  }
  return result;
};

//TEST CODE
assertArraysEqual(letterPositions("Hello").e, [1]);
assertArraysEqual(letterPositions("HelloYellow").e, [1,6]);
assertArraysEqual(letterPositions("HeLloYellow").l, [3,7,8]);

