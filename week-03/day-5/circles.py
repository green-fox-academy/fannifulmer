import time
from tkinter import *
root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def makingacicle(x, y, size):
    canvas.create_oval(x, y, x+size, y+size, fill='', width = 1)

def makingmorecicles(x, y, size):
    makingacicle(x, y, size)
    if size > 50:
        time.sleep(0.10)
        makingmorecicles(x+size/4, y, size/2)
        makingmorecicles(x+size*1/8, y+size*4/8, size/2)
        makingmorecicles(x+size*1/2, y+size*1/3, size/2)
        canvas.update()
makingmorecicles(0, 0, 600)


root.mainloop()
