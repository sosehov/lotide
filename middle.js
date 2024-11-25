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
//This function takes an array and returns the middle-most element(s)
const middle = function(arr) {
  let lengthArr = arr.length;
  if (lengthArr < 3) {
    return [];
  } else if (lengthArr % 2 !== 0) {
    return [(arr[Math.floor((lengthArr / 2))])];
  } else {
    return [arr[(lengthArr / 2) - 1], arr[lengthArr / 2]];
  }
};

//TEST CODE
assertArraysEqual(middle([]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
assertArraysEqual(middle(["John", "Marrie", "Finn", "Kevin", "Jessica"]),["Finn"]);
