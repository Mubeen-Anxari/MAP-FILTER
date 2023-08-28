//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

var array: number[] = [3, 6, 9, 12, 15, 18];
let a = array.filter((num) => num % 2 != 0)
.map((oddnumber) => oddnumber * 2);
console.log(a);
