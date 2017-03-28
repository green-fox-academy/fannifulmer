# Create a method that decrypts texts/reversed_zen_order.txt
my_file = open("reversed-order.txt", "r")
my_file = my_file.readlines()

def decrypt():
    text = ""
    for i in range(1, len(my_file)+1):
        text += my_file[-i]
    return text
print(decrypt())
