..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Chapter Assessment
==================

.. activecode:: ac_exceptions_01
   :tags: Exceptions/intro-exceptions.rst
   :practice: T
   :autograde: unittest
   :topics: Exceptions/intro-exceptions.rst

   The code below takes the list of country, ``country``, and searches to see if it is in the dictionary ``gold`` which shows some countries who won gold during the Olympics. However, this code currently does not work. Correctly add try/except clause in the code so that it will correctly populate the list, ``country_gold``, with either the number of golds won or the string "Did not get gold".
   ~~~~
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


.. activecode:: ac_exceptions_011
   :tags: Exceptions/intro-exceptions.rst
   :autograde: unittest

   Provided is a buggy for loop that tries to accumulate some values out of some dictionaries. Insert a try/except so that the code passes.
   ~~~~
   di = [{"Puppies": 17, 'Kittens': 9, "Birds": 23, 'Fish': 90, "Hamsters": 49}, {"Puppies": 23, "Birds": 29, "Fish": 20, "Mice": 20, "Snakes": 7}, {"Fish": 203, "Hamsters": 93, "Snakes": 25, "Kittens": 89}, {"Birds": 20, "Puppies": 90, "Snakes": 21, "Fish": 10, "Kittens": 67}]
   total = 0
   for diction in di:
       total = total + diction['Puppies']

   print("Total number of puppies:", total)


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(total, 130, "Testing that total has the correct value.")

   myTests().main()


.. activecode:: ac_exceptions_02
   :tags:Exceptions/intro-exceptions.rst
   :autograde: unittest

   The list, ``numb``, contains integers. Write code that populates the list ``remainder`` with the remainder of 36 divided by each number in ``numb``. For example, the first element should be 0, because 36/6 has no remainder. If there is an error, have the string "Error" appear in the ``remainder``.
   ~~~~
   numb = [6, 0, 36, 8, 2, 36, 0, 12, 60, 0, 45, 0, 3, 23]

   remainder = []

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOneA(self):
         self.assertEqual(remainder, [0, 'Error', 0, 4, 0, 0, 'Error', 0, 36, 'Error', 36, 'Error', 0, 13], "Testing that remainder is assigned to correct values.")
     
   myTests().main()

.. activecode:: ac_exceptions_021
   :tags: Exceptions/intro-exceptions.rst
   :practice: T
   :topics: Exceptions/intro-exceptions.rst
   :autograde: unittest

   Provided is buggy code, insert a try/except so that the code passes.
   ~~~~
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


.. activecode:: ac_exceptions_03
   :tags: Exceptions/intro-exceptions.rst
   :practice: T
   :autograde: unittest
   :topics: Exceptions/intro-exceptions.rst

   Write code so that the buggy code provided works using a try/except. When the codes does not work in the try, have it append to the list ``attempt`` the string "Error".
   ~~~~
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

.. activecode:: ac_exceptions_031
   :tags: Exceptions/intro-exceptions.rst
   :practice: T
   :topics: Exceptions/intro-exceptions.rst
   :autograde: unittest

   The following code tries to append the third element of each list in ``conts`` to the new list ``third_countries``. Currently, the code does not work. Add a try/except clause so the code runs without errors, and the string 'Continent does not have 3 countries' is appended to ``third_countries`` instead of producing an error.
   ~~~~
   conts = [['Spain', 'France', 'Greece', 'Portugal', 'Romania', 'Germany'], ['USA', 'Mexico', 'Canada'], ['Japan', 'China', 'Korea', 'Vietnam', 'Cambodia'], ['Argentina', 'Chile', 'Brazil', 'Ecuador', 'Uruguay', 'Venezuela'], ['Australia'], ['Zimbabwe', 'Morocco', 'Kenya', 'Ethiopia', 'South Africa'], ['Antarctica']]

   third_countries = []

   for c in conts: 
       third_countries.append(c[2])


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(third_countries, ['Greece', 'Canada', 'Korea', 'Brazil', 'Continent does not have 3 countries', 'Kenya', 'Continent does not have 3 countries'], "Testing that third_countries is created correctly.")

   myTests().main()   


.. activecode:: ac_exceptions_04
   :tags:Exceptions/intro-exceptions.rst
   :practice: T
   :topics: Exceptions/intro-exceptions.rst
   :autograde: unittest

   The buggy code below prints out the value of the sport in the list ``sport``. Use try/except so that the code will run properly. If the sport is not in the dictionary, ``ppl_play``, add it in with the value of 1.
   ~~~~
   sport = ["hockey", "basketball", "soccer", "tennis", "football", "baseball"]

   ppl_play = {"hockey":4, "soccer": 10, "football": 15, "tennis": 8}

   for x in sport:
      
       print(ppl_play[x])
       
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOneA(self):
         self.assertEqual(sorted(ppl_play.items()), [('baseball', 1), ('basketball', 1), ('football', 15), ('hockey', 4), ('soccer', 10), ('tennis', 8)], "Testing that ppl_play is assigned to correct values.")
     
   myTests().main()


.. activecode:: ac_exceptions_041
   :tags: Exceptions/intro-exceptions.rst
   :practice: T
   :topics: Exceptions/intro-exceptions.rst
   :autograde: unittest

   Provided is a buggy for loop that tries to accumulate some values out of some dictionaries. Insert a try/except so that the code passes. If the key is not there, initialize it in the dictionary and set the value to zero.
   ~~~~
   di = [{"Puppies": 17, 'Kittens': 9, "Birds": 23, 'Fish': 90, "Hamsters": 49}, {"Puppies": 23, "Birds": 29, "Fish": 20, "Mice": 20, "Snakes": 7}, {"Fish": 203, "Hamsters": 93, "Snakes": 25, "Kittens": 89}, {"Birds": 20, "Puppies": 90, "Snakes": 21, "Fish": 10, "Kittens": 67}]
   total = 0
   for diction in di:
       total = total + diction['Puppies']

   print("Total number of puppies:", total)


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
