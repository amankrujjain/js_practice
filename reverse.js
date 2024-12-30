// Revese a number

function reverse(num){
    num = num.toString();
    let rev = ""
    for(let i = num.length-1; i >=0; i--){
        rev = rev + num[i];
    };
    const str = Number(rev)
    return str;
}
console.log(reverse(12234));

const reverseString = (str)=>{
    let rev = "";
    console.log(str.length)

    for(let i = str.length -1; i >=0; i--){
        rev = rev + str[i]
    };
    return rev
};

let str = ["Hi","i","a","m"];

console.log(reverseString(str));
