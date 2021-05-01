..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: iter-12-
   :start: 1

.. Week 2 Assessment 2

Chapter Assessment
------------------

**Check your understanding**

.. activecode:: assess_ps_02_01
    :language: python
    :autograde: unittest
    :practice: T
    :topics: Iteration/Stringsandforloops

    Write one for loop to print out each character of the string ``my_str`` on a separate line.
    ~~~~
    my_str = "MICHIGAN"

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertIn('for', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
        self.assertIn("M\nI\nC\nH\nI\nG\nA\nN", self.getOutput(), "Testing output (Don't worry about actual and expected values).")

    myTests().main()


.. activecode:: assess_ps_02_02
    :language: python
    :autograde: unittest
    :practice: T
    :topics: Iteration/Listsandforloops

    Write one for loop to print out each element of the list ``several_things``. Then, write *another* for loop to print out the TYPE of each element of the list ``several_things``. To complete this problem you should have written two different for loops, each of which iterates over the list ``several_things``, but each of those 2 for loops should have a different result.
    ~~~~
    several_things = ["hello", 2, 4, 6.0, 7.5, 234352354, "the end", "", 99]

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
          self.assertIn('for', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
          str1 = "hello\n2\n4\n6.0\n7.5\n234352354\nthe end\n\n99\n<class 'str'>\n<class 'int'>\n<class 'int'>\n<class 'float'>\n<class 'float'>\n<class 'int'>\n<class 'str'>\n<class 'str'>\n<class 'int'>"
          str2 = "hello\n2\n4\n6.0\n7.5\n234352354\nthe end\n\n99\n<type 'str'>\n<type 'int'>\n<type 'int'>\n<type 'float'>\n<type 'float'>\n<type 'int'>\n<type 'str'>\n<type 'str'>\n<type 'int'>"
          self.assertTrue(str1 in self.getOutput() or str2 in self.getOutput(), "Testing output (Don't worry about actual and expected values).")

    myTests().main()


.. activecode:: assess_ps_02_03
    :language: python
    :autograde: unittest
    :practice: T
    :topics: Iteration/Listsandforloops

    Write code that uses iteration to print out **the length** of each element of the list stored in ``str_list``.
    ~~~~
    str_list = ["hello", "", "goodbye", "wonderful", "I love Python"]

    # Write your code here.
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def test_output(self):
            self.assertIn("for", self.getEditorText(), "Testing whether you used a for loop (Don't worry about actual and expected values).")
            self.assertIn("5\n0\n7\n9\n13", self.getOutput(), "Testing output (Don't worry about actual and expected values).")

    myTests().main()


.. activecode:: assess_ps_02_04
    :language: python
    :autograde: unittest

    Write a program that uses the turtle module **and** a for loop to draw something. It doesn't have to be complicated, but draw something different than we have done in the past. (Hint: if you are drawing something complicated, it could get tedious to watch it draw over and over. Try setting ``.speed(10)`` for the turtle to draw fast, or ``.speed(0)`` for it to draw super fast with no animation.)
    ~~~~
    import turtle




.. activecode:: assess_ps_02_05
    :language: python
    :autograde: unittest
    :practice: T
    :topics: Iteration/TheAccumulatorPattern

    Write code to count the number of characters in ``original_str`` using the accumulation pattern and assign the answer to a variable ``num_chars``. Do NOT use the ``len`` function to solve the problem (if you use it while you are working on this problem, comment it out afterward!)
    ~~~~
    original_str = "The quick brown rhino jumped over the extremely lazy fox."


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
           self.assertEqual(num_chars, len(original_str), "Testing whether num_chars_sent has the correct value")
           self.assertNotIn('len', self.getEditorText(), "Testing that you are not including the len function in your code. (Don't worry about Actual and Expected Values.)")

    myTests().main()

.. activecode:: assess_ps_02_07
    :language: python
    :autograde: unittest
    :practice: T
    :topics: Iteration/TraversalandtheforLoopByIndex

    ``addition_str`` is a string with a list of numbers separated by the ``+`` sign. Write code that uses the accumulation pattern to take the sum of all of the numbers and assigns it to ``sum_val`` (an integer). (You should use the ``.split("+")`` function to split by ``"+"`` and ``int()`` to cast to an integer).

    ~~~~
    addition_str = "2+5+10+20"


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
           self.assertEqual(sum_val, 37, "Testing whether sum_val has the correct value")
           self.assertIn('split', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
           self.assertIn('int', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

    myTests().main()


.. activecode:: assess_ps_02_08
    :language: python
    :autograde: unittest
    :practice: T
    :topics: Iteration/TraversalandtheforLoopByIndex

    ``week_temps_f`` is a string with a list of fahrenheit temperatures separated by the ``,`` sign. Write code that uses the accumulation pattern to compute the **average** (sum divided by number of items) and assigns it to ``avg_temp``. Do not hard code your answer (i.e., make your code compute both the sum or the number of items in ``week_temps_f``) (You should use the ``.split(",")`` function to split by ``","`` and ``float()`` to cast to a float).

    ~~~~
    week_temps_f = "75.1,77.7,83.2,82.5,81.0,79.5,85.7"


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(avg_temp, 80.67142857142858, 7, "Testing that avg_temp has the correct value")
            self.assertIn('split', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
            self.assertIn('float', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

    myTests().main()

.. activecode:: assess_ps_02_09
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Iteration/TraversalandtheforLoopByIndex

   Write code to create a list of numbers from 0 to 67 and assign that list to the variable ``nums``. Do not hard code the list.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(nums, list(range(68)), "Testing that nums is a list that contains the correct elements.")

   myTests().main()
