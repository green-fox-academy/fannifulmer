import shutil
import sys
# # print text z times
# z = 4
# text = 'Gold'
# for i in range(z):
#     print(text)
#     
# # print all the elements of aa
# aa = [4, 5, 6, 7]
# new_line=[]
# for i in range(len(aa)-1, -1, -1):
#     new_line.append(aa[i])
# print(new_line)
# 
# # Tell if the s has even or odd number of
# # characters with a True for even and
# # false False output otherwise
# s = 'cheese'
# if len(s) % 2 == 0:
#     print(len(s)%2 == 0)
# else: 
#     print(True)
# print(len(s) % 2 == 0)
# 
# # print the sum of all numbers in ad
# # if the last and the first letter of the string
# # are the same double the variable
# # called out, if not half it
# t = 'seasons'
# out = 6
# if t[0] == t[len(t)-1]:
#     out *= 2
# else:
#     out /= 2
# print(out)
# 
# ad = [3, 4, 5, 6, 7]
# sum = 0
# for i in ad:
#     sum += i
# print(sum)
# 
# ac = ['kuty', 'macsk', 'cic']
# 
# for i in range(len(ac)):
#     ac[i] += ('a')
# print (ac)
# 
# # create a function that greets ae
# ae = 'Jozsi'
# def greeting(ae):
#     print('hello', ae)
# greeting(ae)
# 
# # write a function that gets a string as an input
# # and appends an 'a' character to its end
# ag = 'kuty'
# def appender(ag):
#     print(ag + 'a')
# appender(ag)
# # add to all elements an 'a' on the end
# ag2 = ['rep', 'macsk', 'cic', 'alm', 'Ann', 'kacs']
# 
# def appender(ag2):
#     for i in range(len(ag2)):
#         ag2[i] += 'a'
#     return ag2
#         
# print(appender(ag2))
# 
# # write your own sum function    
# numbers = [4, 5, 6, 7, 8, 9, 10]
# 
# def sum_elements(numbers):
#     sum = 0
#     for i in numbers:
#         sum += i
#     return sum
# print(sum_elements(numbers))
# 
# # write a function that reverses a list
# sumnumb = [3, 4, 5, 6, 7]
# def number_reverser(sumnumb):
#     new_numbers = []
#     for i in range(len(sumnumb)-1, -1, -1):
#         new_numbers.append(sumnumb[i])
#     return new_numbers
# print(number_reverser(sumnumb))
# 
# # write a function that filters the odd numbers
# # from a list and returns a new list consisting
# # only the evens(páros)
# filternum = [3, 4, 5, 6, 7, 8, 9, 10, 10, 10]
# 
# def odd_filter(filternum):
#     newlist = []
#     for i in range(len(filternum)):
#         if filternum[i] % 2 == 0:
#             newlist.append(filternum[i])
#     return newlist
# print(odd_filter(filternum))
# 
# # Write a function that returns the minimal element
# # in a list (your own min function)
#         
# minnum = [7, 5, 8, -1, 2]
# 
# def minimal(minnum):
#     new_min = 0
#     for i in minnum:
#         while i < new_min:
#             new_min = i
#     return new_min
#     
# print(minimal(minnum))
# 
# # create a function that returns the shortest string
# # from a list
#     
# names = ['Zakarias', 'Hans', 'Otto', 'Ole']
# 
# def shortest_string(names):
#     line = names[0]
#     for i in names:
#         if len(i) < len(line):
#             line = i
#     return line
#     
# print(shortest_string(names))
# 
# # create a function that takes a list of students,
# # then returns how many candies are own by students
# # under 10
# students = [
#         {'name': 'Rezso', 'age': 9.5, 'candies': 2},
#         {'name': 'Gerzson', 'age': 10, 'candies': 1},
#         {'name': 'Aurel', 'age': 7, 'candies': 3},
#         {'name': 'Zsombor', 'age': 12, 'candies': 5}
# ]
# 
# def student_counter(students):
#     candy_count = 0
#     for i in students:
#         if i['age'] < 10:
#             candy_count += i['candies']
#     return candy_count
# 
# print(student_counter(students))
# 
# # create a function that counts the students that
# # has more than 4 candies
# students2 = [
#         {'name': 'Rezso', 'age': 9.5, 'candies': 2},
#         {'name': 'Gerzson', 'age': 10, 'candies': 1},
#         {'name': 'Aurel', 'age': 7, 'candies': 3},
#         {'name': 'Zsombor', 'age': 12, 'candies': 5},
#         {'name': 'Olaf', 'age': 12, 'candies': 7},
#         {'name': 'Teodor', 'age': 3, 'candies': 2}
# ]
# 
# def candy_counter(students2):
#     number_of_students = 0
#     for student in students2:
#         if student['candies'] > 4:
#             number_of_students += 1
#     return number_of_students
# 
# print(candy_counter(students2))

