# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0
try:
    x = int(input("Please insert a number: "))
    print(10/x)

except ZeroDivisionError:
     print("Sorry, I can not work with that number!")
