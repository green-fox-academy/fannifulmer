// 1. Alert the content of the heading.
// 2. Write the content of the first paragraph to the console.
// 3. Alert the content of the second paragraph.
// 4. Replace the heading's content with 'New content'.
// 5. Replace the last paragraph's content with the first paragraph's content.

var headAlert = document.getElementsByTagName('h1');
alert(headAlert[0].textContent);

var firstPar = document.getElementsByTagName('p');
console.log(firstPar[0].textContent);

var secPar = document.querySelector('.other');
alert(secPar.textContent);

var newheading = document.getElementsByTagName('h1');
newheading[0].innerHTML = "New content";

var lastPar = document.querySelector('.result');
lastPar.innerHTML = firstPar[0].textContent;

// var lastPar = document.querySelector('.other');
// lastPar.nextElementSibling.remove();
// lastPar.append(firstPar[0].textContent);

