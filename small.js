// curring and closure example

function a(){
    let a = 10;
    let b = 20
    function add(){
        console.log("th sum is", a+ b)
    }
    return add()  ;
}

let result = a();
// result()

// curring;

function addNew(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

console.log(addNew(1)(2)(3)())


// function curring and infinite curring

function add(a){
    return function(b){
        if(b){
            return add(a + b);
        }else{
            return a;
        }
    }
}
console.log(add(1)(2)(3)(8)())