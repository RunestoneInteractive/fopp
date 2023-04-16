..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-1-
   :start: 1

Introduction: Transforming Sequences
====================================

The sequences that we have used so far have been static: a list of colors that doesn't change or the characters in a string that stays the same.
The real world is more complicated than that. A list of users for your social network may need to grow to accommodate new users (or shrink when users leave your service). The letters in a string may need to be modified to personalize a message ("Welcome to Wonderland, <your name>"), or to encode a secret message. 

The following chapter will detail more of the methods that can be used to transform lists and strings. Generally, the two methods that can be used are changing the list object, in place, by mutating it; or by constructing a new string object using a copy-with-change operation.


Learning Goals
--------------

* To understand the concepts of mutable and immutable data types
* To understand that methods on strings leave the original string alone but return a new string
* To understand that lists are mutable data types and that mutating methods on lists return None

Objectives
----------

Demonstrate the correct use of:

* concatenate
* index operator
* substring (slice)
* search - contains in / not in and index
* find method
* append
* join
* split
* string format method