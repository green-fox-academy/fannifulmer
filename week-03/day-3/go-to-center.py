from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()


def line_drawing(x, y):
    one = canvas.create_line(x, y, 150, 150, fill="red")
line_drawing(30, 20)

def line_drawing(z, s):
    two = canvas.create_line(z, s, 150, 150, fill="green")
line_drawing(20, 40)

def line_drawing(f, h):
    two = canvas.create_line(f, h, 150, 150, fill="purple")
line_drawing(70, 10)

root.mainloop()
