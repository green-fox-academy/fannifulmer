import time
from tkinter import *
root = Tk()

canvas = Canvas(root, width='600', height='600', background='black')
canvas.pack()

def create_line(x, y, z, l):
    canvas.create_line(x, y, z, l, fill ="yellow")

def treemaker(x, y, z, l):
    create_line(x, y, z, l)
    if l < 50:
        #treemaker(x, y, z, l)
        treemaker(x, y-50, z-l00, l-100)
        #treemaker(x, y, z, l)
treemaker(300, 550, 300, 500)


root.mainloop()
