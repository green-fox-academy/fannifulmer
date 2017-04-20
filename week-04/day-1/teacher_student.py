class Student():
    def learn(self):
        print('Learn: Show me your todo app, please!')
    def question(self, teacher):
        teacher.answer()
class Teacher():
    def teach(self, student):
        student.learn()        
    def answer(self):
        print('Answer: Everything will be fine!')

Fanni = Student()
Margo = Teacher()
Fanni.question(Margo)
Margo.teach(Fanni)