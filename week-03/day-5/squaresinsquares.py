import time
from tkinter import *
root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def make_a_square(x, y, size, width):
    canvas.create_rectangle(x, y, x+size, y+size, fill='', width=20)


def making_six_sguares(x, y, size, width):
    make_a_square(x, y, size, width)
    if size > 20:
        making_six_sguares(x*2, y*2, size/3, width/2)
        #making_six_sguares(x+size*2/3, y+size/3, size/3, width-4)
        #making_six_sguares(x, y+size/3, size/3, width-8)
        #making_six_sguares(x+size/3, y+size*2/3, size/3, width-16)
        #canvas.update()

making_six_sguares(170, 170, 230, 20)

root.mainloop()
