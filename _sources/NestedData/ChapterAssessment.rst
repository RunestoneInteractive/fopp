..  Copyright (C) Lauren Murphy, Susan Doong, Haley Yaremych, Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: nested-6-
   :start: 1

Chapter Assessment
==================

.. activecode:: ac17_6_1
   :language: python
   :autograde: unittest
   :practice: T
   :topics: NestedData/ListswithComplexItems

   The variable ``nested`` contains a nested list. Assign 'snake' to the variable ``output`` using indexing.

   ~~~~
   nested = [['dog', 'cat', 'horse'], ['frog', 'turtle', 'snake', 'gecko'], ['hamster', 'gerbil', 'rat', 'ferret']]
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(output, "snake", "Testing that output is assigned to correct value")

   myTests().main()

.. activecode:: ac17_6_2
   :language: python
   :autograde: unittest
   :practice: T
   :topics: NestedData/ListswithComplexItems

   Below, a list of lists is provided. Use in and not in tests to create variables with Boolean values. See comments for further instructions.

   ~~~~
   lst = [['apple', 'orange', 'banana'], [5, 6, 7, 8, 9.9, 10], ['green', 'yellow', 'purple', 'red']]

   #Test to see if 'yellow' is in the third list of lst. Save to variable ``yellow``


   #Test to see if 4 is in the second list of lst. Save to variable ``four``


   #Test to see if 'orange' is in the first element of lst. Save to variable ``orange``
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(yellow, True, "Testing that yellow is assigned to correct value")
      def testTwoB(self):
         self.assertEqual(four, False, "Testing that four is assigned to correct value")
      def testTwoC(self):
         self.assertEqual(orange, True, "Testing that orange is assigned to correct value")

   myTests().main()

.. activecode:: ac17_6_3
   :language: python
   :autograde: unittest
   :practice: T
   :topics: NestedData/ListswithComplexItems

   Below, we've provided a list of lists. Use in statements to create variables with Boolean values - see the ActiveCode window for further directions.

   ~~~~
   L = [[5, 8, 7], ['hello', 'hi', 'hola'], [6.6, 1.54, 3.99], ['small', 'large']]

   # Test if 'hola' is in the list L. Save to variable name test1

   # Test if [5, 8, 7] is in the list L. Save to variable name test2

   # Test if 6.6 is in the third element of list L. Save to variable name test3

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testA(self):
         self.assertEqual(test1, False, "Testing that test1 has the correct value.")
      def testB(self):
         self.assertEqual(test2, True, "Testing that test2 has the correct value.")
      def testC(self):
         self.assertEqual(test3, True, "Testing that test3 has the correct value.")

   myTests().main()  


.. activecode:: ac17_6_4
   :language: python
   :autograde: unittest
   :practice: T
   :topics: NestedData/NestedDictionaries

   Provided is a nested data structure. Follow the instructions in the comments below. Do not hard code.

   ~~~~
   nested = {'data': ['finding', 23, ['exercises', 'hangout', 34]], 'window': ['part', 'whole', [], 'sum', ['math', 'calculus', 'algebra', 'geometry', 'statistics',['physics', 'chemistry', 'biology']]]}

   # Check to see if the string 'data' is a key in nested, if it is, assign True to the variable data, otherwise assign False.

   # Check to see if the integer 24 is in the value of the key data, if it is then assign to the variable twentyfour the value of True, otherwise False.

   # Check to see that the string 'whole' is not in the value of the key window. If it's not, then assign to the variable whole the value of True, otherwise False.

   # Check to see if the string 'physics' is a key in the dictionary nested. If it is, assign to the variable physics, the value of True, otherwise False.

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(data, True, "Testing that data has the correct value.")
      def testTwo(self):
         self.assertEqual(twentyfour, False, "Testing that twentyfour has the correct value.")
      def testThree(self):
         self.assertEqual(whole, False, "Testing that whole has the correct value.")
      def testFour(self):
         self.assertEqual(physics, False, "Testing that physics has the correct value.")

   myTests().main()


.. activecode:: ac17_6_5
   :language: python
   :autograde: unittest
   :practice: T
   :topics: NestedData/NestedDictionaries

   The variable ``nested_d`` contains a nested dictionary with the gold medal counts for the top four countries in the past three Olympics. Assign the value of Great Britain's gold medal count from the London Olympics to the variable ``london_gold``. Use indexing. Do not hardcode.

   ~~~~
   nested_d = {'Beijing':{'China':51, 'USA':36, 'Russia':22, 'Great Britain':19}, 'London':{'USA':46, 'China':38, 'Great Britain':29, 'Russia':22}, 'Rio':{'USA':35, 'Great Britain':22, 'China':20, 'Germany':13}}
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(london_gold, 29, "Testing that london_gold is assigned to correct value")

   myTests().main()


