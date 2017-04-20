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

    def count_letters(self, string=''):
        dic = dict()
        for i in string:
            if i not in dic:
                dic[i] = 1
            else:
                dic[i] += 1
        return dic

    def fibonacci(self, n):
        if n == 0 or n == 1:
            return n
        else:
            return self.fibonacci(n-1) + self.fibonacci(n-2)

apple = Apples()
print(apple.count_letters("alma"))


'''Fibonacci

Write a function that computes a member of the fibonacci sequence by a given index
Create tests that covers all types of input (like in the previous workshop exercise)'''










#apples = Apples()
