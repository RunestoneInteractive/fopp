..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-11-
   :start: 1

Exercises
=========

.. activecode:: ac8_11_1
   :language: python
   :autograde: unittest
   :practice: T

   **1.** For each word in the list ``verbs``, add an -ing ending. Overwrite the old list so that ``verbs`` has the same words with ``ing`` at the end of each one.
   ~~~~
   verbs = ["kayak", "cry", "walk", "eat", "drink", "fly"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testSeven(self):
         self.assertEqual(verbs, ['kayaking', 'crying', 'walking', 'eating', 'drinking', 'flying'], "Testing that verbs is assigned to correct values.")

   myTests().main()


.. activecode:: ac8_11_2
   :language: python
   :autograde: unittest
   :practice: T
      
   **2.** In XYZ University, upper level math classes are numbered 300 and up. Upper level English classes are numbered 200 and up. Upper level Psychology classes are 400 and up. Create two lists, ``upper`` and ``lower``. Assign each course in ``classes`` to the correct list, ``upper`` or ``lower``. HINT: remember, you can convert some strings to different types!
   ~~~~
   classes = ["MATH 150", "PSYCH 111", "PSYCH 313", "PSYCH 412", "MATH 300", "MATH 404", "MATH 206", "ENG 100", "ENG 103", "ENG 201", "PSYCH 508", "ENG 220", "ENG 125", "ENG 124"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testEightA(self):
         self.assertEqual(upper, ['PSYCH 412', 'MATH 300', 'MATH 404', 'ENG 201', 'PSYCH 508', 'ENG 220'], "Testing that the upper list exists and contains the correct elements.")
      def testEightB(self):
         self.assertEqual(lower, ['MATH 150', 'PSYCH 111', 'PSYCH 313', 'MATH 206', 'ENG 100', 'ENG 103', 'ENG 125', 'ENG 124'], "Testing that the lower list exists and contains the correct elements.")

   myTests().main()

.. activecode:: ac8_11_3
   :language: python
   :autograde: unittest
   :practice: T

   **3.** Create a list called ``myList`` with the following six items: 76, 92.3, "hello", True, 4, 76.  Do it with both append and with concatenation, one item at a time. (Note that there are no tests for this problem.)
   ~~~~

   ====

.. activecode:: ac8_11_4
   :language: python
   :autograde: unittest
   :practice: T

   Create a list containing 100 random integers between 0 and 1000 (use iteration, append, and the random module). (Note that there are no tests for this problem.)
   ~~~~

5.

   .. tabbed:: q5

        .. tab:: Question

           .. actex:: ac8_11_5

              Starting with the list of the previous exercise, write Python statements to do the following:
   
              a. Append "apple" and 76 to the list.
              #. Insert the value "cat" at position 3.
              #. Insert the value 99 at the start of the list.
              #. Find the index of "hello".
              #. Count the number of 76s in the list.
              #. Remove the first occurrence of 76 from the list.
              #. Remove True from the list using ``pop`` and ``index``.
              ~~~~
              # Your code here

        .. tab:: Answer

           .. activecode:: answer8_11_5

              myList = [76, 92.3, 'hello', True, 4, 76]

              myList.append("apple")         # a
              myList.append(76)              # a
              myList.insert(3, "cat")        # b
              myList.insert(0, 99)           # c

              print(myList.index("hello"))   # d
              print(myList.count(76))        # e
              myList.remove(76)              # f
              myList.pop(myList.index(True)) # g

              print (myList)

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_b9034b274ebe4c55a58c44315ee681a4
