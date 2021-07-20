function reverseInt(int){
    const rev = int.toString().split('').reverse().join('');

    return parseInt(rev);
}

console.log(reverseInt(543));