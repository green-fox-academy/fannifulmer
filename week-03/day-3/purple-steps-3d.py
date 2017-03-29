from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

#def TDstair_maker(x, y):
#    square = canvas.create_rectangle(x, x, y, y, fill="purple")


for i in range(6):
    canvas.create_rectangle(10*(1.8 ** i - 1), 10*(1.8 ** i - 1), 10*(1.8 ** (i +1) - 1), 10*(1.8 ** (i +1) -1), fill="purple")
    x = 2 ** i - 1
    y = 2 ** (i +1) - 1


root.mainloop()
