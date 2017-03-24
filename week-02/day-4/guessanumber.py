import random

x = input("Please select a range for your number guess, where should i start: ")
y = input("Please select a range for your number guess, where should i stop: ")

print (random.randrange(int(x), int(y)))
szam = input("Please add a number between your range: ")
szam = int(szam)

if szam == theszam:
    print("Good job, you are a mind reader!")
else:
    print("You should try harder")
