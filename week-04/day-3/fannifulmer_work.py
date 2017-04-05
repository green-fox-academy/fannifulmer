class Apples():
    def get_apples(self):
        return 'redapple'

    def sum(self, mylist = []):
        start = 0
        for num in mylist:
            start+=num
        return start

apple = Apples()
print(apple.sum([1,2,3]))
