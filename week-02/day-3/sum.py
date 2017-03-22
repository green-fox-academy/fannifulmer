# - Write a function called `sum` that sum all the numbers
#   until the given parameter


def sum(number):
    start = 0
    for n in range(1, number+1):
        start += n
    return start

print(sum(5))
