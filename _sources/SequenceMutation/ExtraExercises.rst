..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-12
   :start: 1

Extra Exercises
===============


.. actex:: ex8_12_1

    1. In Robert McCloskey's book *Make Way for Ducklings*, the names of the ducklings are Jack, Kack, Lack,
    Mack, Nack, Ouack, Pack, and Quack. This loop tries to output these names in order.

    .. sourcecode:: python

        prefixes = "JKLMNOPQ"
        suffix = "ack"

        for p in prefixes:
            print(p + suffix)


    Of course, that's not quite right because Ouack and Quack are misspelled.
    Can you fix it?

    ~~~~


.. actex:: ex8_12_2

    2. Get the user to enter some text and print it out in reverse order.

    ~~~~

.. actex:: ex8_12_3

    3. Get the user to enter some text and print out True if it's a palindrome, False otherwise. (Hint: reuse
    some of your code from the last question. The == operator compares two values to see if they are the same)

    ~~~~
