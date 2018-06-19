..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: test-5-
   :start: 1

Choosing Good Unit Tests
========================

When we write unit tests, we should consider significantly different valid inputs to the function. 

For example, the input to the ``square`` function could be either a positive or negative value. These two different kinds 
of inputs give us two **equivalence classes** of inputs. We then choose an input from each of these classes. 
**It is important to have at least one test for each equivalence class of inputs.**

Semantic errors are often caused by improperly handling the boundaries between equivalence classes. The boundary for this 
problem is zero. **It is important to have a test at each boundary.**

.. admonition:: Extend the program ...

   Starting on line 9, write two more unit tests (that should pass) so that all input equivalence classes and boundaries are covered.
