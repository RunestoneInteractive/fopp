..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: sequences-4-
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

.. activecode:: ac5_4_1
    
    fruit = "Banana"
    print(len(fruit))
    

To get the last letter of a string, you might be tempted to try something like
this:

.. activecode:: ac5_4_2
    
    fruit = "Banana"
    sz = len(fruit)
    last = fruit[sz]       # ERROR!
    print(last)

That won't work. It causes the runtime error ``IndexError: string index out of range``. The reason is 
that there is no letter at index position 6 in ``"Banana"``. Since we started counting at zero, the 
six indexes are numbered 0 to 5. To get the last character, we have to subtract 1 from the length. 
Give it a try in the example above.

.. activecode:: ac5_4_3
    
    fruit = "Banana"
    sz = len(fruit)
    lastch = fruit[sz-1]
    print(lastch)

.. Alternatively, in Python we can use **negative indices**, which count backward from the
.. end of the string. The expression ``fruit[-1]`` yields the last letter,
.. ``fruit[-2]`` yields the second to last, and so on.  Try it!

Typically, a Python programmer will access the last character by combining the
two lines of code from above.

.. sourcecode:: python
    
    lastch = fruit[len(fruit)-1]

**Check your understanding**

.. mchoice:: question5_4_1
   :answer_a: 11
   :answer_b: 12
   :correct: b
   :feedback_a: The blank space counts as a character.
   :feedback_b: Yes, there are 12 characters in the string.

   What is printed by the following statements?
   
   .. code-block:: python
   
      s = "python rocks"
      print(len(s))

