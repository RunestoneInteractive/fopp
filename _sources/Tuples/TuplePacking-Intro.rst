..  Copyright (C)  Paul Resnick, Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: tuples-2-
   :start: 1

.. _tuple_packing:

Introduction
============

You have previously seen tuples, a sequence type that works just like lists except that they are immutable.

When working with multiple values or multiple variable names, the Python interpreter does some automatic packing and unpacking to and from tuples, which allows some simplifications in the code you write.

Learning Objectives
-------------------

At the end of this chapter, you will be able to:

* Recognize when code is using implicit tuple packing
* Use implicit tuple packing to return multiple values from a function
* Read and write code that unpacks a tuple into multiple variables
* Learn a common pattern that unpacks the results of calling `enumerate` on a sequence