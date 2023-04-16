..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: AdAccum-7-
   :start: 1

Chapter Assessment
==================

.. activecode:: ac21_7_1
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/map

   Write code to assign to the variable ``map_testing`` all the elements in lst_check while adding the string "Fruit: " to the beginning of each element using mapping.
   ~~~~
   lst_check = ['plums', 'watermelon', 'kiwi', 'strawberries', 'blueberries', 'peaches', 'apples', 'mangos', 'papaya']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(map_testing, ['Fruit: plums', 'Fruit: watermelon', 'Fruit: kiwi', 'Fruit: strawberries', 'Fruit: blueberries', 'Fruit: peaches', 'Fruit: apples', 'Fruit: mangos', 'Fruit: papaya'], "Testing that map_testing has the correct values.")
         self.assertIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


   myTests().main()

.. activecode:: ac21_7_2
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/filter

   Below, we have provided a list of strings called ``countries``. Use filter to produce a list called ``b_countries`` that only contains the strings from ``countries`` that begin with B.
   ~~~~
   countries = ['Canada', 'Mexico', 'Brazil', 'Chile', 'Denmark', 'Botswana', 'Spain', 'Britain', 'Portugal', 'Russia', 'Thailand', 'Bangladesh', 'Nigeria', 'Argentina', 'Belarus', 'Laos', 'Australia', 'Panama', 'Egypt', 'Morocco', 'Switzerland', 'Belgium']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(b_countries, ['Brazil', 'Botswana', 'Britain', 'Bangladesh', 'Belarus', 'Belgium'], "Testing that b_countries is correct.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


   myTests().main()

.. activecode:: ac21_7_3
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   Below, we have provided a list of tuples that contain the names of Game of Thrones characters. Using list comprehension, create a list of strings called ``first_names`` that contains only the first names of everyone in the original list.
   ~~~~
   people = [('Snow', 'Jon'), ('Lannister', 'Cersei'), ('Stark', 'Arya'), ('Stark', 'Robb'), ('Lannister', 'Jamie'), ('Targaryen', 'Daenerys'), ('Stark', 'Sansa'), ('Tyrell', 'Margaery'), ('Stark', 'Eddard'), ('Lannister', 'Tyrion'), ('Baratheon', 'Joffrey'), ('Bolton', 'Ramsey'), ('Baelish', 'Peter')]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(first_names, ['Jon', 'Cersei', 'Arya', 'Robb', 'Jamie', 'Daenerys', 'Sansa', 'Margaery', 'Eddard', 'Tyrion', 'Joffrey', 'Ramsey', 'Peter'], "Testing that first_names is correct.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main() 


.. activecode:: ac21_7_4
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   Use list comprehension to create a list called ``lst2`` that doubles each element in the list, ``lst``.
   ~~~~
   lst = [["hi", "bye"], "hello", "goodbye", [9, 2], 4]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFiveA(self):
         self.assertEqual(lst2, [['hi', 'bye', 'hi', 'bye'], 'hellohello', 'goodbyegoodbye', [9, 2, 9, 2], 8], "Testing that  lst2 is assigned to correct values")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
      
   myTests().main()

.. activecode:: ac21_7_5
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   Below, we have provided a list of tuples that contain students' names and their final grades in PYTHON 101. Using list comprehension, create a new list ``passed`` that contains the names of students who passed the class (had a final grade of 70 or greater).
   ~~~~
   students = [('Tommy', 95), ('Linda', 63), ('Carl', 70), ('Bob', 100), ('Raymond', 50), ('Sue', 75)]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(passed, ['Tommy', 'Carl', 'Bob', 'Sue'], "Testing that passed is correct.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main() 

.. activecode:: ac21_7_6
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/zip

   Write code using zip and filter so that these lists (l1 and l2) are combined into one big list and assigned to the variable ``opposites`` if they are both longer than 3 characters each.
   ~~~~
   
   l1 = ['left', 'up', 'front']
   l2 = ['right', 'down', 'back']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(opposites, [('left','right'), ('front','back')], "Testing that opposites has the correct list of tuples.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


   myTests().main()

.. activecode:: ac21_7_7
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/zip

   Below, we have provided a ``species`` list and a ``population`` list. Use zip to combine these lists into one list of tuples called ``pop_info``. From this list, create a new list called ``endangered`` that contains the names of species whose populations are below 2500.
   ~~~~
   species = ['golden retriever', 'white tailed deer', 'black rhino', 'brown squirrel', 'field mouse', 'orangutan', 'sumatran elephant', 'rainbow trout', 'black bear', 'blue whale', 'water moccasin', 'giant panda', 'green turtle', 'blue jay', 'japanese beetle']

   population = [10000, 90000, 1000, 2000000, 500000, 500, 1200, 8000, 12000, 2300, 7500, 100, 1800, 9500, 125000]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(pop_info, [('golden retriever', 10000), ('white tailed deer', 90000), ('black rhino', 1000), ('brown squirrel', 2000000), ('field mouse', 500000), ('orangutan', 500), ('sumatran elephant', 1200), ('rainbow trout', 8000), ('black bear', 12000), ('blue whale', 2300), ('water moccasin', 7500), ('giant panda', 100), ('green turtle', 1800), ('blue jay', 9500), ('japanese beetle', 125000)], "Testing that pop_info was created correctly.")
      def testTwo(self): 
         self.assertEqual(endangered, ['black rhino', 'orangutan', 'sumatran elephant', 'blue whale', 'giant panda', 'green turtle'], "Testing that endangered was created correctly.")
      def testThree(self):
         self.assertIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()   
