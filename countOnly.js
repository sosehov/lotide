// This function takes an array and an object and returns an object with counts for a specific subset of the items
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

/* TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined); */