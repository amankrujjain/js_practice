//Loops and iterator

// for loop

// for(Iterator;condition;increment)

let arr = [20,1,1,2,7,8]

// for(let i = 0; i< arr.length;i++){
//     if(i == arr[i]){
//         console.log(arr[i])
//     }else{
//         console.log('not found')
//     }
// }

// while  - whie(condition){}

// let i = 0;
// while(i < arr.length){
//     if(i == arr[i]){
//         console.log({index: i, value:arr[i]});
//     }else{
//         console.log('Not found')
//     };
//     i++;
// }

//do while loop = do{code block}while(condition)

// let i = 0;

// do{
//     if(i == arr[i]){
//         console.log({index: i, value:arr[i]});
//     }else{
//         console.log('Not found')
//     }
//     i++
// }while(i < arr.length)

let dolphins = [88,91,110];
let koalas = [96,108,89];

let scoreDolphins;
let scoreKoalas;

for (var i = 0; i < dolphins.length; i++) {
    scoreDolphins += i;
    console.log(scoreDolphins)
}