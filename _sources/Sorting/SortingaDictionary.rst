..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. _sort_dictionaries:

.. qnum::
   :prefix: sort-4-
   :start: 1

Sorting a Dictionary
--------------------

Previously, you have used a dictionary to accumulate counts, such as the frequencies of letters or words in a text.
For example, the following code counts the frequencies of different numbers in the list.

.. activecode:: ac18_4_1

    L = ['E', 'F', 'B', 'A', 'D', 'I', 'I', 'C', 'B', 'A', 'D', 'D', 'E', 'D']

    d = {}
    for x in L:
        if x in d:
            d[x] = d[x] + 1
        else:
            d[x] = 1
    for x in d.keys():
        print("{} appears {} times".format(x, d[x]))

The dictionary's keys are not sorted in any particular order. In fact, you may get a different order of output than
someone else running the same code. We can force the results to be displayed in some fixed ordering, by sorting the keys.

.. activecode:: ac18_4_2

    L = ['E', 'F', 'B', 'A', 'D', 'I', 'I', 'C', 'B', 'A', 'D', 'D', 'E', 'D']

    d = {}
    for x in L:
        if x in d:
            d[x] = d[x] + 1
        else:
            d[x] = 1
    y = sorted(d.keys())
    for k in y:
        print("{} appears {} times".format(k, d[k]))


With a dictionary that's maintaining counts or some other kind of score, we might prefer to get the outputs sorted based
on the count rather than based on the items. The standard way to do that in python is to sort based on a property of the key, in particular its value in the dictionary.

Here things get a little confusing because we have two different meaning of the word "key". One meaning is a key in a dictionary. The other meaning is the parameter name for the function that you pass into the sorted function.

Remember that the key function always takes as input one item from the sequence and returns a property of the item. In our case, the items to be sorted are the dictionary's keys, so each item is one key from the dictionary. To remind ourselves of that, we've named the parameter in tha lambda expression *k*. The property of key k that is supposed to be returned is its associated value in the dictionary. Hence, we have the lambda expression ``lambda k: d[k]``.

.. activecode:: ac18_4_5

    L = ['E', 'F', 'B', 'A', 'D', 'I', 'I', 'C', 'B', 'A', 'D', 'D', 'E', 'D']

    d = {}
    for x in L:
        if x in d:
            d[x] = d[x] + 1
        else:
            d[x] = 1

    y = sorted(d.keys(), key=lambda k: d[k], reverse=True)
    for k in y:
        print("{} appears {} times".format(k, d[k]))

Here's a version of that using a named function.

.. activecode:: ac18_4_6

    L = ['E', 'F', 'B', 'A', 'D', 'I', 'I', 'C', 'B', 'A', 'D', 'D', 'E', 'D']

    d = {}
    for x in L:
        if x in d:
            d[x] = d[x] + 1
        else:
            d[x] = 1

    def g(k):
        return d[k]

    y =(sorted(d.keys(), key=g, reverse=True))

    # now loop through the keys
    for k in y:
        print("{} appears {} times".format(k, d[k]))

.. note::

   When we sort the keys, passing a function with ``key=lambda x: d[x]`` does not specify to sort the keys of a
   dictionary. The lists of keys are passed as the first parameter value in the invocation of sort. The key parameter
   provides a function that says *how* to sort them.


An experienced programmer would probably not even separate out the sorting step. And
they might take advantage of the fact that when you pass a dictionary to something
that is expecting a list, its the same as passing the list of keys.

.. activecode:: ac18_4_7

  L = ['E', 'F', 'B', 'A', 'D', 'I', 'I', 'C', 'B', 'A', 'D', 'D', 'E', 'D']

  d = {}
  for x in L:
      if x in d:
          d[x] = d[x] + 1
      else:
          d[x] = 1

  # now loop through the sorted keys
  for k in sorted(d, key=lambda k: d[k], reverse=True):
        print("{} appears {} times".format(k, d[k]))

Eventually, you will be able to read code like that and immediately know what it's doing. For now, when you come
across something confusing, like line 11, try breaking it down. The function ``sorted`` is invoked. Its first parameter
value is a dictionary, which really means the keys of the dictionary. The second parameter, the key function, decorates 
the dictionary key with a post-it note containing that key's value in dictionary d. The last parameter, True, says to
sort in reverse order.

There is another way to sort dictionaries, by calling .items() to extract a sequence of (key, value) tuples, and then sorting that sequence of tuples. But it's better to learn the pythonic way of doing it, sorting the dictionary keys using a key function that takes one key as input and looks up the value in the dictionary.

**Check Your Understanding**

.. mchoice:: question18_4_1
   :multiple_answers:
   :answer_a: sorted(ks, key=g)
   :answer_b: sorted(ks, key=lambda x: g(x, d))
   :answer_c: sorted(ks, key=lambda x: d[x])
   :correct: b,c
   :feedback_a: g is a function that takes two parameters. The key function passed to sorted must always take just one parameter.
   :feedback_b: The lambda function takes just one parameter, and calls g with two parameters.
   :feedback_c: The lambda function looks up the value of x in d.
   :practice: T

   Which of the following will sort the keys of d in ascending order of their values (i.e., from lowest to highest)?

   .. code-block:: python

        L = [4, 5, 1, 0, 3, 8, 8, 2, 1, 0, 3, 3, 4, 3]

        d = {}
        for x in L:
            if x in d:
                d[x] = d[x] + 1
            else:
                d[x] = 1

        def g(k, d):
            return d[k]

        ks = d.keys()

.. activecode:: ac18_4_8
   :language: python
   :autograde: unittest
   :practice: T

   **2.** Sort the following dictionary based on the keys so that they are sorted a to z. Assign the resulting value to the variable ``sorted_keys``.
   ~~~~
   dictionary = {"Flowers": 10, 'Trees': 20, 'Chairs': 6, "Firepit": 1, 'Grill': 2, 'Lights': 14}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted_keys, sorted(dictionary), "Testing that sorted_keys has the correct value.")

   myTests().main()

.. activecode:: ac18_4_9
   :language: python
   :autograde: unittest
   :practice: T

   **3.** Below, we have provided the dictionary ``groceries``, whose keys are grocery items, and values are the number of each item that you need to buy at the store. Sort the dictionary's keys into alphabetical order, and save them as a list called ``grocery_keys_sorted``.
   ~~~~
   groceries = {'apples': 5, 'pasta': 3, 'carrots': 12, 'orange juice': 2, 'bananas': 8, 'popcorn': 1, 'salsa': 3, 'cereal': 4, 'coffee': 5, 'granola bars': 15, 'onions': 7, 'rice': 1, 'peanut butter': 2, 'spinach': 9}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(grocery_keys_sorted, ['apples', 'bananas', 'carrots', 'cereal', 'coffee', 'granola bars', 'onions', 'orange juice', 'pasta', 'peanut butter', 'popcorn', 'rice', 'salsa', 'spinach'], "Testing that grocery_keys_sorted was created correctly.")

   myTests().main()

.. activecode:: ac18_4_10
   :language: python
   :autograde: unittest
   :practice: T

   **4.** Sort the following dictionary's keys based on the value from highest to lowest. Assign the resulting value to the variable ``sorted_values``.
   ~~~~
   dictionary = {"Flowers": 10, 'Trees': 20, 'Chairs': 6, "Firepit": 1, 'Grill': 2, 'Lights': 14}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted_values, sorted(dictionary, key=lambda x: dictionary[x], reverse = True), "Testing that sorted_values has the correct value.")

   myTests().main()
