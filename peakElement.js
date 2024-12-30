//Given an array arr of n elements that is first strictly increasing 
//and then maybe strictly decreasing, find the maximum element in the array.

// Note: If the array is increasing then just print the last element will be the maximum value.

// So in this we will find the peak elemnt in the array
// for example arr =[5, 10, 20, 15]
// return 20 as its neighbouring values 10 and 15 both are smaller than 20


// Input: array= [10, 20, 15, 2, 23, 90, 67]
//Output: 20 or 90
// Explanation: The element 20 has neighbors 10 and 15, both 
//of them are less than 20, similarly 90 has neighbors 23 and 67.

// function findPeak(arr, n) {
//     if (n == 1) return 0;
//     if (arr[0] >= arr[1]) return 0;
    // if (arr[n - 1] >= arr[n - 2]) return n-1;

    // for(let i =1; i<n-1;i++){
    //     if(arr[i]>= arr[i-1] && arr[i]>=arr[i+1]) return i
    // }

//     for(let i =0; i<arr.length; i++){
//         if(arr[i] >= arr[i-1] && arr[i] >= arr[i+1]) return arr[i]
//     }

// }
// let arr = [10, 20, 15, 2, 23, 90, 67]
// let n = arr.length;
// console.log(findPeak(arr, n))


// function findPeak(arr){
//     if(arr.length==1) return 0;
//     if(arr[0]>=arr[1]) return 0;
//     if(arr[arr.length-1]>= arr[arr.length-2])return arr.length-1;
//     for(let i=1; i<arr.length-1;i++){
//         if(arr[i]>arr.length-1 && arr[i]>arr.length+1) return [i,arr[i]]
//     }
// }
// let arr = [10, 2, 15, 25, 23, 90, 67]
// console.log(findPeak(arr))


function findPeak(arr){
let num = arr.length;

if(arr[0]>arr[1]) return arr[0];
if(arr[num - 1] > arr[num -2]) return arr[num-1]

for(let i = 0; i < num; i++){
    if(arr[i] > arr[i+1] && arr[i] > arr[i -1]){
        return arr[i]
    }
}
return null;
}

const arr = [1, 300, 20, 40, 100, 0];
const findPeakElement = findPeak(arr)
console.log(findPeakElement)