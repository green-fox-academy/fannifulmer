# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0
try:
    def ten_divider(divide = 10):
        x = int(input("Please insert a number: "))
        print(divide/x)
    ten_divider()
except ZeroDivisionError:
    print("Sorry, I can not work with that number!")
