# Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

n = 3
def fractal_counter(n):
    if n <= 1:
        return 1
    else:
        return n + fractal_counter(n-1)

print(fractal_counter(n))
