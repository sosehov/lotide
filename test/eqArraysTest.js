const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [1, 2] and [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2], [1, 2, 3]), false);
  });
  it("returns false for [2, 3] and [1, 2]", () => {
    assert.deepEqual(eqArrays([2, 3], [1, 2]), false);
  });
  it("returns false for [] and [1]", () => {
    assert.deepEqual(eqArrays([], [1]), false);
  });
  it("returns true for ['hi', 0, 1] and ['hi', 0, 1]", () => {
    assert.deepEqual(eqArrays(['hi', 0, 1], ['hi', 0, 1]), true);
  });
  it("returns true for [] and []", () => {
    assert.deepEqual(eqArrays([], []), true);
  });
});