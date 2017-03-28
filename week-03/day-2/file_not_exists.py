# write a function that takes a filename and returns the number of lines the
# file contains. It should return zero if the file does not exist.
try:
    def file_founder():
        name = input("Please select a file: ")
        my_file = open(name)
        my_file = my_file.readlines()

        x = len(my_file)
        print(x)
    file_founder()
except FileNotFoundError:
    print("0")
