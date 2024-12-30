// Call: Call method invokes a function with this keyword
// and arguments are passed one by one

let obj1 = {name:"Aman", roll:15};
let obj2 = {name: "raj", roll:20}
function test(msg1,msg2){
    console.log(msg1+ " " + this.name + msg2 + " " + this.roll)
}

let revoke = test.call(obj1, "hello"," your roll number is")
let revoke2 = test.call(obj2, "hello", "your roll number is")
// Apply : Apply method invokes a function with this keyword
// and hepls us to pass arguments as an array

// let emp1 = {name:"Raj", title:"kundera"};
// let emp2 = {name:"Raja", title:"kunderi"};

// function invoke(msg1,msg2){
//     console.log(
//         msg1+" "+this.name+" "+this.title+" "+msg2
//     );
// };

// invoke.apply(emp1,["hi","this is ai"]);
// invoke.apply(emp2,["Hi","this is AI"]);

// Call method it invole a function with this keyword
