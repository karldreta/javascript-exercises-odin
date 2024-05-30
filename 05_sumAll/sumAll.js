const sumAll = function(x, y) {
    if (isNaN(x) || isNaN(y) || x < 0 || y < 0 || typeof x === 'string' || typeof y === 'string') {
        return "ERROR";
    }
    let total = 0;

    if (x > y) {
        for(let i = y; i <= x; i++) {
            total = total + i;
        }
    } else {
        for(let i = x; i <= y; i++) {
            total = total + i;
        }
    }

    return total;
};
// Do not edit below this line
module.exports = sumAll;
