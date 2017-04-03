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
        print('learn')
    def question(self, teacher):
        teacher.answer()
             #self.answer
class Teacher():
    def teach(self, student):
        student.learn()         #self.learn
    def answer(self):
        print('answer')

Sanyi = Student()
Bela = Teacher()
Sanyi.question(Bela)
Bela.teach(Sanyi)
