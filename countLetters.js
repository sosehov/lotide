// This function takes a string and returns an object with the letters found in that string and number of repeats
const countLetters = function(sentence) {
  let result = {};
  // Looping through each character in the sentence
  for (const letter of sentence) {
    if (letter !== " ") {
      result[letter] = (result[letter] || 0) + 1;
    }
  }
  return result;
};

module.exports = countLetters;