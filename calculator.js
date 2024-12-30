// building normal calculator

// let a = 10;
// let b = 20;

// let symbol = "-";

// let result;

// switch(symbol){
//   case '-': result = a-b;
//             console.log(result);
//             break;
//   case "+": result = a + b;
//             console.log(result);
//             break;
//   case "*": result = a * b;
//             console.log(result);
//             break;
//   case "/": result = a/b;
//             console.log(result);
//             break;
//   default: console.log('invalid symbol provided');
//             break;
// }

let a = 10;
let b = 20;

let symbol = "*";

let result;

switch (symbol) {
  case "-": result = a-b;
  console.log(result);
    break;
  
    case "+": result = a + b;
    console.log(result);
    break;

  default: console.log("Invalid symbol input");
    break;
}