..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


.. qnum::
   :prefix: test-1-
   :start: 1

.. _test_cases_chap:

Introduction: Test Cases
========================

When we write functions that return values, we intend to use them over and over again. However, we want to be 
certain that they return the correct result. To be more certain these functions work correctly we write test cases.

A **test case** expresses requirements for a program, in a way that can be checked automatically. Specifically, a test 
asserts something about the state of the program at a particular point in its execution.

We have previously suggested that it's a good idea to first write down comments about what your code is supposed to do, 
before actually writing the code. It is an even better idea to write down some test cases before writing a program. For 
example, before writing a function, write a few test cases that check that it returns an object of the right type and 
that it returns the correct values when invoked on particular inputs.

You've actually been using test cases throughout this book in some of the activecode windows and almost all of the 
exercises. The code for them has been hidden, so as not to confuse you and also to avoid giving away the answers. Now 
it's time to learn how to write code for test cases.

Python provides a built-in module for writing and running test cases, called ``unittest``. As you write larger programs, 
as part of larger software development teams, you will learn a lot more details about how to structure collections of 
test cases and learn a discipline for where to collect them and when to run them. This course introduces just a few 
features of the ``unittest`` module.

As with other modules, the first step is to write a statement to import it. Having done that, you can refer to the 
classes and functions that are defined in the unittest module.

The unittest module defines a class called ``TestCase``. Rather than directly creating instances of this class, the 
normal way to use this class is to create a subclass of it. Within the subclass, you define one or more methods. By 
convention, the name of each method should begin with the word ``test_``. This helps you, and other programmers, keep 
track of what's going on in your code. Each method that you define in the subclass of ``TestCase`` is one test case.

The code defining test case methods can make "assertions", by invoking one of the assertion methods that is defined for 
the TestCase class. For example, we can write self.assertEqual(x, 3). If the current value of the variable x is 3, the 
assertion is valid and the test will pass. If it's not, then the test will fail.

The unittest module uses classes in a way that's a little bit non-intuitive. You will never write code that explicitly 
invokes your subclass of TestCase to make an instance of it. Instead, that will happen behind the scenes in a function 
called ``main()`` that is defined in the unittest module. It will search for all subclasses of ``TestCase``. With each 
subclass, it searches for every method of that class that begins with the prfeix ``test``. With each method, it then 
creates an instance of the class and calls the method to run the tests.

What you will need to learn is how to import the unittest framework, which you learned about in the modules chapter, and 
write code to:

1. Make a subclass of ``unittest.TestCase``.
2. Define methods for test cases.
3. Use assertion methods inside the methods that you define to test specifics about your code.

For example, the code snippet below, illustrates a set of tests for string methods. It is a simplified version of the 
code provided in the `python documentation for the unittest module <https://docs.python.org/3/library/unittest.html>`_. 
The full unittest module can do a lot more than we've shown here, including automatically running a setUp method before 
running each test in a TestCase subclass.

.. sourcecode:: python

    import unittest

    class TestStringMethods(unittest.TestCase): # make a sublcass

        def test_upper(self): # define a method 
            self.assertEqual('foo'.upper(), 'FOO') # use an assert method to test if something is true

        def test_isupper(self):
            self.assertTrue('FOO'.isupper())
            self.assertFalse('Foo'.isupper())

        def test_split(self): # any name ok
        # but note the convention that it should start with the word test
            s = 'hello world'
            self.assertEqual(s.split(), ['hello', 'world'])

    # invoke the main() function from the unittest module, which runs all the tests
    unittest.main(verbosity=2)


In the online textbook, we use a special module that is built on top of the unittest module. This one, however, handles 
making a nice tabular display of the results of the tests, and putting them into HTML form to display on the web page. To 
use it, we import the module ``unittest.gui`` rather than just unittest, and then we work with the ``TestCaseGui`` class 
rather than the ``TestCase`` class. TestCaseGui includes a main() method that does pretty much what the unittest.main 
function does. In your own code files, you will use the ``TestCase`` class, and get output in your console that does not 
look quite as neat as the tables you've seen in this textbook.

Here's an example with test cases for the ``blanked`` function that would be useful for a Hangman game. Note that the 
tests will fail until you fill in a correct definition for the blanked function.

.. activecode:: ac18_1_1
    :language: python
    :autograde: unittest
    :chatcodes:
    :practice: T

    Define the function blanked(). It takes a word and a string of letters that have been revealed. It should return a 
    string with the same number of characters as the original word, but with the unrevealed characters replaced by _

    ~~~~
    def blanked(word, revealed_letters):
        return word

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(blanked('hello', 'elj'), "_ell_", "testing blanking of hello when e,l, and j have been guessed.")
            self.assertEqual(blanked('hello', ''), '_____', "testing blanking of hello when nothing has been guessed.")
            self.assertEqual(blanked('ground', 'rn'), '_r__n_', "testing blanking of ground when r and n have been guessed.")
            self.assertEqual(blanked('almost', 'vrnalmqpost'), 'almost', "testing blanking of almost when all the letters have been guessed.")

    myTests().main()

**Check your understanding**

.. mchoice:: question18_1_1
   :practice: T
   :answer_a: True
   :answer_b: False
   :answer_c: It depends
   :correct: b
   :feedback_a: A message is printed out, but the program does not stop executing
   :feedback_b: A message is printed out, but the program does not stop executing
   :feedback_c: A message is printed out, but the program does not stop executing

   When ``TestCase.assertEqual()`` is passed two values that are not the same, it generates an error and stops execution of the program.
 
.. mchoice:: question18_1_2
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: You might not notice the error, if the code just produces a wrong output rather generating an error. And it may be difficult to figure out the original cause of an error when you do get one.
   :feedback_b: Test cases let you test some pieces of code as you write them, rather than waiting for problems to show themselves later.

   Test cases are a waste of time, because the python interpreter will give an error
   message when the program runs incorrectly, and that's all you need for debugging.

   .. code-block:: python

        def blanked(word, revealed_letters):
            return word

        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(blanked('hello', 'elj'), "_ell_", "testing blanking of hello when e,l, and j have been guessed.")
                self.assertEqual(blanked('hello', ''), '_____', "testing blanking of hello when nothing has been guessed.")
                self.assertEqual(blanked('ground', 'rn'), '_r__n_', "testing blanking of ground when r and n have been guessed.")
                self.assertEqual(blanked('almost', 'vrnalmqpost'), 'almost', "testing blanking of almost when all the letters have been guessed.")

        myTests().main()


.. mchoice:: question18_1_3
    :practice: T
    :answer_a: self.assertEqual(blanked('under', 'du', 'u_d__'))
    :answer_b: self.assertEqual(blanked('under', 'u_d__'), 'du')
    :answer_c: self.assertEqual(blanked('under', 'du'), 'u_d__')
    :correct: c
    :feedback_a: blanked only takes two inputs; this provides three inputs to the blanked function
    :feedback_b: The second argument to the blanked function should be the letters that have been guessed, not the blanked version of the word
    :feedback_c: This checks whether the value returned from the blanked function is 'u_d__'.

    Which of the following is the correct way to write a test to check that 'under' will be blanked as 'u_d__' when the user has guessed letters d and u so far?
