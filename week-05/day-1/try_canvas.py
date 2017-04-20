from tkinter import *

# class Game():
#     def __init__():
#         root = Tk()
#         canvas = Canvas(root, width = 720, height = 720)
#         
#         game = MapOfTheGame()
#         game.draw_tiles()
#         
#         

class MapOfTheGame():

    def __init__(self, width, height):
        self.root = Tk()
        self.width = width
        self.height = height
        self.canvas = Canvas(self.root, width=self.width, height=self.height)
        self.canvas.pack()

        self.draw_tiles()
        self.hero_runner()
        self.root.mainloop()

                
    def draw_tiles(self):
        map = [
        [0,0,0,1,0,0,0,0,0,0],
        [0,0,0,1,0,0,1,0,0,0],
        [0,0,1,1,0,0,1,0,0,0],
        [0,0,0,0,0,0,1,0,0,0],
        [1,1,1,1,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0,0],
        [0,0,0,1,0,0,1,1,0,0],
        [0,0,0,1,0,0,1,1,0,0],
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
        
    def hero_runner(self):
        self.hero_img = PhotoImage(file="hero-down.png")
        self.canvas.create_image(self.x, self.y, anchor=NW, image=self.hero_img)
        
        self.x = 0
        self.y = 0
        self.e = e
        if e.keycode == 38:
            if self.y > 0:
                self.y = self.y - 72
            else:
                self.y = self.y
        elif e.keycode == 40:
            if self.y > 0:
                self.y = self.y + 72
        elif e.keycode == 39:
            if self.x > 0:
                self.x = self.x + 100
        elif e.keycode == 37:
            if self.x > 0:
                self.x = self.x - 100
            
                    
game = MapOfTheGame(720, 720)

        
        
    # def on_key_press(self, e):
    # self.testBoxX = 300
    # self.testBoxY = 300
    # self.e = e
    #     if e.keycode == 38:
    #         if box.testBoxY > 0:
    #             box.testBoxY = box.testBoxY - 100
    #         else:
    #             box.testBoxY = box.testBoxY
    #     elif e.keycode == 40:
    #         box.testBoxY = box.testBoxY + 100
    #     elif e.keycode == 39:
    #         box.testBoxX = box.testBoxX + 100
    #     elif e.keycode == 37:
    #         box.testBoxX = box.testBoxX - 100
        
characters = Character()
    



