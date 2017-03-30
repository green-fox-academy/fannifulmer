import time
from tkinter import *
root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def making_a_grid():
    w = 50
    x = 0
    y = 0
    for col in range(6):
        for row in range(6):
            time.sleep(0.10)
            if (col + row) % 2 == 0:
                canvas.create_rectangle(x, y, x+w, y+w, fill='black', width = 0)
            else:
                canvas.create_rectangle(x, y, x+w, y+w, fill='white', width = 0)
            canvas.update()
            x = x + w
        y = y + w
        x = 0

making_a_grid()


root.mainloop()
