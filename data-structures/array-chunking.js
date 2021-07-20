function chunk(arr, len){

    //init chunked array
    const chunkedArr = [];
    //set index
    let i = 0;

    //loop while index is less than the array length
    while(i < arr.length) {
        //slice out from the index to the index + the chunk length
        //and push on to the chunked array
        chunkedArr.push(arr.slice(i, i + len));
        //increment by chunk length
        i += len;
    }
    return chunkedArr;
}

console.log(chunk([1,2,3,4,5,6,7], 3));
