function isPalindrome(str){
    const revString = str.split('').reverse().join(''); //turn to array, reverse,join turn back to string

    return revString === str;
}

console.log(isPalindrome('madam'));