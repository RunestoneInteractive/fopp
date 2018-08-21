..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: iter-1-
   :start: 1

Introduction: Iteration
=======================

A basic building block of all programs is to be able to repeat some code
over and over again.  Whether it is updating the bank balances of millions of customers each night, or sending email messages to thousands of people programming involves instructing the computer to do many repetitive actions. In computing, we refer to this repetitive execution as **iteration**.  In this section, we will explore some mechanisms for basic iteration.

With collections (lists and strings), a lot of computations involve processing one item at a time. For strings, this means that we would like to process one character at a time. Often we start at the beginning, select each character in turn, do something to it, and continue until the end. For example, we could take each character and substitute for the character 13 characters away in the alphabet to create a coded message. 

This pattern of processing is called a traversal, or iteration over the characters. Similarly, we can process each of the items in a list, one at a time, iterating over the items in the list. This has applications in every piece of software you can imagine:

* Displaying a list of friends on SnapChat
* Updating the position of every character on the screen of a video game
* Displaying the locations that Doctors Without Borders operates in 


.. Iteration Simplifies our Turtle Program
.. Add “here’s what we can do with turtle now, if we use iteration”; borrow from thinkcspy


.. To draw a square we’d like to do the same thing four times — move the turtle forward some distance and turn 90 degrees. We previously used 8 lines of Python code to have alex draw the four sides of a square. This next program does exactly the same thing but, with the help of the for statement, uses just three lines (not including the setup code). Remember that the for statement will repeat the forward and left four times, one time for each value in the list.

