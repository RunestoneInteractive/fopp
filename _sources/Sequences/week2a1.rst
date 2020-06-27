..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: sequences-10-
   :start: 1

.. Week 2 Assessment 1

Chapter Assessment
------------------

**Check your understanding**

.. mchoice:: assess_question2_1_1_1
   :answer_a: zpzpzpzpzp
   :answer_b: zzzzzppppp
   :answer_c: pzpzpzpzpz
   :answer_d: pppppzzzzz
   :answer_e: None of the above, an error will occur.
   :correct: c
   :feedback_a: The order of concatenation matters.
   :feedback_b: Think about the order that the program is executed in, what occurs first?
   :feedback_c: Yes, because let_two was put before let, c has "pz" and then that is repeated five times.
   :feedback_d: Think about the order that the program is executed in, what occurs first?
   :feedback_e: This is correct syntax and no errors will occur.
   :practice: T
   :topics: Sequences/ConcatenationandRepetition

   What will the output be for the following code?
  
   .. sourcecode:: python

    let = "z"
    let_two = "p"
    c = let_two + let
    m = c*5
    print(m)

.. activecode:: assess_ac_2_1_1_2
    :autograde: unittest
    :language: python
    :practice: T
    :topics: Sequences/TheSliceOperator

    Write a program that extracts the last three items in the list ``sports`` and assigns it to the variable ``last``. Make sure to write your code so that it works no matter how many items are in the list.
    ~~~~
    sports = ['cricket', 'football', 'volleyball', 'baseball', 'softball', 'track and field', 'curling', 'ping pong', 'hockey']


    =====

    from unittest.gui import TestCaseGui
    import re

    class myTests(TestCaseGui):

      def test_output(self):
         self.assertEqual(last, ['curling', 'ping pong', 'hockey'], "Testing that the value of last is the last three items in sports.")
         self.assertTrue(re.search(r'last\s*=\s*\S*3:', self.getEditorText()), "Hardcode check")
        

    myTests().main()

.. activecode:: assess_ac_2_1_1_3
    :autograde: unittest
    :language: python
    :practice: T
    :topics: Sequences/ConcatenationandRepetition

    Write code that combines the following variables so that the sentence "You are doing a great job, keep it up!" is assigned to the variable ``message``. Do not edit the values assigned to ``by``, ``az``, ``io``, or ``qy``.
    ~~~~
    by = "You are"
    az = "doing a great "
    io = "job"
    qy = "keep it up!"


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(by, 'You are', "Testing original variables.")
        self.assertEqual(az, 'doing a great ', "Testing original variables.")
        self.assertEqual(io, 'job', "Testing original variables.")
        self.assertEqual(qy, 'keep it up!', "Testing original variables.")
        self.assertEqual(message, 'You are doing a great job, keep it up!', "Testing that the value of message is what was expected.")
        self.assertNotIn("You are doing a great job, keep it up!", self.getEditorText(), "Testing for hardcoding (Don't worry about actual and expected values).")
        

    myTests().main()

.. mchoice:: assess_question2_1_1_4
   :answer_a: ['travel', 'lights', 'moon']
   :answer_b: ['world', 'travel', 'lights']
   :answer_c: ['travel', 'lights']
   :answer_d: ['world', 'travel']
   :correct: c 
   :feedback_a: When we take a slice of something, it includes the item at the first index and excludes the item at the second index.
   :feedback_b: When we take a slice of something, it includes the item at the first index and excludes the item at the second index. Additionally, Python is a zero-index based language.
   :feedback_c: Yes, python is a zero-index based language and slices are inclusive of the first index and exclusive of the second.
   :feedback_d: Python is a zero-index based language.
   :practice: T
   :topics: Sequences/TheSliceOperator

   What will the output be for the following code?
   
   .. sourcecode:: python
   
    ls = ['run', 'world', 'travel', 'lights', 'moon', 'baseball', 'sea']
    new = ls[2:4]
    print(new)

.. mchoice:: assess_question2_1_1_5
   :answer_a: string
   :answer_b: integer
   :answer_c: float
   :answer_d: list
   :correct: d
   :feedback_a: Not quite, is it slicing or accessing an element?
   :feedback_b: What is happening in the assignment statement for m?
   :feedback_c: What is happening in the assignment statement for m?
   :feedback_d: Yes, a slice returns a list no matter how large the slice.
   :practice: T
   :topics: Sequences/TheSliceOperator

   What is the type of ``m``?
   
   .. sourcecode:: python

    l = ['w', '7', 0, 9]
    m = l[1:2]

.. mchoice:: assess_question2_1_1_6
   :answer_a: string
   :answer_b: integer
   :answer_c: float
   :answer_d: list
   :correct: a
   :feedback_a: Yes, the quotes around the number mean that this is a string.
   :feedback_b: Not quite, look again at what is being extracted.
   :feedback_c: Not quite, look again at what is being extracted.
   :feedback_d: Not quite, is it slicing or accessing an element?
   :practice: T
   :topics: Sequences/IndexOperatorWorkingwiththeCharactersofaString

   What is the type of ``m``?
   
   .. sourcecode:: python

    l = ['w', '7', 0, 9]
    m = l[1]

