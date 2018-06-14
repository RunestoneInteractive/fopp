..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Extra Exercises
===============

1. The code below takes the list of country, ``country``, and searches to see if it is in the dictionary ``gold`` which shows some countries who won gold during the Olympics. However, this code currently does not work. Correctly add try/except clause in the code so that it will correctly populate the list, ``country_gold``, with either the number of golds won or the string "Did not get gold".

.. activecode:: ee_exceptions_01
   :tags: Exceptions/intro-exceptions.rst

   gold = {"US":46, "Fiji":1, "Great Britain":27, "Cuba":5, "Thailand":2, "China":26, "France":10}
   country = ["Fiji", "Chile", "Mexico", "France", "Norway", "US"]
   country_gold = []

   for x in country:
        country_gold.append(gold[x])
        country_gold.append("Did not get gold")

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOneA(self):
         self.assertEqual(country_gold, [1, 'Did not get gold', 'Did not get gold', 10, 'Did not get gold', 46], "Testing that country_gold is assigned to correct values")
      
   myTests().main()

1.1 Provided is a buggy for loop that tries to accumulate some values out of some dictionaries. Insert a try/except so that the code passes.

.. activecode:: ee_exceptions_011
   :tags: Exceptions/intro-exceptions.rst

   di = [{"Puppies": 17, 'Kittens': 9, "Birds": 23, 'Fish': 90, "Hamsters": 49}, {"Puppies": 23, "Birds": 29, "Fish": 20, "Mice": 20, "Snakes": 7}, {"Fish": 203, "Hamsters": 93, "Snakes": 25, "Kittens": 89}, {"Birds": 20, "Puppies": 90, "Snakes": 21, "Fish": 10, "Kittens": 67}]
   total = 0
   for diction in di:
       total = total + diction['Puppies']

   print "Total number of puppies:", total


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(total, 130, "Testing that total has the correct value.")

   myTests().main()

1.2 Below, we have provided a list of tuples that consist of student names, final exam scores, and whether or not they will pass the class. For some students, the tuple does not have a third element because it is unknown whether or not they will pass. Currently, the for loop does not work. Add a try/except clause so the code runs without an error - if there is no third element in the tuple, no changes should be made to the dictionary.

.. activecode:: ee_exceptions_012
   :tags: Exceptions/intro-exceptions.rst

   students = [('Timmy', 95, 'Will pass'), ('Martha', 70), ('Betty', 82, 'Will pass'), ('Stewart', 50, 'Will not pass'), ('Ashley', 68), ('Natalie', 99, 'Will pass'), ('Archie', 71), ('Carl', 45, 'Will not pass')]

   passing = {'Will pass': 0, 'Will not pass': 0}
   for tup in students:
       if tup[2] == 'Will pass':
           passing['Will pass'] += 1
       elif tup[2] == 'Will not pass':
           passing['Will not pass'] += 1

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(passing, {'Will pass': 3, 'Will not pass': 2}, "Testing that passing is created correctly.")

   myTests().main()

2. The list, ``numb``, contains integers. Write code that populates the list ``remainder`` with the remainder of 36 divided by each number in ``numb``. For example, the first element should be 0, because 36/6 has no remainder. If there is an error, have the string "Error" appear in the ``remainder``.

.. activecode:: ee_exceptions_02
   :tags:Exceptions/intro-exceptions.rst

   numb = [6, 0, 36, 8, 2, 36, 0, 12, 60, 0, 45, 0, 3, 23]

   remainder = []

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOneA(self):
         self.assertEqual(remainder, [0, 'Error', 0, 4, 0, 0, 'Error', 0, 36, 'Error', 36, 'Error', 0, 13], "Testing that remainder is assigned to correct values.")
     
   myTests().main()

2.1 Provided is buggy code, insert a try/except so that the code passes.

.. activecode:: ee_exceptions_021
   :tags: Exceptions/intro-exceptions.rst

   lst = [2,4,10,42,12,0,4,7,21,4,83,8,5,6,8,234,5,6,523,42,34,0,234,1,435,465,56,7,3,43,23]

   lst_three = []

   for num in lst:
       if 3 % num == 0:
           lst_three.append(num)


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(lst_three, [1,3], "Testing that lst_three has the correct values.")

   myTests().main()

2.2 Below, we have provided code that does not run. Add a try/except clause so the code runs without errors. If an element is not able to undergo the addition operation, the string 'Error' should be appended to plus_four. 

.. activecode:: ee_exceptions_022
   :tags: Exceptions/intro-exceptions.rst

   nums = [5, 9, '4', 3, 2, 1, 6, 5, '7', 4, 3, 2, 6, 7, 8, '0', 3, 4, 0, 6, 5, '3', 5, 6, 7, 8, '3', '1', 5, 6, 7, 9, 3, 2, 5, 6, '9', 2, 3, 4, 5, 1]

   plus_four = []

   for num in nums: 
       plus_four.append(num+4)


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(plus_four, [9, 13, 'Error', 7, 6, 5, 10, 9, 'Error', 8, 7, 6, 10, 11, 12, 'Error', 7, 8, 4, 10, 9, 'Error', 9, 10, 11, 12, 'Error', 'Error', 9, 10, 11, 13, 7, 6, 9, 10, 'Error', 6, 7, 8, 9, 5], "Testing that plus_four is created correctly.")

   myTests().main()


