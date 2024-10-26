const assertEqual = function(actual, expected) {
  const succeed = `👍👍👍 Assertion Passed: ${actual} === ${expected}`;
  const fail = `💩💩💩 Assertion Failed: ${actual} === ${expected}`;
  if (actual === expected) {
    console.log(succeed);
  } else {
    console.log(fail);
  }


};

const head = function(array){
  return array[0]
}
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
assertEqual(head(["Hello"]), "Hello")
assertEqual(head([]), )