// function removeDuplicate(s){
//     const hash = {};
//     const stack = [];
    
//     for(let char of s){
//         hash[char] = (hash[char] || 0) + 1;
//         if(hash[char] ===1){
//             if(char === '$'){
//                 stack.pop()
//             }else{
//                 stack.push(char)
//             }
//         }
//     }return stack.sort().join('');
// }

// const s = 'bca$bac$';
// const two = 'a$bc$d$e';
// const three = "abc$$d$$e$";
// const four = "abcd$abcd$"

// let result = removeDuplicate(s);
// console.log(result)
// console.log(removeDuplicate(two))
// console.log(removeDuplicate(three))
// console.log(removeDuplicate(four))

function removeDuplicate(s) {
    const stack = [];
    const seen = new Set(); // To track characters already added to the stack

    for (let char of s) {
        if (char !== '$' && !seen.has(char)) {
            stack.push(char);
            seen.add(char); // Mark character as seen
        }
    }

    // Sort the result if required
    return stack.sort().join('');
}

// Test cases
const s = 'bca$bac$';
const two = 'a$bc$d$e';
const three = "abc$$d$$e$";
const four = "abcd$abcd$";

console.log(removeDuplicate(s));      // Output: "abc"
console.log(removeDuplicate(two));    // Output: "abcde"
console.log(removeDuplicate(three));  // Output: "abcde"
console.log(removeDuplicate(four));   // Output: "abcd"
