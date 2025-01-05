// // Call: Call method invokes a function with this keyword
// // and arguments are passed one by one

// let obj1 = {name:"Aman", roll: 101};
// let obj2 = {name:"Raj", roll:102};

// function test(msg1, msg2){
//     console.log(msg1 + " " + this.name + " " + msg2 + " " + this.roll);
// }

// const invoke = test.call(obj1, "Hi", "your roll number is");
// const invoke2 = test.call(obj2, "Hi", "your previous roll number was")
// // Apply : Apply method invokes a function with this keyword
// // and hepls us to pass arguments as an array

// let emp = {name:"Aman", salary: 10000};
// let emp2 = {name:"Raj", salary: 20000};

// function display(msg1, msg2){
//     console.log(msg1+ " " + this.name + " " + msg2+ " "+ this.salary)
// }

// const invoke3 = display.apply(emp, ["Hi", "your salary is"]);


// // Bind: Bind method returns a new function, when invoked has its this keyword set to the provided value
// let student = {name:"Sumit", isActive:true};

// function show(msg1, msg2){
//     console.log(msg1 + " " + this.name+ " " + msg2+ " " + this.isActive)
// };

// const invoke4 = show.bind(student, "The account of", "is")
// invoke4()


let obj = {
    name:"Aman",
    roll: 12
};

let obj2 = {
    name:"Ritik",
    roll: 9
}


function test(msg1,msg2){
    console.log(msg1 + " " + this.name + " " + msg2 + " " + this.roll)
};

// let invoke = test.apply(obj, ["Hi", "your roll number is"]);
// let invoke2 = test.apply(obj2, ["Hi", "your roll number is"]);

let invoke = test.bind(obj, "Hi", "your roll number is");


