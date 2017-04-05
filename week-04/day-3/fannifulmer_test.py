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









if __name__ == '__main__':
    unittest.main()

#apple = Apples()
#apple.get_apples()
#print(apple.get_apples())
