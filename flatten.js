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

const flatten = function (inputArray) {
  let output = [];
  for(let i = 0; i < inputArray.length; i++){
    if(Array.isArray(inputArray[i])) {
      output = output.concat(flatten(inputArray[i]));
    } else {
        output.push(inputArray[i]);
    }
  }
  return output;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6] );
assertArraysEqual(flatten([-5, -2, -4, [2,4], 7]), [-5, -2, -4, 2, 4, 7] )