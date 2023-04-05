'use strict';
// Simple Fun #192: Three Details
// https://www.codewars.com/kata/58c212c6f130b7c4660000a5/train/javascript

// !!!! Warning! On^2 (likely)
// function threeDetails(num) {
//     let arr = [num];
//     while (!arr.some(n => n <= 3)) {
//       arr = arr.flatMap(n => [Math.ceil(n/2), Math.floor(n/2)]);
//     }
//     return arr.reduce((acc, curr) => curr === 3 ? ++acc : acc, 0);
// }
  

