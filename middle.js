const assertArraysEqual = function(actual, expected) {
  const succeed = `👍👍👍 Assertion Passed: ${actual} === ${expected}`;
  const fail = `💩💩💩 Assertion Failed: ${actual} !== ${expected}`;
  if (eqArrays(actual, expected)) {
    console.log(succeed);
  } else {
    console.log(fail);
  }
};

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


const middle = function(arr) {
  const output = [];
  // for array with 2 or less elements
  if (arr.length <= 2) {
    return output;
  }

  // for odd number array with length more than 2
  if (arr.length % 2 !== 0) {
    const middleIndex = Math.floor(arr.length / 2);
    output.push(arr[middleIndex]);
  } else {
    // for even number array with length more than 2
    const middleIndex = arr.length / 2;
    output.push(arr[middleIndex - 1], arr[middleIndex]);
  }
  return output;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4],), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);