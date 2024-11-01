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
  const result = []
  for (let i = 0; i < actual.length; i++) {
    if(!itemsToRemove.includes(actual[i])) { 
      result.push(actual[i]);
    }
  } 
  return result
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"] ); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);