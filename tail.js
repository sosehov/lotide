const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  const tailArray = [];
  if (array.length === 0 || array.length === 1) {
    return tailArray;
  }
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  } return tailArray;
};

const words = ["Hello", "Lighthouse", "Labs"];
const result = tail(words); // should return ["Lighthouse", "Labs"]
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(words.length, 3);
const words1 = [];
const result1 = tail(words1);
assertEqual(result1.length, 0);
const words2 = ["soseh"];
const result2 = tail(words2);
assertEqual(result2.length, 0);
