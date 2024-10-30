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


const middle = function (arr) {
  const theMiddle = Math.floor(arr.length / 2);
  const value = arr[theMiddle];
}

(middle([1]));