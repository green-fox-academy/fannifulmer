import random
x = input("Please select a range for your number guess, where should i start: ")
y = input("Please select a range for your number guess, where should i stop: ")

szam = random.randrange(int(x), int(y))
print("Your range will be between ", int(x),"-", int(y))
tipp = int(input("Please type in a number: "))
gamerunnig = True

while gamerunnig:
    if tipp > szam:
        print("That is too big!")
        tipp = int(input("Insert a smaller number! "))
    if tipp < szam:
        print("That is too small!")
        tipp = int(input("Insert a bigger number: "))
    if tipp == szam:
        gamerunnig = False
        print("You are a mind reader!")
