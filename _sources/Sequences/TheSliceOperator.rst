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
   single: [ : ]; string slice
   slice; string

The Slice Operator
------------------

A substring of a string is called a **slice**. Selecting a slice is similar to
selecting a character:

.. activecode:: ac5_5_1
    
    singers = "Peter, Paul, and Mary"
    print(singers[0:5])
    print(singers[7:11])
    print(singers[17:21])
    

The ``slice`` operator ``[n:m]`` returns the part of the string from the n'th character
to the m'th character, *including the first* but *excluding the last*. 
In other words, start with the character at index n and
go up to but *do not include* the character at index m.

If you omit the first index (before the colon), the slice starts at the
beginning of the string. If you omit the second index, the slice goes to the
end of the string.

.. activecode:: ac5_5_2
    
    fruit = "banana"
    print(fruit[:3])
    print(fruit[3:])

What do you think ``fruit[:]`` means?

List Slices
===========

The slice operation we saw with strings also work on lists.  Remember that the first index is the starting point for the slice and the second number is one index past the end of the slice (up to but not including that element).  Recall also
that if you omit the first index (before the colon), the slice starts at the
beginning of the sequence. If you omit the second index, the slice goes to the
end of the sequence.

.. activecode:: ac5_5_3
    
    a_list = ['a', 'b', 'c', 'd', 'e', 'f']
    print(a_list[1:3])
    print(a_list[:4])
    print(a_list[3:])
    print(a_list[:])

**Check your understanding**

.. mchoice:: question5_5_1
   :answer_a: python
   :answer_b: rocks
   :answer_c: hon r
   :answer_d: Error, you cannot have two numbers inside the [ ].
   :correct: c
   :feedback_a: That would be s[0:6].
   :feedback_b: That would be s[7:].
   :feedback_c: Yes, start with the character at index 3 and go up to but not include the character at index 8.
   :feedback_d: This is called slicing, not indexing. It requires a start and an end.

   What is printed by the following statements?
   
   .. code-block:: python

      s = "python rocks"
      print(s[3:8])

.. mchoice:: question5_5_2
   :answer_a: [ [ ], 3.14, False]
   :answer_b: [ [ ], 3.14]
   :answer_c: [ [56, 57, "dog"], [ ], 3.14, False]
   :correct: a
   :feedback_a: Yes, the slice starts at index 4 and goes up to and including the last item.
   :feedback_b: By leaving out the upper bound on the slice, we go up to and including the last item.
   :feedback_c: Index values start at 0.

   What is printed by the following statements?
   
   .. code-block:: python
   
     alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(alist[4:])

.. note::

    This workspace is provided for your convenience. You can use this activecode window to try out anything you like.

    .. activecode:: ac5_5_4
