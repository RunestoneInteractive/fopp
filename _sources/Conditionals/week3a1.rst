..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. Week 3 Assignment

Chapter Assessment
------------------

**Check your understanding**

.. activecode:: assess_ps3_1_1_1
    :language: python
    :autograde: unittest
    :practice: T

    ``rainfall_mi`` is a string that contains the average number of inches of rainfall in Michigan for every month (in inches) with every month separated by a comma.
    Write code to compute the number of months that have more than 3 inches of rainfall. Store the result in the variable ``num_rainy_months``.
    In other words, count the number of items with values ``> 3.0``.


    Hard-coded answers will receive no credit.
    ~~~~
    rainfall_mi = "1.65, 1.46, 2.05, 3.03, 3.35, 3.46, 2.83, 3.23, 3.5, 2.52, 2.8, 1.85"
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertIn('for', self.getEditorText(), "Testing that your code has a for loop (Don't worry about actual and expected values).")
            self.assertEqual(num_rainy_months, 5, "Testing that num_rainy_months has the right value")

    myTests().main()

.. activecode:: assess_ps3_1_1_2
    :language: python
    :autograde: unittest
    :practice: T

    The variable ``sentence`` stores a string. Write code to determine how many words in ``sentence`` start and end with the same letter, including one-letter words.
    Store the result in the variable ``same_letter_count``.


    Hard-coded answers will receive no credit.
    ~~~~
    sentence = "students flock to the arb for a variety of outdoor activities such as jogging and picnicking"

    # Write your code here.


    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(same_letter_count, 2, "Checking that same_letter_count has the correct value")
            self.assertIn('for ', self.getEditorText(), "Testing that your code has a for loop")
    myTests().main()

.. activecode:: assess_ps3_1_1_3
    :language: python
    :autograde: unittest
    :practice: T

    Write code to count the number of strings in list ``items`` that have the character ``w`` in it. Assign that number to the variable ``acc_num``.

    HINT 1: Use the accumulation pattern!

    HINT 2: the ``in`` operator checks whether a substring is present in a string.


    Hard-coded answers will receive no credit.
    ~~~~
    items = ["whirring", "wow!", "calendar", "wry", "glass", "", "llama","tumultuous","owing"]


    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertIn(' in ', self.getEditorText(), "Testing that you are using the in operator.")
            self.assertEqual(acc_num, 4, "Testing that acc_num has been set to the number of strings that have 'w' in them.")

    myTests().main()

.. activecode:: assess_ps3_1_1_4
    :language: python
    :autograde: unittest
    :practice: T

    Write code that counts the number of words in ``sentence`` that contain *either* an "a" or an "e". Store the result in the variable ``num_a_or_e``.

    Note 1: be sure to not double-count words that contain both an a and an e.

    HINT 1: Use the ``in`` operator.

    HINT 2: You can either use ``or`` or ``elif``.


    Hard-coded answers will receive no credit.
    ~~~~
    sentence = "python is a high level general purpose programming language that can be applied to many different classes of problems."


    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertIn(' in ', self.getEditorText(), "Testing that you are using the in operator.")
            self.assertEqual(num_a_or_e, 14, "Testing that num_a_or_e has been set to the correct number.")

    myTests().main()

.. activecode:: assess_ps3_1_1_5
    :language: python
    :autograde: unittest
    :practice: T

    Write code that will count the number of vowels in the sentence ``s`` and assign the result to the variable ``num_vowels``. For this problem, vowels are only a, e, i, o, and u. Hint: use the ``in`` operator with ``vowels``.
    ~~~~
    s = "singing in the rain and playing in the rain are two entirely different situations but both can be fun"
    vowels = ['a','e','i','o','u']

    # Write your code here.


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
           self.assertEqual(num_vowels, 32, "testing whether num_vowels is set correctly")

        def testOneA(self):
           self.assertIn('for', self.getEditorText(), "Testing that you are using a for loop.")

    myTests().main()

.. activecode:: assess_ac3_1_1_6
   :language: python
   :autograde: unittest
   :practice: T

   Create one conditional so that if "Friendly" is in ``w``, then "Friendly is here!" should be assigned to the variable ``wrd``. If it's not, check if "Friend" is in ``w``. If so, the string "Friend is here!" should be assigned to the variable ``wrd``, otherwise "No variation of friend is in here." should be assigned to the variable ``wrd``. (Also consider: does the order of your conditional statements matter for this problem? Why?)
   ~~~~
   w = "Friendship is a wonderful human experience!"

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(wrd, "Friend is here!", "Testing the value of wrd")
         self.assertIn("else", self.getEditorText(), "Checking that you used an else clause.")
         self.assertIn("elif", self.getEditorText(), "Checking that you used an elif clause.")

   myTests().main()

.. activecode:: assess_ac3_1_1_7
   :language: python
   :autograde: unittest
   :practice: T

   We have written conditionals for you to use. Create the variable x and assign it some integer so that at the end of the code, ``output`` will be assigned the string ``"Consistently working"``.
   ~~~~
   if x >= 10:
       output = "working"
   else:
       output = "Still working"
   if x > 12:
       output = "Always working"
   elif x < 7:
       output = "Forever working"
   else:
       output = "Consistently working"

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(output, "Consistently working", "Testing the value of output")
      def testTwo(self):
         self.assertIn(x, [7,8,9,10,11,12], "Testing that x was assigned a correct number" )

   myTests().main()

.. activecode:: assess_ac3_1_1_8
   :language: python
   :autograde: unittest
   :practice: T

   Write code so that if ``"STATS 250"`` is in the list ``schedule``, then the string ``"You could be in Information Science!"`` is assigned to the variable ``resp``. Otherwise, the string ``"That's too bad."`` should be assigned to the variable ``resp``.
   ~~~~
   schedule = ["SI 106", "STATS 250", "SI 110", "ENGLISH 124/125"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(resp, "You could be in Information Science!", "Testing the value of resp given the schedule list provided.")
         self.assertIn("if", self.getEditorText(), "Testing that you used an if clause.")

   myTests().main()

.. activecode:: assess_ac3_1_1_9
   :language: python
   :autograde: unittest
   :practice: T

   Create the variable ``z`` whose value is ``30``. Write code to see if ``z`` is greater than ``y``. If so, add 5 to ``y``'s value, otherwise do nothing. Then, multiply ``z`` and ``y``, and assign the resulting value to the variable ``x``.
   ~~~~
   y = 22

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(x, 810, "Testing the value of x")
      def testTwo(self):
         self.assertEqual(z, 30, "Testing the value of z.")

   myTests().main()   

.. activecode:: assess_ac3_1_1_10
   :language: python
   :autograde: unittest
   :practice: T

   For each string in ``wrd_lst``, find the number of characters in the string. If the number of characters is less than 6, add 1 to ``accum`` so that in the end, ``accum`` will contain an integer representing the total number of words in the list that have fewer than 6 characters.
   ~~~~
   wrd_lst = ["Hello", "activecode", "Java", "C#", "Python", "HTML and CSS", "Javascript", "Swift", "php"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(accum, 5, "Testing the value of accum")
         self.assertIn('for ', self.getEditorText(), "Testing that your code has a for loop")

   myTests().main()
