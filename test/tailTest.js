const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [2,3,4,5,6] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(tail([1,2,3,4,5,6]), [2,3,4,5,6]);
  });
});