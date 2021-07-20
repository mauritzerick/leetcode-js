function longestWord(sentence) {
    //create filtered array
    const wordArr = sentence.toLowerCase().match(/[a-z0-9]+/g);
    //global to keep going

    //sort by length
    const sorted = wordArr.sort(function(a,b) {
        return b.length - a.length;
    });

    // return sorted[0];

    //if multiple words, put into array
    const longestwordArray = sorted.filter(function(word) {
        return word.length === sorted[0].length;
    });

    //check if more than one array val
    if(longestwordArray.length === 1) {
        //return the word
        return longestwordArray[0];
    }else {
        return longestwordArray;
    }
}

console.log(longestWord('hellooo there, my name is mauritz erick'));