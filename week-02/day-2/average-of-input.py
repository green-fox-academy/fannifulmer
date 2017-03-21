# Write a program that asks for 5 integers in a row,
# then it should print the sum and the average of these numbers like:
#
# Sum: 22, Average: 4.4

num1 = int(input("Please enter a number "))
num2 = int(input("Please enter a number "))
num3 = int(input("Please enter a number "))
num4 = int(input("Please enter a number "))
num5 = int(input("Please enter a number "))

sum = num1 + num2 + num3 + num4 + num5
av = sum / 5
print("Sum:", sum)
print("Average:", av)
