// This function takes an array and a callback function as input, keep collecting items from the array until the callback returns a truthy value
const takeUntil = function(array, callback) {
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;

/* TEST CODE
const data1 = [1, 2, 3, 4, 5, 6, -1, 3, -2];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log("---");

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ["Don", "Bob", "Mike", "Sam"];
const results3 = takeUntil(data3, x => x.length > 3);
console.log(results3);

assertArraysEqual(results1, [1, 2, 3, 4, 5, 6]);
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);
assertArraysEqual(results3, ["Don", "Bob"]); */