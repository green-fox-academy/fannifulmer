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
    flowers_garden = []
    trees_garden = []
    
    def needs_water(self):
        plants_needs_water = 0
        
        for f in self.flowers_garden:
            if f[1] < 5:
                plants_needs_water += 1
            return plants_needs_water
        print("The", self.flowers_garden[0], "flower needs water")
        
    def watering(self, water_amount):
        self.water_amount = water_amount
        water_for_one_plant = water_amount/self.needs_water()
        for flower in self.flowers_garden:
            if flower[1] < 5:
                flower[1] += water_for_one_plant*0.75
        print("The", self.flowers_garden[0], "needs water")
            
        
    
class Flower(Garden):
    def __init__(self, color, water):
        self.color = color
        self.water = water
        self.type = type
        self.flowers_garden.append([self.color, self.water])

# class Tree(Garden):
#     def __init__(self, color, water):
#         pass
    
    
garden = Garden()
rose = Flower('red', 0)
blue = Flower('blue', 0)
garden.needs_water()
garden.watering(70)

print(garden.flowers_garden)

