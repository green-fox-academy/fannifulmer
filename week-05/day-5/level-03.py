from tkinter import *

class GameLogic():
    def __init__(self):
        root = Tk()
        canvas = Canvas(root, width = 720, height = 720)
        self.map = MapOfTheGame(root, canvas)
        self.map.draw_tiles()
        self.hero = Hero(root, canvas)
        self.hero.hero_drawer(self.hero.hero_down)
        canvas.pack()
        canvas.bind("<KeyPress>", self.on_key_press)
        canvas.focus_set()
        root.mainloop()
        
    def position_wall_checker(self, x, y):
        if -1 < x < 10 and -1 < y < 10:
            if self.map.map[y][x] == 0 or self.map.map[y][x] == 2:
                return True
            
    def on_key_press(self, e):
        self.e = e
        if self.e.keycode == 38:
            if self.position_wall_checker(self.hero.x, self.hero.y-1):
                self.hero.y = self.hero.y - 1
                self.hero.hero_drawer(self.hero.hero_up)
        elif self.e.keycode == 40:
            if self.position_wall_checker(self.hero.x, self.hero.y+1):
                self.hero.y = self.hero.y + 1  
                self.hero.hero_drawer(self.hero.hero_down)          
        elif self.e.keycode == 39:
            if self.position_wall_checker(self.hero.x+1, self.hero.y):
                self.hero.x = self.hero.x + 1
                self.hero.hero_drawer(self.hero.hero_right)  
        elif self.e.keycode == 37:
            if self.position_wall_checker(self.hero.x-1, self.hero.y):
                self.hero.x = self.hero.x - 1
                self.hero.hero_drawer(self.hero.hero_left)

class MapOfTheGame():

    def __init__(self, root, canvas):
        self.root = root
        self.canvas = canvas
                
    def draw_tiles(self):
        self.map = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,0,1,0,1,0,1,0,1],
        [0,0,1,1,1,1,1,1,1,0],
        [0,0,1,0,0,0,0,0,1,0],
        [0,0,1,1,1,1,1,1,1,0],
        [0,0,1,2,2,2,2,2,1,0],
        [0,0,1,2,2,2,2,2,1,0],
        [0,0,1,2,2,2,2,2,1,0],
        [0,1,1,1,0,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,0,0]
        ]
        self.floor_img = PhotoImage(file="whitefloor.png")
        self.wall_img = PhotoImage(file="wall.png")
        self.python_img = PhotoImage(file="pythonicon.png")
        for y in range(len(self.map)):
            for x in range(len(self.map[y])):
                if self.map[y][x] == 0:
                    self.canvas.create_image(x*72, y*72, anchor=NW, image=self.floor_img)
                elif self.map[y][x] == 2:
                    self.canvas.create_image(x*72, y*72, anchor=NW, image=self.python_img)
                else:
                    self.canvas.create_image(x*72, y*72, anchor=NW, image=self.wall_img)
                    
        
class Hero():
    def __init__(self, root, canvas):
        self.root = root
        self.canvas = canvas
        self.hero_down = PhotoImage(file="fox.png")
        self.hero_right = PhotoImage(file="fox.png")
        self.hero_left = PhotoImage(file="fox.png")
        self.hero_up = PhotoImage(file="fox.png")
        self.x = 0
        self.y = 0
        self.hero_del = 0
        self.hero_drawer(self.hero_down)

    def hero_drawer(self, hero_image):
        self.canvas.delete(self.hero_del)
        self.hero_del = self.canvas.create_image(self.x * 72, self.y *72, anchor = NW, image= hero_image)

                    
game = GameLogic()