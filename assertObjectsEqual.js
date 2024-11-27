//This is an assertion function that compares two objects and returns true or false
const eqObjects = function(object1, object2) {
  let objectKeys1 = Object.keys(object1);
  let objectKeys2 = Object.keys(object2);
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

//This is an assertion function that takes two objects, compares them using eqObjects() and prints out a Pass or Fail message
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)){
    console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST CODE
object1 = {a:1, b:2, c:3};
object2 = {a:1, b:2, c:3};
assertObjectsEqual(object1, object2);

object3 = {a:'1', b:'4'};
object4 = {a:'1', b:'7'};
assertObjectsEqual(object4, object3);
