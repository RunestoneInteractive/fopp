..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-9-
   :start: 1

The Accumulator Pattern with Lists
----------------------------------

We can accumulate values into a list rather than accumulating a single numeric value. Consider, for
example, the following program which transforms a list into a new list by squaring each of the values.

.. activecode:: ac8_9_1

   nums = [3, 5, 8]
   accum = []
   for w in nums:
       x = w**2
       accum.append(x)
   print(accum)

Here, we **initialize** the accumulator variable to be an empty list, on line 2.

We **iterate** through the sequence (line 3). On each iteration we transform the item by squaring it (line 4).

The **update** step appends the new item to the list which is stored in the accumulator variable
(line 5). The update happens using the .append(), which mutates the list rather than using a
reassignment. Instead, we could have written ``accum = accum + [x]``, or ``accum += [x]``. In either
case, we'd need to concatenate a list containing x, not just x itself.

At the end, we have accumulated a new list of the same length as the original, but with each item
transformed into a new item. This is called a mapping operation, and we will revisit it in a later chapter.

Note how this differs from mutating the original list, as you saw in a previous section.

**Check your understanding**

.. mchoice:: question8_9_1
   :answer_a: [4,2,8,6,5]
   :answer_b: [4,2,8,6,5,5]
   :answer_c: [9,7,13,11,10]
   :answer_d: Error, you cannot concatenate inside an append.
   :correct: c
   :feedback_a: 5 is added to each item before the append is performed.
   :feedback_b: There are too many items in this list. Only 5 append operations are performed.
   :feedback_c: Yes, the for loop processes each item of the list. 5 is added before it is appended to blist.
   :feedback_d: 5 is added to each item before the append operation is performed.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

     alist = [4,2,8,6,5]
     blist = [ ]
     for item in alist:
        blist.append(item+5)
     print(blist)

.. mchoice:: question8_9_2
   :answer_a: [8,5,14,9,6]
   :answer_b: [8,5,14,9,6,12]
   :answer_c: [3,0,9,4,1,7,5]
   :answer_d: Error, you cannot concatenate inside an append.
   :correct: b
   :feedback_a: Don't forget the last item!
   :feedback_b: Yes, the for loop processes each item in lst. 5 is added before lst[i] is appended to new_list.
   :feedback_c: 5 is added to each item before the append operation is performed.
   :feedback_d: It is OK to have a complex expression inside the call to the append method. The expression `lst[i]+5` is fully evaluated before the append operation is performed.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

     lst= [3,0,9,4,1,7]
     new_list=[]
     for i in range(len(lst)):
        new_list.append(lst[i]+5)
     print(new_list)

.. activecode:: ac8_9_2
   :language: python
   :autograde: unittest
   :practice: T

   2. For each word in the list ``verbs``, add an -ing ending. Save this new list in a new list, ``ing``.
   ~~~~
   verbs = ["kayak", "cry", "walk", "eat", "drink", "fly"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testSix(self):
         self.assertEqual(ing, ['kayaking', 'crying', 'walking', 'eating', 'drinking', 'flying'], "Testing that the variable ing has the correct value.")

   myTests().main()

.. activecode:: ac8_9_3
   :language: python
   :autograde: unittest
   :practice: T

   Given the list of numbers, ``numbs``, create a new list of those same numbers increased by 5. Save this new list to the variable ``newlist``.
   ~~~~
   numbs = [5, 10, 15, 20, 25]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFour(self):
         self.assertEqual(newlist, [10, 15, 20, 25, 30], "Testing that the newlist value contains the correct elements.")

   myTests().main()

.. activecode:: ac8_9_4
   :language: python
   :autograde: unittest
   :practice: T

   Given the list of numbers, ``numbs``, modifiy the list ``numbs`` so that each of the original numbers are increased by 5.  Note this is not an accumulator pattern problem, but its a good review.
   ~~~~
   numbs = [5, 10, 15, 20, 25]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFive(self):
         self.assertEqual(numbs, [10, 15, 20, 25, 30], "Testing that numbs is assigned to correct values.")
         self.assertNotIn("append", self.getEditorText(), "Do not use append")

   myTests().main()

.. activecode:: ac8_9_5
   :language: python
   :autograde: unittest
   :practice: T

   For each number in ``lst_nums``, multiply that number by 2 and append it to a new list called ``larger_nums``.
   ~~~~
   lst_nums = [4, 29, 5.3, 10, 2, 1817, 1967, 9, 31.32]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(larger_nums, [8, 58, 10.6, 20, 4, 3634, 3934, 18, 62.64], "Testing that larger_nums has been created correctly." )

   myTests().main()

