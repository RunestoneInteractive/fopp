..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: advfuncs-3-
   :start: 1

Anonymous functions with lambda expressions
-------------------------------------------

To further drive home the idea that we are passing a function object as a parameter to the sorted object, 
let's see an alternative notation for creating a function, a **lambda expression**. The syntax of a lambda 
expression is the word "lambda" followed by parameter names, separated by commas but not inside (parentheses), 
followed by a colon and then an expression. ``lambda arguments: expression`` yields a function object. This 
unnamed object behaves just like the function object constructed below. 

.. sourcecode:: python

    def fname(arguments):
        return expression
        
.. image:: Figures/lambda.gif
   :alt: image showing how elements of a lambda expression are like a function definition.

Consider the following code

.. activecode:: ac15_3_1

    def f(x):
        return x - 1
    
    print(f)
    print(type(f))
    print(f(3))
    
    print(lambda x: x-2)
    print(type(lambda x: x-2))
    print((lambda x: x-2)(6))
    
Note the paralells between the two. At line 4, f is bound to a function object. Its printed representation
is "<function f>". At line 8, the lambda expression produces a function object. Because it is unnamed (anonymous), 
its printed representation doesn't include a name for it, "<function <lambda>>". Both are of type 'function'.

A function, whether named or anonymous, can be called by placing parentheses () after it.
In this case, because there is one parameter, there is one value in parentheses. This
works the same way for the named function and the anonymous function produced by the lambda
expression. The lambda expression had to go in parentheses just for the purposes
of grouping all its contents together. Without the extra parentheses around it on line 10, 
the interpreter would group things differently and make a function of x that returns x - 2(6).

Some students find it more natural to work with lambda expressions than to refer to a function
by name. Others find the syntax of lambda expressions confusing. It's up to you which version you want to 
use though you will need to be able to read and understand lambda expressions that are written by others. 
In all the examples below, both ways of doing it will be illustrated.

Say we want to create a function that takes a string and returns the last character in that string. What might this look 
like with the functions you've used before?

.. activecode:: ac15_3_2

    def last_char(s):
        return s[-1]

To re-write this using lambda notation, we can do the following:

.. activecode:: ac15_3_3

    last_char = (lambda s: s[-1])

Note that neither function is actually invoked. Look at the parallels between the two structures. The parameters are 
defined in both functions with the variable ``s``. In the typical function, we have to use the keyword ``return`` to send 
back the value. In a lambda function, that is not necessary - whatever is placed after the colon is what will be returned.

**Check Your Understanding**

.. mchoice:: question15_3_1
   :answer_a: A string with a - in front of the number.
   :answer_b: A number of the opposite sign (positive number becomes negative, negative becomes positive).
   :answer_c: Nothing is returned because there is no return statement.
   :correct: b
   :feedback_a: The number would be assigned to the variable x and there is no type conversion used here, so the number would stay a number.
   :feedback_b: Correct!
   :feedback_c: Remember, lambda functions do not use return statements.
   :practice: T

   If the input to this lambda function is a number, what is returned?
   
   .. code-block:: python 
     
    (lambda x: -x)
