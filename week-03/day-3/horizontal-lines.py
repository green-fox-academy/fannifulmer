from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def horizontal_linedrawing(x, y):
    one = canvas.create_line(x, y, x+50, y, fill="red")
horizontal_linedrawing(10, 20)
horizontal_linedrawing(30, 80)
horizontal_linedrawing(40, 50)

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

root.mainloop()
