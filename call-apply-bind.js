// // Call: Call method invokes a function with this keyword
// // and arguments are passed one by one

const obj = {
    name:"Aman",
    roll: 12
};

function greet(msg1, msg2){
    console.log(`${msg1} ${this.name} ${msg2} ${this.roll}`);

};

const invoke = greet.call(obj, 'Hi', "your roll is");
const invoke2 = greet.apply(obj, ['Hi',"your roll is"]);
const invoke3 = greet.bind(obj, "Hi", "your roll is");
invoke3()

