const eqArrays = require("./eqArrays");
// This is an assertion function that compares two objects and returns true or false
const eqObjects = function(object1, object2) {
  // Check if both inputs are objects
  if (typeof object1 !== 'object' || object1 === null || typeof object2 !== 'object' || object2 === null) {
    return false;
  }
  const objectKeys1 = Object.keys(object1);
  const objectKeys2 = Object.keys(object2);

  // If the number of keys differ the objects are not equal
  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }
  // Loop through each key of object1 to compare
  for (let el of objectKeys1) {
    // If both values are arrays compare then using eqArrays
    if (Array.isArray(object1[el]) && Array.isArray(object2[el])) {
      if (!eqArrays(object1[el],object2[el])) {
        return false;
      }
    } else if (object1[el] !== object2[el]) {
      return false;
    }
  }
  // If all checks pass, the objects are equal
  return true;
};

module.exports = eqObjects;