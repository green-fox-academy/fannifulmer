import unittest
from fannifulmer_work import Apples

class TestApples(unittest.TestCase):
    def test_get_apples(self):
        apples = Apples()
        apples.get_apples()
        self.assertEqual(apples.get_apples(), 'redapple')

    #def test_sum(self):






if __name__ == '__main__':
    unittest.main()

#apple = Apples()
#apple.get_apples()
#print(apple.get_apples())
