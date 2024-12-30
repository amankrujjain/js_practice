function repeated(str){
    // use a hash map to store key pair values;

    // const count = {};

    // for(let char of str){
    //     count[char] = (count[char] || 0) + 1;
    // }

    // const max = Math.max(...Object.values(count));
    // console.log(max)
    // seocnd has to store the maxed repeated char with count
    // let result = {};

    // returning all the values in a hash map

    // for(char in count){
    //     if(count[char] === max){
    //         result[char] = count[char]
    //     }
    // }
    // return result
    

    // return the first one with max repected vlaue;

    // const count = {} ; 

    // for(let char of str){
    //     count[char] = (count[char] ||0) + 1
    // };

    // const maxOccurance = Math.max(...Object.values(count));

    // for(let char in count){
    //     if(count[char] === maxOccurance){
    //         return {[char]: maxOccurance}
    //     }
    // }

    // second max occurance

  const hash = {};

  for (const element of str) {
    hash[element] = (hash[element] || 0) + 1
  }

  const maximumTimes = Math.max(...Object.values(hash));

  for (const key in hash) {
   if(hash[key] === maximumTimes){
    return {[key]:maximumTimes}
   }
  }
}

const str = "Hi I am amankummarujjain";

const withMaxCount = repeated(str);
// console.log(withMaxCount)

console.log("First character with max occurance",withMaxCount);