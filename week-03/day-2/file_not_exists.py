# write a function that takes a filename and returns the number of lines the
# file contains. It should return zero if the file does not exist.

#the_file = input("Please select a file: ")
my_file = open("duplicated-chars.txt")
my_file = my_file.readlines()

x = len(my_file)
print(x)
