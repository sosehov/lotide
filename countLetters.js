const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// This function takes a string and returns an object with the letters found in that string and number of repeats
const countLetters = function(sentence) {
  let result = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      result[letter] = (result[letter] || 0) + 1;
    }
  }
  console.log(result);
  return result;
};

//TEST CODE
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);