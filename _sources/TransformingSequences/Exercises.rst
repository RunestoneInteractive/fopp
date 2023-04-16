..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

:skipreading:`True`

.. qnum::
   :prefix: seqmut-13-
   :start: 1

Exercises
=========

#.

   .. tabbed:: q1

        .. tab:: Question

           .. actex:: ac8_11_1

              For each word in the list ``verbs``, add an -ing ending. Overwrite the old list so that ``verbs`` has the same words with ``ing`` at the end of each one.
              ~~~~
              verbs = ["kayak", "cry", "walk", "eat", "drink", "fly"]

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testSeven(self):
                      self.assertEqual(verbs, ['kayaking', 'crying', 'walking', 'eating', 'drinking', 'flying'], "Testing that verbs is assigned to correct values.")

              myTests().main()


#.

   .. tabbed:: q2

        .. tab:: Question

           .. actex:: ac8_11_2

              In XYZ University, upper level math classes are numbered 300 and up. Upper level English classes are numbered 200 and up. Upper level Psychology classes are 400 and up. Create two lists, ``upper`` and ``lower``. Assign each course in ``classes`` to the correct list, ``upper`` or ``lower``. HINT: remember, you can convert some strings to different types!
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

#.

   .. tabbed:: q3

        .. tab:: Question

           .. actex:: ac8_11_3

              Starting with the list myList = [76, 92.3, 'hello', True, 4, 76], write Python statements to do the following:
   
              a. Append "apple" and 76 to the list.
              #. Insert the value "cat" at position 3.
              #. Insert the value 99 at the start of the list.
              #. Find the index of "hello".
              #. Count the number of 76s in the list.
              #. Remove the first occurrence of 76 from the list.
              #. Remove True from the list using ``pop`` and ``index``.
              ~~~~
              myList = [76, 92.3, 'hello', True, 4, 76]

              # Your code here

        .. tab:: Answer

           .. activecode:: answer8_11_3

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


#.  .. tabbed:: q4

        .. tab:: Question
           
           .. activecode:: ac13_5_3

              The module ``keyword`` determines if a string is a keyword. e.g. ``keyword.iskeyword(s)`` where ``s`` is a string will return either ``True`` or ``False``, depending on whether or not the string is a Python keyword. Import the ``keyword`` module and test to see whether each of the words in list ``test`` are keywords. Save the respective answers in a list, ``keyword_test``.
              ~~~~
              test = ["else", "integer", "except", "elif"]
              keyword_test = []

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                 def testOneA(self):
                    self.assertEqual(keyword_test, [True, False, True, True], "Testing that keyword_test is correct and p1 assigned to correct values")
      
              myTests().main()



#.  .. tabbed:: q5

        .. tab:: Question
           
           .. activecode:: ac13_5_4

              The ``string`` module provides sequences of various types of Python characters. It has an attribute called ``digits`` that produces the string '0123456789'. Import the module and assign this string to the variable ``nums``. Below, we have provided a list of characters called ``chars``. Using ``nums`` and ``chars``, produce a list called ``is_num`` that consists of tuples. The first element of each tuple should be the character from ``chars``, and the second element should be a Boolean that reflects whether or not it is a Python digit. 
              ~~~~
              chars = ['h', '1', 'C', 'i', '9', 'True', '3.1', '8', 'F', '4', 'j']

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                 def testOneA(self):
                    self.assertEqual(is_num, [('h', False), ('1', True), ('C', False), ('i', False), ('9', True), ('True', False), ('3.1', False), ('8', True), ('F', False), ('4', True), ('j', False)], "Testing that is_num was created correctly.")
      
              myTests().main()


Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {% for q in questions: %}
        <div class='oneq full-width'>
            {{ q['htmlsrc']|safe }}
        </div>
    {% endfor %}
