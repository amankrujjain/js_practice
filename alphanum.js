// Program to find alpha numeric numbers

function alphaNum(str){
    let result = [];

    for(let char of str){
        if(/[0-9]/.test(char)){
            result.push(char)
        }
    }return result
};

const str = ["abcd", "as12", "10bc","shss"];

console.log(alphaNum(str))