//Write a program that uses filter to remove all negative numbers from an array of numbers
var array: number[] = [1, -2, 3, -4, 5];
let a= array.filter((value)=>{
return value>=0
})
console.log(a);
