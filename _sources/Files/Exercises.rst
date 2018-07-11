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
---------

.. datafile:: travel_plans.txt
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

.. datafile:: emotion_words.txt
   :hide: 

   Sad upset blue down melancholy somber bitter troubled
   Angry mad enraged irate irritable wrathful outraged infuriated
   Happy cheerful content elated joyous delighted lively glad
   Confused disoriented puzzled perplexed dazed befuddled
   Excited eager thrilled delighted
   Scared afraid fearful panicked terrified petrified startled
   Nervous anxious jittery jumpy tense uneasy apprehensive

.. question:: files_ex_1
   :number: 1

    .. tabbed:: q1

        .. tab:: Question

               The following sample file called ``studentdata.txt`` contains one line for each student in an imaginary class.  The 
               students name is the first thing on each line, followed by some exam scores.  
               The number of scores might be different for each student.

               .. raw:: html

                   <pre id="studentdata.txt">
                   joe 10 15 20 30 40
                   bill 23 16 19 22
                   sue 8 22 17 14 32 17 24 21 2 9 11 17
                   grace 12 28 21 45 26 10
                   john 14 32 25 16 89
                   </pre>

            Using the text file ``studentdata.txt`` write a program that prints out the names of
            students that have more than six quiz scores. 

            .. actex:: ac9_9_1
               :nocodelens:
               :available_files: studentdata.txt

               # Hint: first see if you can write a program that just prints out the number of scores on each line
               # Then, make it print the number only if the number is at least six
               # Then, switch it to printing the name instead of the number
        

        .. tab:: Answer

            .. activecode:: ch_files_q1answer
                :nocodelens:

                f = open("studentdata.txt", "r")

                for aline in f:
                    items = aline.split()
                    if len(items[1:]) > 6:
                        print(items[0])

                f.close()

.. question:: files_ex_2
   :number: 2

    .. tabbed:: q2

        .. tab:: Question

            Create a list called ``destination`` using the data stored in ``travel_plans.txt``. Each element of the list should contain a line from the file that lists a country and cities inside that country. Hint: each line that has this information also has a colon ``:`` in it.

            .. actex:: ac9_9_2
               :nocodelens:
               :available_files: travel_plans.txt

               
               =====

               from unittest.gui import TestCaseGui

               class myTests(TestCaseGui):

                  def testFour(self):
                     self.assertEqual(destination, ['Italy: Rome\n', 'Greece: Athens\n', 'England: London, Manchester\n', 'France: Paris, Nice, Lyon\n', 'Spain: Madrid, Barcelona, Granada\n', 'Austria: Vienna\n'], "Testing that destination is assigned to correct values.")

               myTests().main()
      
.. question:: files_ex_3
   :number: 3

    .. tabbed:: q3

        .. tab:: Question

            Create a list called ``j_emotions`` that contains every word in ``emotion_words.txt`` that begins with the letter "j".

            .. actex:: ac9_9_3
               :nocodelens:
               :available_files: emotion_words.txt

               
               =====

               from unittest.gui import TestCaseGui

               class myTests(TestCaseGui):

                  def testOne(self):
                     self.assertEqual(j_emotions, ['joyous', 'jittery', 'jumpy'], "Testing that j_emotions was created correctly.")

               myTests().main()
