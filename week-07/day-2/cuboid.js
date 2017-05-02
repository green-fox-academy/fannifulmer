'use strict';

var l = 10.2;
var w = 13.5;
var h = 8;

var surfaceArea = 2*(l*w+w*h+h*l);
var volume = (l*w*h);

console.log("Surface area:", surfaceArea);
console.log("Volume:", volume);

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000