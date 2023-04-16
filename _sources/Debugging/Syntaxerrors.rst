..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: debug-4-
   :start: 1

.. index:: syntax error, error; syntax; runtime error, exception, safe language

Syntax errors
-------------

Python can only execute a program if the program is syntactically correct;
otherwise, the process fails and returns an error message.  **Syntax** refers
to the structure of a program and the rules about that structure. For example,
in English, a sentence must begin with a capital letter and end with a period.
this sentence contains a **syntax error**. So does this one

In Python, rules of syntax include requirements like these: strings must be enclosed in quotes; statements must
generally be written one per line; the print statement must enclose the value to be displayed in parenthesis;
expressions must be correctly formed. The following lines contain syntax errors::

   print(Hello, world!)
   print "Hello, world!"
   print(5 + )

For most readers of English, a few syntax errors are not a significant problem, which is why we can read the poetry of
e. e. cummings without problems. Python is not so forgiving. When you run a Python program, the interpreter checks it
for syntax errors before beginning to execute the first statement. If there is a single syntax error anywhere in your
program, Python will display an error message and quit without executing *any* of the program. 

To see a syntax error in action, look at the following program. Can you spot the error?
After locating the error, run the program to see the error message.

.. activecode:: debug_syntaxerr

    print("Hello, World!")
    print(5 + )
    print("All finished!")

Notice the following:

1. The error message clearly indicates that the problem is a ``SyntaxError``. This lets you know the problem
   is not one of the other two types of errors we'll discuss shortly.

2. The error is on line 2 of the program. However, even though there is nothing
   wrong with line 1, the print statement does not execute --- **none** of the program successfully executes
   because of the presence of just one syntax error.

3. The error gives the line number where Python believes the error exists. In this case, the error message pinpoints the
   location correctly. But in other cases, the line number can be inaccurate or entirely missing. 
   
   To see an example of the latter, try removing just the **right** parenthesis ``)`` from line 2 and
   running the program again. Notice how the error message gives no line number at all. With syntax errors, you need to be
   prepared to hunt around a bit in order to locate the trouble.

One aspect of syntax you have to watch out for in Python involves indentation. Python requires you to begin all
statements at the beginning of the line, unless you are using a flow control statement like a ``for`` or an ``if`` statement
(we'll discuss these soon... stay tuned!). To see an example of this kind of problem, modify the program above by inserting a
couple of spaces at the beginning of one of the lines.



**Check your understanding**

.. mchoice:: question4_4_1
   :answer_a: Attempting to divide by 0.
   :answer_b: Forgetting a right-parenthesis ) when invoking a function.
   :answer_c: Forgetting to divide by 100 when printing a percentage amount.
   :correct: b
   :feedback_a: A syntax error is an error in the structure of the python code that can be detected before the program is executed. Python cannot usually tell if you are trying to divide by 0 until it is executing your program (e.g., you might be asking the user for a value and then dividing by that value—you cannot know what value the user will enter before you run the program).
   :feedback_b: This is a problem with the formal structure of the program.  Python knows where parentheses are required and can detect when one is missing simply by analyzing the code without running it.
   :feedback_c: This will produce the wrong answer, but Python will not consider it an error at all.  The programmer is the one who understands that the answer produced is wrong.
   :practice: T

   Which of the following is a syntax error?

.. mchoice:: question4_4_2
   :answer_a: The programmer.
   :answer_b: The compiler / interpreter.
   :answer_c: The computer.
   :answer_d: The teacher / instructor.
   :correct: b
   :feedback_a: Programmers rarely find all the syntax errors, there is a computer program that will do it for us.
   :feedback_b: The compiler and / or interpreter is a computer program that determines if your program is written in a way that can be translated into machine language for execution.
   :feedback_c: Well, sort of.  But it is a special thing in the computer that does it.  The stand alone computer without this additional piece can not do it.
   :feedback_d: Your teacher and instructor may be able to find most of your syntax errors, but only because they have experience looking at code and possibly writing code.  With experience syntax errors are easier to find.  But we also have an automated way of finding these types of errors.
   :practice: T

   Who or what typically finds syntax errors?

