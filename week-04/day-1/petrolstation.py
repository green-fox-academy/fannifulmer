'''Petrol Station

Create Station and Car classes
Station
gas_amount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gas_amount
Car
gas_amount
capacity
create constructor for Car where:
initialize gas_amount -> 0
initialize capacity -> 100'''

class Station():
    def __init__(self, sgas_amount = 0):
        self.sgas_amount = sgas_amount


    def refill(self, car):
        self.sgas_amount -= car.capacity
        car.cgas_amount += car.capacity
        print(car.cgas_amount, car.capacity)
        print(self.sgas_amount)

class Car():
    def __init__(self, cgas_amount = 0, capacity = 100):
        self.cgas_amount = cgas_amount
        self.capacity = capacity

car1 = Car()
gasstation = Station(500)

gasstation.refill(car1)
