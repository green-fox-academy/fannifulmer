from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def centersquare_drawing (x, color):
    square = canvas.create_rectangle(150-(x/2), 150-(x/2), (x/2)+150, (x/2)+150, fill=color)
#centersquare_drawing(90, 'blue')
#centersquare_drawing(70, 'red')
#centersquare_drawing(30, 'black')

color = ["red", "orange", "yellow", "green", "blue", "purple", "violet"]
x = 300
for i in range(len(color)):
    centersquare_drawing(x, color[i])
    x -= 300/len(color)






# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

root.mainloop()
