// in this example we will ffind the repeaated characters;

function findRepeatedCharacter(str){
   // create a hash map

   const count = {};

   // iterate throught the given string

   for( let char of str){
    count[char] = (count[char] || 0) + 1
   }
   return Object.keys(count).filter(char => count[char] > 1)
   
}

const str = "Hi i am aman";

let repeated = findRepeatedCharacter(str)
console.log(repeated);