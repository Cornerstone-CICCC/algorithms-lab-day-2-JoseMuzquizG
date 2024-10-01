// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(message){
    let consonants = 0
    for (let i = 0; i < message.length; i++){
        if ((message[i] !== "a") && (message[i] !== "e") && (message[i] !== "i") && (message[i] !== "o") && (message[i] !== "u") && (message[i] !== " ")){
            consonants++
        }
    }
    return consonants
}

console.log(countConsonants("hello world")); // Expected output: 7