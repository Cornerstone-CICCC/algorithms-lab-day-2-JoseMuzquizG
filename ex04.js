// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

function mostFrequentChar(text) {
    let textArray = text.split("")
    let letterCounter = textArray.reduce((letter, current) => {
        letter[current] = (letter[current] || 0) + 1
        return letter
    }, {})
    return letterCounter

}

console.log(mostFrequentChar("javascript")); // Expected output: "a"