..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: condition-3-
   :start: 1

.. index::logical operator
   operator; logical
   single: and 
   single: or
   single: not

Logical operators
-----------------

There are three **logical operators**: ``and``, ``or``, and ``not``. 
All three operators take boolean operands and produce boolean values. 
The semantics (meaning) of these operators is similar to their meaning in English:

* ``x and y`` is ``True`` if both ``x`` and ``y`` are ``True``. Otherwise, ``and`` produces ``False``.
* ``x or y`` yields ``True`` if either ``x`` or ``y`` is ``True``. Only if both operands are ``False``
  does ``or`` yield ``False``.
* ``not x`` yields ``False`` if ``x`` is ``True``, and vice versa.

Look at the following example. See if you can predict the output. Then, Run to see if your predictions were
correct:

.. activecode:: logop_ex1

   x = True
   y = False
   print(x or y)
   print(x and y)
   print(not x)

Although you can use boolean operators with simple boolean literals or variables as in the above
example, they are often combined with the comparison operators, as in this example. Again, before you
run this, see if you can predict the outcome:

.. activecode:: ac7_3_1

    x = 5
    print(x > 0 and x < 10)

    n = 25
    print(n % 2 == 0 or n % 3 == 0)


The expression ``x > 0 and x < 10`` is ``True`` only if ``x`` is greater than 0 *and*
at the same time, x is less than 10.  In other words, this expression is ``True`` if 
x is between 0 and 10, not including the endpoints.


.. admonition:: Common Mistake!

   There is a very common mistake that occurs when programmers try to write boolean expressions.  For example, what if
   we have a variable ``number`` and we want to check to see if its value is 5 or 6.  In words we might say: "number
   equal to 5 or 6".  However, if we translate this into Python, ``number == 5 or 6``, it will not yield correct
   results. The ``or`` operator must have a complete equality check on both sides.  The correct way to write this is 
   ``number == 5 or number == 6``. Remember that both operands of ``or`` must be booleans in order to yield proper results.

.. index:: short-circuiting

Smart Evaluation
~~~~~~~~~~~~~~~~

Python is "smart" about the way it evaluates expressions using boolean operators. Consider the following example::

   answer = input('Continue?')
   if answer == 'Y' or answer == 'y':
      print('Continuing!')

There are two operands for the ``or`` operator here: ``answer == 'Y'`` and ``'answer == 'y'``. Python evaluates from
left to right, and if the first operand for ``or`` evaluates to ``True``, Python doesn't bother evaluating the second
operand, because it knows the result must be ``True`` (recall that if either operand for ``or`` is ``True``, the 
result is ``True``). So, if the user enters ``Y``, Python first evaluates ``answer ==
'Y'``, determines that it is ``True``, and doesn't bother to check to see if ``answer == 'y'`` is ``True``; it just
concludes that the entire condition is ``True`` and executes the print statement. 

In a similar fashion, with the ``and`` operator, if the first operand evaluates to ``False``, Python doesn't check the
second operand's value, because it can conclude that the result must be ``False``. 

This behavior, in which Python in some cases skips the evaluation of the second operand to ``and`` and ``or``, is called
**short-circuit boolean evaluation**. You don't have to do anything to make Python do this; it's the way Python works.
It saves a little processing time. And, as a special bonus, you can take advantage of Python's short-circuiting behavior
to shorten your code. Consider the following example:

.. activecode:: ac_logop_dangerous

   total_weight = int(input('Enter total weight of luggage:'))
   num_pieces = int(input('Number of pieces of luggage?'))

   if total_weight / num_pieces > 50:
      print('Average weight is greater than 50 pounds -> $100 surcharge.')

   print('Luggage check complete.')      

This code checks to see if the average weight of a given number of pieces of luggage is greater than 50 pounds. However,
there is a potential crash situation here. If the user enters ``0`` for ``num_pieces``, the program will crash with a
divide by zero error. Try it out to see it happen. 

To prevent the crash, you might add an extra if statement to check for zero::

   if num_pieces != 0:
      if total_weight / num_pieces > 50:
         print('Average weight is greater than 50 pounds -> $100 surcharge.')

Now, the division will not occur if ``num_pieces`` is zero, and a potential runtime crash has been averted. Good job! 

We can shorten this example to a single ``if`` statement if we do it carefully. Anytime you have two nested ``if``
statements as in the example above, you can combine them into a single ``if`` statement by joining the conditions using
the ``and`` operator. Consider the version below, and think about why this ``if`` statement is equivalent in its behavior to
the previous version with two nested ``if`` statements:

