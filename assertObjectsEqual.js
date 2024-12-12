const _ = require('./index');

//This is an assertion function that takes two objects, compares them using eqObjects() and prints out a Pass or Fail message
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (_.eqObjects(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST CODE
const object1 = {a:1, b:2, c:3};
const object2 = {a:1, b:2, c:3};
assertObjectsEqual(object1, object2);

const object3 = {a:'1', b:'4'};
const object4 = {a:'1', b:'7'};
assertObjectsEqual(object4, object3);

const object5 = {a: [1, 2, 3], b: 'hello'};
const object6 = {b: 'hello', a: [1, 2, 3]};
assertObjectsEqual(object5, object6);
