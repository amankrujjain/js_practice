// Map, filter, forEach, reduce

// 1. Map Prototype

// Array.prototype.myMap = function(callback){
//     let result = [];
//     for(let i = 0; i < this.length; i++){
//         if(this.hasOwnProperty(i)){
//             result.push(callback(this[i], i, this))
//         }
//     }return result;
// }

// const arr = [1,2,3,4];

// const multi = arr.myMap(x => x * x);

// console.log(multi)

//2. Filter prototype


// Array.prototype.myFilter = function(callback){
//     let result = [];

//     for(let i = 0; i < this.length; i ++){
//         if(this.hasOwnProperty(i) && callback(this[i], i,this)){
//             result.push(this[i])
//         }
//     }return result;
// }

// const arr = [1,2,3,4];

// const even = arr.myFilter(x => x % 2 ===0);

// console.log(even)


// 3. forEach Prototype

Array.prototype.myForEach = function(callback){
    for(let i = 0; i < this.length; i++){
        if(this.hasOwnProperty(i)){
             callback(this[i], i, this)
        }
    }
}

const arr = [1,2,3,4];

arr.myForEach(x => console.log(x * x));

