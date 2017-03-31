import time
from tkinter import *
root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def make_a_square(x, y, size):
    canvas.create_rectangle(x, y, x+size, y+size, fill='', width=20)


def making_six_sguares(x, y, size):
    make_a_square(100, 100+size, 230)
    if size > 5:
        making_six_sguares(x+size/3, y, size/3)
        making_six_sguares(x+size*2/3, y+size/3, size/3)
        making_six_sguares(x, y+size/3, size/3)
        making_six_sguares(x+size/3, y+size*2/3, size/3)
        canvas.update()

making_six_sguares(0, 0, 230)

root.mainloop()
