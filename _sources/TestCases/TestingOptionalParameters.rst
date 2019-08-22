..  Copyright (C)  Paul Resnick and Lauren Murphy.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Testing Optional Parameters
===========================

If a function takes an optional parameter, one of the edge cases to test for is when no parameter value is supplied
during execution. Below are some tests for the built-in sorted function.

.. activecode:: ac19_2_3


    assert sorted([1, 7, 4]) == [1, 4, 7]
    assert sorted([1, 7, 4], reverse=True) == [7, 4, 1]


