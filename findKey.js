// This function takes in an object and a callback, scans the object and returns the first key for which the callback returns a truthy value
const findKey = function(obj, callback) {
  let objectKeys = Object.keys(obj);
  for (const key of objectKeys) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;

/* TEST CODE
const results1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);
assertEqual(results1, 'noma');

const results2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 4 },
    elBulli: { stars: 3 },
    Ora: { stars: 7 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);
assertEqual(results2, undefined);

const results3 = findKey(
  {
    "Blue Hill": 3,
    Akaleri: 2,
    noma: 4,
    elBulli: 4,
    Ora: 7,
    Akelarre: 4,
  },
  (x) => x === 4
);
assertEqual(results3, 'noma');

const results4 = findKey({},(x) => x === 4);
assertEqual(results4, undefined); */