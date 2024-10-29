const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    console.log(false);
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

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // True
// assertArraysEqual([3, 2, 1], [1, 2, 3]); // False
// assertArraysEqual([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"])
