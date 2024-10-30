const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return (false);
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i])
      return false;
  }
  
  return true;
};

const assertArraysEqual = function(actual, expected) {
  const succeed = `👍👍👍 Assertion Passed: ${actual} === ${expected}`;
  const fail = `💩💩💩 Assertion Failed: ${actual} !== ${expected}`;
  if (eqArrays(actual, expected)) {
    console.log(succeed);
  } else {
    console.log(fail);
  }
};

const without = function(actual, itemsToRemove) {
  const output = actual.filter(val => !itemsToRemove.includes(val));
  
  return output;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]