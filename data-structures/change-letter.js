function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
    //globel and case insesitive

    if(char === 'z' || char === 'Z') {
        return 'a';
    } else {
        return String.fromCharCode(char.charCodeAt() + 1);
    }
});
    newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
        return vowel.toUpperCase();
    });
    return newStr;
}

console.log(letterChanges('Zhello there'));