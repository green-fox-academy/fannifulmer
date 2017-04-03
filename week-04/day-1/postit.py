#Post-it
#Create a PostIt class that has
#a backgroundColor
#a text on it
#a textColor
#Create a few example post-it objects:
#an orange with blue text: "Idea 1"
#a pink with black text: "Awesome"
#a yellow with green text: "Superb!"

class PostIt:
    backgroundColor = ''
    text = ''
    textColor = ''

postit1 = PostIt()
postit2 = PostIt()
postit3 = PostIt()

postit1.backgroundColor = 'orange'
postit1.text = 'Idea 1'
postit1.textColor = 'blue'
postit2.backgroundColor = 'pink'
postit2.text = 'Awesome'
postit2.textColor = 'black'
postit3.backgroundColor = 'yellow'
postit3.text = 'Superb!'
postit3.textColor = 'green'

print('Color of the post-it: ' + postit1.backgroundColor, 'Text color: ' + postit1.textColor, 'Text: ' + postit1.text)
print('Color of the post-it: ' + postit2.backgroundColor, 'Text color: ' + postit2.textColor, 'Text: ' + postit2.text)
print('Color of the post-it: ' + postit3.backgroundColor, 'Text color: ' + postit3.textColor, 'Text: ' + postit3.text)
