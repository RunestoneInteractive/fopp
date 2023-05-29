..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Checking Other Assumptions
==========================

We can also check other assumptions about the values of variables, in addition to their types. For example, we could check that a list has fewer than 10 items.

.. activecode:: ac19_1b_3

    lst = ['a', 'b', 'c']

    assert len(lst) < 10