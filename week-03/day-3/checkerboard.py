from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def checkboard (x, color):
    bsquare = canvas.create_rectangle(x1, y1, x2, y2, fill=color)
    wsquare = canvas.create_rectangle(x1, y1, x2, y2, fill=color)

color = ["black", "white"]
x1 = 0
y1 = 0
x2 = 50
y2 = 50
x = 300
for i in range(len(color)):
    checkboard(x, color[i])
    x -= 300/x
    x1 += 50
    y2 += 50

# fill the canvas with a checkerboard pattern.

root.mainloop()
