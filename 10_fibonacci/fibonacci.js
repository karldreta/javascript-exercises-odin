const fibonacci = function(x) {
    let int = parseInt(x);
    let series = [1,1];

    if (int < 0) return "OOPS";
    if (int == 0) return 0;

    for (let i = 2; i <= int; i++) {
        series.push((series[series.length - 1]) + (series[series.length - 2]));
    }

    return series[int - 1];
};

// Do not edit below this line
module.exports = fibonacci;


// The Fibonacci Function 

// Explanation:

// for (let i = 2; series array length
//     push the sum of the second to the last and the last number in the array;
//    --- then do the process all over again (i++) 
// until the length of the array reaches the desired position (series.length <= int);

// return series[int - 1]; --- since the array is zero based:
                                // e.g. 
                                // if int = 4;
                                // array counts from 0 and we would get 5, if we don't minus 1

// At first I was afraid to do it, I somehow doubted myself, 
// but then when I just sat and did the work I slowly began to grasp it and finished it in less than 20 mins.