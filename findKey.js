const _ = require('./index');

//This function takes in an object and a callback, scans the object and returns the first key for which the callback returns a truthy value
const findKey = function(obj, callback) {
  let objectKeys = Object.keys(obj);
  for (const key of objectKeys) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;