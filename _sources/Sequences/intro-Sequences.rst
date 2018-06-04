..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: sequences-1-
   :start: 1

Introduction: Sequences
=======================

So far we have seen built-in types like: ``int``, ``float``, and ``str``. 
``int`` and ``float`` are considered to be simple or primitive or atomic data types because their 
values are not composed of any smaller parts.  They cannot be broken down.

On the other hand, strings and lists are different from the others because they
are made up of smaller pieces.  In the case of strings, they are made up of smaller
strings each containing one **character**.  

Types that are comprised of smaller pieces are called **collection data types**.
Depending on what we are doing, we may want to treat a collection data type as a
single entity (the whole), or we may want to access its parts. This ambiguity is useful.

In this chapter we will examine operations that can be performed on sequences, such as picking 
out individual elements or subsequences (called slices) or computing their length. In addition, we'll
examine some special functions that are defined only for strings, and we'll find out one importance
difference between strings and lists, that lists can be changed (or mutated) while strings are 
immutable.
