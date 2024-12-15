// This function takes a string and returns an object with letters found and their indices
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

module.exports = letterPositions;

/* TEST CODE
assertArraysEqual(letterPositions("Hello").e, [1]);
assertArraysEqual(letterPositions("HelloYellow").e, [1,6]);
assertArraysEqual(letterPositions("HeLloYellow").l, [3,7,8]); */