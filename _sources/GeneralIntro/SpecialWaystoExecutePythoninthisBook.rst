..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: intro-4-
   :start: 1

Special Ways to Execute Python in this Book
-------------------------------------------

This book provides two additional ways to execute Python programs.  Both techniques are designed to assist you as you
learn the Python programming language.  They will help you increase your understanding of how Python programs work.


First, you can write, modify, and execute programs using a unique **activecode** interpreter that allows you to execute Python code right
in the text itself (right from the web browser).  Although this is certainly not the way real programs are written, it provides an excellent
environment for learning a programming language like Python since you can experiment with the language as you are reading.

Take a look at the activecode interpreter in action. Try pressing the *Save & Run* button below. (If you are not logged
in, it will just say *Run*.)

.. activecode:: ac1_4_1

   print("My first program adds two numbers, 2 and 3:")
   print(2 + 3)

Now try modifying the program shown above.  First, modify the string in the
first print statement by changing the word *adds* to the word *multiplies*.  Now press 
*Save & Run* again.  You can see that the result of the program has changed.  However, it still prints
"5" as the answer.  Modify the second print statement by changing the addition symbol, the 
``+``, to the multiplication symbol, ``*``.  Press *Save & Run* again to see the new results.

As the name suggests, *Save & Run* also *saves* your latest version of the code,
and you can recover it even in later sessions when *logged in*. If *not* logged in,
*Run* saves versions *only until your browser leaves the current web page*,
and then you lose all modifications.

If you are logged in, when a page first loads, each activecode window will have a *Load History* button, to the
right of the *Save & Run* button.
If you click on it, or if you run any code, that button turns into a slider.
If you click on the slider location box, you can use your left and right arrow 
buttons to switch to other versions you ran. 
Alternately you can drag the box on the slider. 
Now move the slider to see a previously saved version of your code. You can edit or run any version.

In addition to activecode, you can also execute Python code with the assistance of a unique 
visualization tool. This tool, known as **codelens**, allows you to control the step by 
step execution of a program. It also lets you see the values of all variables as they are 
created and modified. In activecode, the source code executes from beginning to end and you 
can see the final result. In codelens you can see and control the step by step progress. 
Note that the red arrow always points to the next line of code that is going to be executed. 
The light green arrow points to the line that was just executed. Click on the "Show in 
Codelens" button to make the codelens window show up, and then click on the Forward button 
a few times to step through the execution.  

Sometimes, we will present code examples explicitly in a codelens window in the textbook, as below.
When we do, think of it as an encouragement to use the codelens features to step through the 
execution of the program.

.. codelens:: clens1_4_1
    :python: py3
    :showoutput:

    print("My first program adds two numbers, 2 and 3:")
    print(2 + 3)


**Check your understanding**

.. mchoice:: question1_4_1
   :multiple_answers:
   :answer_a: save programs and reload saved programs.
   :answer_b: type in Python source code.
   :answer_c: execute Python code right in the text itself within the web browser.
   :answer_d: receive a yes/no answer about whether your code is correct or not.
   :correct: a,b,c
   :feedback_a: You can (and should) save the contents of the activecode window.
   :feedback_b: You are not limited to running the examples that are already there.  Try adding to them and creating your own.
   :feedback_c: The activecode interpreter will allow you type Python code into the textbox and then you can see it execute as the interpreter interprets and executes the source code.
   :feedback_d: Although you can (and should) verify that your code is correct by examining its output, activecode will not directly tell you whether you have correctly implemented your program.

   The activecode interpreter allows you to (select all that apply):

.. mchoice:: question1_4_2
   :multiple_answers:
   :answer_a: measure the speed of a program’s execution.
   :answer_b: control the step by step execution of a program.
   :answer_c: write and execute your own Python code.
   :answer_d: execute the Python code that is in codelens.
   :correct: b,d
   :feedback_a: In fact, codelens steps through each line one by one as you click, which is MUCH slower than the Python interpreter.
   :feedback_b: By using codelens, you can control the execution of a program step by step. You can even go backwards!
   :feedback_c: Codelens works only for the pre-programmed examples.
   :feedback_d: By stepping forward through the Python code in codelens, you are executing the Python program.

   Codelens allows you to (select all that apply):

.. index:: program, algorithm

