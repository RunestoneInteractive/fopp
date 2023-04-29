..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: files-5-
   :start: 1

Iterating over lines in a file
------------------------------

We will now use this file as input in a program that will do some data processing. In the program, we will
examine each line of the file and print it with some additional text. Because ``readlines()`` returns a list of
lines of text, we can use the *for* loop to iterate through each line of the file.

A **line** of a file is defined to be a sequence of characters up to and including a special character called
the **newline** character. If you evaluate a string that contains a newline character you will see the character
represented as ``\n``. If you print a string that contains a newline you will not see the ``\n``, you will just
see its effects (a carriage return).

As the *for* loop iterates through each line of the file the loop variable will contain the current line of the
file as a string of characters. The general pattern for processing each line of a text file is as follows:

::

        for line in myFile.readlines():
            statement1
            statement2
            ...

To process all of our olympics data, we will use a *for* loop to iterate over the lines of the file. Using
the ``split`` method, we can break each line into a list containing all the fields of interest about the
athlete. We can then take the values corresponding to name, team and event to
construct a simple sentence.

.. activecode:: ac9_5_1
    :nocodelens:

    olympicsfile = open("olympics.txt", "r")

    for aline in olympicsfile.readlines():
        values = aline.split(",")
        print(values[0], "is from", values[3], "and is on the roster for", values[4])

    olympicsfile.close()

To make the code a little simpler, and to allow for more efficient processing, Python provides a built-in way to
iterate through the contents of a file one line at a time, without first reading them all into a list. Some students find this confusing initially, so we don't recommend doing it this way, until you get a
little more comfortable with Python. But this idiom is preferred by Python programmers, so you should be prepared
to read it. And when you start dealing with big files, you may notice the efficiency gains of using it.

.. activecode:: ac9_5_2
    :nocodelens:

    olympicsfile = open("olympics.txt", "r")

    for aline in olympicsfile:
        values = aline.split(",")
        print(values[0], "is from", values[3], "and is on the roster for", values[4])

    olympicsfile.close()

.. raw:: html

    <pre hidden id="olympics.txt">
    Name,Sex,Age,Team,Event,Medal
    A Dijiang,M,24,China,Basketball,NA
    A Lamusi,M,23,China,Judo,NA
    Gunnar Nielsen Aaby,M,24,Denmark,Football,NA
    Edgar Lindenau Aabye,M,34,Denmark/Sweden,Tug-Of-War,Gold
    Christine Jacoba Aaftink,F,21,Netherlands,Speed Skating,NA
    Christine Jacoba Aaftink,F,25,Netherlands,Speed Skating,NA
    Christine Jacoba Aaftink,F,25,Netherlands,Speed Skating,NA
    Christine Jacoba Aaftink,F,27,Netherlands,Speed Skating,NA
    Per Knut Aaland,M,31,United States,Cross Country Skiing,NA
    Per Knut Aaland,M,33,United States,Cross Country Skiing,NA
    John Aalberg,M,31,United States,Cross Country Skiing,NA
    John Aalberg,M,33,United States,Cross Country Skiing,NA
    "Cornelia ""Cor"" Aalten (-Strannood)",F,18,Netherlands,Athletics,NA
    "Cornelia ""Cor"" Aalten (-Strannood)",F,18,Netherlands,Athletics,NA
    Antti Sami Aalto,M,26,Finland,Ice Hockey,NA
    "Einar Ferdinand ""Einari"" Aalto",M,26,Finland,Swimming,NA
    Jorma Ilmari Aalto,M,22,Finland,Cross Country Skiing,NA
    Jyri Tapani Aalto,M,31,Finland,Badminton,NA
    Minna Maarit Aalto,F,30,Finland,Sailing,NA
    Minna Maarit Aalto,F,34,Finland,Sailing,NA
    Pirjo Hannele Aalto (Mattila-),F,32,Finland,Biathlon,NA
    Timo Antero Aaltonen,M,31,Finland,Athletics,NA
    Win Valdemar Aaltonen,M,54,Finland,Art Competitions,NA
    </pre>


**Check your Understanding**

.. raw:: html

    <pre id="emotion_words.txt">
    Sad upset blue down melancholy somber bitter troubled
    Angry mad enraged irate irritable wrathful outraged infuriated
    Happy cheerful content elated joyous delighted lively glad
    Confused disoriented puzzled perplexed dazed befuddled
    Excited eager thrilled delighted
    Scared afraid fearful panicked terrified petrified startled
    Nervous anxious jittery jumpy tense uneasy apprehensive
    </pre>

.. activecode:: ac9_5_3
   :available_files: emotion_words.txt
   :language: python
   :nocodelens:
   :autograde: unittest
   :practice: T

   1. Write code to find out how many lines are in the file ``emotion_words.txt`` as shown above. Save this value to the variable ``num_lines``. Do not use the len method.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(num_lines, 7, "Testing that num_lines was assigned to the correct value.")
         self.assertNotIn('len', self.getEditorText(), "Checking that you didn't use the len function.")

   myTests().main()
