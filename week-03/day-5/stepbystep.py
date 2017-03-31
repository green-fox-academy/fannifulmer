from tkinter import *
root = Tk()

canvas = Canvas(root, width='400', height='400')
canvas.pack()

def making_a_grid(x, y, w):
    for row in range(8):
        for col in range(8):
            canvas.create_rectangle(x, y, x+w, y+w, fill='', width = 1)
            x = x + w
        y = y + w
        x = 0

making_a_grid(0, 0, 50)

root.mainloop()
