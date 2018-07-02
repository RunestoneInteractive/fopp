..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: sequences-2-
   :start: 1

Strings and Lists
=================

Throughout the first chapters of this book we have used strings to represent words or phrases that we
wanted to print out. Our definition was simple: a string is simply some characters inside quotes.  
In this chapter we explore strings in much more detail.

Additionally, we explore lists, which are very much like strings but can hold different types.

Strings
-------

Strings can be defined as sequential collections of characters.  This means that the individual 
characters that make up a string are in a particular order from left to right.

A string that contains no characters, often referred to as the **empty string**, is still considered 
to be a string. It is simply a sequence of zero characters and is represented by '' or "" (two single 
or two double quotes with nothing in between).

Lists
-----

A **list** is a sequential collection of Python data values, where each value is identified by an
index. The values that make up a list are called its **elements**. Lists are similar to strings, which 
are ordered collections of characters, except that the elements of a list can have any type and for 
any one list, the items can be of different types.

There are several ways to create a new list.  The simplest is to enclose the
elements in square brackets ( ``[`` and ``]``).

.. sourcecode:: python
    
    [10, 20, 30, 40]
    ["spam", "bungee", "swallow"]

The first example is a list of four integers. The second is a list of three
strings. As we said above, the elements of a list don't have to be the same type.  The following
list contains a string, a float, an integer, and
another list.

.. sourcecode:: python
    
    ["hello", 2.0, 5, [10, 20]]


.. note:: WP: Don't Mix Types!

    You'll likely see us do this in the textbook to give you odd combinations, but when you create lists you
    should generally not mix types together. A list of just strings or just integers or just floats is generally 
    easier to deal with.

Tuples
------

A **tuple**, like a list, is a sequence of items of any type. The printed representation of a tuple is a comma-separated 
sequence of values, enclosed in parentheses. In other words, the representation is just like lists, except with 
parentheses () instead of square brackets [].

One way to create a tuple is to write an expression, enclosed in parentheses,
that consists of multiple other expressions, separated by commas.

.. sourcecode:: python

    julia = ("Julia", "Roberts", 1967, "Duplicity", 2009, "Actress", "Atlanta, Georgia")

Tuples are useful for representing what other languages often call *records* --- some related information that belongs 
together, like your student record. There is no description of what each of these *fields* means, but we can guess. A 
tuple lets us "chunk" together related information and use it as a single thing.

Tuples support the same sequence operations as strings and lists, which you will learn more about in this chapter. 
For example, the index operator selects an element from a tuple.

.. As with strings, if we try to use item assignment to modify one of the elements of the tuple, we get an error.

.. source code python

..     julia[0] = 'X'  # TypeError: 'tuple' object does not support item assignment

.. Of course, even if we can't modify the elements of a tuple, we can make a variable reference a new tuple holding 
.. different information. To construct the new tuple, it is convenient that we can slice parts of the old tuple and join 
.. up the bits to make the new tuple.  So ``julia`` has a new recent film, and we might want to change her tuple. We can 
.. easily slice off the parts we want and concatenate them with the new tuple.

.. active code ac12_1_1


..     julia = ("Julia", "Roberts", 1967, "Duplicity", 2009, "Actress", "Atlanta, Georgia")
..     print(julia[2])
..     print(julia[2:6])

..     print(len(julia))

..     julia = julia[:3] + ("Eat Pray Love", 2010) + julia[5:]
..     print(julia)


To create a tuple with a single element (but you're probably not likely to do that too often), we have to include the 
final comma, because without the final comma, Python treats the ``(5)`` below as an integer in parentheses:

.. activecode:: ac12_1_2

    t = (5,)
    print(type(t))

    x = (5)
    print(type(x))




**Check your understanding**

.. mchoice:: question5_2_1 
   :answer_a: False
   :answer_b: True
   :correct: a
   :feedback_a: Yes, unlike strings, lists can consist of any type of Python data.
   :feedback_b: Lists are heterogeneous, meaning they can have different types of data.

   A list can contain only integer items.
