from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')

canvas.pack()
def TDstair_maker(x, y):
    square = canvas.create_rectangle(x, x, y, y, fill="purple")

x = 10
y = 20
for i in range(6):
    TDstair_maker(x, y)
    x = y
    y += y + y/2

root.mainloop()
