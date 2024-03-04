// EXAMPLE 1 - Count Elements in an Array that match a Condition using JS

const arr = [1, 11, 2, 12, 3, 13];

const count = arr.filter(element => {
  if (element > 10) {
    return true;
  }

  return false;
}).length;

console.log(count); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 2 - Count Elements in an Array that match a Condition using `reduce()`

// const arr = [1, 11, 2, 12, 3, 13];

// const count = arr.reduce((accumulator, element) => {
//   if (element > 10) {
//     return accumulator + 1;
//   }

//   return accumulator;
// }, 0);

// console.log(count); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 3 - Count Elements in an Array that match a Condition using `forEach()`

// const arr = [1, 11, 2, 12, 3, 13];

// let count = 0;

// arr.forEach(element => {
//   if (element > 10) {
//     count += 1;
//   }
// });

// console.log(count); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 4 - Count Elements in an Array that match a Condition using `for...of`

// const arr = [1, 11, 2, 12, 3, 13];

// let count = 0;

// for (const element of arr) {
//   if (element > 10) {
//     count += 1;
//   }
// }

// console.log(count); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 5 - Count Elements in an Array that match a Condition using a `for` loop

// const arr = [1, 11, 2, 12, 3, 13];

// let count = 0;

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] > 10) {
//     count += 1;
//   }
// }

// console.log(count); // 👉️ 3
