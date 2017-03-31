# We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

bunny = 4
def earcal(bunny):
    if bunny == 0:
        return bunny
    else:
        return 2 + earcal(bunny-1)

print(earcal(bunny))
