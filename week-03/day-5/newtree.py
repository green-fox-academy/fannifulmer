import time
import math
from tkinter import *
root = Tk()

canvas = Canvas(root, width='600', height='600', background='black')
canvas.pack()

def create_line(x1, y1, x2, y2, a):
    canvas.create_line(x1, y1, x2, y2, fill='green')


def treemaker(x1, y1, x2, y2, a):
    create_line(x1, y1, x2, y2, a)
    if a > 100:
        #time.sleep(0.08)
        treemaker(x2, y2, x2+50, y2-50, a-100)#middleline
        #treemaker(x2, y2, x2-50, y2-50, a-20)#leftline
        #treemaker(x2, y2, x2+50, y2#-50, a-20)#rightline
        canvas.update()

treemaker(300, 500, 300, 450, 300)


root.mainloop()
