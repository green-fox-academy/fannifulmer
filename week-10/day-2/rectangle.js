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
        return area;
    }
    getCircumference(width, height){
        var circumference = 2 * (width + height);
        return circumference;
    }
}

var bigRectangle = new Rectangle();
bigRectangle.getArea(3000, 2000);
bigRectangle.getCircumference(3000, 2000);


function rectangleFactory(width, height) {
    this.width = width;
    this.height = height;
}

rectangleFactory.prototype.getArea = function(width, height) {
    var area = width * height;
    return area;
}

rectangleFactory.prototype.getCircumference = function(width, height) {
    var circumference = 2 * (width + height);
    return circumference;
}

var smallRectangle = new rectangleFactory();
smallRectangle.getArea(4, 6);
smallRectangle.getCircumference(4, 6);