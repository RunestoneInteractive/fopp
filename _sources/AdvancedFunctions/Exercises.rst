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
   :prefix: advfuncs-4-
   :start: 1

Exercises
---------

.. question:: q16_4_1

    .. tabbed:: q1

        .. tab:: Question

           .. actex:: actex16_4_1

              1. Fill in the parameter list for g so that the invocations of g yield the return values specified
              ~~~~ 

              def g():
                  return 2*x + y + z
              print(g(3))       # should output 10
              print(g(3, 2))    # should output 8
              print(g(3, 2, 1)) #should output 9

.. question:: q16_4_2

    .. tabbed:: q2

        .. tab:: Question

           .. actex:: actex16_4_2

              2. Define a function called ``nums`` that has three parameters. The first parameter, an integer, should be required. A second parameter named ``mult_int`` should be optional with a default value of 5. The final parameter, ``switch``, should also be optional with a default value of False. The function should multiply the two integers together, and if switch is True, should change the sign of the product before returning it.
              ~~~~ 

              def nums():
                  pass #remove this once you start writing the function

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(nums(5), 25, "Testing the function nums on input 5.")
                      self.assertEqual(nums(2, mult_int = 4), 8, "Testing the function nums on inputs 2, mult_int = 4.")
                      self.assertEqual(nums(3, switch = True), -15, "Testing the function nums on inputs 3, switch = True.")
                      self.assertEqual(nums(4, mult_int = 3, switch = True), -12, "Testing the function nums on inputs 4, mult_int = 3, switch = True.")
                      self.assertEqual(nums(0, switch = True), 0, "Testing the function nums on inputs 0, switch = True.")

              myTests().main()  

.. question:: q16_4_3

    .. tabbed:: q3

        .. tab:: Question

           .. actex:: actex16_4_3

              3. Write a function called ``together`` that takes three parameters, the first is a required parameter that is a number (integer or float), the second is a required parameter that is a string, and the third is an optional parameter whose default is " ". What is returned is the first parameter, concatenated with the second, using the third.
              ~~~~ 

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(together(12, 'cats'), '12 cats', "Testing that together returns the correct string on input (12, 'cats')")
                      self.assertEqual(together(17.3, 'birthday cakes'), '17.3 birthday cakes', "Testing that together returns the correct string on input (17.3, 'birthday cakes')")
                      self.assertEqual(together(3, 'dogs', ': '), '3: dogs', "Testing that together returns the correct string on input (3, 'dogs', ': ')")
                      self.assertEqual(together(493.3, 'beans', ' lima '), '493.3 lima beans', "Testing that together returns the correct string on input (493.3, 'beans', 'lima')")

              myTests().main()   


Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {% for q in questions: %}
        <div class='oneq full-width'>
            {{ q['htmlsrc']|safe }}
        </div>
    {% endfor %}
