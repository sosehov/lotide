// This function returns the tail of an array
const tail = function(array) {
  // Ensure the input is an array
  if (!Array.isArray(array)) {
    console.log('Input must be an array');
  }
  // Return en empty array if the input array is empty
  if (array.length === 0) {
    return [];
  }
  // Return the tail
  return array.slice(1);
};

module.exports = tail;