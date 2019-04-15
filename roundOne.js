/**
 * Lead with Zeroes
 * @description: Returns the same array, but moves all zeroes in the array to the front.
 * Do not return a new array. It must be the same array!
 *      Ex: leadZeroes([2,2,0,1,0]) => [0,0,2,2,1]
 *
 * @param {array} arr - An array of integers
 */
function leadZeroes(arr) {
    arr.sort(function (a, b){
        return a - b;
    });
    return arr;
}

/**
 * Setter
 * @description: Returns an array of unique numbers.
 *      Ex: setter([1,1,2,2,3,3]) => [1,2,3]
 *
 * @param {array} arr - An array of data
 */
function setter(arr) {
    let newArr = [];
    for(let i of arr) {
        if(!newArr.includes(i)) {
            newArr.push(i);
        }
    }
    return newArr;
}

/**
 * Is Prime
 * @description: Return true if the given number is a prime number, false otherwise
 *      Ex: isPrime(3) => true
 *
 * Resources:
 * https://en.wikipedia.org/wiki/Prime_number
 * https://youtu.be/mIStB5X4U8M
 * @param num
 */
function isPrime(num) {
    if(num === 1) {
        return false;
    }
    for(let i = num-1; i > 1; i--) {
        if (num % i === 0) {
            return false;
        }
    } 
    return true;
}

/**
 * Modulus
 * @description: Write a function that returns the remainder form dividing 2 integers WITHOUT USING %
 *      Ex: modulus(7, 3) => 1
 *
 * @param dividend
 * @param divisor
 */
function modulo(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    return dividend - quotient * divisor;
}

/**
 * Next Five
 * @description: Write a function that takes a number and returns the next
 * multiple of 5
 *      Ex: nextFive(6) => 10
 *          nextFive(25) => 30
 *
 * @param num
 */
function nextFive(num) {
    num = Math.ceil(num) + 1;
    while(num % 5 != 0){
        num++;
    }
    return num;
}

/**
 * Object Sort
 * @description: Write a function that takes an object and sorts it
 * alphabetically by key. Keys will always be alphabets (a-z or A-Z).
 *      Ex: osort({z: 3, a: 1}) => {a: 1, z: 3}
 *
 * @param obj
 */
function osort(obj) {
    let keys = Object.keys(obj).sort();
    let newObj = {}
    for(key of keys) {
        newObj[key] = obj[key];
    }
    return newObj;
}

module.exports = {
    leadZeroes: leadZeroes,
    setter: setter,
    isPrime: isPrime,
    modulo: modulo,
    nextFive: nextFive,
    osort: osort
};