.. activecode:: ac17_6_6
   :language: python
   :autograde: unittest
   :practice: T
   :topics: NestedData/NestedDictionaries

   Below, we have provided a nested dictionary. Index into the dictionary to create variables that we have listed in the ActiveCode window.

   ~~~~
   sports = {'swimming': ['butterfly', 'breaststroke', 'backstroke', 'freestyle'], 'diving': ['springboard', 'platform', 'synchronized'], 'track': ['sprint', 'distance', 'jumps', 'throws'], 'gymnastics': {'women':['vault', 'floor', 'uneven bars', 'balance beam'], 'men': ['vault', 'parallel bars', 'floor', 'rings']}}

   # Assign the string 'backstroke' to the variable name v1

   # Assign the string 'platform' to the variable name v2

   # Assign the list ['vault', 'floor', 'uneven bars', 'balance beam'] to the variable name v3

   # Assign the string 'rings' to the variable name v4

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testA(self):
         self.assertEqual(v1, 'backstroke', "Testing that v1 was created correctly.")
         self.assertNotIn("v1 = 'backstroke'", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('v1 = "backstroke"', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
      def testB(self):
         self.assertEqual(v2, 'platform', "Testing that v2 was created correctly.")
         self.assertNotIn('v2 = "platform"', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn("v2 = 'platform'", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
      def testC(self):
         self.assertEqual(v3, ['vault', 'floor', 'uneven bars', 'balance beam'], "Testing that v3 was created correctly.")
         self.assertNotIn("v3 = ['vault', 'floor', 'uneven bars', 'balance beam']", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
      def testD(self):
         self.assertEqual(v4, 'rings', "Testing that v4 was created correctly.")
         self.assertNotIn("v4 = 'rings'", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('v4 = "rings"', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main() 


.. activecode:: ac17_6_7
   :language: python
   :autograde: unittest
   :practice: T
   :topics: NestedData/NestedIteration

   Given the dictionary, ``nested_d``, save the medal count for the USA from all three Olympics in the dictionary to the list ``US_count``.

   ~~~~
   nested_d = {'Beijing':{'China':51, 'USA':36, 'Russia':22, 'Great Britain':19}, 'London':{'USA':46, 'China':38, 'Great Britain':29, 'Russia':22}, 'Rio':{'USA':35, 'Great Britain':22, 'China':20, 'Germany':13}}

   US_count = []
      

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFour(self):
         self.assertEqual(sorted(US_count), [35, 36, 46], "Testing that US_count is assigned to correct values.")

   myTests().main()


.. activecode:: ac17_6_8
   :language: python
   :autograde: unittest
   :practice: T
   :topics: NestedData/NestedIteration

   Iterate through the contents of ``l_of_l`` and assign the third element of sublist to a new list called ``third``.

   ~~~~
   l_of_l = [['purple', 'mauve', 'blue'], ['red', 'maroon', 'blood orange', 'crimson'], ['sea green', 'cornflower', 'lavender', 'indigo'], ['yellow', 'amarillo', 'mac n cheese', 'golden rod']]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(third, ['blue', 'blood orange', 'lavender', 'mac n cheese'], "Testing that third has the correct list assigned to it.")

   myTests().main()


.. activecode:: ac17_6_9
   :language: python
   :autograde: unittest
   :practice: T
   :topics: NestedData/NestedIteration

   Given below is a list of lists of athletes. Create a list, ``t``, that saves only the athlete's name if it contains the letter "t". If it does not contain the letter "t", save the athlete name into list ``other``.

   ~~~~
   athletes = [['Phelps', 'Lochte', 'Schooling', 'Ledecky', 'Franklin'], ['Felix', 'Bolt', 'Gardner', 'Eaton'], ['Biles', 'Douglas', 'Hamm', 'Raisman', 'Mikulak', 'Dalton']]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFive(self):
         self.assertEqual(t, ['Lochte', 'Bolt', 'Eaton', 'Dalton'], "Testing that t is assigned to correct values.")
      def testFiveA(self):
         self.assertEqual(other, ['Phelps', 'Schooling', 'Ledecky', 'Franklin', 'Felix', 'Gardner', 'Biles', 'Douglas', 'Hamm', 'Raisman', 'Mikulak'], "Testing that other is assigned to correct values.")

   myTests().main()
