// Make all the elements uppercase

// const words = ['apple', 'banana', 'cherry'];

// const result = words.map(word => word.toUpperCase());
// console.log(result)


// Returnt the square of the digits

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map(num => num * num)

// console.log(result)


//  Extract the names from the object

// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 }
// ];

// const result = people.map(names => names.name);
// console.log(result)


// Convert the dates in the local

// const dates = [new Date('2023-11-20'), new Date('2023-11-25'), new Date('2023-11-18')];

// const result = dates.map(date => date.toLocaleDateString('US-en'));
// console.log(result)



// retunrn square of even numbers

// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers.filter(num => num % 2 === 0).map(num => num * num);
// console.log(result)



// reduce the nested array in one

// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// ooutput - [1,2,3,4,5,6]

// const result = nestedArray.flatMap(arr => arr);

// console.log(result)


//  return the name of the product who has gotten the discount 

// const products = [
//     { name: 'Product A', price: 10, isDiscounted: true },
//     { name: 'Product B', price: 20, isDiscounted: false },
//     { name: 'Product C', price: 15, isDiscounted: true }
// ];

// const result = products.map(product => ({
//     name: product.name,
//     price: product.isDiscounted ? product.price * 0.9 : product.price
// }));

// console.log(result)



// square of odd numbers

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.filter(num => num % 2 !== 0).map(num => num * num);
// console.log(result)


// Map with index suppose if the array is ['aman', 'rahul'] - output 1 aman, 1 raul

// const words = ['apple', 'banana', 'cherry'];

// const result = words.map((word,index) => `${index}. ${word}`)
// console.log(result)


// Join the names ex first name and last name

// const people = [
//     { firstName: 'Alice', lastName: 'Johnson' },
//     { firstName: 'Bob', lastName: 'Smith' },
//     { firstName: 'Charlie', lastName: 'Brown' }
// ];


// const result = people.map(({firstName, lastName})=> `${firstName} ${lastName}`);

// console.log(result);


// suppose const numbers = [1, 2, 3]; this is an array and the output need to be [[1], [2,2], [3,3,3]]

const numbers = [1, 2, 3,4];

const result = numbers.map(num => [...Array(num)].fill(num));

const flattting = result.flatMap(num => num)

console.log(result)
console.log(flattting)
