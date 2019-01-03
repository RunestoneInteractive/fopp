..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-1-
   :start: 1

Introduction to Functions
=========================

.. youtube:: 85WYZKKnaPQ
    :divid: goog_function_intro
    :height: 315
    :width: 560
    :align: left

In Python, a **function** is a chunk of code that performs some operation that is meaningful for a person to think about as a whole unit, for example calculating a student's GPA in a learning system or responding to the jump action in a video game. Once a function has been defined and you are satisfied that it does what it is supposed to do, you will start thinking about it in terms of the larger operation that it performs rather than the specific lines of code that make it work.

This breaking down of a task or problem is crucial to the successful implementation of any program of more than 50 or so lines (and plenty of smaller ones too).  For example, the program that displays the Instagram landing page is made up of functions that:

* display the header bar
* display your friends' posts
* display your friends' stories
* display the ad at the bottom of the screen recommending you use the app

And each of those is made up of functions as well. For example, the function that displays your friends' posts is a for loop that calls a function to:

* display a single post which in turn calls functions to:
* display the photo and name of the person posting the story
* display the photo itself
* display other users' "likes" to the story
* display the comments on the story
* etc.

In this chapter you will learn about named functions, functions that can be referred to by name when you want to execute them.


Topics
------

* functions as a means of abstraction
* local and global scope
* side effects

Learning Objectives
-------------------

At the end of this chapter, you should be able to:

* identify formal parameters and parameter values in a code sample
* predict the return value of a function given sample parameter values
* define functions with appropriate names for formal parameter
* avoid the use of global variables in function definitions by creating formal parameters for all values that are needed
* identify whether a function has any side effects
