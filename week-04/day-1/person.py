'''Person

Create a Person class with the following fields:

name: the name of the person
age: the age of the person (whole number)
gender: the gender of the person (male / female)
And the following methods:

introduce(): prints out "Hi, I'm name, a age year old gender."
get_goal(): prints out "My goal is: Live for the moment!"
And the following constructors:

Person(name, age, gender)
Person(): sets name to Jane Doe, age to 30, gender to female'''

class Person():
    def __init__(self):
        name = ''
        age = ''
        gender = ''

    def introduce(self):
        print("Hi, I'm name, a age year old gender.")

    def get_goal(self):
        prints("My goal is: Live for the moment!")

first_person = Person()
name = 'Jane Doe'
age = 30
gender = 'female'

print()
