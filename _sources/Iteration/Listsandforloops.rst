..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: iter-5-
   :start: 1

Lists and ``for`` loops
-----------------------

It is also possible to perform **list traversal** using iteration by item. A list is a sequence of items, so the ``for`` loop iterates over each item in the list automatically. 

.. activecode:: ac6_5_1

    fruits = ["apple","orange","banana","cherry"]

    for afruit in fruits:     # by item
        print(afruit)

It almost reads like natural language: For (every) fruit in (the list of) fruits,
print (the name of the) fruit.

**Check your Understanding**

.. mchoice:: question6_5_1
   :answer_a: 8
   :answer_b: 9
   :answer_c: 15
   :answer_d: Error, the for statement needs to use the range function.
   :correct: b
   :feedback_a: Iteration by item will process once for each item in the sequence, even the empty list.
   :feedback_b: Yes, there are nine elements in the list so the for loop will iterate nine times.
   :feedback_c: Iteration by item will process once for each item in the sequence. Each string is viewed as a single item, even if you are able to iterate over a string itself.
   :feedback_d: The for statement can iterate over a sequence item by item.

   How many times will the for loop iterate in the following statements?
   
   .. code-block:: python

      p = [3, 4, "Me", 3, [], "Why", 0, "Tell", 9.3]
      for ch in p:
         print(ch)
