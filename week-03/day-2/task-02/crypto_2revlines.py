# Create a method that decrypts texts/reversed_zen_lines.txt
def reverse_lines():
    my_file = open ("reversed-lines.txt", "r")
    new_file = my_file.readlines()
    new_text = ""
    for i in range(0, len(new_file)):
        new_text += new_file[i][::-1]
    return new_text

print(reverse_lines())
