..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-10-
   :start: 1

The Accumulator Pattern with Strings
------------------------------------

We can also accumulate strings rather than accumulating numbers. The following program isn't 
particularly useful for data processing, but we will see more useful things later that accumulate strings.

.. activecode:: ac8_10_1
    
   s = input("Enter some text")
   ac = ""
   for c in s:
       ac = ac + c + "-" + c + "-"
       
   print(ac)
 
Look carefully at line 4 in the above program (``ac = ac + c + "-" + c + "-"``). In words, it says that the 
new value of ``ac`` will be the old value of ``ac`` concatenated with the current character, a dash, then the 
current character and a dash again. We are building the result string character by character. 

Take a close look also at the initialization of ``ac``.  We start with an empty string and then begin adding
new characters to the end. Also note that I have given it a different name this time, ``ac`` instead of 
``accum``. There's nothing magical about these names. You could use any valid variable and it would work the 
same (try substituting x for ac everywhere in the above code).

**Check your understanding**

.. mchoice:: question8_10_1
   :answer_a: Ball
   :answer_b: BALL
   :answer_c: LLAB
   :correct: c
   :feedback_a: Each item is converted to upper case before concatenation.
   :feedback_b: Each character is converted to upper case but the order is wrong.
   :feedback_c: Yes, the order is reversed due to the order of the concatenation.

   What is printed by the following statements:
   
   .. code-block:: python

      s = "ball"
      r = ""
      for item in s:
         r = item.upper() + r
      print(r)
