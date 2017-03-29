from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

one = canvas.create_rectangle(10, 10, 120, 160, fill="green")
two = canvas.create_rectangle(120, 10, 50, 160, fill="pink")
three = canvas.create_rectangle(100, 100, 80, 90, fill="purple")
four = canvas.create_rectangle(150, 150, 160, 160, fill="grey")
# draw four different size and color rectangles.

root.mainloop()
