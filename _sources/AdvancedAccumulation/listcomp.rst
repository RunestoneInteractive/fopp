..  Copyright (C)  Paul Resnick Brad.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: AdAccum-4-
   :start: 1 

List Comprehensions
-------------------

Python provides an alternative way to do ``map`` and ``filter`` operations, called a **list comprehension**. 
Many programmers find them easier to understand and write. List comprehensions are concise ways to create lists from other 
lists. The general syntax is::

   [<transformer_expression> for <loop_var> in <sequence> if <filtration_expression>]

where the if clause is optional.  For example,

.. activecode:: ac20_4_1

    things = [2, 5, 9]

    yourlist = [value * 2 for value in things]

    print(yourlist)

The transformer expression is ``value * 2``. The item variable is ``value`` and the sequence is ``things``. This is an alternative way
to perform a mapping operation. As with ``map``, each item in the sequence is transformed into an item in the new list. 
Instead of the iteration happening automatically, however, we have adopted the syntax of the for loop which may make it 
easier to understand. 

Just as in a regular for loop, the part of the statement ``for value in things`` says to execute some code once for each 
item in things. Each time that code is executed, ``value`` is bound to one item from ``things``. The code that is executed 
each time is the transformer expression, ``value * 2``, rather than a block of code indented underneath the for
statement. The other difference from a regular for loop is that each time the expression is evaluated, the resulting value 
is appended to a list. That happens automatically, without the programmer explicitly initializing an empty list or 
appending each item.

The ``if`` clause of a list comprehension can be used to do a filter operation. To perform a pure filter operation, the 
expression can be simply the variable that is bound to each item. For example, the following list comprehension will keep 
only the even numbers from the original list.

.. activecode:: ac20_4_2

   def keep_evens(nums):
       new_list = [num for num in nums if num % 2 == 0]
       return new_list
      
   print(keep_evens([3, 4, 6, 7, 0, 1]))

You can also combine ``map`` and ``filter`` operations by chaining them together, or with a single list comprehension.

.. activecode:: ac20_4_3

   things = [3, 4, 6, 7, 0, 1]
   #chaining together filter and map:
   # first, filter to keep only the even numbers
   # double each of them
   print(map(lambda x: x*2, filter(lambda y: y % 2 == 0, things)))
   
   # equivalent version using list comprehension
   print([x*2 for x in things if x % 2 == 0])


**Check your understanding**

.. mchoice:: question21_4_1
   :practice: T
   :answer_a: [4,2,8,6,5]
   :answer_b: [8,4,16,12,10]
   :answer_c: 10
   :answer_d: [10]
   :correct: d
   :feedback_a: Items from alist are doubled before being placed in blist.
   :feedback_b: Not all the items in alist are to be included in blist. Look at the if clause.
   :feedback_c: The result needs to be a list.
   :feedback_d: Yes, 5 is the only odd number in alist. It is doubled before being placed in blist.
   
   What is printed by the following statements?
   
   .. code-block:: python

     alist = [4,2,8,6,5]
     blist = [num*2 for num in alist if num%2==1]
     print(blist)

.. activecode:: ac21_4_4
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   **2.** The for loop below produces a list of numbers greater than 10. Below the given code, use list comprehension to accomplish the same thing. Assign it the the variable ``lst2``. Only one line of code is needed.
   ~~~~
   L = [12, 34, 21, 4, 6, 9, 42]
   lst = []
   for x in L:
       if x > 10:
           lst.append(x)
   print(lst)

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFourA(self):
         self.assertEqual(lst2, [12, 34, 21, 42], "Testing that lst2 is assigned to correct values")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac21_4_5
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   **3.** Write code to assign to the variable ``compri`` all the values of the key ``name`` in any of the sub-dictionaries in the dictionary ``tester``. Do this using a list comprehension.
   ~~~~
   tester = {'info': [{"name": "Lauren", 'class standing': 'Junior', 'major': "Information Science"},{'name': 'Ayo', 'class standing': "Bachelor's", 'major': 'Information Science'}, {'name': 'Kathryn', 'class standing': 'Senior', 'major': 'Sociology'}, {'name': 'Nick', 'class standing': 'Junior', 'major': 'Computer Science'}, {'name': 'Gladys', 'class standing': 'Sophomore', 'major': 'History'}, {'name': 'Adam', 'major': 'Violin Performance', 'class standing': 'Senior'}]}


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(compri), sorted(['Lauren', 'Ayo', 'Kathryn', 'Nick', 'Gladys', 'Adam']), "Testing that compri has the correct values.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()
