from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()


def line_drawing(x, y):
    one = canvas.create_line(x, y, 150, 150, fill="red")
line_drawing(30, 20)
line_drawing(40, 60)
line_drawing(10, 100)

root.mainloop()
