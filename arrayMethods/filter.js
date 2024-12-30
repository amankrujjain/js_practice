// filter even numbers from the given array

// let arr = [1,2,3,4,5,6,7];

// function findEven(arr){
//     let solution = arr.filter( num => num % 2 ===0);
//     return solution;
// };

// const result = findEven(arr);

// console.log(result)

// Filter odd numbers

// let arr = [1,2,3,4,5,6,7];

// function findOdd(arr){
//    let solution = arr.filter(num => num % 2 !== 0);
//    return solution;
// };

// const result = findOdd(arr);

// console.log(result)


// Filter string have character longer than 5

// let str = ["aman","kumar","ujjain"];

// function longestString(str){
//     let solution = str.filter(char => char.length >= 5);
    
//     return solution
// };

// const result = longestString(str);
// console.log(result)

//Filter out those who are above age 20

// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 }
// ];

// function findName(people){
//     let names = people.filter(data => data.age >=29).map(data => data.name);
//     return names;
// };

// const result = findName(people);
// console.log(result)

// Filter unique  characters

// which is also similar to remove duplicates

// let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5];

// function uniqueChar(arr){
    
//     const solution = arr.filter((num, index, arr)=> arr.indexOf(num)=== index);
//     return solution
// };

// const result = uniqueChar(arr);
// console.log(result)


// Find the prime numbers

// let arr = [1,2,3,4,5,6,7,8];

// function findPrime(arr){
//     if(arr <= 1) return false;

//     for(let i = 2; i * i <= arr; i++){
//         if(arr % i === 0) return false;
//     }
//     return true;
    
// }
// let final = arr.filter(findPrime);
// console.log(final)


// Filter positive number

// let arr = [-1,-2,3,4];

// function positiveNumbr(arr){
//     let result = arr.filter(num => num >0);
//     return result;
// };

// const data = positiveNumbr(arr);
// console.log(data)


// Filtering objects on the basis of mutiple conditions

// const products = [
//     { name: 'Product A', price: 10, category: 'Electronics' },
//     { name: 'Product B', price: 20, category: 'Clothing' },
//     { name: 'Product C', price: 15, category: 'Electronics'   
//  }
// ];

// const data = products.filter(product => product.price === 20 && product.category ==="Clothing");
// console.log(data, data.length)


// Find string starts with specific characters

// const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// 
// const data = words.filter(word => word.startsWith('b'));
// console.log(data)



// filter out the data from nested objects
// const users = [
//     { name: 'Alice', address: { city: 'New York', country: 'USA' } },
//     { name: 'Bob', address: { city: 'London', country: 'UK' } },
//     { name: 'Charlie', address: { city: 'Paris', country: 'France' } }
// ];

// const data = users.filter(user => user.address.country === "USA");
// console.log(data)


// Display data whose price is above 10 and are available

// const products = [
//     { name: 'Product A', price: 10, category: 'Electronics', isAvailable: true },
//     { name: 'Product B', price: 20, category: 'Clothing', isAvailable: false },
//     { name: 'Product C', price: 15, category: 'Electronics', isAvailable: true }
// ];

// const result = products.filter(product => product.price > 10 && product.isAvailable === true)

// console.log(result)


// Filter out data above 19th nov

// const orders = [
//     { id: 1, orderDate: new Date('2023-11-20') },
//     { id: 2, orderDate: new Date('2023-11-25') },
//     { id: 3, orderDate: new Date('2023-11-18') }
// ];

// const result = orders.filter(order => order.orderDate > new Date('2023-11-19'));
// console.log(result)


// Display discounted products

// const products = [
//     { name: 'Product A', price: 10, discount: 5 },
//     { name: 'Product B', price: 20, discount: 10 },
//     { name: 'Product C', price: 15, discount: 8 }
// ];

// const result = products.filter(product => product.price - product.discount > 8);
// console.log(result)


// Find the person whose hobbies include coding

// const users = [
//     { name: 'Alice', hobbies: ['reading', 'coding', 'gaming'] },
//     { name: 'Bob', hobbies: ['painting', 'music', 'sports'] },
//     { name: 'Charlie', hobbies: ['coding', 'gaming'] }
// ];

// const result = users.filter(user => user.hobbies.includes('coding'));

// console.log(result)


// in this we have to find the data which either passed a condition or the other


// const products = [
//     { name: 'Product A', price: 10, category: 'Electronics', isAvailable: true },
//     { name: 'Product B', price: 20, category: 'Clothing', isAvailable: false },
//     { name: 'Product C', price: 15, category: 'Electronics', isAvailable: true }
// ];

// const result = products.filter(product => (product.price > 10 && product.isAvailable) || (product.category === 'Clothing' && !product.isAvailable));

// console.log(result)


