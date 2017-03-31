import time
from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def centersquare_drawing (x, color):
    square = canvas.create_rectangle(150-(x/2), 150-(x/2), (x/2)+150, (x/2)+150, fill=color)

color = ["red", "orange", "yellow", "green", "blue", "purple", "violet"]
x = 300
for i in range(len(color)):
    time.sleep(0.50)
    centersquare_drawing(x, color[i])
    x -= 300/len(color)
    canvas.update()
root.mainloop()
