..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: iter-6-
   :start: 1

.. _accum_pattern:
      
The Accumulator Pattern
=======================

One common programming "pattern" is to traverse a sequence, **accumulating** a value as we go, 
such as the sum-so-far or the maximum-so-far. That way, at the end of the traversal we have 
accumulated a single value, such as the sum total of all the items or the largest item.

The anatomy of the accumulation pattern includes:
   - **initializing** an "accumulator" variable to an initial value (such as 0 if accumulating a sum)
   - **iterating** (e.g., traversing the items in a sequence)
   - **updating** the accumulator variable on each iteration (i.e., when processing each item in the sequence)
   
For example, consider the following code, which computes the sum of the numbers in a list.

.. activecode:: ac6_6_1

   nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   accum = 0
   for w in nums:
       accum = accum + w
   print(accum)

In the program above, notice that the variable ``accum`` starts out with a value of 0.  
Next, the iteration is performed 10 times.  Inside the for loop, the update occurs. 
``w`` has the value of current item (1 the first time, then 2, then 3, etc.). 
``accum`` is reassigned a new value which is the old value plus the current value of ``w``.

This pattern of iterating the updating of a variable is commonly referred to as the 
**accumulator pattern**. We refer to the variable as the **accumulator**. This pattern will come up 
over and over again. Remember that the key to making it work successfully is to be sure to 
initialize the variable before you start the iteration. Once inside the iteration, it is required 
that you update the accumulator.

Here is the same program in codelens.  Step through the function and watch the "running total" 
accumulate the result.

.. codelens:: clens6_6_1
   :python: py3

   nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   accum = 0
   for w in nums:
      accum = accum + w
   print(accum)


.. note::

    What would happen if we indented the print accum statement? Not sure? Make a prediction, then try it and find out.

We can utilize the range function in this situation as well. Previously, you've seen it used when we wanted to draw in 
turtle. There we used it to iterate a certain number of times. We can do more than that though. The ``range`` function 
takes at least one input - which should be an integer - and returns a list as long as your input. While you can provide 
two inputs, we will focus on using range with just one input. With one input, range will start at zero and go up to - but 
not include - the input. Here are the examples: 

.. activecode:: ac6_8_10

    print("range(5): ")
    for i in range(5):
        print(i)

    print("range(0,5): ")
    for i in range(0, 5):
        print(i)

    # Notice the casting of `range` to the `list`
    print(list(range(5)))
    print(list(range(0,5)))


Here's how you could use the range function in the previous problem.

.. activecode:: ac6_6_2

   accum = 0
   for w in range(11):
       accum = accum + w
   print(accum)

   # or, if you use two inputs for the range function

   sec_accum = 0
   for w in range(1,11):
       sec_accum = sec_accum + w
   print(sec_accum)

Because the range function is exclusive of the ending number, we have to use 11 as the function input. 

We can use the accumulation pattern to count the number of things or to sum up a total. The
above examples only covered how to get the sum for a list, but we can also count how many items are 
in the list if we wanted to.

.. activecode:: ac6_6_3

   nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   count = 0
   for w in nums:
       count = count + 1
   print(count)

In this example we don't make use of ``w`` even though the iterator variable (loop variable) is a necessary part of
constructing a for loop. Instead of adding the value of ``w`` to ``count`` we add a 1 to it, 
because we're incrementing the value of count when we iterate each time through the loop. Though in 
this scenario we could have used the ``len`` function, there are other cases later on where len 
won't be useful but we will still need to count.

**Check your understanding**

.. mchoice:: question6_6_1
   :answer_a: It will print out 10 instead of 55
   :answer_b: It will cause a run-time error
   :answer_c: It will print out 0 instead of 55
   :correct: a
   :feedback_a: The variable accum will be reset to 0 each time through the loop. Then it will add the current item. Only the last item will count.  
   :feedback_b: Assignment statements are perfectly legal inside loops and will not cause an error.
   :feedback_c: Good thought: the variable accum will be reset to 0 each time through the loop. But then it adds the current item.
   :practice: T

   Consider the following code:

   .. code-block:: python

      nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      for w in nums:
         accum = 0
         accum = accum + w
      print(accum)
   
   What happens if you put the initialization of accum inside the for loop as the first
   instruction in the loop?

.. parsonsprob:: pp6_6_1

   Rearrange the code statements so that the program will add up the first n odd numbers where n is provided by the user.
   -----
   n = int(input('How many odd numbers would you like to add together?'))
   thesum = 0
   oddnumber = 1
   =====
   for counter in range(n):
   =====
      thesum = thesum + oddnumber
      oddnumber = oddnumber + 2
   =====
   print(thesum)

.. activecode:: ac6_6_4
   :language: python
   :autograde: unittest
   :practice: T

   Write code to create a list of integers from 0 through 52 and assign that list to the variable ``numbers``. You should use the Python range function and don't forget to covert the result to a list -- do not type out the whole list yourself.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(numbers, list(range(53)), "Testing that numbers is a list that contains the correct elements.")

   myTests().main()

.. activecode:: ac6_6_10
   :language: python
   :autograde: unittest
   :practice: T

   Count the number of characters in string ``str1``. Do not use ``len()``. Save the number in variable ``numbs``.
   ~~~~
   str1 = "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living."

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testEight(self):
         self.assertEqual(numbs, 90, "Testing that numbs is assigned to correct values.")
         self.assertNotIn("len(", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac6_8_9
   :language: python
   :autograde: unittest
   :practice: T

   Create a list of numbers 0 through 40 and assign this list to the variable ``numbers``. Then, accumulate the total of the list's values and assign that sum to the variable ``sum1``.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testNineA(self):
         self.assertEqual(numbers, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], "Testing that numbers is assigned to correct values.")

      def testNineB(self):
         self.assertEqual(sum1, 820, "Testing that sum1 has the correct value.")

   myTests().main() 
