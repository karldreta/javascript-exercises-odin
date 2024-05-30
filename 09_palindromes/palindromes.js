const palindromes = function (string) {
    let filteredString = string.split('').filter(letter => {
        return letter.match(/[a-zA-Z0-9]/) !== null;
    });;

    return filteredString.join('').toLowerCase() == filteredString.reverse().join('').toLowerCase();
  
    // Where
    // let newWord = filteredString.join('').toLowerCase();
    // let reversedWord = filteredString.reverse().join('').toLowerCase();
  };

// Do not edit below this line
module.exports = palindromes;




