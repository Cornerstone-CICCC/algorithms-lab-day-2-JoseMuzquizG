// Exercise 15: Write a recursive function `findMax` that takes an array of numbers 
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.

function findMax(values){
    let maxNum = values.reduce((max, current) => {
        if (max > current) {
            return max
        }
        return current
    }, 0)
    return maxNum
}

console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9