from tkinter import *

class Game():
    def __init__(self):
        root = Tk()
        canvas = Canvas(root, width = 720, height = 720)
        game = MapOfTheGame(root, canvas)
        game.draw_tiles()
        hero = Hero(root, canvas)
        canvas.pack()
        canvas.bind("<KeyPress>", hero.on_key_press)
        canvas.focus_set()
        root.mainloop()
        

class MapOfTheGame():

    def __init__(self, root, canvas):
        self.root = root
        self.canvas = canvas
                
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
                    
class Hero():
    def __init__(self, root, canvas):
        self.root = root
        self.canvas = canvas
        self.hero_down = PhotoImage(file="hero-down.png")
        self.hero_right = PhotoImage(file="hero-right.png")
        self.hero_left = PhotoImage(file="hero-left.png")
        self.hero_up = PhotoImage(file="hero-up.png")
        self.x = 0
        self.y = 0
        self.hero_del = 0
        self.hero_drawer(self.hero_down)

    def hero_drawer(self, hero_image):
        self.canvas.delete(self.hero_del)
        self.hero_del = self.canvas.create_image(self.x, self.y, anchor = NW, image= hero_image)
        
    def on_key_press(self, e):
        self.e = e
        if self.e.keycode == 38:
            if self.y > 0:
                self.y = self.y - 72
                self.hero_drawer(self.hero_up)
        elif self.e.keycode == 40:
            if self.y < 648:
                self.y = self.y + 72  
                self.hero_drawer(self.hero_down)          
        elif self.e.keycode == 39:
            if self.x < 648:
                self.x = self.x + 72
                self.hero_drawer(self.hero_right)  
        elif self.e.keycode == 37:
            if self.x > 0:
                self.x = self.x - 72
                self.hero_drawer(self.hero_left)  
        
            
                    
game = Game()