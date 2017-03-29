from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

#def checkboard (x, color):
#    bsquare = canvas.create_rectangle(x1, y1, x2, y2, fill=color)
#    wsquare = canvas.create_rectangle(x1, y1, x2, y2, fill=color)

w = 50
x = 0
y = 0

canvas.create_rectangle(x, y, w, w)
for row in range(7):
    for col in range(7):
        canvas.create_rectangle(x, y, w, w)
        x = x + w
    y = y + w
    x = 0


'''color = ["black", "white"]
x1 = 0
y1 = 0
x2 = 50
y2 = 50
x = 300
for i in range(len(color)):
    checkboard(x, color[i])
    x -= 300/len(color)
    x1 += 50
    y2 += 50

# fill the canvas with a checkerboard pattern.'''

root.mainloop()
