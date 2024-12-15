const eqObjects = require("../eqObjects");
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true for {color: 'red', size: 'medium'} and {color: 'red', size: 'medium'}", () => {
    assert.deepEqual(eqObjects({color: 'red', size: 'medium'}, {color: 'red', size: 'medium'}), true);
  });
  it("returns false for {color: 'red', size: 'medium'} and {size: 'medium', color: 'red', sleeveLength: 'long'}", () => {
    assert.deepEqual(eqObjects({color: 'red', size: 'medium'}, {size: 'medium', color: 'red', sleeveLength: 'long'}), false);
  });
  it("returns false for {colors: ['red', 'blue'], size: 'medium'} and {size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long'}", () => {
    assert.deepEqual(eqObjects({ colors: ['red', 'blue'], size: 'medium' }, {
    size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long'}), false);
  });
});