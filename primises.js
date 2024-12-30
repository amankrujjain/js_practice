// Promises

// let x= "Some"

// let y = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("thing");
//         rej("The error occured");
//     },1000)
// })

// y.then(result =>{
//     console.log(result);
//     console.group(c);
// }).catch(err =>{
//     console.log(err);
//     console.log(c);
// })

// let c = "else";

// console.log(x)
// // console.log(c)
// console.log("a")
// let y = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log('c')
//     },0.01)
// })

// y.then(()=>{
    
// }).catch((err)=>{
//     console.log(err);
// })

// console.log("b")
// console.log('now');

// let func = async(name)=>{
//     console.log(name)
// let promise = new Promise((res,rej)=>{
    
//     setTimeout(()=>{
//         res(name);
//     })
// });

// let message = await promise;
// console.log(message)
// }
// func("aman")
// console.log('completed')


// function greet(name){
//     console.log('Hello,' + name);
// }

// function test(callBack){
//     let name = "Aman";

//     callBack(name);
// };

// test(greet)

// create a promise that logs data

const first = new Promise((res,rej)=>{
    res("This is data")
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
