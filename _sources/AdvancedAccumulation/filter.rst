..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: AdAccum-3-
   :start: 1

Filter
------

Now consider another common pattern: going through a list and keeping only those items that meet certain criteria. 
This is called a filter.

.. activecode:: ac21_3_1

   def keep_evens(nums):
       new_list = []
       for num in nums:
           if num % 2 == 0:
               new_list.append(num)
       return new_list
      
   print(keep_evens([3, 4, 6, 7, 0, 1]))

Again, this pattern of computation is so common that Python offers a more compact and general way to do it, the ``filter`` 
function. ``filter`` takes two arguments, a function and a sequence. The function takes one item and return True if the 
item should. It is automatically called for each item in the sequence. You don't have to initialize an accumulator or 
iterate with a for loop.

.. activecode:: ac21_3_2

   def keep_evens(nums):
       new_seq = filter(lambda num: num % 2 == 0, nums)
       return list(new_seq)
      
   print(keep_evens([3, 4, 6, 7, 0, 1]))

**Check Your Understanding**

.. activecode:: ac21_3_3
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   **1.** Write code to assign to the variable ``filter_testing`` all the elements in lst_check that have a "w" in them using filter.
   ~~~~
   lst_check = ['plums', 'watermelon', 'kiwi', 'strawberries', 'blueberries', 'peaches', 'apples', 'mangos', 'papaya']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(filter_testing, ['watermelon', 'kiwi', 'strawberries'], "Testing that filter_testing has the correct values.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


   myTests().main()

.. activecode:: ac21_3_4
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   **2.** Using filter, filter ``lst`` so that it only contains words containing the letter "o". Assign to variable ``lst2``. Do not hardcode this.
   ~~~~
   lst = ["witch", "halloween", "pumpkin", "cat", "candy", "wagon", "moon"]
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(lst2, ['halloween', 'wagon', 'moon'], "Testing that lst is assigned to correct values.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


   myTests().main()
