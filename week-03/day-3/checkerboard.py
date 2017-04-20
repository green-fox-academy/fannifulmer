import time
from tkinter import *
root = Tk()

canvas = Canvas(root, width='500', height='500')
canvas.pack()

def making_a_grid(x, y, w):
    for row in range(10):
        for col in range(10):
            time.sleep(0.08)
            if (col + row) % 2 == 0:
                canvas.create_rectangle(x, y, x+w, y+w, fill='white', width = 0)
            else:
                canvas.create_rectangle(x, y, x+w, y+w, fill='black', width = 0)
            canvas.update()
            x = x + w
        y = y + w
        x = 0

making_a_grid(0, 0, 50)

root.mainloop()
