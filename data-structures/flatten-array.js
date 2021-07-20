function flatten(arrays) {
    //reduce sol
    return arrays.reduce(function(a, b) {
        return a.concat(b);
    });

}
console.log(flatten([[1,2], [3,4], [5,6]]));