..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: dictionaries-7-
   :start: 1

.. _accumulating_best_key:

Accumulating the Best Key
-------------------------

Now what if we want to find the *key* associated with the maximum value? It would be nice to just find
the maximum value as above, and then look up the key associated with it, but dictionaries don't work
that way. You can look up the value associated with a key, but not the key associated with a value. (The
reason for that is there may be more than one key that has the same value).

The trick is to have the accumulator keep track of the best key so far instead of the best value so far.
For simplicity, let's assume that there are at least two keys in the dictionary. Then, similar to our
first version of computing the max of a list, we can initialize the best-key-so-far to be the first key,
and loop through the keys, replacing the best-so-far whenever we find a better one.

In the exercise below, we have provided skeleton code. See if you can fill it in. An answer is provided,
but you'll learn more if you try to write it yourself first.

.. tabbed:: q0

   .. tab:: Question

      .. activecode:: ac10_7_1

         Write a program that finds the key in a dictionary that has the maximum value. If
         two keys have the same maximum value, it's OK to print out either one. Fill
         in the skeleton code
         ~~~~
         d = {'a': 194, 'b': 54, 'c':34, 'd': 44, 'e': 312, 'full':31}

         ks = d.keys()
         # initialize variable best_key_so_far to be the first key in d
         for k in ks:
             # check if the value associated with the current key is
             # bigger than the value associated with the best_key_so_far
             # if so, save the current key as the best so far

         print("key " + best_key_so_far + " has the highest value, " + str(d[best_key_so_far]))

   .. tab:: Answer

      .. activecode:: answer10_7_1
         :optional:

         d = {'a': 194, 'b': 54, 'c':34, 'd': 44, 'e': 312, 'full':31}

         ks = d.keys()
         best_key_so_far = list(ks)[0]  # Have to turn ks into a real list before using [] to select an item
         for k in ks:
             if d[k] > d[best_key_so_far]:
                 best_key_so_far = k

         print("key " + best_key_so_far + " has the highest value, " + str(d[best_key_so_far]))

**Check your Understanding**

.. activecode:: ac10_7_2
   :language: python
   :autograde: unittest
   :practice: T

   **1.** Create a dictionary called ``d`` that keeps track of all the characters in the string ``placement`` and notes how many times each character was seen. Then, find the key with the lowest value in this dictionary and assign that key to ``key_with_min_value``.
   ~~~~
   placement = "Beaches are cool places to visit in spring however the Mackinaw Bridge is near. Most people visit Mackinaw later since the island is a cool place to explore."

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(d.keys()), sorted(['B', 'e', 'a', 'c', 'h', 's', ' ', 'r', 'o', 'l', 'p', 't', 'v', 'i', 'n', 'g', 'w', 'M', 'k', 'd', '.', 'x']), "Testing the keys were created correctly")
         self.assertEqual(sorted(d.values()), sorted([2, 17, 12, 8, 4, 10, 27, 7, 10, 8, 6, 8, 3, 13, 7, 2, 3, 3, 2, 2, 2, 1]), "Testing the values were created correctly")
      def testTwo(self):
         self.assertEqual(key_with_min_value, "x", "Testing that key_with_min_value has been correctly assigned")

   myTests().main()

.. activecode:: ac10_7_3
   :language: python
   :autograde: unittest
   :practice: T

   **5.** Create a dictionary called ``lett_d`` that keeps track of all of the characters in the string ``product`` and notes how many times each character was seen. Then, find the key with the highest value in this dictionary and assign that key to ``key_with_max_value``.
   ~~~~
   product = "iphone and android phones"

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(lett_d.items()), sorted([('h', 2), ('a', 2), (' ', 3), ('n', 4), ('d', 3), ('o', 3), ('i', 2), ('p', 2), ('e', 2), ('r', 1), ('s', 1)]), "Testing that lett_d has been created correctly.")
      def testTwo(self):
         self.assertEqual(key_with_max_value, "n", "Testing that key_with_max_value has been correctly assigned")

   myTests().main()
