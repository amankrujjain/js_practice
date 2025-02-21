// Revese a number

function reverse(num){
    let strNum = num.toString();
    let rev = ''
    for(let i = strNum.length - 1; i >= 0; i--){
            rev = rev + strNum[i]
    };

    return Number(rev)
}
console.log(reverse(12234));

const reverseString = (str)=>{
    let rev = '';

    for(let i = str.length - 1; i >= 0; i--){
        rev = rev + str[i]
    };
    return rev
};

let str = ["Hi","i","a","m"];

console.log(reverseString(str));
