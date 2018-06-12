..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Assignment
----------

.. activecode:: asign_c01_01
   :language: python
   :autograde: unittest
   :practice: T
   :topics: 

   **1.** Write code to determine how many vowels are in the text assigned to ``story``. Assign this number to the variable ``num_vowels``. Note that in this problem, only 'a', 'e', 'i', 'o', and 'u' count as vowels.
   ~~~~
   story = """The quick brown fox jumped over the lazy dog.
   By the end of the day, the fox had travelled far from home
   and the dog had only made it down the street. This was not
   an advantage for the dog though, because it still took both
   animals the same amount of time to arrive at home."""

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         og_story = """The quick brown fox jumped over the lazy dog.
   By the end of the day, the fox had travelled far from home
   and the dog had only made it down the street. This was not
   an advantage for the dog though, because it still took both
   animals the same amount of time to arrive at home."""
         self.assertEqual(num_vowels, 80, "Testing that num_vowels is a number that contains the correct elements.")
         self.assertEqual(story, og_story, "Testing that story is still the original string assigned.")
         self.assertIn('for', self.getEditorText(), "Testing your code (Don't worry about actual and expected values.)")

   myTests().main()

.. activecode:: asign_c01_02
   :language: python
   :autograde: unittest
   :practice: T
   :topics: 

   **2.** Write code that uses the string stored in ``org`` and creates an acronym which is assigned to the variable ``acro``. Only the first letter of each word should be used, each letter in the acronym should be a captial letter, and there should be nothing to separate the letters of the acronym. Words that should not be included in the acronym are stored in the list ``stopwords``. For example, if ``org`` was assigned the string "hello to world" then the resulting acronym should be "HW".
   ~~~~
   stopwords = ['to', 'a', 'for', 'by', 'an', 'am', 'the', 'so', 'it', 'and']
   org = "The organization for health, saftey, and education"

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(acro, 'OHSE', 'Checking that acro has been set correctly.')
         self.assertTrue(type(acro) == type("string"), "Checking that acro is a string.")
         self.assertIn('for', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: asign_c01_03
   :language: python
   :autograde: unittest
   :practice: T
   :topics: 

   **3.** Write code that uses the string stored in ``sent`` and creates an acronym which is assigned to the variable ``acro``. The first two letters of each word should be used, each letter in the acronym should be a captial letter, and each element of the acronym should be separated by a ". ". Words that should not be included in the acronym are stored in the list ``stopwords``. For example, if ``sent`` was assigned the string "height and ewok wonder" then the resulting acronym should be "HE. EW. WO". 
   ~~~~
   stopwords = ['to', 'a', 'for', 'by', 'an', 'am', 'the', 'so', 'it', 'and']
   sent = "The water, earth, and air are vital."

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(acro, 'WA. EA. AI. AR. VI', 'Checking that acro has been set correctly.')
         self.assertTrue(type(acro) == type("string"), "Checking that acro is a string.")
         self.assertIn('for', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: asign_c01_04
   :language: python
   :autograde: unittest
   :practice: T
   :topics: 

   **3.** Write code that checks if ``p_phrase`` is a palindrome. A palindrome is a phrase that, if reversed, would read the exact same. Assign the reversed version of ``p_phrase`` to the variable ``r_phrase``.  
   ~~~~
   p_phrase = "was it a car or a cat I saw"

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(r_phrase, "was I tac a ro rac a ti saw", "checking that r_phrase is set correctly")
         stripped_phrase = p_phrase.replace(" ", "").lower()
         stripped_r_phrase = r_phrase.replace(" ", "").lower()
         self.assertEqual(stripped_phrase, stripped_r_phrase, "checking that r_phrase and p_phrase are equivalent if the spaces are placed in the correct locations.")
         self.assertIsNot(p_phrase, r_phrase, "checking that r_phrase and p_phrase are not the same object.")

   myTests().main()


