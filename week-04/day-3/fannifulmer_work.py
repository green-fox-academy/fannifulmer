class Apples():
    def get_apples(self):
        return 'redapple'

    def sum(self, mylist = []):
        start = 0
        for num in mylist:
            start+=num
        return start

    #def anagram(self):
apple = Apples()
print(apple.sum([1,2,3]))



'''Anagram

Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
Create a test for that.'''
