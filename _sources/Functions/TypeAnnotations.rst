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
type. A **type annotation** is an optional notation that specifies the type of a parameter or function result. It
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

**Check your understanding**

.. mchoice:: question_ta_1
   :answer_a: The value 4.5 is displayed on the screen.
   :answer_b: The value 2.52 is displayed on the screen.
   :answer_c: A crash occurs because 2.5 is not a string
   :answer_d: A crash occurs because the expression 'msg + 2' illegally attempts to concatenate a str and an int
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
        
