# x = input("Who should I say hello to? ")
# print("Hello",x)

z = 4
text = 'Gold'
for i in range(z):
    print(text)
    
# print all the elements of aa
aa = [4, 5, 6, 7]
new_line=[]
for i in range(len(aa)-1, -1, -1):
    new_line.append(aa[i])
print(new_line)

# Tell if the s has even or odd number of
# characters with a True for even and
# false False output otherwise
s = 'cheese'
if len(s) % 2 == 0:
    print(len(s)%2 == 0)
else: 
    print(True)
print(len(s) % 2 == 0)

# print the sum of all numbers in ad
# if the last and the first letter of the string
# are the same double the variable
# called out, if not half it
t = 'seasons'
out = 6
if t[0] == t[len(t)-1]:
    out *= 2
else:
    out /= 2
print(out)

ad = [3, 4, 5, 6, 7]
sum = 0
for i in ad:
    sum += i
print(sum)

ac = ['kuty', 'macsk', 'cic']

for i in range(len(ac)):
    ac[i] += ('a')
print (ac)

# create a function that greets ae
ae = 'Jozsi'
def greeting(ae):
    print('hello', ae)
greeting(ae)

# write a function that gets a string as an input
# and appends an 'a' character to its end
ag = 'kuty'
def appender(ag):
    print(ag + 'a')
appender(ag)
# add to all elements an 'a' on the end
ag2 = ['rep', 'macsk', 'cic', 'alm', 'Ann', 'kacs']

def appender(ag2):
    for i in range(len(ag2)):
        ag2[i] += 'a'
    return ag2
        
print(appender(ag2))

# write your own sum function    
numbers = [4, 5, 6, 7, 8, 9, 10]

def sum_elements(numbers):
    sum = 0
    for i in numbers:
        sum += i
    return sum
print(sum_elements(numbers))

# write a function that reverses a list
sumnumb = [3, 4, 5, 6, 7]
def number_reverser(sumnumb):
    new_numbers = []
    for i in range(len(sumnumb)-1, -1, -1):
        new_numbers.append(sumnumb[i])
    return new_numbers
print(number_reverser(sumnumb))

# write a function that filters the odd numbers
# from a list and returns a new list consisting
# only the evens(páros)
filternum = [3, 4, 5, 6, 7, 8, 9, 10, 10, 10]

def odd_filter(filternum):
    newlist = []
    for i in range(len(filternum)):
        if filternum[i] % 2 == 0:
            newlist.append(filternum[i])
    return newlist
print(odd_filter(filternum))

# Write a function that returns the minimal element
# in a list (your own min function)
        
minnum = [7, 5, 8, -1, 2]

def minimal(minnum):
    new_min = 0
    for i in minnum:
        while i < new_min:
            new_min = i
    return new_min
    
print(minimal(minnum))

# create a function that returns the shortest string
# from a list
    
names = ['Zakarias', 'Hans', 'Otto', 'Ole']

def shortest_string(names):
    line = names[0]
    for i in names:
        if len(i) < len(line):
            line = i
    return line
    
print(shortest_string(names))

# create a function that takes a list of students,
# then returns how many candies are own by students
# under 10
students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

def student_counter(students):
    candy_count = 0
    for i in students:
        if i['age'] < 10:
            candy_count += i['candies']
    return candy_count

print(student_counter(students))

# create a function that counts the students that
# has more than 4 candies
students2 = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Teodor', 'age': 3, 'candies': 2}
]

def candy_counter(students2):
    number_of_students = 0
    for student in students2:
        if student['candies'] > 4:
            number_of_students += 1
    return number_of_students

print(candy_counter(students2))
        


    