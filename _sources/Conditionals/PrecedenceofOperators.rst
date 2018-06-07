..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: condition-5-
   :start: 1

.. index:: conditional branching, conditional execution, if, elif, else,
           if statement, compound statement, statement block, block, body,
           pass statement

Precedence of Operators
-----------------------

Arithmetic operators take precedence over logical operators. Python will always evaluate the arithmetic operators first (** is highest, then multiplication/division, then addition/subtraction).  Next comes the relational operators.  Finally, the logical operators are done last.  This means that the expression ``x*5 >= 10 and y-6 <= 20`` will be evaluated so as to first perform the arithmetic and then check the relationships.  The ``and`` will be done last.  Many programmers might place parentheses around the two relational expressions, ``(x*5 >= 10) and (y-6 <= 20)``. It is not necessary to do so, but causes no harm and may make it easier for people to read and understand the code.

The following table summarizes the operator precedence from highest to lowest.  A complete table for the entire language can be found in the `Python Documentation <http://docs.python.org/py3k/reference/expressions.html#expression-lists>`_.

=======   ==============  ===============
Level     Category        Operators
=======   ==============  ===============
7(high)   exponent        \**
6         multiplication  \*,/,//,%
5         addition        +,-
4         relational      ==,!=,<=,>=,>,<
3         logical         not
2         logical         and
1(low)    logical         or
=======   ==============  ===============

.. note::

  This workspace is provided for your convenience.  You can use this activecode window to try out anything you like.

  .. activecode:: ac7_5_1

.. admonition:: Common Mistake!

   Students often incorrectly combine the in and or operators. For example, if they want to check
   that the letter x is inside of either of two variables then they tend to write it the following 
   way: ``'x' in y or z``

   Written this way, the code would not always do what the programmer intended. This is because the 
   ``in`` operator is only on the left side of the or statement. It doesn't get implemented on both 
   sides of the or statement. In order to properly check that x is inside of either variable, the in 
   operator must be used on both sides which looks like this:

   .. sourcecode:: python

       'x' in y or 'x' in z

**Check your understanding**

.. mchoice:: question7_5_1
   :answer_a: ((5*3) &gt; 10) and ((4+6) == 11)
   :answer_b: (5*(3 &gt; 10)) and (4 + (6 == 11))
   :answer_c: ((((5*3) &gt; 10) and 4)+6) == 11
   :answer_d: ((5*3) &gt; (10 and (4+6))) == 11
   :correct: a
   :feedback_a: Yes, * and + have higher precedence, followed by &gt; and ==, and then the keyword &quot;and&quot;
   :feedback_b: Arithmetic operators (*, +) have higher precedence than comparison operators (&gt;, ==)
   :feedback_c: This grouping assumes Python simply evaluates from left to right, which is incorrect.  It follows the precedence listed in the table in this section.
   :feedback_d: This grouping assumes that &quot;and&quot; has a higher precedence than ==, which is not true.
   :practice: T

   Which of the following properly expresses the  precedence of operators (using parentheses) in the following expression: 5*3 > 10 and 4+6==11

Here is an animation for the above expression:

.. showeval:: se_ac7_5_1
   :trace_mode: true

   5 * 3 > 10 and 4 + 6 == 11
   ~~~~
   {{5 * 3}}{{15}} > 10 and 4 + 6 == 11
   {{15 > 10}}{{True}} and 4 + 6 == 11
   True and {{4 + 6}}{{10}} == 11
   True and {{10 == 11}}{{False}}
   {{True and False}}{{False}}
