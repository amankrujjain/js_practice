function checkPlaindrome(str){
    // const checkData = str.split('').reverse().join('');

    // return str === checkData

    let left = 0;
    let right = str.length-1;

    while (left < right) {
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true
}

const str = "nama";
console.log(checkPlaindrome(str))