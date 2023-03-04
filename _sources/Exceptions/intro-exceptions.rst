..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: exceptions-
   :start: 1

.. _exceptions_chap:


What is an exception?
=====================

An *exception* is a signal that a condition has occurred that can't be easily
handled using the normal flow-of-control of a Python program. *Exceptions*
are often defined as being "errors" but this is not always the case. All
errors in Python are dealt with using *exceptions*, but not all
*exceptions* are errors.

Exception Handling Flow-of-control
==================================

To explain what an *exception* does, let's review the normal "flow of control"
in a Python program. In normal operation Python executes statements sequentially,
one after the other. For three constructs, if-statements, loops and function
invocations, this sequential execution is interrupted.

* For *if-statements*, only one of several statement blocks is executed and
  then flow-of-control jumps to the first statement after the if-statement.
* For *loops*, when the end of the loop is reached, flow-of-control jumps back
  to the start of the loop and a test is used to determine if the loop needs
  to execute again. If the loop is finished, flow-of-control jumps to the
  first statement after the loop.
* For *function invocations*, flow-of-control jumps to the first statement in
  the called function, the function is executed, and the flow-of-control
  jumps back to the next statement after the function call.

Do you see the pattern? If the flow-of-control is not purely sequential, it
always executes the first statement immediately following the altered
flow-of-control. That is why we can say that Python flow-of-control is
sequential. But there are cases where this sequential flow-of-control does
not work well.

Exceptions provide us with way way to have a non-sequential point where we can handle something out of the ordinary (exceptional).

Raising and Catching Errors
---------------------------

.. index:: try, except, Exception

The try/except control structure provides a way to process a run-time error and continue on with program execution. Until now, any run-time error, such asking for the 8th item in a list with only 3 items, or dividing by 0, has caused the program execution to stop. In the browser ActiveCode windows, you get an error message in a box below. When you are executing python programs from the command-line, you also get an error message saying something about what went wrong and what line it occurred on. After the run-time error is encountered, the python interpreter does not try to execute the rest of the code. You have to make some change in your code and rerun the whole program.

With try/except, you tell the python interpreter:

* Try to execute a block of code, the "try" clause.
   * If the whole block of code executes without any run-time errors, just carry on with the rest of the program after the try/except statement.

