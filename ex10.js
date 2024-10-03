// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

function convertToCamelCase (sentence) {
    let wordArray = sentence.split("_")
    let camelWords = wordArray.slice(1)
    let completeSentence = [] 
    for (let i = 0; i < camelWords.length; i++){
        let initialLetter = camelWords[i][0].toUpperCase()
        let otherLetters = camelWords[i].slice(1)
        let word = initialLetter + otherLetters
        completeSentence.push(word)
    }
 
    return wordArray[0] + completeSentence.join("")
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"
//done