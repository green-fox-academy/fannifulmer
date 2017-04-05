class Apples():
    def get_apples(self):
        return 'redapple'

    def sum(self, mylist = []):
        start = 0
        for num in mylist:
            start+=num
        return start

    def anagram(self, string1 ='', string2 =''):
        newstring = list(string1)
        newstring.sort()
        newstring2 = list(string2)
        newstring2.sort()

        if newstring == newstring2:
            return True
        else:
            newstring != newstring2
            return False


apple = Apples()
