..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: tuples-4-
   :start: 1


Unpacking Tuples as Arguments to Function Calls
-----------------------------------------------

Python even provides a way to pass a single tuple to a function and have it be unpacked for assignment to the named
parameters.

.. activecode:: ac12_4_6

    def add(x, y):
        return x + y

    print(add(3, 4))
    z = (5, 4)
    print(add(z)) # this line causes an error

This won't quite work. It will cause an error, because the function add is expecting two parameters, but you're only passing one parameter (a tuple).
If only there was a way to tell python to unpack that tuple and use the first element to assign to x and the second to y.

Actually, there is a way.

.. activecode:: ac12_4_6b

    def add(x, y):
        return x + y

    print(add(3, 4))
    z = (5, 4)
    print(add(*z)) # this line will cause the values to be unpacked

Don't worry about mastering this idea yet. But later in the course, if you come across some code that someone else has
written that uses the * notation inside a parameter list, come back and look at this again.