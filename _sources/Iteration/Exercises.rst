..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: iter-11-
   :start: 1

Exercises
=========

1. (You may work on on this one in class. Feel free to start thinking about it.) In Robert McCloskey's
   book *Make Way for Ducklings*, the names of the ducklings are Jack, Kack, Lack,
   Mack, Nack, Ouack, Pack, and Quack.  This loop tries to output these names in order.

.. sourcecode:: python

   prefixes = "JKLMNOPQ"
   suffix = "ack"

   for p in prefixes:
       print(p + suffix)


Of course, that's not quite right because Ouack and Quack are misspelled.
Can you fix it?

.. actex:: ex6_11_1


2. Get the user to enter some text and print it out in reverse order.

.. actex:: ex6_11_2


3. Get the user to enter some text and print out True if it's a palindrome, False otherwise. (Hint: reuse
some of your code from the last question. The == operator compares two values to see if they are the same)

.. actex:: ex6_11_3
