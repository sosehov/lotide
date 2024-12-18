// This function takes an array and an object and returns an object with counts for a specific subset of the items
const countOnly = function(allItems, itemsToCount) {
  // Initialize an empty object to store counts
  let results = {};
  // Check for empty or invalid inputs
  if (!Array.isArray(allItems) || typeof itemsToCount !== 'object') {
    console.log('Invalid input');
  }
  for (let item of allItems) {
    // Ensure the item is in the itemsToCount object and the item is not undefined or null
    if (itemsToCount[item] && item !== undefined && item !== null) {
      // Increment count or initialize it with 1 if not yet in the results
      results[item] = (results[item] || 0) + 1;
    }
  }
  return results;
};

module.exports = countOnly;