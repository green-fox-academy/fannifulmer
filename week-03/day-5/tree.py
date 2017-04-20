import time
import math
from tkinter import *
root = Tk()

canvas = Canvas(root, width='600', height='600', background='black')
canvas.pack()

def create_line(x1, y1, x2, y2, a, angle_in_degrees):
    canvas.create_line(x1, y1, x2, y2, fill='green')



def treemaker(x1, y1, x2, y2, a, angle_in_degrees):

    angle= math.atan2(y2-y1, x2-x1)
    angle_in_radians = angle_in_degrees * math.pi / 180
    line_length = (x2-x1) + (y2-y1)
    center_x = 
    center_y = 250
    end_x = center_x + line_length * math.cos(angle_in_radians)
    end_y = center_y + line_length * math.sin(angle_in_radians)
    create_line(x1, y1, x2, y2, a, angle_in_degrees)

    if a > 100:
        treemaker(x1, y1, x2, y2-50, a-10, angle_in_degrees)
        #treemaker(x2, y2, x2, y2, a-10)
        #treemaker(x2, y2)
        #treemaker(x2, y2, x2+50, y2-50, a-10)

treemaker(300, 500, 300, 450, 150, 20)


root.mainloop()
