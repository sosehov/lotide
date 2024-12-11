const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

// TEST CODE
assertArraysEqual([23, 4, 0, 6], [23, 4, 6, 6]);
assertArraysEqual([23, 4, 0, 6], [23, 4, 0, 6]);