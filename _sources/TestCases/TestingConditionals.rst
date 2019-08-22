..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Testing Conditionals
====================

Ideally, you want tests that will cover both the typical execution of your program and tests for unusual things that might happen, which are called **edge cases**.

If the code has conditional blocks (``if..elif..else``) then you'll want to have tests that check that the right block executes when you expect it to. For example, in the code below, z is set to the smaller of x and y, but if they are equal then we set z to 0. Our code even includes a comment to help us keep track of when we think the final code block should execute.

.. code-block:: python

    if x < y:
        z = x
    else:
        if x > y:
            z = y
        else:
            ## x must be equal to y
            z = 0

When you start to have complex conditionals, it's helpful to add comments like that, and once you do you might as well add an assert statement. If the assert ever causes an error, you'll be grateful to know right away that something has gone wrong and you'll have a good start on where to look for debugging. In this case, you'll never get an error, no matter the values of x and y.

.. activecode:: ac19_1c_1

    x = 3
    y = 4
    if x < y:
        z = x
    else:
        if x > y:
            z = y
        else:
            ## x must be equal to y
            assert x==y
            z = 0



