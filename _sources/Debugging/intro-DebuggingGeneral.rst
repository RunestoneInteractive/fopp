..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: debug-1-
   :start: 1

Introduction to Debugging
=========================

.. rst-class:: blockquote

    “The art of debugging is figuring out what you really told your program to do rather than what you thought you told it to do.”  — Andrew Singer


This chapter will spend some time talking about what happens when errors occur as well as how to fix 
the errors that you will inevitably come across.

Before computers became digital, debugging could mean looking for insects impeding the functioning of physical relays as in this somewhat `apocryphal tale <https://www.computerworld.com/article/2515435/app-development/moth-in-the-machine--debugging-the-origins-of--bug-.html>`_ about `Admiral Grace Hopper <https://en.wikipedia.org/wiki/Admiral_Grace_Hopper>`_, a pioneer of computer programming.

Nowadays, debugging doesn't involve bug guts all over your computer but it can still be just as frustrating. To cope with this frustration, this chapter will present some strategies to help you understand why the program you wrote does not behave as intended. 

Learning Goals
--------------

* To understand good programming strategies to avoid errors
* To understand common kinds of exceptions and their likely causes


Objectives
----------

* Given a piece of code identify the Syntax errors based on error messages
* Given a piece of code find the (ValueError, TypeError, SyntaxError, ParseError, NameError)