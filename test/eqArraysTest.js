const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

// TEST CODE
assertEqual(eqArrays([1,2,3],[1,2,3]),true);
assertEqual(eqArrays([1,2,],[1,2,3]),false);
assertEqual(eqArrays([2,3,],[1,2]),false);
assertEqual(eqArrays([],[]),true);
assertEqual(eqArrays([1,2,3],[1,2]),false);
assertEqual(eqArrays([1],[]),false);
assertEqual(eqArrays(["hi",2,3],["hi",2,3]),true);