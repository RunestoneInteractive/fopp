..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: files-10-
   :start: 1

Chapter Assessment
==================

.. datafile:: travel_plans.txt
   :fromfile: travel_plans.txt
   :hide:

.. datafile:: school_prompt.txt
   :fromfile: school_prompt.txt
   :hide:

.. datafile:: emotion_words.txt
   :fromfile: emotion_words.txt
   :hide:

.. activecode:: ac9_10_1
   :language: python
   :autograde: unittest
   :practice: T
   :available_files: travel_plans.txt

   The textfile, ``travel_plans.txt``, contains the summer travel plans for someone with some commentary. Find the total number of characters in the file and save to the variable ``num``.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(num, 316, "Testing that num value is assigned to correct value.")

   myTests().main()

.. activecode:: ac9_10_2
   :language: python
   :autograde: unittest
   :practice: T
   :available_files: emotion_words.txt
   
   We have provided a file called ``emotion_words.txt`` that contains lines of words that describe emotions. Find the total number of words in the file and assign this value to the variable ``num_words``.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(num_words, 48, "Testing that num_words was assigned to the correct value.")

   myTests().main()


.. activecode:: ac9_10_3
   :language: python
   :autograde: unittest
   :practice: T
   :available_files: school_prompt.txt

   Assign to the variable ``num_lines`` the number of lines in the file ``school_prompt.txt``.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(num_lines, 10, "Testing that num_lines has the correct value.")

   myTests().main()


.. activecode:: ac9_10_4
   :language: python
   :autograde: unittest
   :practice: T
   :available_files: school_prompt.txt

   Assign the first 30 characters of ``school_prompt.txt`` as a string to the variable ``beginning_chars``.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(len(beginning_chars), 30, "Testing that beginning_chars has the correct length.")
         self.assertEqual(beginning_chars, "Writing essays for school can ", "Testing that beginning_chars has the correct string.")

   myTests().main()   


.. activecode:: ac9_10_5
   :language: python
   :autograde: unittest
   :practice: T
   :available_files: school_prompt.txt

   **Challenge:** Using the file ``school_prompt.txt``, assign the third word of every line to a list called ``three``.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(three, ['for', 'find', 'to', 'many', 'they', 'solid', 'for', 'have', 'some', 'ups,'], "Testing that three has the correct value.")

   myTests().main()
 

.. activecode:: ac9_10_6
   :language: python
   :autograde: unittest
   :practice: T
   :available_files: emotion_words.txt

   **Challenge:** Create a list called ``emotions`` that contains the first word of every line in ``emotion_words.txt``.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(emotions, ['Sad', 'Angry', 'Happy', 'Confused', 'Excited', 'Scared', 'Nervous'], "Testing that emotions was created correctly.")

   myTests().main() 


.. activecode:: ac9_10_7
   :language: python
   :autograde: unittest
   :practice: T
   :available_files: travel_plans.txt

   Assign the first 33 characters from the textfile, ``travel_plans.txt`` to the variable ``first_chars``.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFive(self):
         self.assertEqual(first_chars, "This summer I will be travelling.", "Testing that first_chars is assigned to correct value.")

   myTests().main()


.. activecode:: ac9_10_8
   :language: python
   :autograde: unittest
   :practice: T
   :available_files: school_prompt.txt

   **Challenge:** Using the file ``school_prompt.txt``, if the character 'p' is in a word, then add the word to a list called ``p_words``.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(p_words, ['topic', 'point', 'papers,', 'ups,', 'scripts.'], "Testing that p_words has the correct list.")

   myTests().main()
