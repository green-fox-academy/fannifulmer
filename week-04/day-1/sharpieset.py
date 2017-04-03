'''Sharpie Set

Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
count_usable() -> sharpie is usable if it has ink in it
remove_trash() -> removes all unusable sharpies'''

class Sharpie:
     ink_amount = 100

     def __init__(self, color, width):
         self.color = str(color)
         self.width = float(width)

     def use(self):
         self.ink_amount -= 1

pinksharpie = Sharpie('pink', 0.5)
greensharpie = Sharpie('green', 10)
bluesharpie = Sharpie('blue', 20)
pinksharpie.use()

#print(pinksharpie.ink_amount)

class SharpieSet():
    def __init__(self):
        self.list_sharpies = []

    def add(self, *sharpies):
        for sharpie in sharpies:
            self.list_sharpies.append(sharpie)

    def count_usable(self):
        counter = 0
        for sharpie in self.list_sharpies:
            if sharpie.ink_amount > 0:
                counter += 1
        print(counter)

    def remove_trash():
        if ink_amount <= 0:
            return ink_amount

pinksharpie = Sharpie('pink', 0)
greensharpie = Sharpie('green', 10)
bluesharpie = Sharpie('blue', 20)

set_sharpies = SharpieSet()
set_sharpies.add(pinksharpie, greensharpie, bluesharpie)
set_sharpies.count_usable()
