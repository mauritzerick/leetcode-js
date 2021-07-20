function sumPrime(num){
    let total = 0;
    
    function checkForPrime(i){
        for(let j = 2; j < i; j++) {
            if(i % j === 0){
                return false;
            } 
        }
        return true;
    }
    
    for(i = 2; i <= num; i++){
        if(checkForPrime(i)) {
            total += i;
        }
    }
    return total;
}
console.log(sumPrime(10));