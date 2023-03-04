..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: sequences-6-
   :start: 1

.. index::
   single: [ : ]; string slice
   slice; string

The Slice Operator
------------------

A substring of a string is called a **slice**. Selecting a slice is similar to
selecting a character:

.. activecode:: ac5_6_1

    singers = "Peter, Paul, and Mary"
    print(singers[0:5])
    print(singers[7:11])
    print(singers[17:21])


The ``slice`` operator ``[n:m]`` returns the part of the string starting
with the character at index n and
go up to but *not including* the character at index m.
Or with normal counting from 1, this is the (n+1)st character up to and including the mth character.

If you omit the first index (before the colon), the slice starts at the
beginning of the string. If you omit the second index, the slice goes to the
end of the string.

.. activecode:: ac5_6_2

    fruit = "banana"
    print(fruit[:3])
    print(fruit[3:])

What do you think ``fruit[:]`` means?

List Slices
===========

The slice operation we saw with strings also work on lists.  Remember that the first index is the starting point for the slice and the second number is one index past the end of the slice (up to but not including that element).  Recall also
that if you omit the first index (before the colon), the slice starts at the
beginning of the sequence. If you omit the second index, the slice goes to the
end of the sequence.

.. activecode:: ac5_6_3

    a_list = ['a', 'b', 'c', 'd', 'e', 'f']
    print(a_list[1:3])
    print(a_list[:4])
    print(a_list[3:])
    print(a_list[:])


Tuple Slices
============

We can't modify the elements of a tuple, but we can make a variable reference a new tuple holding different information.
Thankfully we can also use the slice operation on tuples as well as strings and lists. To construct the new tuple, we can
slice parts of the old tuple and join up the bits to make the new tuple. So ``julia`` has a new recent film, and we might
want to change her tuple. We can easily slice off the parts we want and concatenate them with the new tuple.

.. activecode:: ac5_6_4

    julia = ("Julia", "Roberts", 1967, "Duplicity", 2009, "Actress", "Atlanta, Georgia")
    print(julia[2])
    print(julia[2:6])

    print(len(julia))

    julia = julia[:3] + ("Eat Pray Love", 2010) + julia[5:]
    print(julia)



**Check your understanding**

.. mchoice:: question5_6_1
   :answer_a: python
   :answer_b: rocks
   :answer_c: hon r
   :answer_d: Error, you cannot have two numbers inside the [ ].
   :correct: c
   :feedback_a: That would be s[0:6].
   :feedback_b: That would be s[7:].
   :feedback_c: Yes, start with the character at index 3 and go up to but not include the character at index 8.
   :feedback_d: This is called slicing, not indexing. It requires a start and an end.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(s[3:8])

.. mchoice:: question5_6_2
   :answer_a: [ [ ], 3.14, False]
   :answer_b: [ [ ], 3.14]
   :answer_c: [ [56, 57, "dog"], [ ], 3.14, False]
   :correct: a
   :feedback_a: Yes, the slice starts at index 4 and goes up to and including the last item.
   :feedback_b: By leaving out the upper bound on the slice, we go up to and including the last item.
   :feedback_c: Index values start at 0.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

     alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(alist[4:])

.. mchoice:: question5_6_3
   :answer_a: 2
   :answer_b: 3
   :answer_c: 4
   :answer_d: 5
   :correct: b
   :feedback_a: The list begins with the second item of L and includes everything up to but not including the last item.
   :feedback_b: Yes, there are 3 items in this list.
   :feedback_c: The list begins with the second item of L and includes everything up to but not including the last item.
   :feedback_d: The list begins with the second item of L and includes everything up to but not including the last item.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

     L = [0.34, '6', 'SI106', 'Python', -2]
     print(len(L[1:-1]))


.. activecode:: ac5_6_5
   :language: python
   :autograde: unittest
   :practice: T

   Create a new list using the 9th through 12th elements (four items in all) of ``new_lst`` and assign it to the variable ``sub_lst``.
   ~~~~
   new_lst = ["computer", "luxurious", "basket", "crime", 0, 2.49, "institution", "slice", "sun", ["water", "air", "fire", "earth"], "games", 2.7, "code", "java", ["birthday", "celebration", 1817, "party", "cake", 5], "rain", "thunderstorm", "top down"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sub_lst, new_lst[8:12], "Testing that sub_lst has the correct elements assigned.")

   myTests().main()
