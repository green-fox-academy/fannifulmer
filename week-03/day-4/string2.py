# Given a string, compute recursively a new string where all the 'x' chars have been removed.

string = "sxhioxo"
def x_charremover(string):
    if string == "":
        return ""
    if string[0] == "x":
        return "" + x_charremover(string[1:])
    else:
        return string[0] + x_charremover(string[1:])

print(x_charremover(string))
