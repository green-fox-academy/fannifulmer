def palidrome():
    word = input("Please write down a word: ")
    word = word + word[::-1]
    print(word)

palidrome()
