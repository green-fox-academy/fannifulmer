# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

string = "xcihofdahx"

def x_char_changer(string):
    if string == "":
        return string
    if string[0] == "x":
        return "y" + x_char_changer(string[1:])
    else:
        return string[0] + x_char_changer(string[1:])

print (x_char_changer(string))
