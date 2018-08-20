..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-5-
   :start: 1

A function that accumulates
---------------------------

We have used the ``len`` function a lot already. If it weren't part of python, our lives as programmers would have been 
a lot harder.

Well, actually, not that much harder. Now that we know how to define functions, we could define ``len`` ourselves if it 
did not exist. Previously, we have used the accumlator pattern to count the number of lines in a file. Let's use that 
same idea and just wrap it in a function definition. We'll call it ``mylen`` to distinguish it from the real ``len`` 
which already exists. We actually *could* call it len, but that wouldn't be a very good idea, because it would replace 
the original len function, and our implementation may not be a very good one.

.. activecode:: ac11_5_1

   def mylen(seq):
       c = 0 # initialize count variable to 0
       for _ in seq:
           c = c + 1   # increment the counter for each item in seq
       return c
      
   print(mylen("hello"))
   print(mylen([1, 2, 7]))


.. parsonsprob:: pp11_5_1

   Rearrange the code statements to match the activecode window above. (This is an exercise in noticing where the indenting and outdenting happens, and where the return statement goes.)
   
   -----
   def mylen(x):
   =====
       c = 0 # initialize count variable to 0
   =====
       for y in x:
   =====
           c = c + 1   # increment the counter for each item in x
   =====
       return c
   =====      
   print(mylen("hello"))
   print(mylen([1, 2, 7]))

**Check your Understanding**

.. activecode:: ac11_5_2
   :language: python
   :autograde: unittest
   :practice: T

   **1.** Write a function named ``total`` that takes a list of integers as input, and returns the total value of all those integers added together.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(total([1, 2, 3, 4, 5]), 15, "Testing the total function on input [1, 2, 3, 4, 5].")
         self.assertEqual(total([0, 0, 0, 0]), 0, "Testing the total function on input [0, 0, 0, 0].")
         self.assertEqual(total([]), 0, "Testing the total function on input [].")
         self.assertEqual(total([2]), 2, "Testing the total function on input [2].")

   myTests().main() 

.. activecode:: ac11_5_3
   :language: python
   :autograde: unittest
   :practice: T

   **2.** Write a function called ``count`` that takes a list of numbers as input and returns a count of the number of elements in the list.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(count([]), 0, "Testing the function count with input []")
         self.assertEqual(count([1, 5, 9, -2, 9, 23]), 6, "Testing the function count with input [1, 5, 9, -2, 9, 23]")

   myTests().main()