3. The code below assigns the 5th letter of each word in ``food`` to the new list ``fifth``. However, the code currently produces errors. Insert a try/except clause that will allow the code to run and produce of list of the 5th letter in each word. If the word is not long enough, it should not print anything out. Note: The pass statement is a null operation; nothing will happen when it executes.

.. activecode:: ee_exceptions_03
   :tags:Exceptions/intro-exceptions.rst

   food = ["chocolate", "chicken", "corn", "sandwich", "soup", "potatoes", "beef", "lox", "lemonade"]
   fifth = []

   for x in food:
      
           fifth.append(x[4])

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOneA(self):
         self.assertEqual(fifth, ['o', 'k', 'w', 't', 'n'], "Testing that fifth is assigned to correct values.")
     
      
   myTests().main()

3.1 Write code so that the buggy code provided works using a try/except. When the codes does not work in the try, have it append to the list ``attempt`` the string "Error"

.. activecode:: ee_exceptions_031
   :tags: Exceptions/intro-exceptions.rst

   full_lst = ["ab", 'cde', 'fgh', 'i', 'jkml', 'nop', 'qr', 's', 'tv', 'wxy', 'z']

   attempt = []

   for elem in full_lst:
       attempt.append(elem[1])

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(attempt, ['b', 'd', 'g', 'Error', 'k', 'o', 'r', 'Error', 'v', 'x', 'Error'], "Testing that attempt has the correct values.")

   myTests().main()

3.2 The following code tries to append the third element of each list in ``conts`` to the new list ``third_countries``. Currently, the code does not work. Add a try/except clause so the code runs without errors, and the string 'Continent does not have 3 countries' is appended to ``countries`` instead of producing an error.

.. activecode:: ee_exceptions_032
   :tags: Exceptions/intro-exceptions.rst

   conts = [['Spain', 'France', 'Greece', 'Portugal', 'Romania', 'Germany'], ['USA', 'Mexico', 'Canada'], ['Japan', 'China', 'Korea', 'Vietnam', 'Cambodia'], ['Argentina', 'Chile', 'Brazil', 'Ecuador', 'Uruguay', 'Venezuela'], ['Australia'], ['Zimbabwe', 'Morocco', 'Kenya', 'Ethiopa', 'South Africa'], ['Antarctica']]

   third_countries = []

   for c in conts: 
       third_countries.append(c[2])


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(third_countries, ['Greece', 'Canada', 'Korea', 'Brazil', 'Continent does not have 3 countries', 'Kenya', 'Continent does not have 3 countries'], "Testing that third_countries is created correctly.")

   myTests().main()   

4. The buggy code below prints out the value of the sport in the list ``sport``. Use try/except so that the code will run properly. If the sport is not in the dictionary, ``ppl_play``, add it in with the value of 1.

.. activecode:: ee_exceptions_04
   :tags:Exceptions/intro-exceptions.rst

   sport = ["hockey", "basketball", "soccer", "tennis", "football", "baseball"]

   ppl_play = {"hockey":4, "soccer": 10, "football": 15, "tennis": 8}

   for x in sport:
      
        print ppl_play[x]
       
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOneA(self):
         self.assertEqual(sorted(ppl_play.items()), [('baseball', 1), ('basketball', 1), ('football', 15), ('hockey', 4), ('soccer', 10), ('tennis', 8)], "Testing that ppl_play is assigned to correct values.")
     
   myTests().main()


4.1 Provided is a buggy for loop that tries to accumulate some values out of some dictionaries. Insert a try/except so that the code passes. If the key is not there, initialize it in the dictionary and set the value to zero.

.. activecode:: ee_exceptions_041
   :tags: Exceptions/intro-exceptions.rst

   di = [{"Puppies": 17, 'Kittens': 9, "Birds": 23, 'Fish': 90, "Hamsters": 49}, {"Puppies": 23, "Birds": 29, "Fish": 20, "Mice": 20, "Snakes": 7}, {"Fish": 203, "Hamsters": 93, "Snakes": 25, "Kittens": 89}, {"Birds": 20, "Puppies": 90, "Snakes": 21, "Fish": 10, "Kittens": 67}]
   total = 0
   for diction in di:
       total = total + diction['Puppies']

   print "Total number of puppies:", total


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         accum = 0
         for diction in di:
              if 'Puppies' in diction:
                  accum += 1
         self.assertEqual(accum, 4, "Testing that every dictionary in di has the key 'Puppies'.")

   myTests().main()

4.2 Below, we have provided buggy code. Add a try/except clause so the code runs without errors. If a blog post didn't get any likes, a 'Likes' key should be added to that dictionary with a value of 0.

.. activecode:: ee_exceptions_042
   :tags: Exceptions/intro-exceptions.rst

   blog_posts = [{'Photos': 3, 'Likes': 21, 'Comments': 2}, {'Likes': 13, 'Comments': 2, 'Shares': 1}, {'Photos': 5, 'Likes': 33, 'Comments': 8, 'Shares': 3}, {'Comments': 4, 'Shares': 2}, {'Photos': 8, 'Comments': 1, 'Shares': 1}, {'Photos': 3, 'Likes': 19, 'Comments': 3}]

   total_likes = 0

   for post in blog_posts: 
       total_likes = total_likes + post['Likes']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testA(self):
         self.assertEqual(total_likes, 86, "Testing that total_likes has the correct value.")
      def testB(self):
         accum = 0
         for d in blog_posts: 
            if 'Likes' in d:
               accum +=1
         self.assertEqual(accum, 6, "Testing that blog_post dictionaries all have a 'Likes' key.")   

   myTests().main()  



