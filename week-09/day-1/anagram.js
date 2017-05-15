// Anagram
// 
// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.



var anagramReader = function(string1, string2){

    var newstring1 = string1.split('').sort().join('');
    var newstring2 = string2.split('').sort().join('');

    if (newstring1 === newstring2) {
        return true
    } else {
        return false
    }
}

module.exports = anagramReader;


