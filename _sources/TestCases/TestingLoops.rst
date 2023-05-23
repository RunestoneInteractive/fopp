..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Testing Loops
=============

With a for loop, the edge cases might include iterating over an empty list or string, or iterating over a list with different kinds of contents.

For example, suppose we have a code snippet that is supposed to accumulate the sum of all the numbers in a list, ``lst``, whose value was set sometime before this code snippet is run. If you've already learned how to define functions, you can imagine this code snippet inside a function definition.

When ``lst`` is ``[1, 5, 8]``, the value at the end should be 14.

.. activecode:: ac19_1d_1

   nums = [1, 5, 8]

   accum = 0
   for w in nums:
       accum = accum + w
   assert accum == 14

But what about when ``lst`` is an empty list? Maybe we want to assert that the value should be 0, in which case our current accumulation works fine. But suppose we wanted it to be some other value, perhaps the special python value ``None``. By writing an assert statement, we can be alerted that our code doesn't produce the answer we wanted...

.. activecode:: ac19_1d_2

   nums = []

   accum = 0
   for w in nums:
       accum = accum + w
   assert accum == None

...and then we can fix our accumulator code

.. activecode:: ac19_1d_3

   nums = []

   if len(nums) == 0:
       accum = None
   else:
       accum = 0
       for w in nums:
           accum = accum + w
   assert accum == None