* If a run-time error does occur during execution of the block of code:
   * skip the rest of that block of code (but don't exit the whole program)
   * execute a block of code in the "except" clause
   * then carry on with the rest of the program after the try/except statement

.. sourcecode:: python

   try:
      <try clause code block>
   except <ErrorType>:
      <exception handler code block>

The syntax is fairly straightforward. The only tricky part is that after the word except, there can optionally be a specification of the kinds of errors that will be handled. The catchall is the class Exception. If you write ``except Exception:`` all runtime errors will be handled. If you specify a more restricted class of errors, only those errors will be handled; any other kind of error will still cause the program to stop running and an error message to be printed.

The code below causes an error of type IndexError, by trying to access the third element of a two-element list.

.. activecode:: exceptions_1
   :nocanvas:

   items = ['a', 'b']
   third = items[2]
   
   
The code below causes an error of type ZeroDivisionError, or less specifically ArithmeticError.

.. activecode:: exceptions_2
   :nocanvas:

   x = 5
   y = x/0

Let's see what happens if we wrap some of this problematic code in a try/except statement. Note that ``this won't print`` doesn't print: when the error is encountered, the rest of the try block is skipped and the exception block is executed. When the except block is done, it continues on with the next line of code that's outdented to the same level as the try: ``continuing`` is printed.

.. activecode:: exceptions_3
   :nocanvas:
   
   try:
       items = ['a', 'b']
       third = items[2]
       print("This won't print")
   except Exception:
       print("got an error")
   
   print("continuing")

 
If we catch only IndexEror, and we actually have a divide by zero error, the program does stop executing.   
   
.. activecode:: exceptions_4
   :nocanvas:
   
   try:
       items = ['a', 'b']
       third = items[2]
       print("This won't print")
   except IndexError:
       print("error 1")
      
   print("continuing")
   
   try:
       x = 5
       y = x/0
       print("This won't print, either")
   except IndexError:
       print("error 2")
       
       
   print("continuing again")
   
   
There's one other useful feature. The exception code can access a variable that contains information about exactly what the error was. Thus, for example, in the except clause you could print out the information that would normally be printed as an error message but continue on with execution of the rest of the program. To do that, you specify a variable name after the exception class that's being handled. The exception clause code can refer to that variable name.

.. activecode:: exceptions_5
   :nocanvas:
   
   try:
       items = ['a', 'b']
       third = items[2]
       print("This won't print")
   except Exception as e:
       print("got an error")
       print(e)
   
   print("continuing")


**Check your understanding**

.. mchoice:: exceptions_mc_1
   :answer_a: syntax
   :answer_b: run-time
   :answer_c: semantic
   :feedback_a: Syntax errors are things like missing colons or strings that are not terminated. Try/except will not help with those. The program still will not run.
   :feedback_b: Run-time errors like index out of bounds can be caught and handled gracefully with try/except.
   :feedback_c: If your program runs to completion but does the wrong thing, try/except won't help you.
   :correct: b
   
   Which type of error can be noticed and handled using try/except?
   
.. mchoice:: exceptions_mc_2
   :answer_a: True
   :answer_b: False
   :feedback_a: If your code is only catching IndexError errors, then the exception will not be handled, and execution will terminate.
   :feedback_b: If your code is only catching IndexError errors, then the exception will not be handled, and execution will terminate.
   :correct: a

   When a run-time exception of type ZeroDivisionError occurs, and you have a statement ``except IndexError``, the program will stop executing completely.

.. mchoice:: exceptions_mc_3
   :answer_a: True
   :answer_b: False
   :feedback_a: The rest of the code after the whole try/except statement will execute, but not the rest of the code in the try block.
   :feedback_b: The rest of the code after the whole try/except statement will execute, but not the rest of the code in the try block.
   :correct: b

   After a run-time exception is handled by an except clause, the rest of the code in the try clause will be executed.


.. mchoice:: exceptions_mc_4
   :answer_a: 0
   :answer_b: 1
   :answer_c: 3
   :answer_d: 4
   :answer_e: 5  
   :feedback_a: Try i = 0; that should print out .3333
   :feedback_b: Keep trying.
   :feedback_c: When i=3, it will no longer be able to pring 1.0/ (3-i), but it will still print one more line in the except clause.
   :feedback_d: It will print the fraction for three values of i, and then one error message.
   :feedback_e: When i=3, it will get a run-time error, and execution stops after that.
   :correct: d
   :practice: T

   How many lines will print out when the following code is executed?
   
   .. sourcecode:: python
   
      try:
          for i in range(5):
              print(1.0 / (3-i))
      except Exception as error_inst:
          print("Got an error", error_inst)

.. activecode:: ee_exceptions_012
   :tags: Exceptions/intro-exceptions.rst
   :practice: T
   :autograde: unittest

   5. Below, we have provided a list of tuples that consist of student names, final exam scores, and whether or not they will pass the class. For some students, the tuple does not have a third element because it is unknown whether or not they will pass. Currently, the for loop does not work. Add a try/except clause so the code runs without an error - if there is no third element in the tuple, no changes should be made to the dictionary.
   ~~~~
   students = [('Timmy', 95, 'Will pass'), ('Martha', 70), ('Betty', 82, 'Will pass'), ('Stewart', 50, 'Will not pass'), ('Ashley', 68), ('Natalie', 99, 'Will pass'), ('Archie', 71), ('Carl', 45, 'Will not pass')]

   passing = {'Will pass': 0, 'Will not pass': 0}
   for tup in students:
       if tup[2] == 'Will pass':
           passing['Will pass'] += 1
       elif tup[2] == 'Will not pass':
           passing['Will not pass'] += 1

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(passing, {'Will pass': 3, 'Will not pass': 2}, "Testing that passing is created correctly.")

   myTests().main()

.. activecode:: ee_exceptions_022
   :tags: Exceptions/intro-exceptions.rst
   :practice: T
   :autograde: unittest

   6. Below, we have provided code that does not run. Add a try/except clause so the code runs without errors. If an element is not able to undergo the addition operation, the string 'Error' should be appended to plus_four. 
   ~~~~
   nums = [5, 9, '4', 3, 2, 1, 6, 5, '7', 4, 3, 2, 6, 7, 8, '0', 3, 4, 0, 6, 5, '3', 5, 6, 7, 8, '3', '1', 5, 6, 7, 9, 3, 2, 5, 6, '9', 2, 3, 4, 5, 1]

   plus_four = []

   for num in nums: 
       plus_four.append(num+4)


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(plus_four, [9, 13, 'Error', 7, 6, 5, 10, 9, 'Error', 8, 7, 6, 10, 11, 12, 'Error', 7, 8, 4, 10, 9, 'Error', 9, 10, 11, 12, 'Error', 'Error', 9, 10, 11, 13, 7, 6, 9, 10, 'Error', 6, 7, 8, 9, 5], "Testing that plus_four is created correctly.")

   myTests().main()