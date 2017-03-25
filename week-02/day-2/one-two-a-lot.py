# Write a program that reads a number form the standard input,
# If the number is zero or smaller it should print: Not enough
# If the number is one it should print: One
# If the number is two it should print: Two
# If the number is more than two it should print: A lot

x = int(input("Please, enter a number: "))

if x <=0:
    print("Not enough!")
if x == 1:
    print("One")
if x == 2:
    print("Two")
if x > 2:
    print("A lot")
