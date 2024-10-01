// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

function capitalizeWords(sentence){
    let wordArray = sentence.split(" ")
    let firstWord = wordArray [0]
    // for (let i = 0; i < wordArray.length; i++){
    //     firstWord = 
    // }
    return firstWord
}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"