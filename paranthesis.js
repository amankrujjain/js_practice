// if the length of str is 0 then return false;
// we will first check if we arre getting the opening brackets or not
// and pop the closing one in the same sequence

function isBalancedBrackets(str) {

let stack = [];

for(let char of str){
    switch (char) {
        case '(':
        case '{':
        case '[':
            stack.push(char)
            break;
        
        case ')':
            if(stack.pop() !== '(') return false
            break;
        
        case '}':
            if(stack.pop() !== '{') return false
            break;

        case ']':
            if(stack.pop() !== '[') return false
            break;
    }
}

return stack.length === 0;
    // let stack = [];

    // for (let char of str) {
    //     switch (char) {
    //         case '(':
    //         case '{':
    //         case '[':
    //             stack.push(char);
    //             break;
            
    //         case ')':
    //             if (stack.pop() !== '(') return false;
    //             break;
            
    //         case '}':
    //             if (stack.pop() !== '{') return false;
    //             break;
            
    //         case ']':
    //             if (stack.pop() !== '[') return false;
    //             break;
    //     }
    // }

    // return stack.length === 0;
}

// Examples
console.log(isBalancedBrackets("(){}[]")); // true
console.log(isBalancedBrackets("{[()]}")); // true
console.log(isBalancedBrackets("{[(])}")); // false
console.log(isBalancedBrackets("({[}])")); // false
console.log(isBalancedBrackets("((()")); // false
console.log(isBalancedBrackets(")(")); // false
