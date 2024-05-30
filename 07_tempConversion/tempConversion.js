/* 
Formula :
    C = (F - 32) / 1.8
    F = 1.8C + 32
*/

const convertToCelsius = function(F) {
  let toRound = ((F - 32) / 1.8) * 10; // Multiply the formula by ten to round later.
  let C = Math.round(toRound) / 10;

  return C;
};

// Short Version
const convertToFahrenheit = function(C) {
  return Math.round(((1.8*C) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
