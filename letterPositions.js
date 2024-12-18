// This function takes a string and returns an object with letters found and their indices
const letterPositions = function(sentence) {
  // Check if the input is a valid string
  if (typeof sentence !== 'string') {
    console.log('Input must be a string');
  }
  // Initialize an empty object to store letter positions
  let result = {};
  // Iterate through the string and find positions for each letter
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    // Skip spaces
    if (char === ' ') {
      continue;
    }
    // Add the position of the character to the result object
    if (result[char]) {
      result[char].push(i);
    } else {
      result[char] = [i];
    }
  }
  return result;
};

module.exports = letterPositions;