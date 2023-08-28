"use strict";
//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = array
    .filter((array) => array % 2 == 0)
    .map((array => array * array));
console.log(a);
