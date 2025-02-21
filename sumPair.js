// In this program we will create a sum of pair that equals to 0
// for example a = [-1,-2,-3,0,4,5,8,2] output should be 0;

// function sumPair(arr){
//     let left = 0;
//     let right = arr.length-1;
//     while(left<right){
//         let sum = arr[left] + arr[right];
//         if(sum===0){
//             return[arr[left],arr[right]]
//         }else if(sum>0){
//             right--;
//         }else{
//             left++
//         }
//     }
// }
// let a = [-1,-2,-3,0,2,4,9,7]
// let result = sumPair(a)
// console.log(result)




function sumPair(arr){
   for(let item of arr){
    for(let j =1; j < arr.length; j++){
        if(item + arr[j] === 0){
            return [item, arr[j]]
        }
    }
   }

//   let nums = {};

//   for(let i = 0; i<arr.length; i++){
//     let currentN = arr[i]
//     let newValue = - currentN
//     if(nums[newValue] !== undefined){
//         console.log(nums)
//     }
    // if(currentN + newValue === 0){
    //     return [currentN, newValue]
    // };
  };

console.log(sumPair([-1,-2,-3,0,11,9,3,7]))