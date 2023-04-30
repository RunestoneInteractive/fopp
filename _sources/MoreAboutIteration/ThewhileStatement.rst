..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: moreiter-2-
   :start: 1

The ``while`` Statement
-----------------------

.. youtube:: iUbToOoAykE
    :divid: whileloop
    :height: 315
    :width: 560
    :align: left

There is another Python statement that can also be used to build an iteration. It is called the ``while`` statement.
The ``while`` statement provides a much more general mechanism for iterating. Similar to the ``if`` statement, it uses
a boolean expression to control the flow of execution. The body of while will be repeated as long as the controlling
boolean expression evaluates to ``True``.

The following two figures show the flow of control. The first focuses on the flow inside the while loop and the second
shows the while loop in context.

.. image:: Figures/while_flow.png
   :alt: a diamond at the top has the phrase "Is the condition True?". Two arrows come out it with either the phrase yes or no on the arrows. The yes arrow points to a box that says "evaluate the statemenets in the body of the loop". It then has an arrow that unconditionally points back to "Is the condition True?" diamond. The no arrow escapes the loop and points down past the "evaluate" square.

.. image:: Figures/while_loop.png
   :alt: image showing a rectangle with "code block" written on it on top. Then, text that read "while {condition}": followed by an indented block with "run if {condition} is True" written on it. An arrow points from the bottom of the indented block to the top of the while loop and says "run loop again". At the bottom of the image is an unindented block that says the phrase "code block."

We can use the ``while`` loop to create any type of iteration we wish, including anything that we have previously
done with a ``for`` loop. For example, the program in the previous section could be rewritten using ``while``.
Instead of relying on the ``range`` function to produce the numbers for our summation, we will need to produce them
ourselves. To do this, we will create a variable called ``aNumber`` and initialize it to 1, the first number in the
summation. Every iteration will add ``aNumber`` to the running total until all the values have been used. In order to
control the iteration, we must create a boolean expression that evaluates to ``True`` as long as we want to keep
adding values to our running total. In this case, as long as ``aNumber`` is less than or equal to the bound, we
should keep going.

Here is a new version of the summation program that uses a while statement.

.. activecode:: ac14_2_1

    def sumTo(aBound):
        """ Return the sum of 1+2+3 ... n """

        theSum  = 0
        aNumber = 1
        while aNumber <= aBound:
            theSum = theSum + aNumber
            aNumber = aNumber + 1
        return theSum

    print(sumTo(4))

    print(sumTo(1000))

You can almost read the ``while`` statement as if it were in natural language. It means, while ``aNumber`` is less
than or equal to ``aBound``, continue executing the body of the loop. Within the body, each time, update ``theSum``
using the accumulator pattern and increment ``aNumber``. After the body of the loop, we go back up to the condition
of the ``while`` and reevaluate it. When ``aNumber`` becomes greater than ``aBound``, the condition fails and flow
of control continues to the ``return`` statement.

The same program in codelens will allow you to observe the flow of execution.

.. codelens:: clens14_2_1
    :python: py3

    def sumTo(aBound):
        """ Return the sum of 1+2+3 ... n """

        theSum  = 0
        aNumber = 1
        while aNumber <= aBound:
            theSum = theSum + aNumber
            aNumber = aNumber + 1
        return theSum

    print(sumTo(4))

.. note:: The names of the variables have been chosen to help readability.

More formally, here is the flow of execution for a ``while`` statement:

#. Evaluate the condition, yielding ``False`` or ``True``.
#. If the condition is ``False``, exit the ``while`` statement and continue
   execution at the next statement.
#. If the condition is ``True``, execute each of the statements in the body and
   then go back to step 1.

The body consists of all of the statements below the header with the same indentation.

This type of flow is called a **loop** because the third step loops back around to the top. Notice that if the
condition is ``False`` the first time through the loop, the statements inside the loop are never executed.

The body of the loop should change the value of one or more variables so that eventually the condition becomes
``False`` and the loop terminates. Otherwise the loop will repeat forever. This is called an **infinite loop**.
An endless source of amusement for computer scientists is the observation that the directions written on the back of
the shampoo bottle (lather, rinse, repeat) create an infinite loop.

In the case shown above, we can prove that the loop terminates because we know that the value of ``aBound`` is
finite, and we can see that the value of ``aNumber`` increments each time through the loop, so eventually it will
have to exceed ``aBound``. In other cases, it is not so easy to tell.

