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

//This function returns a subset of a given array by removing unwanted elements
const without = function(source, itemsToRemove) {
let refinedSource = [];
for (let i = 0; i < source.length; i++){
  let isFound = false;
  for (let j = 0; j < itemsToRemove.length; j++){
    if (source[i] === itemsToRemove[j]){
      isFound = true;
      break;
    }
  }
  if (!isFound){
  refinedSource .push(source[i]);
}
}
return refinedSource;
};

// TEST CODE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);