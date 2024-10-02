// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

function countWordOccurrences(sentence, find) {
    let wordArray = sentence.split(" ")
    let wordCounter = wordArray.reduce((word, current) => {
            if (find === current){
            word++
        }
        return word
    }, 0)
    return wordCounter
}

console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2
//done