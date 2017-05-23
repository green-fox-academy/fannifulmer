'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreCandies(students) {
    var owners = "";
    students.forEach(function(e) {
        if (e.candies > 4) {
        owners += e.name;
    }
    });
    console.log(owners);
}
moreCandies(students);

function averageCandies(students) {
    var allCandy = 0;
    var people = 0;
    students.forEach(function(e){
        allCandy += e.candies;
        people += 1;
    });
    console.log(allCandy/people);
}

averageCandies(students);