# Given a non-negative int n, return the sum of its digits recursively (no loops).
# Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while
# divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

n = 126
def sumdigit(n):
    if n <= 1:
        return 1
    else:
        return (n % 10) + sumdigit(n//10)

print(sumdigit(n))
#(n % 10) + ((n // 10)//10) + ((n // 10) % 10)
