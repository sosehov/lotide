// This function returns the tail of an array
const tail = function(array) {
  if (array.length === 0) { 
    return [];
  }
  return array.slice(1); // this will return an empty array if there's only one element in the array
};

module.exports = tail;