..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: condition-10-
   :start: 1

The Accumulator Pattern with Conditionals
-----------------------------------------

Sometimes when we're accumulating, we don't want to add to our accumulator every time we iterate.
Consider, for example, the following program which counts the number of letters in a phrase.

.. activecode:: ac7_10_1

   phrase = "What a wonderful day to program"
   tot = 0
   for char in phrase:
       if char != " ":
           tot = tot + 1
   print(tot)

Here, we **initialize** the accumulator variable to be zero on line two.

We **iterate** through the sequence (line 3).

The **update** step happens in two parts. First, we check to see if the value of ``char`` is not a space. If 
it is not a space, then we update the value of our accumulator variable ``tot`` (on line 6) by adding one to 
it. If that conditional proves to be False, which means that char *is* a space, then we don't update ``tot`` 
and continue the for loop. We could have written ``tot = tot + 1`` or ``tot += 1``, either is fine. 

At the end, we have accumulated a the total number of letters in the phrase. Without using the conditional, 
we would have only been able to count how many characters there are in the string and not been able to 
differentiate between spaces and non-spaces.

We can use conditionals to also count if particular items are in a string or list. The following code finds all occurrences of vowels in the following string.

.. activecode:: ac7_10_2

    s = "what if we went to the zoo"
    x = 0
    for i in s:
        if i in ['a', 'e', 'i', 'o', 'u']:
            x += 1
    print(x)

We can also use ``==`` to execute a similar operation. Here, we'll check to see if the character we are iterating over is 
an "o". If it is an "o" then we will update our counter. 

.. image:: Figures/accum_o.gif
   :alt: a gif that shows code to check that "o" is in the phrase "onomatopoeia". 

Accumulating the Max Value
~~~~~~~~~~~~~~~~~~~~~~~~~~

We can also use the accumulation pattern with conditionals to find the maximum or minimum value. Instead of 
continuing to build up the accumulator value like we have when counting or finding a sum, we can reassign the 
accumulator variable to a different value.

The following example shows how we can get the maximum value from a list of integers.

.. activecode:: ac7_10_3

   nums = [9, 3, 8, 11, 5, 29, 2]
   best_num = 0
   for n in nums:
       if n > best_num:
           best_num = n
   print(best_num)

Here, we initialize best_num to zero, assuming that there are no negative numbers in the list.

In the for loop, we check to see if the current value of n is greater than the current value of ``best_num``. 
If it is, then we want to **update** ``best_num`` so that it now is assigned the higher number. Otherwise, we 
do nothing and continue the for loop.

You may notice that the current structure could be a problem. If the numbers were all negative what would 
happen to our code? What if we were looking for the smallest number but we initialized ``best_num`` with 
zero? To get around this issue, we can initialize the accumulator variable using one of the numbers in the 
list.

.. activecode:: ac7_10_4

   nums = [9, 3, 8, 11, 5, 29, 2]
   best_num = nums[0]
   for n in nums:
       if n > best_num:
           best_num = n
   print(best_num)

The only thing we changed was the value of ``best_num`` on line 2 so that the value of ``best_num`` is the 
first element in ``nums``, but the result is still the same!

**Check your understanding**

.. mchoice:: question7_10_1
   :answer_a: 2
   :answer_b: 5
   :answer_c: 0
   :answer_d: There is an error in the code so it cannot run.
   :correct: b
   :feedback_a: Though only two of the letters in the list are found, we count them each time they appear.
   :feedback_b: Yes, we add to x each time we come across a letter in the list.
   :feedback_c: Check again what the conditional is evaluating. The value of i will be a character in the string s, so what will happen in the if statement?
   :feedback_d: There are no errors in this code.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

     s = "We are learning!"
     x = 0
     for i in s:
         if i in ['a', 'b', 'c', 'd', 'e']:
             x += 1
     print(x)

.. mchoice:: question7_10_2
   :answer_a: 10
   :answer_b: 1
   :answer_c: 0
   :answer_d: There is an error in the code so it cannot run.
   :correct: c
   :feedback_a: Not quite. What is the conditional checking?
   :feedback_b: min_value was set to a number that was smaller than any of the numbers in the list, so it was never updated in the for loop.
   :feedback_c: Yes, min_value was set to a number that was smaller than any of the numbers in the list, so it was never updated in the for loop.
   :feedback_d: The code does not have an error that would prevent it from running.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

     list= [5, 2, 1, 4, 9, 10]
     min_value = 0
     for item in list:
        if item < min_value:
            min_value = item
     print(min_value)

.. activecode:: ac7_10_5
   :language: python
   :autograde: unittest
   :practice: T
      
   For each string in the list ``words``, find the number of characters in the string. If the number of characters in the string is greater than 3, add 1 to the variable ``num_words`` so that ``num_words`` should end up with the total number of words with more than 3 characters.
   ~~~~
   words = ["water", "chair", "pen", "basket", "hi", "car"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFive(self):
         self.assertEqual(num_words, 3, "Testing that num_words has the correct value.")

   myTests().main()

.. activecode:: ac7_10_7
   :language: python
   :autograde: unittest
   :practice: T

   **Challenge** For each word in ``words``, add 'd' to the end of the word if the word ends in "e" to make it past tense. Otherwise, add 'ed' to make it past tense. Save these past tense words to a list called ``past_tense``.
   ~~~~
   words = ["adopt", "bake", "beam", "confide", "grill", "plant", "time", "wave", "wish"]
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testNine(self):
         self.assertEqual(past_tense, ['adopted', 'baked', 'beamed', 'confided', 'grilled', 'planted', 'timed', 'waved', 'wished'], "Testing that the past_tense list is correct.")
         self.assertIn("else", self.getEditorText(), "Testing output (Don't worry about actual and expected values).")
         self.assertIn("for", self.getEditorText(), "Testing output (Don't worry about actual and expected values).")

   myTests().main()
