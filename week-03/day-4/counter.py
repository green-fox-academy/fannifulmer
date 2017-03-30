# Write a recursive function that takes one parameter: n and counts down from n.

n = 3
def fractal_counter(n):
    print(n)
    if n == 0:
        return n
    else:
        return n, fractal_counter(n-1)

(fractal_counter(n))
