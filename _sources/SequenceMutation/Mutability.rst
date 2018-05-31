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

.. index:: mutable, immutable
   runtime error; string item assignment
   string; immutable

Mutatability
============

Some Python collection types - strings and lists so far - are able to mutate and some are not. If 
a type is able to mutate, then it is said to be mutable. If the type is not able to mutate then it
is said to be immutable. This will be expanded below.

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

The solution here is to concatenate a new first letter onto a slice of
``greeting``. This operation has no effect on the original string.

Lists are Mutable
-----------------

Unlike strings, lists are **mutable**. This means we can change an item in a list by accessing
it directly as part of the assignment statement. Using the indexing operator (square brackets) on 
the left side of an assignment, we can update one of the list items.

.. activecode:: ac8_1_3
    
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

.. activecode:: ac8_1_4
    
    alist = ['a', 'b', 'c', 'd', 'e', 'f']
    alist[1:3] = ['x', 'y']
    print(alist)

We can also remove elements from a list by assigning the empty list to them.

.. activecode:: ac8_1_5
    
    alist = ['a', 'b', 'c', 'd', 'e', 'f']
    alist[1:3] = []
    print(alist)

We can even insert elements into a list by squeezing them into an empty slice at the
desired location.

.. activecode:: ac8_1_6
    
    alist = ['a', 'd', 'f']
    alist[1:1] = ['b', 'c']
    print(alist)
    alist[4:4] = ['e']
    print(alist)

List Assignment
---------------

It is possible to assign a list to the value of an already existing list.

.. activecode:: ac8_1_7

    a = ['wow', 'zoinks']
    b = a
    print(b)

If you step through the above example in code lens, you will see how - instead of two lists 
existing - both ``a`` and ``b`` point to the list ``['wow', 'zoinks']``. This can lead to some 
unexpected behavior which you will learn about later. Try changing b after it's been assigned the 
value of a and see what happens to both lists!

**Check your understanding**

.. mchoice:: question8_1_1
   :answer_a: [4,2,True,8,6,5]
   :answer_b: [4,2,True,6,5]
   :answer_c: Error, it is illegal to assign
   :correct: b
   :feedback_a: Item assignment does not insert the new item into the list.
   :feedback_b: Yes, the value True is placed in the list at index 2.  It replaces 8.
   :feedback_c: Item assignment is allowed with lists.  Lists are mutable.

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

   What is printed by the following statements:
   
   .. code-block:: python

      s = "Ball"
      s[0] = "C"
      print(s)
    
.. mchoice:: question8_1_3
   :answer_a: ['Jamboree', 'get-together', 'party']
   :answer_b: ['celebration']
   :answer_c: ['celebration', 'Jamboree', 'get-together', 'party']
   :answer_d: ['Jamboree', 'get-together', 'party', 'celebration']
   :correct: a
   :feedback_a: Yes, the value of y has been reassigned to the value of w.
   :feedback_b: No, that was the inital value of y, but y has changed.
   :feedback_c: No, when we assign a list to another list it does not concatenate the lists together.
   :feedback_d: No, when we assign a list to another list it does not concatenate the lists together.

   What is the value of y after the following code has been evaluated:
   
   .. code-block:: python

      w = ['Jamboree', 'get-together', 'party']
      y = ['celebration']
      y = w

