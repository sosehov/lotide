//This function takes an array and returns the middle-most element(s)
const middle = function(arr) {
  const lengthArr = arr.length;
  
  // Handle cases when array has fewer than 3 elements
  if (lengthArr < 3) {
    // No middle element for arrays with less than 3 elements
    return [];
    // For arrays with odd length return the single middle element
  } else if (lengthArr % 2 !== 0) {
    return [(arr[Math.floor((lengthArr / 2))])];
  }
  // For arrays with an even length return the two middle elements
  const mid = lengthArr / 2;
  return [arr[mid - 1], arr[mid]];
};

module.exports = middle;

