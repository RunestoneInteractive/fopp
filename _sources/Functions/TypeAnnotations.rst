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

.. sourcecode:: python

    def duplicate(msg: str) -> str:
        """Returns a string containing two copies of `msg`"""

        return msg + msg

This definition of ``duplicate`` makes use of type annotations that indicate the function's parameter type and return
type. A **type annotation** is an optional notation that specifies the type of a parameter or function result. It
tells the programmer using the function what kind of data to pass to the function, and what kind of data to expect when
the function returns a value.

In the definition above, the annotation ``: str`` in ``msg: str`` indicates that the caller should pass a ``str`` value as an argument.
The annotation  ``-> str`` indicates that the function will produce a ``str`` result. 

Here are some more examples of functions with type annotations:

.. sourcecode:: python

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
