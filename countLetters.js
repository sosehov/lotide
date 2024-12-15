// This function takes a string and returns an object with the letters found in that string and number of repeats
const countLetters = function(sentence) {
  let result = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      result[letter] = (result[letter] || 0) + 1;
    }
  }
  return result;
};

module.exports = countLetters;

/* TEST CODE
const result1 = countLetters("lightHouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["h"], 3);
const result2 = countLetters("LHL");
assertEqual(result2["L"], 2);
assertEqual(result2["H"], 1); */