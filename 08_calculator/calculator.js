const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num,0);
};

const multiply = function(arr) {
  return arr.reduce((product, num) => product * num, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(x) {
	const digits = [];
        for (let i = x; i >= 1; i--) {
            digits.push(i);
        }
    
    return digits.reduce((total, num) => total * num, 1);
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
