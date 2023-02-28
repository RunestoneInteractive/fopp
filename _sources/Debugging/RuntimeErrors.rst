..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: debug-5
   :start: 1

.. index:: error;runtime, runtime error

Runtime Errors
--------------

The second type of error is a **runtime error**. A program with a runtime error
is one that passed the interpreter's syntax checks, and started to execute.
However, during the execution of one of the statements in the program, an error
occurred that caused the interpreter to stop executing the program and display
an error message. Runtime errors are also called **exceptions** because they usually 
indicate that something exceptional (and bad) has happened.

Here are some examples of common runtime errors you are sure to encounter:

* Misspelled or incorrectly capitalized variable and function names
* Attempts to perform operations (such as math operations) on data of the wrong type (ex.
  attempting to subtract two variables that hold string values)
* Dividing by zero
* Attempts to use a type conversion function such as ``int`` on a value that can't be converted to an int

The following program contains various runtime errors. Can you spot any of them?
After locating the error, run the program to see the error message.

.. activecode:: debug_rterr

    subtotal = input("Enter total before tax:")
    tax = .08 * subTotal
    print("tax on", subtotal, "is:", tax)

Notice the following important differences between syntax errors and runtime errors that can help you as you try to diagnose
and repair the problem:

* If the error message mentions ``SyntaxError``, you know that the problem has to do with syntax: the structure of the code,
  the punctuation, etc.

* If the program runs partway and then crashes, you know the problem is a runtime error. Programs with syntax errors
  don't execute even one line.

Stay tuned for more details on the various types of runtime errors. We have a whole section of this
chapter dedicated to that topic.

**Check your understanding**

.. mchoice:: question4_5_1
   :answer_a: Attempting to divide by 0.
   :answer_b: Forgetting a right-parenthesis ) when invoking a function.
   :answer_c: Forgetting to divide by 100 when printing a percentage amount.
   :correct: a
   :feedback_a: Python cannot reliably tell if you are trying to divide by 0 until it is executing your program (e.g., you might be asking the user for a value and then dividing by that value—you cannot know what value the user will enter before you run the program).
   :feedback_b: This is a problem with the formal structure of the program.  Python knows where colons are required and can detect when one is missing simply by looking at the code without running it.
   :feedback_c: This will produce the wrong answer, but Python will not consider it an error at all.  The programmer is the one who understands that the answer produced is wrong.
   :practice: T

   Which of the following is a run-time error?

.. mchoice:: question4_5_2
   :answer_a: The programmer.
   :answer_b: The interpreter.
   :answer_c: The computer.
   :answer_d: The teacher / instructor.
   :correct: b
   :feedback_a: Programmers rarely find all the runtime errors, there is a computer program that will do it for us.
   :feedback_b: If an instruction is illegal to perform at that point in the execution, the interpreter will stop with a message describing the exception.
   :feedback_c: Well, sort of.  But it is a special thing in the computer that does it.  The stand alone computer without this additional piece can not do it.
   :feedback_d: Your teacher and instructor may be able to find most of your runtime errors, but only because they have experience looking at code and possibly writing code.  With experience runtime errors are easier to find.  But we also have an automated way of finding these types of errors.
   :practice: T

   Who or what typically finds runtime errors?