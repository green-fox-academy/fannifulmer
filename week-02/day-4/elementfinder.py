# Check if the list contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

numbers = [1,2,3,4,5,6,8];

target = True
for i in range(0, len(numbers)):
    if numbers[i] == 7:
        target = False
    else:
        pass

if target == False:
    print("Hoorray")
else:
    print("Noooooo")
