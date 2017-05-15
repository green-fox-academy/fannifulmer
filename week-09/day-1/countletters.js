// Count Letters
// 
// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.


// 
// var word = 'alma';
// var newArray = word.split('');
// 
// var countLetter = newArray.reduce(function(wholeWord, letter){
//     if (letter in wholeWord) {
//         wholeWord[letter]++
//     } else {
//         wholeWord[letter] = 1;
//     }
//     return wholeWord;
// }, {});
// 
// console.log(countLetter);

var counterWords = function(word){
    var word;
    var newArray = word.split('');

    var countLetter = newArray.reduce(function(wholeWord, letter){
        if (letter in wholeWord) {
            wholeWord[letter]++
        } else {
            wholeWord[letter] = 1;
        }
        console.log(wholeWord);
        return wholeWord;
    }, {});
}

console.log(counterWords('alma'));


