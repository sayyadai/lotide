const assertEqual = function(actual, expected) {
  const succeed = `👍👍👍 Assertion Passed: ${actual} === ${expected}`;
  const fail = `💩💩💩 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(succeed);
  } else {
    console.log(fail);
  }
};

const eqArrays = function(actual, expected){
  if (actual.length !== expected.length){
    return false
  }
 for (let i = 0; i < actual.length; i++){
  const result = assertEqual
   } 
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)