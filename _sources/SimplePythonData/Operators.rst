..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: data-3-
   :start: 1

.. _input:

.. index:: input, input dialog
    single: +; addition
    single: - 
    single: *; multiplication of numbers
    single: **
    multiplication
    operators and operands

Operators and Operands
----------------------

You can build complex expressions out of simpler ones using **operators**. Operators are special tokens that represent computations like addition,
multiplication and division. The values the operator works on are called
**operands**.

The following are all legal Python expressions whose meaning is more or less
clear::

    20 + 32
    5 ** 2
    (5 + 9) * (15 - 7)

The tokens ``+``, ``-``, and ``*``, and the use of parentheses for grouping,
mean in Python what they mean in mathematics. The asterisk (``*``) is the
token for multiplication, and ``**`` is the token for exponentiation.
Addition, subtraction, multiplication, and exponentiation all do what you
expect.

Remember that if we want to see the results of the computation, the program needs to specify that with the word ``print``. The first three computations occur, but their results are not printed out.

.. activecode:: ac2_3_1
    :nocanvas:

    20 + 32
    5 ** 2
    (5 + 9) * (15 - 7)
    print(7 + 5)

In Python 3, which we will be using, the division operator ``/`` produces a floating point result (even if the result is an integer; ``4/2`` is ``2.0``). If you want truncated division, which ignores the remainder, you can use the ``//`` operator (for example, ``5//2`` is ``2``).

.. activecode:: ac2_3_2
    :nocanvas:

    print(9 / 5)
    print(5 / 9)
    print(9 // 5)

Pay particular attention to the examples above. Note that ``9//5`` truncates rather than rounding, so it produces the value 1 rather 2.

The truncated division operator, ``//``, also works on floating point numbers. It truncates to the nearest integer, but still produces a floating point result. Thus ``7.0 // 3.0`` is ``2.0``.

.. activecode:: ac2_3_3
   :nocanvas:

   print(7.0 / 3.0)
   print(7.0 // 3.0)

.. index:: modulus
    single: %
    remainder

The **modulus operator**, sometimes also called the **remainder operator** or **integer remainder operator** works on integers (and integer expressions) and yields
the remainder when the first operand is divided by the second. In Python, the
modulus operator is a percent sign (``%``). The syntax is the same as for other
operators.

.. activecode:: ac2_3_4
    :nocanvas:

    print(7 // 3)    # This is the integer division operator
    print(7 % 3)     # This is the remainder or modulus operator

In the above example, 7 divided by 3 is 2 when we use integer division and there is a remainder of 1.

The modulus operator turns out to be surprisingly useful. For example, you can
check whether one number is divisible by another---if ``x % y`` is zero, then
``x`` is divisible by ``y``.
Also, you can extract the right-most digit or digits from a number.  For
example, ``x % 10`` yields the right-most digit of ``x`` (in base 10).
Similarly ``x % 100`` yields the last two digits.


**Check your understanding**

.. mchoice:: question2_3_1
   :answer_a: 4.5
   :answer_b: 5
   :answer_c: 4
   :answer_d: 4.0
   :answer_e: 2
   :correct: a
   :feedback_a: Because the result is not an integer, a floating point answer is produced.
   :feedback_b: Even if // were used, it would still truncate, not round
   :feedback_c: Perhaps you are thinking of the integer division operator, //
   :feedback_d: / performs exact division, without truncation
   :feedback_e: / does division. Perhaps you were thinking of %, which computes the remainder?
   :practice: T

   What value is printed when the following statement executes?

   .. code-block:: python

      print(18 / 4)

.. mchoice:: question2_3_2
   :answer_a: 4.5
   :answer_b: 5
   :answer_c: 4
   :answer_d: 4.0
   :answer_e: 2
   :correct: d
   :feedback_a: - // does truncated division.
   :feedback_b: - Neither / nor // leads to rounding up
   :feedback_c: - Even though it truncates, it produces a floating point result
   :feedback_d: - Yes, even though it truncates, it produces a floating point result because 18.0 is a float
   :feedback_e: - / does division. Perhaps you were thinking of %, which computes the remainder?
   :practice: T

   What value is printed when the following statement executes?

   .. code-block:: python

      print(18.0 // 4)


.. mchoice:: question2_3_3
   :answer_a: 4.25
   :answer_b: 5
   :answer_c: 4
   :answer_d: 2
   :correct: d
   :feedback_a: The % operator returns the remainder after division.
   :feedback_b: The % operator returns the remainder after division.
   :feedback_c: The % operator returns the remainder after division.
   :feedback_d: The % operator returns the remainder after division.
   :practice: T

   What value is printed when the following statement executes?

   .. code-block:: python

      print(18 % 4)