# filename = 'alma.txt'
# # write a function that reads a file and prints how many
# # lines and characters in it_
# def file_line_char_counter(filename):
#     file = open("alma.txt", "r")
#     file_read = file.read()
#     line_count = len(file_read.split('\n'))
#     char_count = 0
#     for i in file_read:
#         if i != '\n':
#             char_count += 1
#     file.close()
#     return [line_count, char_count]
#     
# print(file_line_char_counter(filename))
# 
# # create a function that prints the content of the
# # file given in the input
# def file_reader(filename):
#     file = open("alma.txt", "r")
#     file_read = file.read()
#     file.close()
#     return file_read
# print(file_reader(filename))
# 
# filename = 'alma.txt'
# # create a function that reads a file and prints it's
# # lines, also it should prepend an 'A' character
# # to each line
# def a_prepender(filename):
#     file = open(filename, "r")
#     file_read = file.readlines()
#     output = ""
#     for i in file_read:
#         output += 'A' + i
#     file.close()
#     return output
# 
# print(a_prepender(filename))
# 
# #Write the numbers from 1 to 10 to the file stored in filename
# new_filename = 'korte.txt'
# nfile = open(new_filename, 'w')
# for i in range(1, 11):
#     nfile.write(str(i) + '\n')
# nfile.close()

# create a pirate class
# it should have 2 methods
# drink_rum()
# hows_goin_mate()
# if the drink_rum was called at least 5 times:
# hows_goin_mate should return "Arrrr!"
# "Nothin'" otherwise

