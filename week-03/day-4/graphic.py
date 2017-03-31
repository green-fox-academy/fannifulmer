import time
from tkinter import *
root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def make_a_square(x, y, size):
    canvas.create_rectangle(x, y, x+size, y+size, fill='yellow')


def making_six_sguares(x, y, size):
    make_a_square(x, y, size)
    if size > 5:
        making_six_sguares(x+size/3, y, size/3)
        making_six_sguares(x+size*2/3, y+size/3, size/3)
        making_six_sguares(x, y+size/3, size/3)
        making_six_sguares(x+size/3, y+size*2/3, size/3)
        canvas.update()

making_six_sguares(0, 0, 600)

root.mainloop()
