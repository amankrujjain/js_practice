// prime numbers are the numbers that can be either divisible by itself or 1

function checkPrime(num){
    if(num <= 1) return false;

    for(let i = 2; i*i <= num; i++){
        console.log(i)
        if(num % i == 0) return false;
    };
    return true;
}

console.log(checkPrime(21))