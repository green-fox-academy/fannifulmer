'''Teacher Student

Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer()'''

class Student():
    def learn(self):
        pass
    def question(self, teacher):
        teacher.answer()
             #self.answer
class Teacher():
    def __init__(self, hair):
        self.hair = hair
    def teach(self, student):
        student.learn         #self.learn
    def answer(self):
        print(self.hair)

Sanyi = Student()
Bela = Teacher('black')
Gabor = Teacher('brown')
Sanyi.question(Bela)
Sanyi.question(Gabor)
