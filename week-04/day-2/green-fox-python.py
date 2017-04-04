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
    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female'):
        self.name = name
        self.age = age
        self.gender = gender

    def introduce(self):
        print("Hi, I'm", self.name, "a", self.age, "year old", self.gender)

    def get_goal(self):
        print("My goal is: Live for the moment!")

jane = Person()
jane.introduce()
jane.get_goal()


'''Student

Create a Student class that has the same fields and methods as the Person class, and has the following additional

fields:
previous_organization: the name of the student’s previous company / school
skipped_days: the number of days skipped from the course
methods:
get_goal(): prints out "Be a junior software developer."
introduce(): "Hi, I'm name, a age year old gender from previous_organization who skipped skipped_days days from the course already."
skip_days(number_of_days): increases skipped_days by number_of_days
The Student class has the following constructors:

Student(name, age, gender, previous_organization): beside the given parameters, it sets skipped_days to 0
Student(): sets name to Jane Doe, age to 30, gender to female, previous_organization to The School of Life, skipped_days to 0'''

class Student(Person):

    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female', previous_organization = 'The School of Life', skipped_days = 0):
        super().__init__(name, age, gender)
        self.previous_organization = previous_organization
        self.skipped_days = skipped_days

    def get_goal(self):
        print("Be a junior software developer.")

    def introduce(self):
        print("Hi, I'm", self.name, "a", self.age, "year old", self.gender, "from previous_organization", self.previous_organization, "who skipped", skipped_days, "days from the course already." )

'''Mentor

Create a Mentor class that has the same fields and methods as the Personclass, and has the following additional

fields:
level: the level of the mentor (junior / intermediate / senior)
methods:
get_goal(): prints out "Educate brilliant junior software developers."
introduce(): "Hi, I'm name, a age year old gender level mentor."
The Mentor class has the following constructors:

Mentor(name, age, gender, level)
Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate'''

class Mentor(Person):
    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate'):
        super().__init__(name, age, gender)
        self.level = level

    def get_goal(self):
        print("Educate brilliant junior software developers.")

    def introduce(self):
        print("Hi, I'm", self.name, "a", self.age, "year old", self.gender, self.level, "mentor.")


'''Sponsor

Create a Sponsor class that has the same fields and methods as the Personclass, and has the following additional

fields:
company: name of the company
hired_students: number of students hired
method:
introduce(): "Hi, I'm name, a age year old gender who represents company and hired hired_students students so far."
hire(): increase hired_students by 1
get_goal(): prints out "Hire brilliant junior software developers."
The Sponsor class has the following constructors:

Sponsor(name, age, gender, company): beside the given parameters, it sets hired_students to 0
Sponsor(): sets name to Jane Doe, age to 30, gender to female, company to Google and hired_students to 0'''

#class Sponsor(Person):
