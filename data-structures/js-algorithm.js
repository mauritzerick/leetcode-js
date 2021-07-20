// you got a list of items, where every item has a value and a weight
// you got a bag that holds a max weight of X
// write a program that maximizes the value of the items you put into the bag whilst ensuring that you don't exceed that max weight


//Knapsack problem
// items = [
//     {id: 'a', val: 10, w: 3},
//     {id: 'b', val: 6, w: 8},
//     {id: 'c', val: 3, w: 3}
// ]
// maxWeight = 8;
// bag = ['a', 'c'] //solution

// Value: 13
// Weight: 6(<8)

//an algorithm is a sequence of steps to solve a clearly defined problem

//big o notation - measuring performance(time complexity)
function sumUp(n) {
    let result = 0;
    for ( let i = 1; i <= n; i++) {
        result = result + i;
    }
    return result;
}

//sumUp(3) = 6 because 3+2+1
// a bigger number leads to more loop iterations, hence time increases in a linear way

//deriving time complexity = O(n)
function sumUp(n) {
    let result = 0;
    for ( let i = 1; i <= n; i++) {
        result = result + i;
    }
    return result;
}
//execution time grows linearly with n

//deriving constant time complexity = 0(1)
function sumUp(n) {
    return (n/2) * (n+1);

}
// Define function
// find fastest growing term
// remove coefficient

//n number of input has no effect on the time the algorithm takes


//practice linear time complexity
function sumNumbers(numbers) {
    let result = 0;
    for(const number of numbers){
        result += number;
    }
    return result;
}
console.log(sumNumbers([1,3,10]));

//shorter but still linear time complexity
function sumNumbers(numbers) {
    return numbers.reduce((sum,curNum) => sum + curNum, 0);
}
console.log(sumNumbers([1,3,10]));