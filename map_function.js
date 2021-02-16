/* Continuing Callback Exercise pt. 1:
Please submit the indexOf and map function that you have created in this assignment as a file or in the comment section for weekend homework.
Submission must include:
1. Code
2. Comments on how the code works. */

const indexOf = function (array, target) {
  let result = -1;

  for (let i = 0; i < array.length; i++) {
      if (array[i] === target) { // If statement checking if array at index i is equal to target
        return result = i // results becomes i
      }
    }
  return result //returns result
};



const map = function (collection, iterator) {
  results = []; // create empty array
  for (let i = 0; i < collection.length; i++) {
    results.push(iterator(collection[i])); // push interator value at collection[i] into array
  }
  return results; // return result
};
