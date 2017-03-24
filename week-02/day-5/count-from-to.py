# Create a program that asks for two numbers
# If the second number is not bigger than the first one it should print:
# "The second number should be bigger"
#
# If it is bigger it should count from the first number to the second by one
#
# example:
#
# first number: 3, second number: 6, should print:
#
# 3
# 4
# 5

n = int(input("Please, insert a number: "))
m = int(input("Please, insert another number: "))
if m < n:
    int(input("The second number should be bigger: "))
if m > n:
    for x in range(n, m):
        print(x)
