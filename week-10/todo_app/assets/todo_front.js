'use strict';

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