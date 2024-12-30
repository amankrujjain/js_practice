// in this we will return the repeated character wwith their count

function repeated(str){

    // store the value in hash map

    const count = {};
    for(let char of str){
        count[char] = (count[char] || 0) + 1;
    }
    let result = {};

    for(let char in count){
        if(count[char] > 1){
            result[char] = count[char]
        }
    }
    return result
};

const str = "hello I am aman kumar ujjain";

const withValue = repeated(str);

console.log(withValue)