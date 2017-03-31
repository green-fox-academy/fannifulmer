import time
from tkinter import *
root = Tk()

canvas = Canvas(root, width='400', height='400')
canvas.pack()

def making_a_grid(x, y, w):
    for row in range(8):
        for col in range(8):
            time.sleep(0.09)
            if (col + row) % 2 == 0:
                canvas.create_rectangle(x, y, x+w, y+w, fill='#3cb879',outline='white', width = 1)
            else:
                canvas.create_rectangle(x, y, x+w, y+w, fill='#017335', width = 1)
            canvas.update()
            x = x + w
        y = y + w
        x = 0

making_a_grid(0, 0, 50)

root.mainloop()
