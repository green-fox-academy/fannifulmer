'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

class Animal {
    constructor(){
        this.sound = 'roar'
    }
    say(){
    console.log(this.sound);
    }
}

var lion = new Animal();
lion.say();