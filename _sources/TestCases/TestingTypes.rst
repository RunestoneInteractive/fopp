..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Checking Assumptions About Data Types
=====================================

Unlike some other programming languages, the Python interpreter does not enforce restrictions about the data types of objects that can be bound to particular variables. For example, in Java, before assigning a value to a variable, the program would include a declaration of what type of value (integer, float, Boolean, etc.) that the variable is allowed to hold. The variable ``x`` in a Python program can be bound to an integer at one point and to a list at some other point in the program execution.

That flexibility makes it easier to get started with programming in Python. Sometimes, however, type checking could alert us that something has gone wrong in our program execution. If we are assuming at that ``x`` is a list, but it's actually an integer, then at some point later in the program execution, there will probably be an error. We can add ``assert`` statements that will cause an error to be flagged sooner rather than later, which might make it a lot easier to debug.

In the code below, we explicitly state some natural assumptions about how truncated division might work in Python. It turns out that the second asumption is wrong: ``9.0//5`` produces ``2.0``, a floating point value!

.. activecode:: ac19_1b_1

    assert type(9//5) == int
    assert type(9.0//5) == int


In the code below, ``lst`` is bound to a list object. In Python, not all the elements of a list have to be of the same type. We can check that they all have the same type and get an error if they are not. Notice that with ``lst2``, one of the assertions fails.

.. activecode:: ac19_1b_2

    lst = ['a', 'b', 'c']

    first_type = type(lst[0])
    for item in lst:
        assert type(item) == first_type

    lst2 = ['a', 'b', 'c', 17]
    first_type = type(lst2[0])
    for item in lst2:
        assert type(item) == first_type


