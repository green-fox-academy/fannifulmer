# Create a method that decrypts texts/reversed_zen_order.txt
def linemaker():
    my_file = open("reversed-order.txt", "r")
    new_file = my_file.readlines()
    new_text = ""
    for i in range(1, len(new_file)+1):
        new_text += new_file[-i]
    return new_text
    
print(linemaker())
        