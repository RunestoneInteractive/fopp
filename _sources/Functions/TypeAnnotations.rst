..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-annotate
   :start: 1

.. index:: 
   type annotation
   
Type Annotations
----------------

In the previous section, we discussed the decoding work that is required when you look at a function and 
are trying to determine the types of its parameters. In this section, we'll introduce a feature that can help
reduce the amount of sleuthing that is needed.

Consider the following function definition:

.. sourcecode:: python

    def duplicate(msg):
        """Returns a string containing two copies of `msg`"""

        return msg + msg

This function is intended to duplicate a message; if called with the value 'Hello', it returns the value
'HelloHello'. If called with other types of data, however, it will not work properly. (What will the
function do if given an ``int`` or a ``float`` value?)

Python allows you to indicate the intended type of the function parameters and the type of the function return value
in a function definition using a special notation demonstrated in this example:

.. activecode:: ac_annotate1

    def duplicate(msg: str) -> str:
        """Returns a string containing two copies of `msg`"""

        return msg + msg

    result = duplicate('Hello')
    print(result)

This definition of ``duplicate`` makes use of type annotations that indicate the function's parameter type and return
type. A **type annotation**, sometimes called a type hint, is an optional notation that specifies the type of a parameter or function result. It
tells the programmer using the function what kind of data to pass to the function, and what kind of data to expect when
the function returns a value.

In the definition above, the annotation ``: str`` in ``msg: str`` indicates that the caller should pass a ``str`` value as an argument.
The annotation  ``-> str`` indicates that the function will produce a ``str`` result. 

Here are some more examples of functions with type annotations:

.. activecode:: ac_annotate2

    def add(x: int, y: int) -> int:
        """Returns the sum of `x` and `y`"""

        return x + y

    def get_number(msg: str) -> float:
        """Prompts with `msg` for input; returns numeric response."""

        return float(input(msg))

    def display_msg(msg: str):
        """Displays `msg` with dashed line underneath"""

        print(msg)
        print('-------------------------------------')


It's important to understand that adding type annotations to a function definition does not cause the Python interpreter
to check that the values passed to a function are the expected types, or cause the returned value to be converted to the
expected type. For example, if the function ``add`` in the example above is called like this::

    result = add('5', '15')

the function will receive two string values, concatenate them, and return the resulting string '515'. The ``int``
annotations are completely ignored by the Python interpreter. Think of type annotations as a kind of function
documentation, and remember that they have no effect on the program's behavior.

Type annotations are an optional aspect of documenting functions. Still, type annotations are an important tool to increase
the readability of your code, and you should use them in your programs.

.. note::

    Although type annotations are ignored by the Python interpreter, there are tools such as 
    `mypy <http://mypy-lang.org/>`_ that can analyze your code containing type annotations and flag potential problems.

Type hints can be especially useful for container types, like lists and dictionaries. When type hinting was first introduced into python, in version 3.5, it was possible to specify them, but a little clunky. Later versions made it a little easier.

For example, in the following code, which is valid in python version 3.10, the count_words function takes a string as input and returns a dictionary. That dictionary's keys should all be strings and the value associated with every key should be an integer.

.. activecode:: ac_annotate3

    def count_words(text: str) -> dict[str, int]:
        words = text.split()
        d = {}
        for word in words:
            if word not in d:
                d[word] = 1
            else:
                d[word] += 1
        return d



In the code below, the function `add_em_up` takes an input that is expected to be a list of numbers. It returns the sum of all of them.

.. activecode:: ac_annotate4

    def add_em_up(nums: list[int]) -> int:
            tot = 0
            for num in nums:
                tot += num
            return tot

Actually, this code should work just fine if the inputs are either integers or floats. If any are floats, then the return value will be a float. The more recent versions of type annotations in python allow the use the `|` symbol (pronounced "pipe") to specify a union, that either of two types is permitted. You may find that it's not permitted in the current runestone interpreter, though.

.. activecode:: ac_annotate5

    def add_em_up(nums: list[int | float]) -> int | float:
        tot = 0
        for num in nums:
            tot += num
        return tot

**Check your understanding**

.. mchoice:: question_ta_1
   :answer_a: The value 4.5 is displayed on the screen.
   :answer_b: The value 2.52 is displayed on the screen.
   :answer_c: A runtime error occurs when the function is invoked because 2.5 is not a string.
   :answer_d: A runtime error occurs because the expression 'msg + 2' illegally attempts to concatenate a str and an int.
   :correct: a
   :feedback_a: Correct! Python ignores the ': str' annotation and returns the sum of msg (the float 2.5) + 2.
   :feedback_b: Incorrect. In this call, msg contains the float value 2.5; the ': str' annotation serves only as documentation.
   :feedback_c: Incorrect. Python ignores the ': str' annotation and allows the float value 2.5 to be passed to msg.
   :feedback_d: Incorrect. In this call, msg contains the float value 2.5, not a str, so the + operation is legal.
   :practice: T

   What happens when the following is executed?

   .. sourcecode:: python

        def display(msg: str):
            """Displays `msg` on the screen"""
            print(msg + 2)

        display(2.5)
        
