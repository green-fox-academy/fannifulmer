# Create a method that decrypts texts/encoded_zen_lines.txt
my_file = open("encoded-lines.txt", "r")
my_file = my_file.readlines()
newfile = []

for line in my_file:
   for c in line:
       newfile.append(c)
       #newfile += ord(i)
#for i in range(1, len(my_file)):
    #newfile += ord(i)
    #my_file = my_file.split
    #newfile += ord(my_file)
#x = ord("a")
print(newfile)
#def decrypt(file_name):
#    pass
