// Problem statement
// Unlike primitive data types objects don't directly copy their values
// when pointed to a new variable. Beacuse if you change
// anything in the new object the previous value will also
// gets changed.

// let str = 12;
// newOne = str;
// newOne = 13;


// 1. Shallow copy

// First level copy , not for nested ones

let obj = {
    name:"Aman",
    roll: 12,
    address:{
        city:"Bokaro",
        greet: function(){
            console.log(this.city)
        }
    }
};

// 1. spread operator

// let obj2 = {...obj};

// 2. Object Assign

// let obj2 = Object.assign({},obj)
// obj2.name = "Rtitk";
// obj2.address.city = "Ranchi"

// console.log(obj, obj2)

// 2. Deep copy

//  Double layer

let obj2 = JSON.parse(JSON.stringify(obj));
obj2.name = "Ritik"
obj2.address.city = "Ranchi"

console.log(obj, obj2)

// 3. Lodash library