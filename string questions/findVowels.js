// extract all the vowels from the given string;

function findVowels(str){
    // let vowels = ['a','e','i','o','u'];
    // let result = [];
    // for(let char of str){
    //     if(vowels.includes(char.toLowerCase())){
    //         result.push(char)
    //     }
    // }
    // return result;

    // return vowels with count
    let newStr = str.toLowerCase()

    const vowels = ['a','e','i','o','u'];
    let count = {}

    for(let char of newStr){
        if(vowels.includes(char))
        count[char] = (count[char] || 0) + 1;

    };
    return count
};

const str = "Hi a i am aman I A";

const result = findVowels(str);

console.log(result);

function duplicate(arr){
    let collection = {};
    let result = {};

    for(let char of arr){
        collection[char] = (collection[char] || 0) + 1
        if(collection[char] > 1){
            result[char] = collection[char]
        }
    }

    return result
}

const arr = [1,2,3,2,3,4,2,3,10,11];
let results = duplicate(arr);
console.log(results)