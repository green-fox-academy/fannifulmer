from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def centersquare_drawing (x):
    square = canvas.create_rectangle(150-x, 150-x, x+150, x+150, fill="blue", width= 2)
centersquare_drawing(90)
centersquare_drawing(70)
centersquare_drawing(30)

# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

root.mainloop()
