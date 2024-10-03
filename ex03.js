// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

function findMissingNumber(numberArray){
    let missingNumbers = []
    numberArray.reduce((count, current) => {
        if (current !== count + 1) {
          missingNumbers.push((current))
          return missingNumbers
        }
    }, 0)
    return missingNumbers
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3


