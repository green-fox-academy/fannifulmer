from tkinter import *

canvas_width = 500
canvas_height = 500

root = Tk()

canvas = Canvas(root, width=canvas_width, height=canvas_height)
canvas.pack()

new_img = PhotoImage(file="floor.png")
canvas.create_image(0,0, anchor=NW, image=new_img)
img = PhotoImage(file="floor.png")
canvas.create_image(0,70, anchor=NW, image=img)    

def making_a_grid(x, y, w):
    for row in range(10):
        for col in range(10):
            img = PhotoImage(file="floor.png")
            canvas.create_image(x, y, anchor=NW, image=img)
            x = x + w
        y = y + w
        x = 0
    return img
        
making_a_grid(0, 0, 70)

root.mainloop()
