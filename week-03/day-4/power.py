# Given base and n that are both 1 or more, compute recursively (no loops)
# the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

base = 2
exp = 5

def power(base, exp):
    if exp == 1:
        return base
    else:
        return base * power(base, exp-1)

print(power(base, exp))
