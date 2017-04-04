'''Information on the elements

The Garden
is able to hold unlimited amount of flowers or trees
when watering it should only water those what needs water with equally divided amount amongst them
eg. watering with 40 and 4 of them need water then each gets watered with 10
The Flower
needs water if its current water amount is less then 5
when watering it the flower can only absorb the 75% of the water
eg. watering with 10 the flower's amount of water should only increase with 7.5
The Tree
needs water if its current water amount is less then 10
when watering it the tree can only absorb the 40% of the water
eg. watering with 10 the tree's amount of water should only increase with 4'''

class Garden():
    def watering(self, water_amount):
        self.watering = (water_amount)/len()


class Flower(Garden):
    def __init__(self, color, type = 'flower', water = 0):
        self.color = color
        self.type = type
        self.water = water

    def add_water(self, water = 0):
        self.water += water
        if self.water < 5:
            print("The", self.color, self.type, "needs water")
        else:
            print("The", self.color, self.type, "doesn't needs water")

    def absorb_water(self):
        self.water += (water_amount*0.75)

class Tree():
    def __init__(self, color, type = 'tree', water = 0):
        self.color = color
        self.type = type
        self.water = water

    def add_water(self, water = 0):
        if water < 10:
            print("The", self.color, self.type, "needs water")

watering = Garden()
rose = Flower('red')
lily = Flower('white')
lily.add_water()
rose.add_water()
plum = Tree('purple')
orange = Tree('orange')
plum.add_water()
orange.add_water()
print("\n")
print("Watered by 40:")
rose.add_water(40)
print(rose.water)
