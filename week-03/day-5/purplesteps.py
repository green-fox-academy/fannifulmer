import time
from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def stair_maker(x, y):
    square = canvas.create_rectangle(x, x, y, y, fill="purple")


def makingmorecicles(x, y):
    stair_maker(x, y)
    if x > 50:
        time.sleep(0.10)
        makingmorecicles(x+10, y+10)

makingmorecicles(10, 20)

'''x = 10
y = 20
for i in range(19):
    time.sleep(0.10)
    stair_maker(x, y)
    x = y
    y += 10
    canvas.update()
root.mainloop()'''
