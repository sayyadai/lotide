const assertEqual = function(actual, expected) {
  const succeed = `👍👍👍 Assertion Passed: ${actual} === ${expected}`;
  const fail = `💩💩💩 Assertion Failed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(succeed);
  } else {
    console.log(fail);
  }


};

const tail = function(array) {
  console.log(array.slice(1,));
  return array.slice(1,);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const words2 = ["Basketball"];
const words3 = [];
tail(words);
tail(words2);
tail(words3);
assertEqual(words.length, 3);
