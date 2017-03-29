from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def stair_maker(x, y):
    square = canvas.create_rectangle(x, x, y, y, fill="purple")

x = 10
y = 20
for i in range(19):
    stair_maker(x, y)
    x = y
    y += 10

root.mainloop()
