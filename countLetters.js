// This function takes a string and returns an object with the letters found in that string and number of repeats
const countLetters = function(sentence) {
  let result = {};
  // Looping through each character in the sentence
  for (let char of sentence) { // Count alphabetic characters only
    if (/[a-zA-Z]/.test(char) !== " ") {
      char = char.toLowerCase(); // For case insensitive counting
      result[char] = (result[char] || 0) + 1;
    }
  }
  return result;
};

module.exports = countLetters;