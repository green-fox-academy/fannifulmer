# Check if list contains all of the following elements: 4,8,12,16
# Create a function that accepts listOfNumbers as an input
# it should return "true" if it contains all, otherwise print "false"

listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16]
list = [4, 8, 12, 16]

def numberfinder(list, listOfNumbers):
    for element in list:
        if element not in listOfNumbers:
            return False
    return True

print(numberfinder(list, listOfNumbers))
