..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. _for_by_index:

.. qnum::
   :prefix: moreiter-6-
   :start: 1

Traversal and the ``for`` Loop: By Index
----------------------------------------

It is also possible to iterate through the *indexes* of a string or sequence. The ``for`` loop can then be used to 
iterate over these positions. These positions can be used together with the indexing operator to access the individual
characters in the string. We can use **Enumerate**, a built-in Python function, to make this process easier because it 
allows us to loop through something and have an automatic counter.

.. activecode:: ac14_6_1
 
   for counter, item in enumerate(['apple', 'pear', 'apricot', 'cherry', 'peach']):
       print(counter, item)

By using the enumerate function, we can print out a counter that tells us the position of an item in a list. We could do 
this ourselves, but this saves us from having to do that. The index positions in the list are 0, 1 , 2, 3, and 4. This is 
exactly the same sequence of integers that are stored in ``counter`` each time the loop is iterated. The first time through the for 
loop, ``counter`` will be 0 and "apple" will be printed. Then, ``counter`` will be reassigned to 1 and "pear" will be displayed. This will 
continue until the list has ended, so that the final value for ``counter`` will be 4 and the final value of ``item`` will be "peach". 

Conveniently, we can also use the ``range`` function to automatically generate the indices of the characters. 

.. activecode:: ac14_6_4

   x = range(5)
   print(type(x))
   print(x)

In order to make the iteration more general, we can use the ``len`` function to provide the bound for ``range``. This is 
a very common pattern for traversing any sequence by position. Make sure you understand why the range function behaves 
correctly when using ``len`` of the string as its parameter value.

.. activecode:: ac14_6_5

   fruit = ['apple', 'pear', 'apricot', 'cherry', 'peach']
   for n in range(len(fruit)):
       print(n, fruit[n])

You may also note that iteration by position allows the programmer to control the direction of the traversal by changing 
the sequence of index values.

.. codelens:: clens14_6_2
    :python: py3

    fruit = ['apple', 'pear', 'apricot', 'cherry', 'peach']
    for idx in [0, 2, 4, 3, 1]:
        print(fruit[idx])

**Check your understanding**

.. mchoice:: question14_6_1
   :answer_a: 0
   :answer_b: 1
   :answer_c: 2
   :answer_d: 3
   :answer_e: 6
   :correct: d
   :feedback_a: idx % 2 is 0 whenever idx is even
   :feedback_b: idx % 2 is 0 whenever idx is even
   :feedback_c: idx % 2 is 0 whenever idx is even
   :feedback_d: idx % 2 is 0 whenever idx is even
   :feedback_e: idx % 2 is 0 whenever idx is even
   :practice: T

   How many times is the letter p printed by the following statements?
   
   .. code-block:: python

      s = "python"
      for idx in range(len(s)):
         print(s[idx % 2])
