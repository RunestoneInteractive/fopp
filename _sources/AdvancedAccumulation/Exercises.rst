..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: AdAccum-6-
   :start: 1 

Exercises
---------

.. activecode:: ac21_6_1
   :language: python
   :autograde: unittest
   :topics: AdvancedAccumulation/map

   Write equivalent code using map instead of the manual accumulation below and assign it to the variable ``test``.
   ~~~~

   things = [3, 5, -4, 7]
   
   accum = []
   for thing in things:
       accum.append(thing+1)
   print(accum)

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(test, [4, 6, -3, 8], "Testing whether test has been correctly defined.")
         self.assertIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()
 
.. activecode:: ac21_6_2
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Iteration/TheAccumulatorPatternwithLists

   Use manual accumulation to define the lengths function below.
   ~~~~
   def lengths(strings):
       """lengths takes a list of strings as input and returns a list of numbers that are the lengths
       of strings in the input list. Use manual accumulation!"""
       # fill in this function's definition to make the test pass.
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(lengths(["Hello", "hi", "bye"]), [5, 2, 3], "Testing whether lengths has been correctly defined.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()
 
.. activecode:: ac21_6_3
   :language: python
   :autograde: unittest
   :practice: T
   :topics: AdvancedAccumulation/map

   Now define lengths using map instead.
   ~~~~
   def lengths(strings):
       """lengths takes a list of strings as input and returns a list of numbers that are the lengths
       of strings in the input list. Use map!"""
       # fill in this function's definition to make the test pass.

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(lengths(["Hello", "hi", "bye"]), [5, 2, 3], "Testing whether lengths has been correctly defined.")
         self.assertIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()
 
.. activecode:: ac21_6_4
   :language: python
   :autograde: unittest
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   Now define lengths using a list comprehension instead.
   ~~~~
   def lengths(strings):
       """lengths takes a list of strings as input and returns a list of numbers that are the lengths
       of strings in the input list. Use a list comprehension!"""
       # fill in this function's definition to make the test pass.
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(lengths(["Hello", "hi", "bye"]), [5, 2, 3], "Testing whether lengths has been correctly defined.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()
   
   
.. activecode:: ac21_6_5
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Iteration/TheAccumulatorPatternwithLists

   Write a function called positives_Acc that receives list of numbers as the input (like [3, -1, 5, 7]) and returns a list of only the positive numbers, [3, 5, 7], via manual accumulation.
   ~~~~



   things = [3, 5, -4, 7]
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         things = [3, 5, -4, 7]
         self.assertEqual(positives_Acc(things), [3, 5, 7], "Testing whether positives_Acc has been correctly defined.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()


.. activecode:: ac21_6_6
   :language: python
   :autograde: unittest
   :practice: T
   :topics: AdvancedAccumulation/filter

   Write a function called positives_Fil that receives list of things as the input and returns a list of only the positive things, [3, 5, 7], using the filter function.
   ~~~~



   things = [3, 5, -4, 7]
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         things = [3, 5, -4, 7]
         self.assertEqual(positives_Fil(things), [3, 5, 7], "Testing whether positives_Fil has been correctly defined.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()


.. activecode:: ac21_6_7
   :language: python
   :autograde: unittest
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   Write a function called positives_Li_Com that receives list of things as the input and returns a list of only the positive things, [3, 5, 7], using the list comprehension.
   ~~~~



   things = [3, 5, -4, 7]
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         things = [3, 5, -4, 7]
         self.assertEqual(positives_Li_Com(things), [3, 5, 7], "Testing whether positives_Li_Com has been correctly defined.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac21_6_8
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Iteration/TheAccumulatorPatternwithLists

   Define longwords using manual accumulation.
   ~~~~
   def longwords(strings):
       """Return a shorter list of strings containing only the strings with more than four characters. Use manual accumulation."""
       # write your code here

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(longwords(["Hello", "hi", "bye", "wonderful"]), ["Hello", "wonderful"], "Testing whether longwords has been correctly defined.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()
   
.. activecode:: ac21_6_9
   :language: python
   :autograde: unittest
   :practice: T
   :topics: AdvancedAccumulation/filter

   Define longwords using filter.
   ~~~~
   def longwords_Fil(strings):
       """Return a shorter list of strings containing only the strings with more than four characters. Use the filter function."""
       # write your code here

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(longwords_Fil(["Hello", "hi", "bye", "wonderful"]), ["Hello", "wonderful"], "Testing whether longwords_Fil has been correctly defined.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac21_6_10
   :language: python
   :autograde: unittest
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   Define longwords using a list comprehension.
   ~~~~
   def longwords_Li_Comp(strings):
       """Return a shorter list of strings containing only the strings with more than four characters. Use a list comprehension."""
       # write your code here
              
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(longwords_Li_Comp(["Hello", "hi", "bye", "wonderful"]), ["Hello", "wonderful"], "Testing whether longwords_Li_Comp has been correctly defined.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac21_6_11
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   Write a function called ``longlengths`` that returns the lengths of those strings that have at least 4 characters. Try it with a list comprehension.
   ~~~~
   def longlengths(strings):
       return None

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(longlengths(["Hello", "hi", "bye", "wonderful"]), [5, 9], "Testing whether longlengths has been correctly defined.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac21_6_12
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/filter

   Write a function called ``longlengths`` that returns the lengths of those strings that have at least 4 characters. Try it using map and filter.
   ~~~~

   def longlengths(strings):
       return None
       
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(longlengths(["Hello", "hi", "bye", "wonderful"]), [5, 9], "Testing whether longlengths has been correctly defined.")
         self.assertIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac21_6_13
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: Iteration/TheAccumulatorPatternwithLists

   Write a function that takes a list of numbers and returns the sum of the squares of all the numbers. Try it using an accumulator pattern.
   ~~~~

   def sumSquares(L):
       return None
   
   nums = [3, 2, 2, -1, 1]
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sumSquares(nums), 19, "Testing whether sumSquares has been correctly defined.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac21_6_14
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/map

   Write a function that takes a list of numbers and returns the sum of the squares of all the numbers. Try it using map and sum.
   ~~~~

   def sumSquares(L):
       return None
   
   nums = [3, 2, 2, -1, 1]
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sumSquares(nums), 19, "Testing whether sumSquares has been correctly defined.")
         self.assertIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac21_6_15
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/zip

   Use the zip function to take the lists below and turn them into a list of tuples, with all the first items in the first tuple, etc.
   ~~~~

   L1 = [1, 2, 3, 4]
   L2 = [4, 3, 2, 3]
   L3 = [0, 5, 0, 5]
   
   tups = []
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(tups, [(1, 4, 0), (2, 3, 5), (3, 2, 0), (4, 3, 5)], "Testing whether tups has been correctly defined.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac21_6_16
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/zip

   Use zip and map or a list comprehension to make a list consisting the maximum value for each position. For L1, L2, and L3, you would end up with a list [4, 5, 3, 5].
   ~~~~

   L1 = [1, 2, 3, 4]
   L2 = [4, 3, 2, 3]
   L3 = [0, 5, 0, 5]
   
   maxs = []
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(maxs, [4, 5, 3, 5], "Testing whether maxs has been correctly defined.")

   myTests().main()
