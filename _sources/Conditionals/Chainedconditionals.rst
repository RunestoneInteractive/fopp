..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: condition-9-
   :start: 1

.. index::
   single: chained conditional
   single: conditional; chained

Chained conditionals
--------------------

Python provides an alternative way to write nested selection such as the one shown in the previous section.
This is sometimes referred to as a **chained conditional**.

.. sourcecode:: python

    if x < y:
        print("x is less than y")
    elif x > y:
        print("x is greater than y")
    else:
        print("x and y must be equal")

The flow of control can be drawn in a different orientation but the resulting pattern is identical to the one shown above.

.. image:: Figures/flowchart_chained_conditional.png

``elif`` is an abbreviation of ``else if``. Again, exactly one branch will be
executed. There is no limit of the number of ``elif`` statements but only a
single (and optional) final ``else`` statement is allowed and it must be the last
branch in the statement.

.. image:: Figures/conditionals_overview.png

Each condition is checked in order. If the first is false, the next is checked,
and so on. If one of them is true, the corresponding branch executes, and the
statement ends. Even if more than one condition is true, only the first true
branch executes.

Here is the same program using ``elif``.

.. activecode:: ac7_9_1

    x = 10
    y = 10

    if x < y:
        print("x is less than y")
    elif x > y:
        print("x is greater than y")
    else:
        print("x and y must be equal")

The following image highlights different kinds of valid conditionals that can be used. Though there are other 
versions of conditionals that Python can understand (imagine an if statement with twenty elif statements), those 
other versions must follow the same order as seen below.

.. image:: Figures/valid_conditionals.png
   :alt: shows a unary conditiona, a binary conditional, a conditional with if, elif, else, and a conditional with if, elif, and elif.

**Check your understanding**

.. mchoice:: question7_9_1
   :answer_a: I only
   :answer_b: II only
   :answer_c: III only
   :answer_d: II and III
   :answer_e: I, II, and III
   :correct: b
   :feedback_a: You can not use a Boolean expression after an else.
   :feedback_b: Yes, II will give the same result.
   :feedback_c: No, III will not give the same result.  The first if statement will be true, but the second will be false, so the else part will execute.
   :feedback_d: No, Although II is correct III will not give the same result.  Try it.
   :feedback_e: No, in I you can not have a Boolean expression after an else.
   :practice: T

   Which of I, II, and III below gives the same result as the following nested if?

   .. code-block:: python

     # nested if-else statement
     x = -10
     if x < 0:
         print("The negative number ",  x, " is not valid here.")
     else:
         if x > 0:
             print(x, " is a positive number")
         else:
             print(x, " is 0")


   .. code-block:: python

     I.
     
     if x < 0:
         print("The negative number ",  x, " is not valid here.")
     else (x > 0):
         print(x, " is a positive number")
     else:
         print(x, " is 0")


   .. code-block:: python

     II.
     
     if x < 0:
         print("The negative number ",  x, " is not valid here.")
     elif (x > 0):
         print(x, " is a positive number")
     else:
         print(x, " is 0")

   .. code-block:: python

     III.
     
     if x < 0:
         print("The negative number ",  x, " is not valid here.")
     if (x > 0):
         print(x, " is a positive number")
     else:
         print(x, " is 0")

.. mchoice:: question7_9_2
   :answer_a: a
   :answer_b: b
   :answer_c: c
   :correct: c
   :feedback_a: While the value in x is less than the value in y (3 is less than 5) it is not less than the value in z (3 is not less than 2).
   :feedback_b: The value in y is not less than the value in x (5 is not less than 3).
   :feedback_c: Since the first two Boolean expressions are false the else will be executed.
   :practice: T

   What will the following code print if x = 3, y = 5, and z = 2?

   .. code-block:: python

     if x < y and x < z:
         print("a")
     elif y < x and y < z:
         print("b")
     else:
         print("c")

.. activecode:: ac7_9_2
   :language: python
   :autograde: unittest
   :practice: T

   Create one conditional to find whether "false" is in string ``str1``. If so, assign variable ``output`` the string "False. You aren't you?". Check to see if "true" is in string ``str1`` and if it is then assign "True! You are you!" to the variable ``output``. If neither are in ``str1``, assign "Neither true nor false!" to ``output``.
   ~~~~
   str1 = "Today you are you! That is truer than true! There is no one alive who is you-er than you!"
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testThree(self):
         self.assertEqual(output, "True! You are you!", "Testing that output has the correct value, given the str1 provided.")
         self.assertIn("else", self.getEditorText(), "Testing output (Don't worry about actual and expected values).")
         self.assertIn("elif", self.getEditorText(), "Testing output (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac7_9_4
   :language: python
   :autograde: unittest
   :practice: T

   Create an empty list called ``resps``. Using the list ``percent_rain``, for each percent, if it is above 90, add the string 'Bring an umbrella.' to ``resps``, otherwise if it is above 80, add the string 'Good for the flowers?' to ``resps``, otherwise if it is above 50, add the string 'Watch out for clouds!' to ``resps``, otherwise, add the string 'Nice day!' to ``resps``. Note: if you're sure you've got the problem right but it doesn't pass, then check that you've matched up the strings exactly.
   ~~~~
   percent_rain = [94.3, 45, 100, 78, 16, 5.3, 79, 86]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(resps, ['Bring an umbrella.','Nice day!','Bring an umbrella.','Watch out for clouds!',"Nice day!",'Nice day!','Watch out for clouds!',"Good for the flowers?"], "Testing the value of resps")

   myTests().main()

.. activecode:: ac7_9_5
   :language: python
   :autograde: unittest
   :practice: T

   We have created conditionals for you to use. Do not change the provided conditional statements. Find an integer value for ``x`` that will cause ``output`` to hold the values ``True`` and ``None``. (Drawing diagrams or flow charts for yourself may help!)
   ~~~~
   x =
   output = []

   if x > 63:
       output.append(True)
   elif x > 55:
       output.append(False)
   else: 
       output.append("Neither")

   if x > 67:
       output.append(True)
   else:
       output.append(None)

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testSixA(self):
         self.assertEqual(output, [True, None], "Testing that value of output is correct.")

      def testSixB(self):
         self.assertEqual(x in [64, 65, 66, 67], True, "Testing that value of x is reasonable for this problem")

   myTests().main()
