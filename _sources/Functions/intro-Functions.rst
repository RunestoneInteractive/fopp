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

.. video:: function_intro
   :controls:
   :thumb: ../_static/function_intro.png

   http://media.interactivepython.org/thinkcsVideos/FunctionsIntro.mov
   http://media.interactivepython.org/thinkcsVideos/FunctionsIntro.webm

In Python, a **function** is a chunk of code that performs some operation that is meaningful for a person to think 
about as a whole unit. Once a function has been defined and you are satisfied that it does what it is supposed to do, 
you will start thinking about it in terms of the larger operation that it performs rather than the specific lines of 
code that make it work. 

In this chapter you will learn about *named* functions, functions that can be referred to by name when you want to execute them. 

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

