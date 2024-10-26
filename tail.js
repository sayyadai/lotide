const assertEqual = function(actual, expected) {
  const succeed = `👍👍👍 Assertion Passed: ${actual} === ${expected}`;
  const fail = `💩💩💩 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(succeed);
  } else {
    console.log(fail);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const words2 = ["Basketball"];
const words3 = [];

const result = tail(words);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(words.length, 3);

const result2 = tail(words2);
assertEqual(result2.length, 0);

const result3 = tail(words3);
assertEqual(result3.length, 0);

