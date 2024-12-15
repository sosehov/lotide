// This function takes in an array and a callback function and returns a modified version of the same array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

/* TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
//console.log(results1);
const results2 = map(words, (word) => word.length);
const results3 = map(words, (word) => word + "ik");
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, (word) => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ["groundik", "controlik", "toik", "majorik", "tomik"]); */