..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: files-9-
   :start: 1

Exercises
=========

.. datafile:: files_extra.txt
   :hide:

   This summer I will be travelling.
   I will go to...
   Italy: Rome
   Greece: Athens
   England: London, Manchester
   France: Paris, Nice, Lyon
   Spain: Madrid, Barcelona, Granada
   Austria: Vienna
   I will probably not even want to come back! 
   However, I wonder how I will get by with all the different languages.
   I only know English!

.. datafile::  school_prompt.txt
   :hide:

   Writing essays for school can be difficult but
   many students find that by researching their topic that they
   have more to say and are better informed. Here are the university
   we require many undergraduate students to take a first year writing requirement
   so that they can
   have a solid foundation for their writing skills. This comes
   in handy for many students.
   Different schools have different requirements, but everyone uses
   writing at some point in their academic career, be it essays, research papers,
   technical write ups, or scripts.

.. datafile:: emotion_words.txt
   :hide: 

   Sad upset blue down melancholy somber bitter troubled
   Angry mad enraged irate irritable wrathful outraged infuriated
   Happy cheerful content elated joyous delighted lively glad
   Confused disoriented puzzled perplexed dazed befuddled
   Excited eager thrilled delighted
   Scared afraid fearful panicked terrified petrified startled
   Nervous anxious jittery jumpy tense uneasy apprehensive

1. The textfile, ``files_extra.txt``, contains the summer travel plans for someone with some commentary. Find the total number of characters in the file and save to the variable ``num``.

.. activecode:: ac9_9_1

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(num, 316, "Testing that num value is assigned to correct value.")

   myTests().main()

1.1 Using the file ``school_prompt.txt``, find the number of characters and assign that value to the variable ``num_char``. 

.. activecode:: ac9_9_2

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(num_char, 537, "Testing that num_char has the correct value.")

   myTests().main()

1.2 We have provided a file called ``emotion_words.txt`` that contains lines of words that describe emotions. Find the total number of words in the file and assign this value to the variable ``num_words``. 

.. activecode:: ac9_9_3

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(num_words, 48, "Testing that num_words was assigned to the correct value.")

   myTests().main()


2. Now, find the number of lines in the file, ``files_extra.txt``, and assign it to the variable ``num_lines``.

.. activecode:: ac9_9_4
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(num_lines, 11, "Testing that num_lines is assigned to correct value.")

   myTests().main()

2.1 Assign to the variable ``num_lines`` the number of lines in the file ``school_prompt.txt``.

.. activecode:: ac9_9_5

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(num_lines, 10, "Testing that num_lines has the correct value.")

   myTests().main()

2.2 Write code to find out how many lines are in the file ``emotion_words.txt``. Save this value to the variable ``num_lines``. 

.. activecode:: ac9_9_6

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(num_lines, 7, "Testing that num_lines was assigned to the correct value.")

   myTests().main() 

3. Assign the first 30 characters of ``school_prompt.txt`` as a string to the variable ``beginning_chars``.

.. activecode:: ac9_9_7

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(len(beginning_chars), 30, "Testing that beginning_chars has the correct length.")
         self.assertEqual(beginning_chars, "Writing essays for school can ", "Testing that beginning_chars has the correct string.")

   myTests().main()

3.2 Create a string called ``first_forty`` that is comprised of the first 40 characters of ``emotion_words.txt``. 

.. activecode:: ac9_9_8

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(first_forty, 'Sad upset blue down melancholy somber bi', "Testing that first_forty was created correctly.")
   myTests().main()    


4. **Challenge** Create a list called ``destination``. If the line in the file ``files_extra.txt`` has a colon (:), append that line to the list.

.. activecode:: ac9_9_9

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFour(self):
         self.assertEqual(destination, ['Italy: Rome\n', 'Greece: Athens\n', 'England: London, Manchester\n', 'France: Paris, Nice, Lyon\n', 'Spain: Madrid, Barcelona, Granada\n', 'Austria: Vienna\n'], "Testing that destination is assigned to correct values.")

   myTests().main()

4.1 **Challenge:** Using the file ``school_prompt.txt``, assign the third word of every line to a list called ``three``.

.. activecode:: ac9_9_10

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(three, ['for', 'find', 'to', 'many', 'they', 'solid', 'for', 'have', 'some', 'ups,'], "Testing that three has the correct value.")

   myTests().main()

4.2 **Challenge:** Create a list called ``emotions`` that contains the first word of every line in ``emotion_words.txt``. 

.. activecode:: ac9_9_11

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(emotions, ['Sad', 'Angry', 'Happy', 'Confused', 'Excited', 'Scared', 'Nervous'], "Testing that emotions was created correctly.")

   myTests().main() 


5. Assign the first 33 characters from the textfile, ``files_extra.txt`` to the variable ``first_chars``.

.. activecode:: ac9_9_12

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFive(self):
         self.assertEqual(first_chars, "This summer I will be travelling.", "Testing that first_chars is assigned to correct value.")

   myTests().main()

5.1 **Challenge:** Using the file ``school_prompt.txt``, if the character 'p' is in a word, then add the word to a list called ``p_words``.

.. activecode:: ac9_9_13

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(p_words, ['topic', 'point', 'papers,', 'ups,', 'scripts.'], "Testing that p_words has the correct list.")

   myTests().main()

5.2 **Challenge:** Create a list called ``j_emotions`` that contains every word in ``emotion_words.txt`` that begins with the letter "j". 

.. activecode:: ac9_9_14

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(j_emotions, ['joyous', 'jittery', 'jumpy'], "Testing that j_emotions was created correctly.")

   myTests().main() 
