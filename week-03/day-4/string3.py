# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

string = "thisisthestring"

def newstringadder(string):
    if string == "":
        return string
    else:
        return string[0] + "*" + newstringadder(string[1:])

print (newstringadder(string))
