..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: dictionaries-6-
   :start: 1

Accumulating Results From a Dictionary
--------------------------------------

Just as we have iterated through the elements of a list to accumulate a result,
we can also iterate through the keys in a dictionary, accumulating a result that may
depend on the values associated with each of the keys.

For example, suppose that we wanted to compute a Scrabble score for the Study in Scarlet
text. Each occurrence of the letter 'e' earns one point, but 'q' earns 10. We have
a second dictionary, stored in the variable ``letter_values``. Now, to compute the
total score, we start an accumulator at 0 and go through each of the letters in the 
counts dictionary. For each of those letters that has a letter value (no points for spaces,
punctuation, capital letters, etc.), we add to the total score.

.. activecode:: ac10_6_1
   :nocodelens:

   f = open('scarlet2.txt', 'r')
   txt = f.read()
   # now txt is one long string containing all the characters
   letter_counts = {} # start with an empty dictionary
   for c in txt:
       if c not in letter_counts:
           # we have not seen this character before, so initialize a counter for it
           letter_counts[c] = 0
      
       #whether we've seen it before or not, increment its counter
       letter_counts[c] = letter_counts[c] + 1

   letter_values = {'a': 1, 'b': 3, 'c': 3, 'd': 2, 'e': 1, 'f':4, 'g': 2, 'h':4, 'i':1, 'j':8, 'k':5, 'l':1, 'm':3, 'n':1, 'o':1, 'p':3, 'q':10, 'r':1, 's':1, 't':1, 'u':1, 'v':4, 'w':4, 'x':8, 'y':4, 'z':10}
   
   tot = 0
   for letter in letter_counts:
       if letter in letter_values:
           tot = tot + letter_values[letter] * letter_counts[letter]

   print(tot)

Line 18 is the tricky one. We are updating the variable tot to have its old number plus the score for the current letter times the number of occurrences of that letter.
Try changing some of the letter values and see how it affects the total. Try changing txt to be just a single word that you might play in Scrabble.

**Check your Understanding**

.. activecode:: ac10_6_2
   :language: python
   :autograde: unittest
   :practice: T

   **1.** The dictionary ``travel`` contains the number of countries within each continent that Jackie has traveled to. Find the total number of countries that Jackie has been to, and save this number to the variable name ``total``. Do not hard code this!
   ~~~~
   travel = {"North America": 2, "Europe": 8, "South America": 3, "Asia": 4, "Africa":1, "Antarctica": 0, "Australia": 1}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(total, 19, "Testing that total is correct.")

   myTests().main()

.. activecode:: ac10_6_3
   :language: python
   :autograde: unittest
   :practice: T

   **2.** ``schedule`` is a dictionary where a class name is a key and its value is how many credits it was worth. Go through and accumulate the total number of credits that have been earned so far and assign that to the variable ``total_credits``. Do not hardcode.
   ~~~~
   schedule = {"UARTS 150": 3, "SPANISH 103": 4, "ENGLISH 125": 4, "SI 110": 4, "ENS 356": 2, "WOMENSTD 240": 4, "SI 106": 4, "BIO 118": 3, "SPANISH 231": 4, "PSYCH 111": 4, "LING 111": 3, "SPANISH 232": 4, "STATS 250": 4, "SI 206": 4, "COGSCI 200": 4, "AMCULT 202": 4, "ANTHRO 101": 4}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(total_credits, 63, "Testing that total_credits has the correct value.")

   myTests().main()


.. datafile:: scarlet2.txt
   :fromfile: scarlet.txt
   :hide:
