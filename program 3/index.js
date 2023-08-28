"use strict";
//Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
var array = ["apple", "banana", "cherry", "date", "grape"];
let a = array.filter(array => array.length > 5);
console.log(a);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSquared = numbers
    .filter(number => number % 2 == 0); // Filter out even numbers
//   .map(evenNumber => evenNumber * evenNumber); // Square the even numbers
console.log(evenSquared); // Output: [4, 16, 36, 64, 100]
