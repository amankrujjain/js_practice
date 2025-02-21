// A varibale declared is tended to be moved to the top of its scope

// console.log(aman);
// const aman = "Aman"

// Call back hell

// when multiple async function are chained together this situation is called call back hell.

// Solution promises, async await


// Closures -> Lexical scoping

// function parent(){
//     let name = "Aman";
//     let roll = 13;
//     function child(){
//         console.log(name, roll)
//     }
//     child()
// };

// parent();

//  Function curring

//  It is a technique of calling the nested functions and passing arguents one after another

// function add(a){
//     return function(b,c){
//         return a + b +c;
//     };
// };

// console.log(add(3)(4,4));

// Infinite curring

function add(a){
   return function (b){
    if(b){
        return add(a+b);
    }
    return a;
}
};
 
console.log(add(10)(20)(29)())