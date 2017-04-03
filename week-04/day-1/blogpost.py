'''BlogPost

Create a BlogPost class that has
an authorName
a title
a text
a publicationDate
Create a few blog post objects:
"Lorem Ipsum" titled by John Doe posted at "2000.05.04."
Lorem ipsum dolor sit amet.
"Wait but why" titled by Tim Urban posted at "2010.10.10."
A popular long-form, stick-figure-illustrated blog about almost everything.
"One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.'''

class BlogPost:
    authorName = ''
    title = ''
    text = ''
    publicationDate = ''

blog1 = BlogPost()
blog2 = BlogPost()
blog3 = BlogPost()

blog1.authorName = 'John Doe'
blog2.authorName = 'Tim Urban'
blog3.authorName = 'William Turton'
blog1.title = 'Lorem Ipsum'
blog2.title = 'Wait but why'
blog3.title = 'One Engineer Is Trying to Get IBM to Reckon With Trump'
blog1.text = 'Lorem ipsum dolor sit amet.'
blog2.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.'
blog3.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.'
blog1.publicationDate = '2000.05.04.'
blog2.publicationDate = '2010.10.10.'
blog3.publicationDate = '2017.03.28.'

print(blog1.title, 'by', blog1.authorName, blog1.publicationDate, blog1.text)
print(blog2.title, 'by', blog2.authorName, blog2.publicationDate, blog2.text)
print(blog3.title, 'by', blog3.authorName, blog3.publicationDate, blog3.text)
