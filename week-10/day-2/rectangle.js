'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea(width, height){
        var area = width * height; 
    console.log(area);
    }
}

var bigRectangle = new Rectangle();
bigRectangle.getArea(3000, 2000);