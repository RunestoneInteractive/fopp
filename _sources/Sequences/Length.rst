..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: sequences-5-
   :start: 1

.. index::
    single: len function
    single: function; len
    single: runtime error
    single: negative index
    single: index; negative

Length
======

The ``len`` function, when applied to a string, returns the number of characters in a string.

.. activecode:: ac5_5_1

    fruit = "Banana"
    print(len(fruit))


To get the last letter of a string, you might be tempted to try something like
this:

.. activecode:: ac5_5_2

    fruit = "Banana"
    sz = len(fruit)
    last = fruit[sz]       # ERROR!
    print(last)

That won't work. It causes the runtime error ``IndexError: string index out of range``. The reason is
that there is no letter at index position 6 in ``"Banana"``. Since we started counting at zero, the
six indexes are numbered 0 to 5. To get the last character, we have to subtract 1 from the length.
Give it a try in the example above.

.. activecode:: ac5_5_3

    fruit = "Banana"
    sz = len(fruit)
    lastch = fruit[sz-1]
    print(lastch)

.. Alternatively, in Python we can use **negative indices**, which count backward from the
.. end of the string. The expression ``fruit[-1]`` yields the last letter,
.. ``fruit[-2]`` yields the second to last, and so on.  Try it!

Typically, a Python programmer would combine lines 2 and 3 from the above example into a single line:

.. sourcecode:: python

    lastch = fruit[len(fruit)-1]


Though, from what you just learned about using negative indices, using ``fruit[-1]`` would be 
a more appropriate way to access the last index in a list. 

You can still use the ``len`` function to access other predictable indices, like the middle character of a string.

.. sourcecode:: python

    fruit = "grape"
    midchar = fruit[len(fruit)//2]
    # the value of midchar is "a"

As with strings, the function ``len`` returns the length of a list (the number of items in the list).  
However, since lists can have items which are themselves sequences (e.g., strings), 
it important to note that ``len`` only returns the top-most length.

.. activecode:: ac5_5_4

    alist =  ["hello", 2.0, 5]
    print(len(alist))
    print(len(alist[0]))

Note that ``alist[0]`` is the string ``"hello"``, which has length 5.

**Check your understanding**

.. mchoice:: question5_5_1
   :answer_a: 11
   :answer_b: 12
   :correct: b
   :feedback_a: The blank space counts as a character.
   :feedback_b: Yes, there are 12 characters in the string.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(len(s))

.. mchoice:: question5_5_2
   :answer_a: 4
   :answer_b: 5
   :correct: b
   :feedback_a: len returns the actual number of items in the list, not the maximum index value.
   :feedback_b: Yes, there are 5 items in this list.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

     alist = [3, 67, "cat", 3.14, False]
     print(len(alist))


.. activecode:: ac5_5_5
   :language: python
   :autograde: unittest
   :practice: T

   Assign the number of elements in ``lst`` to the variable ``output``.
   ~~~~
   lst = ["hi", "morning", "dog", "506", "caterpillar", "balloons", 106, "yo-yo", "python", "moon", "water", "sleepy", "daffy", 45, "donald", "whiteboard", "glasses", "markers", "couches", "butterfly", "100", "magazine", "door", "picture", "window", ["Olympics", "handle"], "chair", "pages", "readings", "burger", "juggle", "craft", ["store", "poster", "board"], "laptop", "computer", "plates", "hotdog", "salad", "backpack", "zipper", "ring", "watch", "finger", "bags", "boxes", "pods", "peas", "apples", "horse", "guinea pig", "bowl", "EECS"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(output, 52, "Testing that output value is assigned to correct value.")

   myTests().main()