# class Pirate():
#     def __init__(self):
#         self.drunkness = 0
#         
#     def drink_rum(self):
#         self.drunkness += 1
#     
#     def hows_goin_mate(self):
#         if self.drunkness >= 5:
#             return "Arrrr!" 
#         else:
#             return "Nothin'"
#             
# pirate = Pirate()
# pirate.drink_rum()
# pirate.drink_rum()
# pirate.drink_rum()
# pirate.drink_rum()
# pirate.drink_rum()
# print(pirate.hows_goin_mate())
# 
# # create a Class called FileLines
# 
# # class FileLines():
# #     def __init__(self, filename):
# #         file = open("alma.txt", "r")
# #         self.line = file.readlines()
# #         
# #     def get_last(self):
# #         return self.get_nth(-1)
# #         
# #     def get_first(self):
# #         return self.get_nth(0)
# #     
# #     def get_nth(self, n):
# #         return self.line[n]
# #         
# #         
# # lines = FileLines('alma.txt')
# #     
# # print(lines.get_last()) #<- returns the last line of the file
# # print(lines.get_first()) #<- returns the fitst line of the file
# # print(lines.get_nth(2)) #<- returns the nth line given in the argument
# 
# 
# # Create a student Class
# # that has a method `add_grade`, that takes a grade from 1 to 5
# # an other method `get_average`, that returns the average of the
# # grades
# 
# class Student():
#     def __init__(self):
#         self.grade = []
#         
#     def add_grade(self, grade):
#         self.grade.append(grade)
#         
#     def get_average(self):
#         return sum(self.grade) / len(self.grade)
#         
# 
# student = Student()
# student.add_grade(4)
# student.add_grade(4)
# student.add_grade(5)
# print(student.get_average())   
# 
# 
# # create a Student class that stores grades and the student name
# # it should have add_grade method
# # also a get_average method
# 
# # create a Class class that contains students
# # it should have an add_student method
# # also a get_average method
# # it should also have a get_names method
# 
# class Student():
#     def __init__(self, name):
#         self.name = name
#         self.student_grade = []
#         
#     def add_grade(self, grade):
#         self.student_grade.append(grade)
#         
#     def get_average(self):
#         return sum(self.student_grade) / len(self.student_grade)
#         
# class Class():
#     def __init__(self):
#         self.students = []
#         
#     def add_student(self, student):
#         self.students.append(student)
#     
#     def get_average(self):
#         summ = 0
#         for student in self.students:
#             summ += student.get_average()
#         return summ / len(self.students)
#         
#     def get_names(self):
#         names = []
#         for student in self.students:
#             names.append(student.name)
#         return names
#     
#     
# my_class = Class()
# 
# kati = Student('Kati')
# kati.add_grade(5)
# kati.add_grade(5)
# kati.add_grade(4)
# my_class.add_student(kati)
# jozsi = Student('Jozsi')
# jozsi.add_grade(3)
# jozsi.add_grade(2)
# jozsi.add_grade(1)
# my_class.add_student(jozsi)
# anti = Student('Antal')
# anti.add_grade(5)
# anti.add_grade(5)
# anti.add_grade(3)
# my_class.add_student(anti)
# 
# print(my_class.get_average())
# print(my_class.get_names())
# 
# # Create a Rectangle class
# # It should take a, b as the length of the sides as arguments on the constructor
# # It should have a get_perimeter method that returns the perimeter of the Rectangle
# # It should have a get_aera method that returns the aera of thi Rectangle
# 
# class Rectangle():
#     def __init__(self, a, b):
#         self.a = a 
#         self.b = b 
#     
#     def get_perimeter(self):
#         return 2*(self.a + self.b)
#     
#     def get_aera(self):
#         return self.a*self.b
# 
# rect = Rectangle(20, 40)
# print(rect.get_perimeter())
# print(rect.get_aera())
# 
# 
# # Queue of festivalgoers at entry
# # no. of alcohol units
# # no. of guns
# 
# # Create a security_check function that returns a list of festivalgoers who can enter the festival
# 
# # If guns are found, remove them and put them on the watchlist (only the names)
# # If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival
# 
# queue = [
# { 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
# { 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
# { 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
# { 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
# { 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
# { 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
# { 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
# ]
# 
# def security_check(queue):
#     can_enter = []
#     watchlist = []
#     security_alchol_loot = 0
#     
#     for person in queue:
#         if person['alcohol'] == 0 and person['guns'] == 0:
#             can_enter.append(person)
#         if person['guns'] > 0:
#             watchlist.append(person['name'])
#         if person['alcohol'] > 0:
#             security_alchol_loot += person['alcohol']
#             person['alcohol'] = 0
#     return can_enter, watchlist, security_alchol_loot
#             
# print(security_check(queue))
# 
# students = [
#         {'name': 'Teodor', 'age': 3, 'candies': 2},
#         {'name': 'Rezso', 'age': 9.5, 'candies': 2},
#         {'name': 'Zsombor', 'age': 12, 'candies': 5},
#         {'name': 'Aurel', 'age': 7, 'candies': 3},
#         {'name': 'Olaf', 'age': 12, 'candies': 7},
#         {'name': 'Gerzson', 'age': 10, 'candies': 1},
# ]
# 
# # create a function that takes a list of students and prints: 
# # - how many candies are owned by students
# 
# # create a function that takes a list of students and prints:
# # - Sum of the age of people who have lass than 5 candies
# 
# def candy_counter(students):
#     candy = 0
#     for student in students:
#         candy += student['candies']
#     return candy
# 
# print(candy_counter(students))
# 
# def cany_and_age_counter(students):
#     age = 0
#     for student in students:
#         if student['candies'] < 5:
#             age += student['age']
#     return age
# 
# print(cany_and_age_counter(students))
# 
# 
# 
# 
# # create a function that takes a list of students and prints:
# # - Who has got more candies than 4 candies
# 
# # create a function that takes a list of students and prints: 
# #  - how many candies they have on average
# students2 = [
# {'name': 'Rezso', 'age': 9.5, 'candies': 2},
# {'name': 'Gerzson', 'age': 10, 'candies': 1},
# {'name': 'Aurel', 'age': 7, 'candies': 3},
# {'name': 'Zsombor', 'age': 12, 'candies': 5}
# ]
# 
# def more_than_four_candies(students):
#     student_with_candies = []
#     for student in students:
#         if student['candies'] > 4:
#             student_with_candies.append(student['name'])
#     return student_with_candies
# print(more_than_four_candies(students2))
# 
# def candy_average_counter(students):
#     candies = 0
#     for student in students:
#         candies += student['candies']
#     return candies / len(students2)
#     
# print(candy_average_counter(students2))
# 
# 
# # Create function that returns the name and balance of cash on an account
# 
# # Create function that transfers an balance of cash from one account to another
# # it should have three parameters:
# #  - from account_number
# #  - to account_number
# #  - balance
# #
# # Print "404 - account not found" if any of the account numbers don't exist
# #         
# accounts = [
# { 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
# { 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
# { 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
# ]
# 
# # def bank_balance_checker():
# #     for costumer in accounts:
# #         print(costumer['client_name'],':', costumer['balance'])
# #         
# # bank_balance_checker()
# def validator(fromac, toacc):
#     for account in accounts:
#         if toacc == account['account_number']:
#             return True
#     
# 
# def money_transfer(fromac, toacc, money_ammount):
#     if validator(fromac, toacc):
#         for client in accounts:
#             if client['account_number'] == fromac:
#                 client['balance'] = client['balance'] - money_ammount
#                 print(client['balance'])
#             if client['account_number'] == toacc:
#                 client['balance'] = client['balance'] + money_ammount
#                 print(client['balance'])
#     else:
#         print("404 - account not found")
# money_transfer(23456311, 43546731, 5000)
    

if len(sys.argv) !=3:
    print('usage: filecopy source destination')
else:
    try:
        shutil.copyfile(sys.argv[1], sys.argv[2])
    except IOError:
        print('source file does not exist')
        
import shutil
import os.path
src = ""
dst = ""
instance = ""
print("What is the name of the instance?:")
instance = input()
src = "C:\\Users\\luke\\Documents\\MultiMC\\instances\\"+instance
print(src)
dst = "C:\\Users\\luke\\Dropbox\\Luke's Uploads"
if (os.path(src)):
   shutil.move(src, dst)
else:
    print("That instance doesn't exist!")

            
        
         
    
             