.. mchoice:: assess_question2_1_1_7
   :answer_a: string
   :answer_b: integer
   :answer_c: float
   :answer_d: list
   :correct: d
   :feedback_a: Not quite; .split() returns a list, each of whose elements is a string.
   :feedback_b: Not quite, look again at what types are present and what the result of .split() is.
   :feedback_c: Not quite, look again at what types are present and what the result of .split() is.
   :feedback_d: Yes, the .split() method returns a list.
   :practice: T
   :topics: Sequences/SplitandJoin

   What is the type of ``x``?
   
   .. sourcecode:: python

    b = "My, what a lovely day"
    x = b.split(',')

.. mchoice:: assess_question2_1_1_8
   :answer_a: string
   :answer_b: integer
   :answer_c: float
   :answer_d: list
   :correct: a
   :feedback_a: Yes, the string is split into a list, then joined back into a string, then split again, and finally joined back into a string.
   :feedback_b: Not quite, look again at what types are present and what the result of .split() is.
   :feedback_c: Not quite, look again at what types are present and what the result of .split() is.
   :feedback_d: Not quite, think about what .split() and .join() return.
   :practice: T
   :topics: Sequences/SplitandJoin

   What is the type of ``a``?
   
   .. sourcecode:: python

    b = "My, what a lovely day"
    x = b.split(',')
    z = "".join(x)
    y = z.split()
    a = "".join(y)

.. activecode:: assess_ac2_1_1_9
    :autograde: unittest
    :language: python
    :practice: T
    :topics: Sequences/CountandIndex

    Write code to determine how many 9's are in the list ``nums`` and assign that value to the variable ``how_many``. Do not use a for loop to do this.
    ~~~~
    nums = [4, 2, 23.4, 9, 545, 9, 1, 234.001, 5, 49, 8, 9 , 34, 52, 1, -2, 9.1, 4]


    =====

    from unittest.gui import TestCaseGui
    import re

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(how_many, 3, "Testing that how_many is set correctly.")
        self.assertNotIn('for', self.getEditorText(), "Testing that you didn't use a for loop.")
        self.assertFalse(re.search(r'how_many\s*=\s*3', self.getEditorText()), "Hardcode check")

    myTests().main()

.. activecode:: assess_ac2_1_1_10
    :autograde: unittest
    :language: python
    :practice: T
    :topics: Sequences/CountandIndex

    Write code that uses slicing to get rid of the the second 8 so that here are only two 8's in the list bound to the variable `nums`.
    ~~~~
    nums = [4, 2, 8, 23.4, 8, 9, 545, 9, 1, 234.001, 5, 49, 8, 9 , 34, 52, 1, -2, 9.1, 4]


    =====

    from unittest.gui import TestCaseGui
    import re

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(nums, [4, 2, 8, 23.4, 9, 545, 9, 1, 234.001, 5, 49, 8, 9 , 34, 52, 1, -2, 9.1, 4], "Testing that nums is set correctly.")
        self.assertTrue(re.search(r'\s*:', self.getEditorText()), "Testing that you are using slices to remove the second 8 (Don't worry about actual and expected values)")

    myTests().main()

.. activecode:: access_ac_2_1_1_11
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Sequences/IndexOperatorWorkingwiththeCharactersofaString
   
   Assign the last element of ``lst`` to the variable ``end_elem``. Do this so that it works no matter how long lst is.
   ~~~~
   lst = ["hi", "goodbye", "python", "106", "506", 91, ['all', 'Paul', 'Jackie', "UMSI", 1, "Stephen", 4.5], 109, "chair", "pizza", "wolverine", 2017, 3.92, 1817, "account", "readings", "papers", 12, "facebook", "twitter", 193.2, "snapchat", "leaders and the best", "social", "1986", 9, 29, "holiday", ["women", "olympics", "gold", "rio", 21, "2016", "men"], "26trombones"]

   =====

   from unittest.gui import TestCaseGui
   import re

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(end_elem, lst[-1], "Testing that end_elem has the correct element assigned.")
         self.assertFalse(re.search(r'end_elem\s*=\s*\S26trombones\S', self.getEditorText()), "Hardcoding Check (Don't worry about actual and expected values)")

   myTests().main()

.. activecode:: access_ac_2_1_1_12
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Sequences/Length
   
   Assign the number of elements in ``lst`` to the variable ``num_lst``.
   ~~~~
   lst = ["hi", "goodbye", "python", "106", "506", 91, ['all', 'Paul', 'Jackie', "UMSI", 1, "Stephen", 4.5], 109, "chair", "pizza", "wolverine", 2017, 3.92, 1817, "account", "readings", "papers", 12, "facebook", "twitter", 193.2, "snapchat", "leaders and the best", "social", "1986", 9, 29, "holiday", ["women", "olympics", "gold", "rio", 21, "2016", "men"], "26trombones"]

   =====

   from unittest.gui import TestCaseGui
   import re
   
   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(num_lst, 30, "Testing that num_lst has the correct length assigned.")
         self.assertFalse(re.search(r'num_lst\s*=\s*30', self.getEditorText()), "Hardcoding Check (Don't worry about actual and expected values)")

   myTests().main()

.. activecode:: assess_ac_2_1_1_13
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Sequences/SplitandJoin

   Create a variable called ``wrds`` and assign to it a list whose elements are the words in the string ``sent``. Do not worry about punctuation.
   ~~~~
   sent = "The bicentennial for our university was in 2017"

   =====

   from unittest.gui import TestCaseGui
   import re

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(wrds, sent.split(), "Testing that wrds has been correctly assigned.")
         self.assertFalse(re.search(r'wrds\s*=\s*\S*The\S', self.getEditorText()), "Hardcoding Check (Don't worry about actual and expected values)")


   myTests().main()
