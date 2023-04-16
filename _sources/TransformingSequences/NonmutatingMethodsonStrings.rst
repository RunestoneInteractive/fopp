..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-8-
   :start: 1

Non-mutating Methods on Strings
===============================

There are a wide variety of methods for string objects.
Try the following program.

.. activecode:: ac8_8_1

    ss = "Hello, World"
    print(ss.upper())

    tt = ss.lower()
    print(tt)
    print(ss)

In this example, ``upper`` is a method that can be invoked on any string object to create a new string
in which all the characters are in uppercase. ``lower`` works in a similar fashion changing all
characters in the string to lowercase. (The original string ``ss`` remains unchanged.  A new string
``tt`` is created.)

.. _string_methods:

You've already seen a few methods, such as ``count`` and ``index``, that work with strings and are
non-mutating. In addition to those and ``upper`` and ``lower``, the following table provides a summary
of some other useful string methods. There are a few activecode examples that follow so that you can
try them out.


==========  ==============      ==================================================================
Method      Parameters          Description
==========  ==============      ==================================================================
upper       none                Returns a string in all uppercase
lower       none                Returns a string in all lowercase
count       item                Returns the number of occurrences of item
index       item                Returns the leftmost index where the substring item is found and causes 								a runtime error if item is not found
strip       none                Returns a string with the leading and trailing whitespace removed
replace     old, new            Replaces all occurrences of old substring with new
format      substitutions       Involved! See :ref:`Format-Strings`, below
==========  ==============      ==================================================================

You should experiment with these methods so that you understand what they do.  Note once again that the methods that return strings do not change the original. You can also consult the
`Python documentation for strings <http://docs.python.org/3/library/stdtypes.html#string-methods>`_.

.. activecode:: ac8_8_2

    ss = "    Hello, World    "

    els = ss.count("l")
    print(els)

    print("***"+ss.strip()+"***")

    news = ss.replace("o", "***")
    print(news)


.. activecode:: ac8_8_3


    food = "banana bread"
    print(food.upper())


**Check your understanding**

.. mchoice:: question8_8_1
   :answer_a: 0
   :answer_b: 2
   :answer_c: 3
   :correct: c
   :feedback_a: There are definitely o and p characters.
   :feedback_b: There are 2 o characters but what about p?
   :feedback_c: Yes, add the number of o characters and the number of p characters.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(s.count("o") + s.count("p"))

.. mchoice:: question8_8_2
   :answer_a: yyyyy
   :answer_b: 55555
   :answer_c: n
   :answer_d: Error, you cannot combine all those things together.
   :correct: a
   :feedback_a: Yes, s[1] is y and the index of n is 5, so 5 y characters.  It is important to realize that the index method has precedence over the repetition operator.  Repetition is done last.
   :feedback_b: Close.  5 is not repeated, it is the number of times to repeat.
   :feedback_c: This expression uses the index of n
   :feedback_d: This is fine, the repetition operator used the result of indexing and the index method.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(s[1]*s.index("n"))

