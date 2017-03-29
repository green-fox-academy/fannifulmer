from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def square_drawing(x, y):
    square = canvas.create_rectangle(x, y, x+50, y+50, fill="red")
square_drawing(30, 40)
square_drawing(120, 120)
square_drawing(90, 10)

# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.

root.mainloop()
