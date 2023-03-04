..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-10-
   :start: 1

The Accumulator Pattern with Strings
------------------------------------

We can also accumulate strings rather than accumulating numbers, as you've seen before. The following program isn't 
particularly useful for data processing, but we will see more useful things later that accumulate strings.

.. activecode:: ac8_10_1
    
   s = input("Enter some text")
   ac = ""
   for c in s:
       ac = ac + c + "-"
       
   print(ac)
 
Look carefully at line 4 in the above program (``ac = ac + c + "-"``). In words, it says that the
new value of ``ac`` will be the old value of ``ac`` concatenated with the current character and a dash.
We are building the result string character by character.

Take a close look also at the initialization of ``ac``.  We start with an empty string and then begin adding
new characters to the end. Also note that I have given it a different name this time, ``ac`` instead of 
``accum``. There's nothing magical about these names. You could use any valid variable and it would work the 
same (try substituting x for ac everywhere in the above code).

We can use the accumulator pattern to reverse a string, as in the following code.

.. activecode:: ac8_10_1_1

   s = "Murphy"
   ac = ""
   for c in s:
       ac = c + ac

   print(ac)

The key thing here is that we have ``ac = c + ac``. The iterator variable comes first, before the accumulator.
We are pre-pending the new value onto the beginning of the value that has been accumulated so far, and that leads to
reversing the whole string. Try it in codelens if you're having trouble envisioning why this works.

.. note::

    A little humorous aside... You've probably heard of Murphy's Law, that everything that can go wrong will go wrong.

    In a `paper <https://doi.org/10.1007%2Fs10683-006-4309-2>`_ co-authored by one
    of this book's authors,
    we described eBay's reputation system as an example of Yhprum's Law (Yhprum is Murphy spelled backward, with a little change in capitalization):
    "Systems that shouldn’t work sometimes do, or at least work fairly well."

**Check your understanding**

.. mchoice:: question8_10_1
   :answer_a: Ball
   :answer_b: BALL
   :answer_c: LLAB
   :correct: c
   :feedback_a: Each item is converted to upper case before concatenation.
   :feedback_b: Each character is converted to upper case but the order is wrong.
   :feedback_c: Yes, the order is reversed due to the order of the concatenation.
   :practice: T

   What is printed by the following statements:
   
   .. code-block:: python

      s = "ball"
      r = ""
      for item in s:
         r = item.upper() + r
      print(r)

.. activecode:: ac8_10_2
   :language: python
   :autograde: unittest
   :practice: T

   1. Accumulate all the characters from the string in the variable ``str1`` into a list of characters called ``chars``.
   ~~~~
   str1 = "I love python"
   # HINT: what's the accumulator? That should go here.
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(chars, ['I', ' ', 'l', 'o', 'v', 'e', ' ', 'p', 'y', 't', 'h', 'o', 'n'], "Testing that chars is assigned to correct values.")
         self.assertIn('append', self.getEditorText(), "Testing that you're using append (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac6_6_6
   :language: python
   :autograde: unittest
   :practice: T

   Assign an empty string to the variable ``output``. Using the ``range`` function, write code to make it so that the variable ``output`` has 35 ``a`` s inside it (like ``"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"``). Hint: use the accumulation pattern!
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testThree(self):
         self.assertEqual(output, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "Testing that output has the correct value.")
         self.assertNotIn("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", self.getEditorText(), "Testing that you didn't hardcode the answer.")
         self.assertNotIn("*", self.getEditorText(), "Testing that you didn't use string multiplication (*); that is easier but isn't the point of the exercise.")

   myTests().main()
   
