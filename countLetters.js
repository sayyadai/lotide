const assertEqual = function(actual, expected) {
  const succeed = `👍👍👍 Assertion Passed: ${actual} === ${expected}`;
  const fail = `💩💩💩 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(succeed);
  } else {
    console.log(fail);
  }
};

const countLetters = function(sentence) {
  let output = {};
  
  for (let letter of sentence) {
    output[letter] = (output[letter] || 0)  + 1;
  }
  return output;
};
const result1 = countLetters("LHL");

assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);

