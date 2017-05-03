// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

var lineCount = 7;

for (var i = 0; i < (lineCount/2); i++){
    console.log(" ".repeat(lineCount - i) + "*".repeat(i+i+1));
}
for (var i = 0; i < lineCount; i++) {
    if (lineCount > (lineCount/2)) {
        console.log(" ".repeat(i + 1) + "*".repeat(lineCount-2));
}
}