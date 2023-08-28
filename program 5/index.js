"use strict";
//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
var array = [0, 10, 20, 30, 40];
let a = array.map((celcius) => (celcius * 9) / 5 + 32);
console.log(a);
var array = [35];
let b = array.map((celcius) => (celcius * 9) / 5 + 32);
console.log(b);
