const _ = require('./index');

//This function takes an array and an object and returns an object with counts for a specific subset of the items
const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (!results[item]) {
        results[item] = 1;
      } else {
        results[item]++;
      }
    }
  }
  return results;
};

module.exports = countOnly;