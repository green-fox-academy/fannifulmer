from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

one = canvas.create_line(15, 10, 15, 80)
two = canvas.create_line(15, 10, 80, 10, fill= "yellow")
tree = canvas.create_line(80, 10, 80, 80, fill= "red")
four = canvas.create_line(80, 80, 15, 80, fill= "blue")
#box = canvas.create_rectangle(20, 20, 160, 80, outline="red")
# draw a box that has different colored lines on each edge.

root.mainloop()
