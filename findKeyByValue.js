// This function takes an object and a value and returns the first key which contains the given value
const findKeyByValue = function(obj, val) {
  let objectKeys = Object.keys(obj);
  for (let el of objectKeys) {
    if (obj[el] === val) {
      return el;
    }
  }
};

module.exports = findKeyByValue;

/* TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); */