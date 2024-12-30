// Given an array, write functions to find the minimum and maximum 
// elements in it. 




function minMax(arr){
  // let min = arr[0];
  // let max = arr[0];

  // for(let i = 0; i < arr.length; i++){
  //   if(arr[i] > max){
  //       max = arr[i]
  //   }

  //   if(arr[i] < min){
  //       min = arr[i]
  //   }
  // }
  // return {min:min, max:max}

  let min = arr[0]
  let max = arr[0];

  for(let i = 0; i < arr.length; i++){
    if(min > arr[i]){
      min = arr[i];
    };

    if(max < arr[i]){
      max = arr[i];
    }
  }
  return {
    max: max, min: min
  }
 
}
console.log(minMax([1,2,3,4,8,3,5,20,10]))