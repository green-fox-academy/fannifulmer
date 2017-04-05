import unittest
from fannifulmer_work import Apples

class TestApples(unittest.TestCase):
    def test_get_apples(self):
        apples = Apples()
        apples.get_apples()
        self.assertEqual(apples.get_apples(), 'redapple')

    def test_sum(self, mylist = []):
        apples = Apples()
        self.assertEqual(apples.sum([1,2,3]), 6)

    def test_sum_empty(self, mylist = []):
        apples = Apples()
        self.assertEqual(apples.sum([]), 0)

    def test_sum_one_element(self, mylist = []):
        apples = Apples()
        self.assertEqual(apples.sum([3]), 3)











if __name__ == '__main__':
    unittest.main()

#apple = Apples()
#apple.get_apples()
#print(apple.get_apples())
