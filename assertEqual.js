const assertEqual = function(actual, expected) {
  const succeed = `👍👍👍 Assertion Passed: ${actual} === ${expected}`;
  const fail = `💩💩💩 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(succeed);
  } else {
    console.log(fail);
  }


};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(2, 4);
assertEqual("Basketball", "Basketball");
assertEqual(1, 1);