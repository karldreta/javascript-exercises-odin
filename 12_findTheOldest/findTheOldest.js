const findTheOldest = function(persons) {
    persons.forEach(person => {
        if (person['yearOfDeath'] == undefined) {
            person['yearOfDeath'] = new Date().getFullYear();
         };
    });

    let ages = persons.sort((function(a, b) {
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return -1;
        } else {
            return 1;
        }
    }));

    return ages[0];
};


// Do not edit below this line
module.exports = findTheOldest;
