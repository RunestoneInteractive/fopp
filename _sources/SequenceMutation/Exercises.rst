..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-11-
   :start: 1

Exercises
=========

.. activecode:: ac8_11_1
   :language: python
   :autograde: unittest

   1. For each character in the string already saved in the variable ``str1``, add each character to a list called ``chars``.
   ~~~~
   str1 = "I love python"
   # HINT: what's the accumulator? That should go here.
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(chars, ['I', ' ', 'l', 'o', 'v', 'e', ' ', 'p', 'y', 't', 'h', 'o', 'n'], "Testing that chars is assigned to correct values.")
         self.assertIn('append', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()


.. activecode:: ac8_11_2
   :language: python
   :autograde: unittest

   1.1 For each character in the string saved in ``ael``, append that character to a list that should be saved in a variable ``app``.
   ~~~~
   ael = "python!"

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(app, ['p','y','t','h','o','n', "!"], "Testing that app has the correct elements." )
         self.assertIn('append', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac8_11_3
   :language: python
   :autograde: unittest

   2. For each word in the list ``verbs``, add an -ing ending. Save this new list in a new list, ``ing``.
   ~~~~
   verbs = ["kayak", "cry", "walk", "eat", "drink", "fly"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testSix(self):
         self.assertEqual(ing, ['kayaking', 'crying', 'walking', 'eating', 'drinking', 'flying'], "Testing that the variable ing has the correct value.")

   myTests().main()

.. activecode:: ac8_11_4
   :language: python
   :autograde: unittest

   2.1 **Challenge** Do the same as above, but do not create a new list. Instead, overwrite the old list so that ``verbs`` has the same words with ``ing`` at the end of each one.
   ~~~~
   verbs = ["kayak", "cry", "walk", "eat", "drink", "fly"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testSeven(self):
         self.assertEqual(verbs, ['kayaking', 'crying', 'walking', 'eating', 'drinking', 'flying'], "Testing that verbs is assigned to correct values.")

   myTests().main()

.. activecode:: ac8_11_5
   :language: python
   :autograde: unittest

   3. For each string in ``wrds``, add 'ed' to the end of the word (to make the word past tense). Save these past tense words to a list called ``past_wrds``.
   ~~~~
   wrds = ["end", 'work', "play", "start", "walk", "look", "open", "rain", "learn", "clean"]
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(past_wrds, ["ended", 'worked', "played", "started", "walked", "looked", "opened", "rained", "learned", "cleaned"], "Testing that past_wrds has the correct value." )

   myTests().main()