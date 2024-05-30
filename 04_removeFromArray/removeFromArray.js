const removeFromArray = function(array, ...args) {
    for (let i = array.length - 1; i >= 0; i--){ 
        // Notice how we are looping downwards. 
        // Since we are removing an element, the index of subsequent elements will shift down, if we loop upwards. 
        // Looping downwards will ensure that we are removing elements from the front of the array.
        if (args.includes(array[i])) { // If any of the elements in the array are included in args.
            // Then splice that element (i), 1 means to remove only 1 element (from and up to that element only).
            array.splice(i, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
