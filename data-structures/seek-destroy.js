function seekAndDestroy(arr) {
    //sol 1: arg, indexOf, filter
    const args = Array.from(arguments);

    function filterArr(arr){
        //return true if not in array
        return args.indexOf(arr) === -1;
    }
    return arr.filter(filterArr);
}
console.log(seekAndDestroy([2,3,4,5,6, 'hello'], 2, 6));