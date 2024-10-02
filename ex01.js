// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

function capitalizeWords(sentence){
    let wordArray = sentence.split(" ")
    let completeSentence = []
    for (let i = 0; i < wordArray.length; i++){
        let initialLetter = wordArray[i][0].toUpperCase()
        let otherLetters = wordArray[i].slice(1)
        let word = initialLetter + otherLetters
        completeSentence.push(word)
    }
    return completeSentence.join(" ")

}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"