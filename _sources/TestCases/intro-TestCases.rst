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

To write a **unit test**, we must know the correct result when calling the function with a specific input. 

.. activecode:: ac19_1_1

    def square(x):
        '''raise x to the second power'''
        return x * x
    
    import test
    print('testing square function')
    test.testEqual(square(10), 100)


``testEqual`` (from the ``test`` module) is a function that allows us to perform a unit test. It takes two parameters. The first is a call to the function we want to test (``square`` in this example) with a particular input (10 in this example). The second parameter is the correct result that should be produced (100 in this example). ``test.testEqual`` compares what the function returns with the correct result and displays whether the unit test passes or fails.

.. admonition:: Extend the program ...

   On line 8, write another unit test (that should pass) for the ``square`` function.

.. note::
   The ``test`` module is not a standard Python module. Instead, there are other more powerful and more modern modules, such as one called ``unittest`` which will be taught in more advanced courses. However, the ``test`` module offers a simple introduction to testing that is appropriate at this stage in the interactive text.

**Check your understanding**

.. mchoice:: question19_1_1
   :answer_a: True
   :answer_b: False
   :answer_c: It depends
   :correct: b
   :feedback_a: A message is printed out, but the program does not stop executing
   :feedback_b: A message is printed out, but the program does not stop executing
   :feedback_c: A message is printed out, but the program does not stop executing
   :practice: T

   When ``test.testEqual()`` is passed two values that are not the same, it generates an error and stops execution of the program.
 
.. mchoice:: question19_1_2
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: You might not notice the error, if the code just produces a wrong output rather generating an error. And it may be difficult to figure out the original cause of an error when you do get one.
   :feedback_b: Test cases let you test some pieces of code as you write them, rather than waiting for problems to show themselves later.
   :practice: T

   Test cases are a waste of time, because the python interpreter will give an error
   message when the program runs incorrectly, and that's all you need for debugging.

.. mchoice:: question19_1_3
    :answer_a: test.testEqual(blanked('under', 'du', 'u_d__'))
    :answer_b: test.testEqual(blanked('under', 'u_d__'), 'du')
    :answer_c: test.testEqual(blanked('under', 'du'), 'u_d__')
    :correct: c
    :feedback_a: blanked only takes two inputs; this provides three inputs to the blanked function
    :feedback_b: The second argument to the blanked function should be the letters that have been guessed, not the blanked version of the word
    :feedback_c: This checks whether the value returned from the blanked function is 'u_d__'.
    :practice: T

    Which of the following is the correct way to write a test to check that 'under' will be blanked as ``'u_d__'`` when the user has guessed letters d and u so far?

    .. code-block:: python

        def blanked(word, revealed_letters):
            return word

        import test

        test.testEqual(blanked('hello', 'elj'), "_ell_")
        test.testEqual(blanked('hello', ''), '_____')
        test.testEqual(blanked('ground', 'rn'), '_r__n_')
        test.testEqual(blanked('almost', 'vrnalmqpost'), 'almost')
