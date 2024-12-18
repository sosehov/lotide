// This function returns a subset of a given array by removing unwanted elements
const without = function(source, itemsToRemove) {
  let refinedSource = [];
  for (let i = 0; i < source.length; i++) {
    let isFound = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      refinedSource .push(source[i]);
    }
  }
  return refinedSource;
};

module.exports = without;