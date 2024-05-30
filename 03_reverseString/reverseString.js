// The Road less traveled

const reverseString = function (text) {
    const letters = text.split("");
    let reversedString = [];

    for(let i = letters.length - 1; i >= 0; i--) {
        let letter = letters[i];
        reversedString.push(letter);
    }

    return reversedString.join("");

};

// The short and easy route

// const reverseString = function (text) {
//     let mirroredText = text.split("").reverse().join("");
//     return mirroredText;

// };

// Do not edit below this line
module.exports = reverseString;
