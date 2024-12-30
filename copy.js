// Problem statement
// Unlike arrays objects don't directly copy their values
// when pointed to a new variable. Beacuse if you change
// anything in the new object the previous value will also
// gets changed.

// Example of an array

// let str = 'Hello';

// let str2 = str.toUpperCase();

// console.log(str, str2);

// let obj1 = {
//     name:"Aman",
//     roll: 12,
// };

// let obj2 = obj1;
// obj2.name = "Amit";

// console.log(obj1, obj2);

// Solution - shallow copy and deep copy

// Shallow copy  is a first level copy of an object

// let obj1 = {
//     name:"Aman",
//     roll: 12,
// };

// // let obj2 = Object.assign({},obj1);
// let obj2 = {...obj1};
// obj2.name = "Amit";

// console.log(obj1, obj2);

// Deep copy - for nested objects

// let obj1 = {
//     name:"Aman",
//     roll: 12,
//     address:{
//         city:"bokaro"
//     }
// };

// let obj2 = JSON.parse(JSON.stringify(obj1))
// obj2.name = "Amit";
// obj2.address.city = "Ranchi";
// console.log(obj1, obj2);


// Shallow copy

let obj1 = {
    name: "Aman",
    roll: 12,
    address:{
        city:"bokaro"
    }
};

// let obj2 = Object.assign({}, obj1);
let obj2 = {...obj1}
obj2.name = "Amit";

console.log(obj1, obj2);

// Deep cpoy

let obj3 = JSON.parse(JSON.stringify(obj1));

obj3.name = "Kumar";
obj3.address.city = "Ranchi"

console.log(obj3, obj1);