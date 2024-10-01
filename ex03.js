// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

function findMissingNumber(numberArray){
    let missing = []
    for (let i = 0; numberArray.length; i++) {
        if (numberArray[i] === (i + 1)){
            return missing.push(i + 1)
        }
        else {
            return missing.push(i + 1)
        }
        
    }
    console.log(missing)
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3