// function CharacterCount(str){
//     const count = {};

//     for(let char of str){
//         count[char] = (count[char] || 0) + 1
//     }
//     return count
// };

// const str = 'Hi I am aman';

// let characterWithCount = CharacterCount(str);
// console.log(characterWithCount)

// without case sensitive

// function findChar(str){
//     let lower = str.toLowerCase()
//     let count = {};

//     for (const element of lower) {
//         count[element] = (count[element] || 0) + 1;
//     }
//     return count
// };

// const str = "Hi i am Aman";

// let result = findChar(str);
// console.log(result);

// now find the dublicate

// function findDup(str){
//     const hash = {};
//     const result = {}
//     for (const element of str) {
//         hash[element] = (hash[element] || 0) + 1;
//         if(hash[element] > 1){
//             result[element] = hash[element]
//         }
//     }
//     return result;
// };

function removeDup(str){
    const hash = {};
    const result = [];
    for (const element of str) {
        hash[element] = (hash[element] || 0) + 1;
        if(hash[element] === 1){
            result.push(element)
        }
    }
    return result

}
const str = [1,2,1,3,3,2,4,5];

let result = removeDup(str);
console.log(result);