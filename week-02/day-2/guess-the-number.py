number = 8
my_answer = int(input("Try to guess my number: "))
gamerunning = True

while gamerunning:
    if my_answer > number:
        print("The stored number is lower")
        my_answer = int(input("Enter a new guess: "))
    if my_answer < number:
        print("The stored number is higher")
        my_answer = int(input("Enter a new guess: "))
    if my_answer == number:
        gamerunning = False
        print("You found the number: 8")
