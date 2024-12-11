//This is a custom assert function which takes in two values, compares them and prints a message
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

//This is an assertion function that compares two objects and returns true or false
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

// TEST CODE
const shirtObject = {color: "red", size: "medium"};
const anotherShirtObject = {size: "medium", color: "red"};
assertEqual(eqObjects(shirtObject, anotherShirtObject),true);

const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};

assertEqual(eqObjects(shirtObject, longSleeveShirtObject),false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);