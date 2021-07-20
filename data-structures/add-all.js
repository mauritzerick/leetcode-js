function addAll() {
    //for loop
    let args = Array.prototype.slice.call(arguments);
    let total = 0;

    for(let i = 0; i < args.length; i++){
        // total = total + args[i];
        total += args[i];
    }
    return total;
}
console.log(addAll(2,3,4,5));