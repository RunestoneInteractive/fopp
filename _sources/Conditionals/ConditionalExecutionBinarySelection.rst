..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: condition-6-
   :start: 1

.. index:: heading, body, selection, if, else, pass, compound statement, conditional statement
   statement; if
   statement; pass

Conditional Execution: Binary Selection
---------------------------------------

.. youtube:: OQ8uakCJ6yE
    :divid: binaryselection
    :height: 315
    :width: 560
    :align: left


In order to write useful programs, we almost always need the ability to check
conditions and change the behavior of the program accordingly. **Selection statements**, sometimes
also referred to as **conditional statements**, give us this ability. The simplest form of selection is the **if statement**.
This is sometimes referred to as **binary selection** since there are two possible paths of execution.

.. activecode:: ac7_6_1

    x = 15

    if x % 2 == 0:
        print(x, "is even")
    else:
        print(x, "is odd")


The syntax for an ``if`` statement looks like this:

.. sourcecode:: python

    if BOOLEAN EXPRESSION:
        STATEMENTS_1        # executed if condition evaluates to True
    else:
        STATEMENTS_2        # executed if condition evaluates to False

The boolean expression after the ``if`` statement is called the **condition**.
If it is true, then the indented statements get executed. If not, then the statements
indented under the ``else`` clause get executed.

.. sidebar::  Flowchart of a **if** statement with an **else**

   .. image:: Figures/flowchart_if_else.png



As with the function definition from the last chapter and other compound
statements like ``for``, the ``if`` statement consists of a header line and a body. The header
line begins with the keyword ``if`` followed by a *boolean expression* and ends with
a colon (:).

The indented statements that follow are called a **block**. The first
unindented statement marks the end of the block.

Each of the statements inside the first block of statements is executed in order if the boolean
expression evaluates to ``True``. The entire first block of statements
is skipped if the boolean expression evaluates to ``False``, and instead
all the statements under the ``else`` clause are executed.

There is no limit on the number of statements that can appear under the two clauses of an
``if`` statement, but there has to be at least one statement in each block.


**Check your understanding**

.. mchoice:: question7_6_1
   :answer_a: Just one.
   :answer_b: Zero or more.
   :answer_c: One or more.
   :answer_d: One or more, and each must contain the same number.
   :correct: c
   :feedback_a: Each block may also contain more than one.
   :feedback_b: Each block must contain at least one statement.
   :feedback_c: Yes, a block must contain at least one statement and can have many statements.
   :feedback_d: The blocks may contain different numbers of statements.
   :practice: T

   How many lines of code can appear in the indented code block below the if and else lines in a conditional?

.. mchoice:: question7_6_2
   :answer_a: TRUE
   :answer_b: FALSE
   :answer_c: TRUE on one line and FALSE on the next
   :answer_d: Nothing will be printed
   :correct: b
   :feedback_a: TRUE is printed by the if-block, which only executes if the conditional (in this case, 4+5 == 10) is true.  In this case 5+4 is not equal to 10.
   :feedback_b: Since 4+5==10 evaluates to False, Python will skip over the if block and execute the statement in the else block.
   :feedback_c: Python would never print both TRUE and FALSE because it will only execute one of the if-block or the else-block, but not both.
   :feedback_d: Python will always execute either the if-block (if the condition is true) or the else-block (if the condition is false).  It would never skip over both blocks.
   :practice: T

   What does the following code print? (choose from output a, b, c or nothing)

   .. code-block:: python

     if (4 + 5 == 10):
         print("TRUE")
     else:
         print("FALSE")

.. mchoice:: question7_6_3
   :answer_a: Output a
   :answer_b: Output b
   :answer_c: Output c
   :answer_d: Output d
   :correct: c
   :feedback_a: Although TRUE is printed after the if-else statement completes, both blocks within the if-else statement print something too.  In this case, Python would have had to have skipped both blocks in the if-else statement, which it never would do.
   :feedback_b: Because there is a TRUE printed after the if-else statement ends, Python will always print TRUE as the last statement.
   :feedback_c: Python will print FALSE from within the else-block (because 5+4 does not equal 10), and then print TRUE after the if-else statement completes.
   :feedback_d: To print these three lines, Python would have to execute both blocks in the if-else statement, which it can never do.
   :practice: T

   What does the following code print?

   .. code-block:: python

     if (4 + 5 == 10):
         print("TRUE")
     else:
         print("FALSE")
     print("TRUE")

   ::

      a. TRUE

      b.
         TRUE
         FALSE

      c.
         FALSE
         TRUE
      d.
         TRUE
         FALSE
         TRUE

.. activecode:: ac7_6_2
   :language: python
   :autograde: unittest
   :practice: T

   Write code to assign the string ``"You can apply to SI!"`` to ``output`` *if* the string ``"SI 106"`` is in the list ``courses``. If it is not in ``courses``, assign the value ``"Take SI 106!"`` to the variable ``output``.
   ~~~~
   courses = ["ENGR 101", "SI 110", "ENG 125", "SI 106", "CHEM 130"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(output, "You can apply to SI!", "Testing that output has the correct value, given the courses list provided")
         self.assertIn("if", self.getEditorText(), "Testing output (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac7_6_4
   :language: python
   :autograde: unittest
   :practice: T

   Create a variable, ``b``, and assign it the value of ``15``. Then, write code to see if the value ``b`` is greater than that of ``a``. If it is, ``a``'s value should be multiplied by 2. If the value of ``b`` is less than or equal to ``a``, nothing should happen. Finally, create variable ``c`` and assign it the value of the sum of ``a`` and ``b``.
   ~~~~
   a = 20

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwoA(self):
         self.assertEqual(a, 20, "Testing that a has the correct value.")

      def testTwoB(self):
         self.assertEqual(c, 35, "Testing that c has the correct value.")

   myTests().main()
