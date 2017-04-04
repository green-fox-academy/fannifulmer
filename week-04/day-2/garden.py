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
    def __init__(self, color, water_amount = 0):
        self.color = color

    def watering(self, water_level):
        self.watering = (water_level)/len(needs_water)


class Flower(Garden):
    def __init__(self, color, water_amount = 0):
        self.color = color
        self.water_amount = water_amount

    def add_water(self, flower):
        if water_amount < 5:
            self.needs_water.addend(flower)

    def absorb_water(self, flower)
        needs_water = []

class Tree(Garden):
    def __init__(self, color, water_amount = 0):
        super().__init__(color, water_amount)

    def add_water(self, tree):
        if water_amount < 10:
            self.needs_water.addend(tree)
