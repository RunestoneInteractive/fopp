..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: modules-5-
   :start: 1

Exercises
---------

#.  .. tabbed:: q1

        .. tab:: Question
           
           .. actex:: ac13_5_1

              Use a ``for`` statement to print 10 random numbers.
              ~~~~

        .. tab:: Answer
            
            .. activecode:: answer_ac13_5_1
            
               import random
            
               howmany = 10 
               for counter in range(howmany):
                   arandom = random.random() 
                   print(arandom)


#.  .. tabbed:: q2

        .. tab:: Question

            .. actex:: ac13_5_2

               Repeat the above exercise but this time print 10 random numbers between 25 and 35.
               ~~~~

#.  .. tabbed:: q3

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



#.  .. tabbed:: q4

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
