function reverse(str){
    const strArr = str.split('');
    strArr.reverse();
    return strArr.join('');
}

console.log(reverse('hello'));