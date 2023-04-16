..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: debug-6-
   :start: 1

.. index:: semantic error, logic error, error; semantic, error; logic, test case
    single: Holmes, Sherlock
    single: Doyle, Arthur Conan
    single: Linux

Semantic Errors
===============

The third type of error is the **semantic error**, also called a **logic error**. If there is a semantic error
in your program, it will run successfully in the sense that the computer will
not generate any error messages.  However, your program will not do the right thing. It will do
something else. Specifically, it will do what you **told** it to do, not what you **wanted** it to do.

The following program has a semantic error. Execute it to see what goes wrong:

.. activecode:: logicerr_sum

    num1 = input('Enter a number:')
    num2 = input('Enter another number:')
    sum = num1 + num2

    print('The sum of', num1, 'and', num2, 'is', sum)

This program runs and produces a result. However, the result is not what the programmer intended. It contains
a semantic error. The error is that the program performs concatenation instead of addition, because the programmer
failed to write the code necessary to convert the inputs to integers.

With semantic errors, the problem is that the program you wrote is not the program you wanted to
write. The meaning of the program (its semantics) is wrong. The computer is 
faithfully carrying out the instructions you wrote, and its results
are correct, given the instructions that you provided. However, because your instructions 
have a flaw in their design, the program does not behave as desired. 

Identifying semantic errors can be tricky because no error message appears to make it obvious that the results are
incorrect. The only way you can detect semantic errors is if you *know in advance* what the program should do for a given set
of input. Then, you run the program with that input data and compare the output of the program with what you expect. If
there is a discrepancy between the actual output and the expected output, you can conclude that there is either 1) a
semantic error or 2) an error in your expected results.

Once you've determined that you have a semantic error, locating it can be tricky because you must work
backward by looking at the output of the program and trying to figure out what it is doing.

Test Cases
----------

To detect a semantic error in your program, you need the help of something called a test case. 

.. admonition:: Test Case

   A **test case** is a set of input values for the program, together with the output that you expect the program should produce when it is run with those particular
   inputs. 

Here is an example of a test case for the program above::

   Test Case
   ---------
   Input: 2, 3
   Expected Output: 5

If you give this test case to someone and ask them to test the program, they can type in the inputs, observe the output,
check it against the expected output, and determine whether a semantic error exists based on whether the actual output
matches the expected output or not. The tester doesn't even have to know what the program is supposed to do. For this reason,
software companies often have separate quality assurance departments whose responsibility is to check that the programs written
by the programmers perform as expected. The testers don't have to be programmers; they just have to be able to operate the
program and compare its results with the test cases they're given.

In this case, the program is so simple that we don't need to write down a test case at all; we can compute the expected output
in our heads with very little effort. More complicated programs require effort to create the test case (since you shouldn't use
the program to compute the expected output; you have to do it with a calculator or by hand), but the effort pays off when 
the test case helps you to identify a semantic error that you didn't know existed.

Semantic errors are the most dangerous of the three types of errors, because in some cases they are not noticed by either
the programmers or the users who use the program. Syntax errors cannot go undetected (the program won't run at all if
they exist), and runtime errors are usually also obvious and typically detected by developers before a program is
released for use (although it is possible for a runtime error to occur for some inputs and not for
others, so these can sometimes remain undetected for a while). However, programs often go for years with undetected
semantic errors; no one realizes that the program has been producing incorrect results. They just assume that because the
results seem reasonable, they are correct. Sometimes, these errors are relatively harmless. But if they involve
financial transactions or medical equipment, the results can be harmful or even deadly. For this reason, creating test
cases is an important part of the work that programmers perform in order to help them produce programs that work
correctly.

**Check your understanding**

.. mchoice:: question4_6_1
   :answer_a: Attempting to divide by 0.
   :answer_b: Forgetting a right-parenthesis ) when invoking a function.
   :answer_c: Forgetting to divide by 100 when printing a percentage amount.
   :correct: c
   :feedback_a: A semantic error is an error in logic. In this case the program does not produce the correct output because the problem is not solved correctly. This would be considered a run-time error.
   :feedback_b: A semantic error is an error in logic. In this case the program does not produce the correct output because the code can not be processed by the compiler or interpreter. This would be considered a syntax error.
   :feedback_c: This will produce the wrong answer because the programmer implemented the solution incorrectly.  This is a semantic error.
   :practice: T

   Which of the following is a semantic error?

.. mchoice:: question4_6_2
   :answer_a: The programmer.
   :answer_b: The compiler / interpreter.
   :answer_c: The computer.
   :answer_d: The teacher / instructor.
   :correct: a
   :feedback_a: You must fully understand the problem so that you can tell if your program properly solves it.
   :feedback_b: The compiler and / or interpreter will only do what you instruct it to do. It does not understand what the problem is that you want to solve.
   :feedback_c: The computer does not understand your problem. It just executes the instructions that it is given.
   :feedback_d: Your teacher and instructor may be able to find most of your semantic errors, but only because they have experience solving problems.  However it is your responsibility to understand the problem so you can develop a correct solution.
   :practice: T

   Who or what typically finds semantic errors?
