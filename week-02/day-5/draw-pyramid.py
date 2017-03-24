# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was

x = int(input("Please insert a number, so i can draw a pyramid for you: "))

space = " "
star = "*"
star = x * "*"
for i in range(0, x-1):

    print(star + space)
