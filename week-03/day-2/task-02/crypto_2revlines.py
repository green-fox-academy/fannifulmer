# Create a method that decrypts texts/reversed_zen_lines.txt
my_file = open("reversed-lines.txt", "r")
my_file = my_file.readlines()

def decrypt():
    text = ""
    for i in range(0, len(my_file)):
        text += my_file[i][::-1]
    return text
print(decrypt())
