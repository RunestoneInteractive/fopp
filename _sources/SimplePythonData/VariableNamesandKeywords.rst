..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: data-8-
   :start: 1

Variable Names and Keywords
---------------------------

**Variable names** can be arbitrarily long. They can contain both letters and
digits, but they have to begin with a letter or an underscore. Although it is
legal to use uppercase letters, by convention we don't. If you do, remember
that case matters. ``Bruce`` and ``bruce`` are different variables.

.. caution::

   Variable names can never contain spaces.

The underscore character ( ``_``) can also appear in a name. It is often used in
names with multiple words, such as ``my_name`` or ``price_of_tea_in_china``.
There are some situations in which names beginning with an underscore have
special meaning, so a safe rule for beginners is to start all names with a
letter.

If you give a variable an illegal name, you get a syntax error.  In the example below, each
of the variable names is illegal.

::

    76trombones = "big parade"
    more$ = 1000000
    class = "Computer Science 101"


``76trombones`` is illegal because it does not begin with a letter.  ``more$``
is illegal because it contains an illegal character, the dollar sign. But
what's wrong with ``class``?

It turns out that ``class`` is one of the Python **keywords**. Keywords define
the language's syntax rules and structure, and they cannot be used as variable
names.
Python has thirty-something keywords (and every now and again improvements to
Python introduce or eliminate one or two):

======== ======== ======== ======== ======== ========
and      as       assert   break    class    continue
def      del      elif     else     except   exec
finally  for      from     global   if       import
in       is       lambda   nonlocal not      or
pass     raise    return   try      while    with
yield    True     False    None
======== ======== ======== ======== ======== ========

You might want to keep this list handy. If the interpreter complains about one
of your variable names and you don't know why, see if it is on this list.

**Check your understanding**

.. mchoice:: question2_8_1
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: -  The + character is not allowed in variable names.
   :feedback_b: -  The + character is not allowed in variable names (everything else in this name is fine).
   :practice: T

   True or False:  the following is a legal variable name in Python:   A_good_grade_is_A+
