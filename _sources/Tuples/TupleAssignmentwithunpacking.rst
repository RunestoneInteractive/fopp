..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: tuples-4-
   :start: 1

.. index::
    single: assignment; tuple 
    single: tuple; assignment 

Tuple Assignment with Unpacking
-------------------------------

Python has a very powerful **tuple assignment** feature that allows a tuple of variable names on the left of an 
assignment statement to be assigned values from a tuple on the right of the assignment. Another way to think of this 
is that the tuple of values is **unpacked** into the variable names.

.. activecode:: ac12_4_1

    julia = "Julia", "Roberts", 1967, "Duplicity", 2009, "Actress", "Atlanta, Georgia"

    name, surname, birth_year, movie, movie_year, profession, birth_place = julia

This does the equivalent of seven assignment statements, all on one easy line.

Naturally, the number of variables on the left and the number of values on the right have to be the same.

.. activecode:: ac12_4_4

    (a, b, c, d) = (1, 2, 3) # ValueError: need more than 3 values to unpack



.. note::

    Unpacking into multiple variable names also works with lists, or any other sequence type, as long as there is exactly one value for each variable. For example, you can write ``x, y = [3, 4]``.

Swapping Values between Variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This feature is used to enable swapping the values of two variables. With conventional assignment statements, we have to
use a temporary variable. For example, to swap ``a`` and ``b``:

.. activecode:: ac12_4_2

    a = 1
    b = 2
    temp = a
    a = b
    b = temp
    print(a, b, temp)

Tuple assignment solves this problem neatly:

.. activecode:: ac12_4_3

    a = 1
    b = 2
    (a, b) = (b, a)
    print(a, b)

The left side is a tuple of variables; the right side is a tuple of values. Each value is assigned to its respective 
variable. All the expressions on the right side are evaluated before any of the assignments. This feature makes
tuple assignment quite versatile.


Unpacking Into Iterator Variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Multiple assignment with unpacking is particularly useful when you iterate through a list of tuples. You can unpack each tuple into several loop variables. For example:

.. activecode:: ac12_4_8a

    authors = [('Paul', 'Resnick'), ('Brad', 'Miller'), ('Lauren', 'Murphy')]
    for first_name, last_name in authors:
        print("first name:", first_name, "last name:", last_name)

On the first iteration the tuple ``('Paul', 'Resnick')`` is unpacked into the two variables ``first_name`` and ``last_name``. One the second iteration, the next tuple is unpacked into those same loop variables.



.. _pythonic_enumeration:

The Pythonic Way to Enumerate Items in a Sequence
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When we first introduced the for loop, we provided an example of how to iterate through the indexes of a sequence, and thus enumerate the items and their positions in the sequence.

.. activecode:: ac12_4_8b

   fruits = ['apple', 'pear', 'apricot', 'cherry', 'peach']
   for n in range(len(fruits)):
       print(n, fruits[n])

We are now prepared to understand a more pythonic approach to enumerating items in a sequence. Python provides a built-in function ``enumerate``. It takes a sequence as input and returns a sequence of tuples. In each tuple, the first element is an integer and the second is an item from the original sequence. (It actually produces an "iterable" rather than a list, but we can use it in a for loop as the sequence to iterate over.)

.. activecode:: ac12_4_8c

   fruits = ['apple', 'pear', 'apricot', 'cherry', 'peach']
   for item in enumerate(fruits):
       print(item[0], item[1])

The pythonic way to consume the results of enumerate, however, is to unpack the tuples while iterating through them, so that the code is easier to understand.

.. activecode:: ac12_4_8d

   fruits = ['apple', 'pear', 'apricot', 'cherry', 'peach']
   for idx, fruit in enumerate(fruits):
       print(idx, fruit)


**Check your Understanding**


.. mchoice:: question12_4_2
   :practice: T
   :answer_a: You can't use different variable names on the left and right side of an assignment statement.
   :answer_b: At the end, x still has it's original value instead of y's original value.
   :answer_c: Actually, it works just fine!
   :feedback_a: Sure you can; you can use any variable on the right-hand side that already has a value.
   :feedback_b: Once you assign x's value to y, y's original value is gone.
   :feedback_c: Once you assign x's value to y, y's original value is gone.
   :correct: b

   Consider the following alternative way to swap the values of variables x and y. What's wrong with it?
   
   .. code-block:: python 
        
        # assume x and y already have values assigned to them
        y = x
        x = y   

.. activecode:: ac12_4_9
   :language: python
   :autograde: unittest
   :practice: T
   :chatcodes:

   With only one line of code, assign the variables ``water``, ``fire``, ``electric``, and ``grass`` to the values "Squirtle", "Charmander", "Pikachu", and "Bulbasaur"
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(water, "Squirtle", "Testing that water is assigned to the correct value.")
         self.assertEqual(fire, "Charmander", "Testing that fire is assigned to the correct value.")
         self.assertEqual(electric, "Pikachu", "Testing that electric is assigned to the correct value.")
         self.assertEqual(grass, "Bulbasaur", "Testing that grass is assigned to the correct value.")

   myTests().main()
   
.. activecode:: ac12_4_10
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   With only one line of code, assign four variables, ``v1``, ``v2``, ``v3``, and ``v4``, to the following four values: 1, 2, 3, 4.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(v1, 1, "Testing that v1 was assigned correctly.")
         self.assertEqual(v2, 2, "Testing that v2 was assigned correctly.")
         self.assertEqual(v3, 3, "Testing that v3 was assigned correctly.")
         self.assertEqual(v4, 4, "Testing that v4 was assigned correctly.")

   myTests().main()


.. activecode:: ac12_4_11
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   If you remember, the .items() dictionary method produces a sequence of tuples. Keeping this in mind, we have provided you a dictionary called ``pokemon``. For every key value pair, append the key to the list ``p_names``, and append the value to the list ``p_number``. Do not use the .keys() or .values() methods.
   ~~~~
   pokemon = {'Rattata': 19, 'Machop': 66, 'Seel': 86, 'Volbeat': 86, 'Solrock': 126}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(p_names), sorted(['Rattata', 'Machop', 'Seel', 'Volbeat', 'Solrock']), "Testing that p_name has the correct values")
      def testTwo(self):
         self.assertEqual(sorted(p_number), sorted([19,66,86,86,126]), "Testing that p_number hsa the correct values")
         self.assertNotIn('.keys()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('.items()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('.values()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac12_4_12
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   The .items() method produces a sequence of key-value pair tuples. With this in mind, write code to create a list of keys from the dictionary ``track_medal_counts`` and assign the list to the variable name ``track_events``. Do **NOT** use the .keys() method.
   ~~~~
   track_medal_counts = {'shot put': 1, 'long jump': 3, '100 meters': 2, '400 meters': 2, '100 meter hurdles': 3, 'triple jump': 3, 'steeplechase': 2, '1500 meters': 1, '5K': 0, '10K': 0, 'marathon': 0, '200 meters': 0, '400 meter hurdles': 0, 'high jump': 1}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(track_events), sorted(['shot put', 'long jump', '100 meters', '400 meters', '100 meter hurdles', 'triple jump', 'steeplechase', '1500 meters', '5K', '10K', 'marathon', '200 meters', '400 meter hurdles', 'high jump']) , "Testing that track_events was created correctly.")
         self.assertNotIn('.keys()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('.items()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('in track_medal_counts:', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()
