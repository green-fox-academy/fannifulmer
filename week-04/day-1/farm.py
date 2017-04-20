'''Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal'''

class Animal():
    hunger = 50
    thirst = 50

    def eat(self):
        self.hunger -= 1

    def drink(self):
        self.thirst -= 1

    def play(self):
        self.thirst += 1
        self.hunger += 1
        
class Farm():
    
    def slaughter():
        
    def breed():

zebra = Animal()
zebra.eat()
zebra.drink()
print(zebra.hunger)
print(zebra.thirst)