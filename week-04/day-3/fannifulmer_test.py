import unittest
from fannifulmer_work import Apples

class TestApples(unittest.TestCase):
    def test_get_apples(self):
        apples = Apples()
        self.assertEqual(apples.get_apples(), 'redapple')

    def test_sum(self):
        apples = Apples()
        self.assertEqual(apples.sum([1,2,3]), 6)

    def test_sum_empty(self):
        apples = Apples()
        self.assertEqual(apples.sum([]), 0)

    def test_sum_one_element(self):
        apples = Apples()
        self.assertEqual(apples.sum([3]), 3)

    def test_anagram_true(self):
        apples = Apples()
        self.assertEqual(apples.anagram('alma', 'mala'), True)

    def test_anagram_false(self):
        apples = Apples()
        self.assertEqual(apples.anagram('alma', 'eger'), False)

    def test_count_letter(self):
        apples = Apples()
        self.assertEqual(apples.count_letters('megszentsegtelenithetetlensegeskedeseitekert'), {'m': 1, 'e': 15, 'g': 3, 's': 5, 'z': 1, 'n': 3, 't': 7, 'l': 2, 'i': 2, 'h': 1, 'k': 2, 'd': 1, 'r': 1})

    def test_fibonacci(self):
        apples = Apples()
        self.assertEqual(apples.fibonacci(6), 8)









if __name__ == '__main__':
    unittest.main()

#apple = Apples()
#apple.get_apples()
#print(apple.get_apples())