.. note::

    Introduction of the while statement causes us to think about the types of iteration we have seen. The ``for``
    statement will always iterate through a sequence of values like the list of names for the party or the list of
    numbers created by ``range``. Since we know that it will iterate once for each value in the collection, it is
    often said that a ``for`` loop creates a **definite iteration** because we definitely know how many times we are
    going to iterate.  On the other hand, the ``while`` statement is dependent on a condition that needs to evaluate
    to ``False`` in order for the loop to terminate. Since we do not necessarily know when this will happen, it
    creates what we call **indefinite iteration**. Indefinite iteration simply means that we don't know how many
    times we will repeat but eventually the condition controlling the iteration will fail and the iteration will
    stop. (Unless we have an infinite loop which is of course a problem)

What you will notice here is that the ``while`` loop is more work for you --- the programmer --- than the equivalent
``for`` loop.  When using a ``while`` loop you have to control the loop variable yourself. You give it an initial
value, test for completion, and then make sure you change something in the body so that the loop terminates. That
also makes a while loop harder to read and understand than the equivalent for loop. So, while you *can* implement
definite iteration with a while loop, it's not a good idea to do that. Use a for loop whenever it will be known at
the beginning of the iteration process how many times the block of code needs to be executed.

**Check your understanding**

.. mchoice:: question14_2_1
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Although the while loop uses a different syntax, it is just as powerful as a for-loop and often more flexible.
   :feedback_b: Often a for-loop is more natural and convenient for a task, but that same task can always be expressed using a while loop.

   True or False: You can rewrite any for-loop as a while-loop.

.. mchoice:: question14_2_2
   :answer_a: n starts at 10 and is incremented by 1 each time through the loop, so it will always be positive
   :answer_b: answer starts at 1 and is incremented by n each time, so it will always be positive
   :answer_c: You cannot compare n to 0 in while loop.  You must compare it to another variable.
   :answer_d: In the while loop body, we must set n to False, and this code does not do that.
   :correct: a
   :feedback_a: The loop will run as long as n is positive.  In this case, we can see that n will never become non-positive.
   :feedback_b: While it is true that answer will always be positive, answer is not considered in the loop condition.
   :feedback_c: It is perfectly valid to compare n to 0.  Though indirectly, this is what causes the infinite loop.
   :feedback_d: The loop condition must become False for the loop to terminate, but n by itself is not the condition in this case.
   :practice: T

   The following code contains an infinite loop. Which is the best explanation for why the loop does not terminate?

   .. code-block:: python

     n = 10
     answer = 1
     while ( n > 0 ):
       answer = answer + n
       n = n + 1
     print(answer)

.. mchoice:: question14_2_3
   :answer_a: a for-loop or a while-loop
   :answer_b: only a for-loop
   :answer_c: only a while-loop
   :correct: a
   :feedback_a: Although you do not know how many iterations you loop will run before the program starts running, once you have chosen your random integer, Python knows exactly how many iterations the loop will run, so either a for-loop or a while-loop will work.
   :feedback_b: As you learned in section 7.2, a while-loop can always be used for anything a for-loop can be used for.
   :feedback_c: Although you do not know how many iterations you loop will run before the program starts running, once you have chosen your random integer, Python knows exactly how many iterations the loop will run, so this is an example of definite iteration.
   :practice: T

   Which type of loop can be used to perform the following iteration: You choose a positive integer at random and then print the numbers from 1 up to and including the selected integer.


.. activecode:: ac14_2_2
   :practice: T

   Write a while loop that is initialized at 0 and stops at 15. If the counter is an even number, append the counter to a list called ``eve_nums``.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

     def testOne(self):
        self.assertEqual(eve_nums, [0,2,4,6,8,10,12,14], "Testing that eve_nums has been assigned the correct elements")

   myTests().main()

.. activecode:: ac14_2_3
    :practice: T

    Below, we've provided a for loop that sums all the elements of ``list1``. Write code that accomplishes the same task, but instead uses a while loop. Assign the accumulator variable to the name ``accum``.
    ~~~~
    list1 = [8, 3, 4, 5, 6, 7, 9]

    tot = 0
    for elem in list1:
        tot = tot + elem

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

       def testOne(self):
          self.assertEqual(accum, 42, "Testing that accum has the correct value.")
          self.assertIn('while', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


    myTests().main()

