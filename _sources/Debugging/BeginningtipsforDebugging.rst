..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: debug-2-
   :start: 1

👩‍💻 Beginning tips for Debugging
----------------------------------

Debugging a program is a different way of thinking than writing a program.  The process of debugging is much more like being a detective.  Here are a few rules to get you thinking about debugging.

#. Everyone is a suspect (Except Python)!  It's common for beginner programmers to blame Python, but that should be your last resort.  Remember that Python has been used to solve CS1 level problems millions of times by millions of other programmers.  So, Python is probably not the problem.

#. Check your assumptions.  At this point in your career you are still developing your mental model of how Python does its work.  Its natural to think that your code is correct, but with debugging you need to make your code the primary suspect.  Even if you think it is right, you should verify that it really is by liberally using print statements to verify that the values of variables really are what you think they should be.  You'll be surprised how often they are not.

#. Find clues.  This is the biggest job of the detective and right now there are two important kinds of clues for you to understand.

   * Error Messages

   * Print Statements

Three kinds of errors can occur in a program: `syntax errors
<http://en.wikipedia.org/wiki/Syntax_error>`__, `runtime errors
<http://en.wikipedia.org/wiki/Runtime_error>`__, and `semantic errors
<http://en.wikipedia.org/wiki/Logic_error>`__.  It is useful to distinguish
between them in order to track them down more quickly.
