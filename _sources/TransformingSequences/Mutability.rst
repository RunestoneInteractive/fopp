..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. _mutability:

.. qnum::
   :prefix: seqmut-1-
   :start: 1

.. index:: mutable, immutable
   runtime error; string item assignment
   string; immutable

Mutability
==========

Some Python collection types - strings and lists so far - are able to change and some are not. If
a type is able to change, then it is said to be mutable. If the type is not able to change then it
is said to be immutable. This will be expanded below.

.. youtube:: fnSijYDKz3c
    :divid: mutabilityvid
    :height: 315
    :width: 560
    :align: left


Lists are Mutable
-----------------

Unlike strings, lists are **mutable**. This means we can change an item in a list by accessing
it directly as part of the assignment statement. Using the indexing operator (square brackets) on
the left side of an assignment, we can update one of the list items.

.. activecode:: ac8_1_4

    fruit = ["banana", "apple", "cherry"]
    print(fruit)

    fruit[0] = "pear"
    fruit[-1] = "orange"
    print(fruit)


An assignment to an element of a list is called **item assignment**. Item assignment does not work
for strings. Recall that strings are immutable.

Here is the same example in codelens so that you can step through the statements and see the
changes to the list elements.

.. codelens:: clens8_1_1
    :python: py3

    fruit = ["banana", "apple", "cherry"]

    fruit[0] = "pear"
    fruit[-1] = "orange"

By combining assignment with the slice operator we can update several elements at once.

.. activecode:: ac8_1_5

    alist = ['a', 'b', 'c', 'd', 'e', 'f']
    alist[1:3] = ['x', 'y']
    print(alist)

We can also remove elements from a list by assigning the empty list to them.

.. activecode:: ac8_1_6

    alist = ['a', 'b', 'c', 'd', 'e', 'f']
    alist[1:3] = []
    print(alist)

We can even insert elements into a list by squeezing them into an empty slice at the
desired location.

.. activecode:: ac8_1_7

    alist = ['a', 'd', 'f']
    alist[1:1] = ['b', 'c']
    print(alist)
    alist[4:4] = ['e']
    print(alist)

Strings are Immutable
---------------------

One final thing that makes strings different from some other Python collection types is that
you are not allowed to modify the individual characters in the collection. It is tempting to use
the ``[]`` operator on the left side of an assignment, with the intention of changing a character
in a string. For example, in the following code, we would like to change the first letter of
``greeting``.

.. activecode:: ac8_1_1

    greeting = "Hello, world!"
    greeting[0] = 'J'            # ERROR!
    print(greeting)

Instead of producing the output ``Jello, world!``, this code produces the
runtime error ``TypeError: 'str' object does not support item assignment``.

Strings are **immutable**, which means you cannot change an existing string. The
best you can do is create a new string that is a variation on the original.

.. activecode:: ac8_1_2

    greeting = "Hello, world!"
    newGreeting = 'J' + greeting[1:]
    print(newGreeting)
    print(greeting)          # same as it was

The solution here is to concatenate a new first letter onto a slice of ``greeting``.
This operation has no effect on the original string.

While it's possible to make up new variable names each time we make changes to existing
values, it could become difficult to keep track of them all.

.. activecode:: ac8_1_3

    phrase = "many moons"
    phrase_expanded = phrase + " and many stars"
    phrase_larger = phrase_expanded + " litter"
    phrase_complete = "M" + phrase_larger[1:] + " the night sky."
    excited_phrase_complete = phrase_complete[:-1] + "!"

The more that you change the string, the more difficult it is to come up with a new variable to use. It's perfectly acceptable to re-assign the value to the same variable name in this case.

Tuples are Immutable
--------------------

As with strings, if we try to use item assignment to modify one of the elements of a tuple, we get an error. In fact, that's the key difference between lists and tuples: tuples are like immutable lists. None of the operations on lists that mutate them are available for tuples. Once a tuple is created, it can't be changed.

.. sourcecode:: python

    julia[0] = 'X'  # TypeError: 'tuple' object does not support item assignment




**Check your understanding**

.. mchoice:: question8_1_1
   :answer_a: [4,2,True,8,6,5]
   :answer_b: [4,2,True,6,5]
   :answer_c: Error, it is illegal to assign
   :correct: b
   :feedback_a: Item assignment does not insert the new item into the list.
   :feedback_b: Yes, the value True is placed in the list at index 2. It replaces 8.
   :feedback_c: Item assignment is allowed with lists. Lists are mutable.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

     alist = [4,2,8,6,5]
     alist[2] = True
     print(alist)

.. mchoice:: question8_1_2
   :answer_a: Ball
   :answer_b: Call
   :answer_c: Error
   :correct: c
   :feedback_a: Assignment is not allowed with strings.
   :feedback_b: Assignment is not allowed with strings.
   :feedback_c: Yes, strings are immutable.
   :practice: T

   What is printed by the following statements:

   .. code-block:: python

      s = "Ball"
      s[0] = "C"
      print(s)

