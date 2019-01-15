..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: condition-4-
   :start: 1

The ``in`` and ``not in`` operators
-----------------------------------

The ``in`` operator tests if one string is a substring of another:

.. activecode:: ac4_3_1
    
    print('p' in 'apple')
    print('i' in 'apple')
    print('ap' in 'apple')
    print('pa' in 'apple')

Note that a string is a substring of itself, and the empty string is a 
substring of any other string. (Also note that computer scientists 
like to think about these edge cases quite carefully!) 

.. activecode:: ac4_3_2
    
    print('a' in 'a')
    print('apple' in 'apple')
    print('' in 'a')
    print('' in 'apple')
    
The ``not in`` operator returns the logical opposite result of ``in``.

.. activecode:: ac4_3_3

    print('x' not in 'apple')

We can also use the ``in`` and ``not in`` operators on lists!

.. activecode:: ac4_4_4

   print("a" in ["a", "b", "c", "d"])
   print(9 in [3, 2, 9, 10, 9.0])
   print('wow' not in ['gee wiz', 'gosh golly', 'wow', 'amazing'])

However, remember how you were able to check to see if an "a" was in "apple"? 
Let's try that again to see if there's an "a" somewhere in the following list.

.. activecode:: ac4_4_5

    print("a" in ["apple", "absolutely", "application", "nope"])

Clearly, we can tell that a is in the word apple, and absolutely, and application. For some reason 
though, the Python interpreter returns False. Why is that? When we use the ``in`` and ``not in`` 
operators on lists, Python checks to see if the item on the left side of the expression is equivalent 
to an element in the item on the right side of the expression. In this case, Python is checking 
whether or not an element of the list is the string "a" - nothing more or less than that.
