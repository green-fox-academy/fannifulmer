from tkinter import *

root = Tk()
canvas = Canvas(root, width = 720, height = 720)

canvas.pack()
        

class MapOfTheGame():

    def __init__(self):
        self.root = root
        self.canvas = canvas
        self.draw_tiles()
                
    def draw_tiles(self):
        self.map = [
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
        for y in range(len(self.map)):
            for x in range(len(self.map[y])):
                if self.map[y][x] == 0:
                    self.canvas.create_image(x*72, y*72, anchor=NW, image=self.floor_img)
                else:
                    self.canvas.create_image(x*72, y*72, anchor=NW, image=self.wall_img)
                    
        
class Hero():
    def __init__(self):
        self.root = root
        self.canvas = canvas
        self.hero_down = PhotoImage(file="hero-down.png")
        self.hero_right = PhotoImage(file="hero-right.png")
        self.hero_left = PhotoImage(file="hero-left.png")
        self.hero_up = PhotoImage(file="hero-up.png")
        self.x = 0
        self.y = 0
        self.hero_del = 0
        self.hero_drawer(0, 0, self.hero_down)

    def hero_drawer(self, x, y, hero_image):
        if castle.map[y][x] == 0:
            self.canvas.delete(self.hero_del)
            self.x = x 
            self.y = y
            self.hero_del = self.canvas.create_image(self.x * 72, self.y *72, anchor = NW, image= hero_image)
        
    def on_key_press(self, e):
        self.e = e
        if self.e.keycode == 38:
            if self.y > 0:
                self.hero_drawer(self.x, self.y - 1, self.hero_up)
        elif self.e.keycode == 40:
            if self.y < 9:
                self.hero_drawer(self.x, self.y + 1, self.hero_down)          
        elif self.e.keycode == 39:
            if self.x < 9:
                self.hero_drawer(self.x + 1, self.y, self.hero_right)  
        elif self.e.keycode == 37:
            if self.x > 0:
                self.hero_drawer(self.x - 1, self.y, self.hero_left)  
                    
castle = MapOfTheGame()
hero = Hero()

canvas.bind("<KeyPress>", hero.on_key_press)
canvas.focus_set()
root.mainloop()






















