# Create a method that decrypts texts/encoded_zen_lines.txt
my_file = open("encoded-lines.txt", "r")
my_file = my_file.read()

def decrypt():
    text =""
    for i in my_file:
        if i == '\n':
            text += '\n'
        if i == ' ':
            text += ' '
        else:
            i = ord(i) -1
            i = chr(i)
            text += i
    return text
print(decrypt())
