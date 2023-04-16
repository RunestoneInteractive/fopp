..  Copyright (C)  Paul Resnick, Lauren Murphy.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Tuple Packing
=============

Wherever python expects a single value, if multiple expressions are provided, separated
by commas, they are automatically **packed** into a tuple. For example, we can omit the parentheses when assigning a tuple of values to a single variable.

.. activecode:: ac13-1-1

    julia = ("Julia", "Roberts", 1967, "Duplicity", 2009, "Actress", "Atlanta, Georgia")
    # or equivalently
    julia = "Julia", "Roberts", 1967, "Duplicity", 2009, "Actress", "Atlanta, Georgia"
    print(julia[4])
    

**Check your understanding**

.. mchoice:: question12_2_1
   :multiple_answers:
   :answer_a: print(julia['city'])
   :answer_b: print(julia[-1])
   :answer_c: print(julia(-1))
   :answer_d: print(julia(6))
   :answer_e: print(julia[7])
   :correct: b
   :feedback_a: julia is a tuple, not a dictionary; indexes must be integers.
   :feedback_b: [-1] picks out the last item in the sequence.
   :feedback_c: Index into tuples using square brackets. julia(-1) will try to treat julia as a function call, with -1 as the parameter value.
   :feedback_d: Index into tuples using square brackets. julia(-1) will try to treat julia as a function call, with -1 as the parameter value.
   :feedback_e: Indexing starts at 0. You want the seventh item, which is julia[6]
   :practice: T

   Which of the following statements will output Atlanta, Georgia

.. activecode:: ac12_2_1
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   **2.** Create a tuple called ``practice`` that has four elements: 'y', 'h', 'z', and 'x'.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(practice, ('y','h','z','x'), "Testing that pratice value is assigned to correct value.")

   myTests().main()

.. activecode:: ac12_2_2
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   **3.** Create a tuple named ``tup1`` that has three elements: 'a', 'b', and 'c'.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(tup1, ('a', 'b', 'c'), "Testing that tup1 was created correctly.")

   myTests().main()

.. activecode:: ac12_2_3
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   **4.** Provided is a list of tuples. Create another list called ``t_check`` that contains the third element of every tuple.
   ~~~~
   lst_tups = [('Articuno', 'Moltres', 'Zaptos'), ('Beedrill', 'Metapod', 'Charizard', 'Venasaur', 'Squirtle'), ('Oddish', 'Poliwag', 'Diglett', 'Bellsprout'), ('Ponyta', "Farfetch'd", "Tauros", 'Dragonite'), ('Hoothoot', 'Chikorita', 'Lanturn', 'Flaaffy', 'Unown', 'Teddiursa', 'Phanpy'), ('Loudred', 'Volbeat', 'Wailord', 'Seviper', 'Sealeo')]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(t_check, ['Zaptos', 'Charizard', 'Diglett', 'Tauros', 'Lanturn', 'Wailord'], "Testing that pratice value is assigned to correct value.")

   myTests().main()

.. activecode:: ac12_2_4
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   **5.** Below, we have provided a list of tuples. Write a for loop that saves the second element of each tuple into a list called ``seconds``.
   ~~~~
   tups = [('a', 'b', 'c'), (8, 7, 6, 5), ('blue', 'green', 'yellow', 'orange', 'red'), (5.6, 9.99, 2.5, 8.2), ('squirrel', 'chipmunk')]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(seconds, ['b', 7, 'green', 9.99, 'chipmunk'], "Testing that seconds was created correctly.")

   myTests().main()
