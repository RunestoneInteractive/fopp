..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: intro-7-
   :start: 1

A Typical First Program
-----------------------

Traditionally, the first program written in a new language is called *Hello,
World!* because all it does is display the words, Hello, World!  In Python, the source code
looks like this.

.. sourcecode:: python

    print("Hello, World!")

This is an example of using the **print statement**, which doesn't actually
print anything on paper. It displays a value on the screen. In this case, the result is the phrase:

::

    Hello, World!

Here is the example in activecode. Remember, activecode windows allow you to execute python 
code while inside the textbook. When you click **Run** you will execute whatever code has 
been written in the window. Each time you hit **Run** a new version of the code will be saved 
in that activecode window's history. If you have already run code in the activecode window 
before and would like to revert your code to a prior save, click **Load History** and a bar 
will appear. Your most recent code will be on the right side of the bar, and the first time 
you clicked **Run** will be on the left side. Regardless of whether you've run the window in 
the past though, once you start to execute code the **Load History** button will change to 
the history bar. If you would like to see how python processes your code step-by-step then 
click on **Show CodeLens**. If you have already opened CodeLens and would like to step 
through different code then you'll need to refresh the page. Give it a try!

.. activecode:: ac1_7_1

    print("Hello, World!")

The quotation marks in the program mark the beginning and end of the value.
They don't appear in the result. You'll learn more about why in the next chapter.

Some people judge the quality of a programming language by the simplicity of
the Hello, World! program. By this standard, Python does about as well as
possible.

**Check your understanding**

.. mchoice:: question1_7_1
   :answer_a: sends information to the printer to be printed on paper.
   :answer_b: displays a value on the screen.
   :answer_c: tells the computer to put the information in print, rather than cursive, format.
   :answer_d: tells the computer to speak the information.
   :correct: b
   :feedback_a: Within the Python programming language, the print statement has nothing to do with the printer.
   :feedback_b: Yes, the print statement is used to display the value of the thing being printed.
   :feedback_c: The format of the information is called its font and has nothing to do with the print statement.
   :feedback_d: That would be nice! But no...

   The print statement:


.. index:: debugging, bug

