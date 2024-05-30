const repeatString = function(string, num) {
    multiString = string;
        if (num < 0) {
            return "ERROR";
        } else {
            for (let i = 0; i <= num; i++) {
            return multiString.repeat(num);
            }
        }
};


// Do not edit below this line
module.exports = repeatString;
