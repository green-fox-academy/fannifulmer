# - Create an array variable named `ag`
#   with the following content: `[3, 4, 5, 6, 7]`
# - Double all the values in the array

ag = [3, 4, 5, 6, 7]
x = 0

while x < len(ag):
    ag[x] *= 2
    x += 1
print(ag)
