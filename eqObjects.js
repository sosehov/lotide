const eqArrays = require("./eqArrays");
// This is an assertion function that compares two objects and returns true or false
const eqObjects = function(object1, object2) {
  const objectKeys1 = Object.keys(object1);
  const objectKeys2 = Object.keys(object2);
  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }
  for (let el of objectKeys1) {
    if (Array.isArray(object1[el]) && Array.isArray(object2[el])) {
      if (!eqArrays(object1[el],object2[el])) {
        return false;
      }
    } else {
      if (object1[el] !== object2[el]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;