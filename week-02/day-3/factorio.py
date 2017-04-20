# - Create a function called `factorio`
#   that returns it's input's factorial


def factorio(number):
    start = 1
    for i in range(1, number+1):
        start *= i 
    return start

print(factorio(3))
        
    
    
