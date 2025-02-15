..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: sequences-3-
   :start: 1

.. index::
   single: [ ]; string indexing
   index; string
   string; index

Index Operator: Working with the Characters of a String
-------------------------------------------------------

The **indexing operator** (Python uses square brackets to enclose the index)
selects a single character from a string.  The characters are accessed by their position or
index value.  For example, in the string shown below, the 14 characters are indexed left to right
from postion 0 to position 13.

.. image:: Figures/indexvalues.png
   :alt: index values

It is also the case that the positions are named from right to left using negative numbers where -1 is
the rightmost index and so on. Note that the character at index 6 (or -8) is the blank character.

.. activecode:: ac5_3_1

    school = "Luther College"
    m = school[2]
    print(m)

    lastchar = school[-1]
    print(lastchar)

The expression ``school[2]`` selects the character at index 2 from ``school``, and creates a new
string containing just this one character. The variable ``m`` refers to the result.

The letter at index zero of ``"Luther College"`` is ``L``.  So at
position ``[2]`` we have the letter ``t``.

If you want the zero-eth letter of a string, you just put 0, or any expression
with the value 0, in the brackets.  Give it a try.

The expression in brackets is called an **index**. An index specifies a member
of an ordered collection.  In this case the collection of characters in the string. The index
*indicates* which character you want. It can be any integer
expression so long as it evaluates to a valid index value.

Note that indexing returns a *string* --- Python has no special type for a single character.
It is just a string of length 1.

Index Operator: Accessing Elements of a List or Tuple
=====================================================

The syntax for accessing the elements of a list or tuple is the same as the syntax for
accessing the characters of a string.  We use the index operator ( ``[]`` -- not to
be confused with an empty list). The expression inside the brackets specifies
the index. Remember that the indices start at 0. Any integer expression can be used
as an index and as with strings, negative index values will locate items from the right instead
of from the left.

When we say the first, third or nth character of a sequence, we generally mean counting the usual way, starting with 1.  The nth character and the character AT INDEX n are different then:  The nth character is at index n-1.  Make sure you are clear on what you mean!

Try to predict what will be printed out by the following code, and then run it to check your
prediction. (Actually, it's a good idea to always do that with the code examples. You
will learn much more if you force yourself to make a prediction before you see the output.)

.. activecode:: ac5_3_2

    numbers = [17, 123, 87, 34, 66, 8398, 44]
    print(numbers[2])
    print(numbers[9-8])
    print(numbers[-2])


.. activecode:: ac5_3_3

    prices = (1.99, 2.00, 5.50, 20.95, 100.98)
    print(prices[0])
    print(prices[-1])
    print(prices[3-5])

**Check your understanding**

.. mchoice:: question5_3_1
   :answer_a: t
   :answer_b: h
   :answer_c: c
   :answer_d: Error, you cannot use the [ ] operator with a string.
   :correct: b
   :feedback_a: Index locations do not start with 1, they start with 0.
   :feedback_b: Yes, index locations start with 0.
   :feedback_c: s[-3] would return c, counting from right to left.
   :feedback_d: [ ] is the index operator.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(s[3])

.. mchoice:: question5_3_2
   :answer_a: tr
   :answer_b: to
   :answer_c: ps
   :answer_d: nn
   :answer_e: Error, you cannot use the [ ] operator with the + operator.
   :correct: b
   :feedback_a: Almost, t is at postion 2, counting left to right starting from 0; but r is at -5, counting right to left starting from -1.
   :feedback_b: For -4 you count from right to left, starting with -1.
   :feedback_c: p is at location 0, not 2.
   :feedback_d: n is at location 5, not 2.
   :feedback_e: [ ] operator returns a string that can be concatenated with another string.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(s[2] + s[-4])

.. mchoice:: question5_3_3
   :answer_a: [ ]
   :answer_b: 3.14
   :answer_c: False
   :answer_d: "dog"
   :correct: b
   :feedback_a: The empty list is at index 4.
   :feedback_b: Yes, 3.14 is at index 5 since we start counting at 0 and sublists count as one item.
   :feedback_c: False is at index 6.
   :feedback_d: Look again, the element at index 3 is a list. This list only counts as one element.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

     alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(alist[5])

.. activecode:: ac5_3_4
   :language: python
   :autograde: unittest
   :practice: T

   Assign the value of the 34th element of ``lst`` to the variable ``output``. Note that the `l` in `lst` is a letter, not a number; variable names can't start with a number.
   ~~~~
   lst = ["hi", "morning", "dog", "506", "caterpillar", "balloons", 106, "yo-yo", "python", "moon", "water", "sleepy", "daffy", 45, "donald", "whiteboard", "glasses", "markers", "couches", "butterfly", "100", "magazine", "door", "picture", "window", ["Olympics", "handle"], "chair", "pages", "readings", "burger", "juggle", "craft", ["store", "poster", "board"], "laptop", "computer", "plates", "hotdog", "salad", "backpack", "zipper", "ring", "watch", "finger", "bags", "boxes", "pods", "peas", "apples", "horse", "guinea pig", "bowl", "EECS"]

   ====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(output, "laptop", "Testing that output value is assigned to correct value.")

   myTests().main()

.. activecode:: ac5_3_5
   :language: python
   :autograde: unittest
   :practice: T

   Assign the value of the 23rd element of ``l`` to the variable ``checking``.
   ~~~~
   l = ("hi", "goodbye", "python", "106", "506", 91, ['all', 'Paul', 'Jackie', "UMSI", 1, "Stephen", 4.5], 109, "chair", "pizza", "wolverine", 2017, 3.92, 1817, "account", "readings", "papers", 12, "facebook", "twitter", 193.2, "snapchat", "leaders and the best", "social", "1986", 9, 29, "holiday", ["women", "olympics", "gold", "rio", 21, "2016", "men"], "26trombones")

   ====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(checking, "leaders and the best", "Testing that checking has the correct element assigned.")

   myTests().main()

.. activecode:: ac5_3_6
   :language: python
   :autograde: unittest
   :practice: T

   Assign the value of the last chacter of ``lst`` to the variable ``output``. Do this so that the length of lst doesn't matter.
   ~~~~
   lst = "Every chess or checkers game begins from the same position and has a finite number of moves that can be played. While the number of possible scenarios and moves is quite large, it is still possible for computers to calculate that number and even be programmed to respond well against a human player..."

   ====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testThree(self):
         self.assertEqual(output, ".", "Testing that output value is assigned to correct value.")

   myTests().main()

.. note::
   Why does counting start at 0 going from left to right, but at -1 going from right to left? Well, indexing starting at 0
   has a long history in computer science having to do with some low-level implementation details that we won't
   go into. For indexing from right to left, it might seem natural to do the analgous thing
   and start at -0. Unfortunately, -0 is the same as 0, so s[-0] can't be the last item. Remember we
   said that programming languages are formal languages where details matter and
   everything is taken literally?
