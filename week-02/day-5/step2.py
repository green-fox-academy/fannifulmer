szam = 5
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
