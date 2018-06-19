..  Copyright (C) Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. _sort_stable:

.. qnum::
   :prefix: sort-5-
   :start: 1

Breaking ties with stable sorting
---------------------------------

What happens when two items are "tied" in the sort order? For example, suppose we sort a list of words by their lengths. 
Which five letter word will appear first?

The answer is that the python interpreter will sort the tied items in the same order they were in before the sorting. 
This is called "stable" sorting. Not all sorting algorithms have this stability property, but python's interpreter is 
required to use a stable sorting algorithm.

Stable sorting can be useful. For example, suppose that we want to sort a list of tuples based on the first element of 
the tuple, in ascending order. For a pair of tuples where the first items are equal, we'd like to sort them based on 
their second items, in descending order. How can we do that? Perhaps it's a little counter-intuitive, but we first sort 
based on the secondary (tie-breaking) element, and then sort based on the primary element. The last sort is what matters, 
but when there's a tie during the last sort, we get the order defined previously.

.. activecode:: sort_ac16_5_1

    L = [(3, 4), (5, 6), (3, 7)]
    sort1 = sorted(L, key = lambda x: x[1], reverse = True)
    print(sort1)
    sort2 = sorted(sort1, key = lambda x: x[0])
    print(sort2)
