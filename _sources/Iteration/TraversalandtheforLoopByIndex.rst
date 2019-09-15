..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. _for_by_index:

.. qnum::
   :prefix: moreiter-6-
   :start: 1

Traversal and the ``for`` Loop: By Index
----------------------------------------

With a for loop, the loop variable is bound, on each iteration, to the next item in a sequence. Sometimes, it is natural to think about iterating through the *positions*, or *indexes* of a sequence, rather than through the items themselves.

For example, consider the list ``['apple', 'pear', 'apricot', 'cherry', 'peach']``. 'apple' is at position 0, 'pear' at position 1, and 'peach' at position 4.

Thus, we can iterate through the indexes by generating a sequence of them, using the ``range`` function.

.. activecode:: ac14_6_5a

   fruits = ['apple', 'pear', 'apricot', 'cherry', 'peach']
   for n in range(5):
       print(n, fruits[n])

In order to make the iteration more general, we can use the ``len`` function to provide the bound for ``range``. This is 
a very common pattern for traversing any sequence by position. Make sure you understand why the range function behaves 
correctly when using ``len`` of the string as its parameter value.

.. activecode:: ac14_6_5

   fruits = ['apple', 'pear', 'apricot', 'cherry', 'peach']
   for n in range(len(fruits)):
       print(n, fruits[n])


In some other programming languages, that's the only way to iterate through a sequence, by iterating through the positions and extracting the items at each of the positions. Python code is often easier to read because we don't have to do iteration that way. Compare the iteration above with the more "pythonic" approach below.

.. activecode:: ac14_6_5c

   fruits = ['apple', 'pear', 'apricot', 'cherry', 'peach']
   for fruit in fruits:
       print(fruit)

If we really want to print the indexes (positions) along with the fruit names, then iterating through the indexes as in the previous versions is available to us. Python also provides an ``enumerate`` function which provides a more "pythonic" way of enumerating the items in a list, but we will delay the explanation of how to use ``enumerate`` until we cover the notions of :ref:`tuple packing and unpacking<pythonic_enumeration>`.



**Check your understanding**

.. mchoice:: question14_6_1
   :answer_a: 0
   :answer_b: 1
   :answer_c: 2
   :answer_d: 3
   :answer_e: 6
   :correct: d
   :feedback_a: idx % 2 is 0 whenever idx is even
   :feedback_b: idx % 2 is 0 whenever idx is even
   :feedback_c: idx % 2 is 0 whenever idx is even
   :feedback_d: idx % 2 is 0 whenever idx is even
   :feedback_e: idx % 2 is 0 whenever idx is even
   :practice: T

   How many times is the letter p printed by the following statements?
   
   .. code-block:: python

      s = "python"
      for idx in range(len(s)):
         print(s[idx % 2])
