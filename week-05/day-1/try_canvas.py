from tkinter import *

class GameLogic():

    def __init__(self, width, height):
        self.root = Tk()
        self.width = width
        self.height = height
        self.canvas = Canvas(self.root, width=self.width, height=self.height)
        self.canvas.pack()

        self.draw_tiles()
        self.root.mainloop()
        
    # def draw_tile(self):
    #     self.new_img = PhotoImage(file="floor.png")
    #     for row in range(10):
    #         for col in range(10):
    #             self.canvas.create_image(row*60, col*60, anchor=NW, image=self.new_img)
                
    def draw_tiles(self):
        map = [
        [0,0,0,1,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
        ]
        self.floor_img = PhotoImage(file="floor.png")
        self.wall_img = PhotoImage(file="wall.png")
        for row in range(len(map)):
            for cell in range(len(map[row])):
                if map[cell][row] == 0:
                    self.canvas.create_image(row*72, cell*72, anchor=NW, image=self.floor_img)
                else:
                    self.canvas.create_image(row*72, cell*72, anchor=NW, image=self.wall_img)
                    
game = GameLogic(720, 720)



