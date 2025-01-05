// Creating objects

// 1. Object Literals

let obj = {
    name: 'John',
    age: 25,
}

console.log(obj);

// 2. Using new keyword

// let newObject = new Object();

// // newObject.name = 'John';
// // newObject.age = 25;

// console.log(newObject);

// 3. Using Object.create() method
// Runs two ways either create a object or create a new object with a prototype object

let newObj = Object.create(obj);

// newObj.name = 'Aman';
// newObj.age = 24;

console.log(newObj);