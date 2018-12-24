..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-3-
   :start: 1

.. index:: aliases

Objects and References
----------------------

If we execute these assignment statements,

.. sourcecode:: python
    
    a = "banana"
    b = "banana"

we know that ``a`` and ``b`` will refer to a string with the letters
``"banana"``. But we don't know yet whether they point to the *same* string.

There are two possible ways the Python interpreter could arrange its internal states:

.. image:: Figures/refdiag1.png
   :alt: List illustration 

or

.. image:: Figures/refdiag2.png
   :alt: List illustration

In one case, ``a`` and ``b`` refer to two different string objects that have the same
value. In the second case, they refer to the same object. Remember that an object is something a variable can
refer to.

We can test whether two names refer to the same object using the *is*
operator.  The *is* operator will return true if the two references are to the same object.  In other words, the references are the same.  Try our example from above.

.. activecode:: ac8_3_1

    a = "banana"
    b = "banana"

    print(a is b)

The answer is ``True``. This tells us that both ``a`` and ``b`` refer to the same object, and that it is the second 
of the two reference diagrams that describes the relationship. Python assigns every object a unique id and when we 
ask ``a is b`` what python is really doing is checking to see if id(a) == id(b).

.. activecode:: ac8_3_2

    a = "banana"
    b = "banana"

    print(id(a))
    print(id(b))

Since strings are *immutable*, the Python interpreter often optimizes resources by making two names that refer to the same string value
refer to the same object. You shouldn't count on this (that is, use ``==`` to compare strings, not ``is``), but don't be surprised if you find that two variables,each bound to the string "banana", have the same id..

This is not the case with lists, which never share an id just because they have the same contents. Consider the following example. Here, ``a`` and ``b`` refer to two different lists,
each of which happens to have the same element values. They need to have different ids so that mutations of list ``a`` do not affect list ``b``.

.. activecode:: ac8_3_3
    
    a = [81,82,83]
    b = [81,82,83]

    print(a is b)

    print(a == b)

    print(id(a))
    print(id(b))

The reference diagram for this example looks like this:

.. image:: Figures/refdiag3.png
   :alt: Reference diagram for equal different lists 

``a`` and ``b`` have equivalent values but do not refer to the same object. Because their contents are equivalent, `a==b` evaluates to True; because they are not the same object, `a is b` evaluates to False.

