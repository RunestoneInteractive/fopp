..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: nested-3-
   :start: 1

Nested Iteration
----------------

When you have nested data structures, especially lists and/or dictionaries, you will frequently need nested for loops
to traverse them.

.. activecode:: ac17_4_1

    nested1 = [['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h']]
    for x in nested1:
        print("level1: ")
        for y in x:
            print("     level2: " + y)

Line 3 executes once for each top-level list, three times in all. With each sub-list,
line 5 executes once for each item in the sub-list. Try stepping through it in Codelens to make sure you understand what the nested iteration does.

.. codelens:: clens17_4_1
    :python: py3

    nested1 = [['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h']]
    for x in nested1:
        print("level1: ")
        for y in x:
            print("    level2: " + y)

**Check Your Understanding**

.. parsonsprob:: pp17_4_1

   Now try rearranging these code fragments to make a function that counts all the *leaf* items in a nested list like nested1 above, the items at the lowest level of nesting (8 of them in nested1).
   -----
   def count_leaves(n):
   =====
       count = 0
   =====
       for L in n:
   =====
           for x in L:
   =====
               count = count + 1
   =====
       return count   

.. activecode:: ac17_4_2
   :language: python
   :autograde: unittest
   :practice: T

   **2.** Below, we have provided a list of lists that contain information about people. Write code to create a new list that contains every person's last name, and save that list as ``last_names``.

   ~~~~
   info = [['Tina', 'Turner', 1939, 'singer'], ['Matt', 'Damon', 1970, 'actor'], ['Kristen', 'Wiig', 1973, 'comedian'], ['Michael', 'Phelps', 1985, 'swimmer'], ['Barack', 'Obama', 1961, 'president']]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(last_names, ['Turner', 'Damon', 'Wiig', 'Phelps', 'Obama'], "Testing that last_names was created correctly.")

   myTests().main() 

.. activecode:: ac17_4_3
   :language: python
   :autograde: unittest
   :practice: T

   **3.** Below, we have provided a list of lists named ``L``. Use nested iteration to save every string containing "b" into a new list named ``b_strings``.

   ~~~~
   L = [['apples', 'bananas', 'oranges', 'blueberries', 'lemons'], ['carrots', 'peas', 'cucumbers', 'green beans'], ['root beer', 'smoothies', 'cranberry juice']]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(b_strings, ['bananas', 'blueberries', 'cucumbers', 'green beans', 'root beer', 'cranberry juice'], "Testing that b_strings was created correctly.")

   myTests().main() 