.. activecode:: ac_logop_smarteval

   total_weight = int(input('Enter total weight of luggage:'))
   num_pieces = int(input('Number of pieces of luggage?'))

   if num_pieces != 0 and total_weight / num_pieces > 50:
      print('Average weight is greater than 50 pounds -> $100 surcharge.')

   print('Luggage check complete.')

But wait a minute: is this code safe? Try running the program and entering the value ``500`` for ``total_weight`` and the value ``5`` for num_pieces.
Then, try it again using the value ``0`` for num_pieces. There should be no crash.

Next, try altering the code and reversing the order of the ``if`` conditions::

   if total_weight / num_pieces > 50 and num_pieces != 0:
      print('Average weight is greater than 50 pounds -> $100 surcharge.')

Run the program again, performing the same two tests. This time, you should observe a crash when you enter ``0`` for
num_pieces. Can you analyze why the first version did not crash, but the second one does?

In the second version, when evaluating left-to-right, the division by zero occurs before Python evaluates the comparison
``num_pieces != 0``. When joining two ``if`` statements into a single ``if`` statement, you must be sure to put the
condition from the first ``if`` statement on the left-hand side of the ``and`` operator, and the other condition on the
right-hand side, in order to get the same effect.

To summarize this discussion on smart evaluation, keep in mind that when you are performing potentially dangerous
operations in an ``if`` statement or ``while`` loop using boolean logic with ``and`` or ``or``, order matters! 

**Check your understanding**

.. mchoice:: question7_3_1
   :answer_a: x &gt; 0 and &lt; 5
   :answer_b: 0 &lt; x &lt; 5
   :answer_c: x &gt; 0 or x &lt; 5
   :answer_d: x &gt; 0 and x &lt; 5
   :correct: b,d
   :feedback_a: Each comparison must be between exactly two values.  In this case the right-hand expression &lt; 5 lacks a value on its left.
   :feedback_b: Although most other programming languages do not allow this syntax, in Python, this syntax is allowed.  Even though it is possible to use this format, you should not use it all the time.  Instead, make multiple comparisons by using and or or.
   :feedback_c: Although this is legal Python syntax, the expression is incorrect.  It will evaluate to true for all numbers that are either greater than 0 or less than 5.  Because all numbers are either greater than 0 or less than 5, this expression will always be True.
   :feedback_d: Yes, with an ``and`` keyword both expressions must be true so the number must be greater than 0 an less than 5 for this expression to be true.
   :practice: T

   What is the correct Python expression for checking to see if a number stored in a variable x is between 0 and 5.

.. mchoice:: question7_3_2
   :practice: T
   :multiple_answers:
   :answer_a: Option A
   :answer_b: Option B
   :correct: a
   :feedback_a: Correct! The comparison yesno[0] == 'Y' will crash if yesno is an empty string.
   :feedback_b: Incorrect. If len(yesno) > 0 is False, the potentially unsafe comparison yesno[0] == 'Y' will not be evaluated.

   Which of the following may result in a crash at runtime if the user presses Enter without typing a response?

   Option A) ::

      yesno = input('Enter Yes or No:')
      if yesno[0] == 'Y' and len(yesno) > 0:
         print('Yes!')

   Option B) ::

      yesno = input('Enter Yes or No:')
      if len(yesno) > 0 and yesno[0] == 'Y':
         print('Yes!')


.. mchoice:: question7_3_3
   :practice: T
   :answer_a: Option A
   :answer_b: Option B
   :answer_c: Option C
   :answer_d: Option D
   :correct: b
   :feedback_a: Incorrect. The comparison yesno[0] == 'Y' will crash if yesno is an empty string.
   :feedback_b: Correct! Use the and operator to join nested if statements into a single statement, with the first if condition on the left-hand side.
   :feedback_c: Incorrect. The comparison yesno[0] == 'Y' will crash if yesno is an empty string.
   :feedback_d: Incorrect. The comparison yesno[0] == 'Y' will crash if yesno is an empty string.

   Consider the following fragment containing a nested ``if`` statement to prevent a crash in the event
   the user enters an empty response for ``yesno``::

      yesno = input('Enter Yes or No:')
      if len(yesno) > 0:
         if yesno[0] == 'Y':
            print('Yes!')

   Which of the following is the correct way to combine the nested ``if`` into a single ``if`` statement that executes
   identically to the nested ``if`` statements?

   Option A) ::

      if yesno[0] == 'Y' and len(yesno) > 0:
         print('Yes!')

   Option B) ::

      if len(yesno) > 0 and yesno[0] == 'Y':
         print('Yes!')

   Option C) ::

      if yesno[0] == 'Y' or len(yesno) > 0:
         print('Yes!')

   Option D) ::

      if len(yesno) > 0 or yesno[0] == 'Y':
         print('Yes!')

