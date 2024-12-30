// Premitive  - String, Number, Boolean, Null, undefined, Symbol
// Non Primitive - Object, Array, Function

//  What is the different premitive data types are immutable that mean
// it can't be changed directly and non premitive data types are mutable
// which can be changed directly with a fucntion or some thing 

// Example of premitive data types

// let str = "hello";

//  str.toUpperCase();

 
//  let str2 = str.toUpperCase();
// console.log(str)
// console.log(str2)

// Non premitive data types - Object, Array, Function

// let arr = [1,2,3,4,5];
// arr.push(3);

// let obj1 = {
//     name:"Aman",
//     roll: 12,
// }

// Object.assign(obj1, {class: 12})
// console.log(arr)
// console.log(obj1)


let arr = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];

let arr3 = 12;
let arr4 = '12';

let str = 'Hello';
let str2 = 'hello';
console.log(str == str2)
console.log(arr3 === arr4)

console.log(arr == arr2)