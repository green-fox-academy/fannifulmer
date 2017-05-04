// <!-- You can work in the html or in a separate js file. Like:
// <script>
//   1. store the element that says 'The King' in the 'king' variable.
//   console.log it.
//   2. store the element that contains the text 'The Conceited Man'
//   in the 'conceited' variable.
//   show the result in an 'alert' window.
//   3. store 'The Businessman' and 'The Lamplighter'
//   in the 'businessLamp' variable.
//   console.log each of them.
//   4. store 'The King' and 'The Conceited Man'
//   in the 'conceitedKing' variable.
//   alert them one by one.
//   5. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//   in the 'noBusiness' variable.
//   console.log each of them.
//   6. store 'The Businessman' in the 'allBizniss' variable.
//   show the result in an 'alert' window.
// </script>

var king = document.getElementById('b325');
console.log(king.textContent);

var conceited = document.querySelector('.b326');
window.alert(conceited.textContent);

var businessLamp = document.querySelectorAll('.big');
console.log(businessLamp[0].textContent, businessLamp[1].textContent);

var conceitedKing = document.querySelectorAll('.asteroid');
window.alert(conceitedKing[0].textContent);
window.alert(conceitedKing[1].textContent);

var noBusiness = document.querySelectorAll('.asteroid');
console.log(noBusiness[0].textContent);
console.log(noBusiness[1].textContent);
console.log(noBusiness[3].textContent);

var allBizniss = document.getElementsByTagName('p');
window.alert(allBizniss[0].textContent);