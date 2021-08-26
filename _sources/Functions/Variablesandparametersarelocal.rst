..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-7-
   :start: 1

.. index:: local variable
   variable; local
   lifetime
 
Variables and parameters are local
----------------------------------

.. youtube:: HdFujZpLFVg
    :divid: goog_local_vars
    :height: 315
    :width: 560
    :align: left

 
An assignment statement in a function creates a **local variable** for the variable on the left hand side of the
assignment operator. It is called local because this variable only exists inside the function and you cannot use it
outside. For example, consider again the ``square`` function:
 
.. activecode:: ac11_7_1

   def square(x):
       y = x * x
       return y
 
   z = square(10)
   print(y)
 

Try running this in Codelens. When a function is invoked in Codelens, the local scope is separated from global scope by
a blue box. Variables in the local scope will be placed in the blue box while global variables will stay in the global
frame. If you press the 'last >>' button you will see an error message. When we try to use ``y`` on line 6 (outside the
function) Python looks for a global variable named ``y`` but does not find one. This results in the error:
``Name Error: 'y' is not defined.``
 
The variable ``y`` only exists while the function is being executed --- we call this its **lifetime**. When the
execution of the function terminates (returns), the local variables are destroyed. Codelens helps you visualize this
because the local variables disappear after the function returns. Go back and step through the statements paying
particular attention to the variables that are created when the function is called. Note when they are subsequently
destroyed as the function returns.
 
Formal parameters are also local and act like local variables. For example, the lifetime of ``x`` begins when
``square`` is called, and its lifetime ends when the function completes its execution.
 
So it is not possible for a function to set some local variable to a value, complete its execution, and then when it
is called again next time, recover the local variable. Each call of the function creates new local variables, and
their lifetimes expire when the function returns to the caller.
 
**Check Your Understanding**
 
.. mchoice:: question11_7_1
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: Local variables cannot be referenced outside of the function they were defined in.
   :feedback_b: Local variables cannot be referenced outside of the function they were defined in.
   :practice: T
 
   True or False: Local variables can be referenced outside of the function they were defined in.

.. fillintheblank:: question11_7_2
 
   Which of the following are local variables? Please, write them in order of what line they are on in the code.

   .. sourcecode:: python
 
    numbers = [1, 12, 13, 4]
    def foo(bar):
        aug = str(bar) + "street"
        return aug

    addresses = []
    for item in numbers:
        addresses.append(foo(item))


   The local variables are

   -  :bar: Good work!
      :aug: While aug is a local variable, it is not the first one in the code.
      :item: item is not a local variable.
      :.*: Incorrect, try again.
   -  :aug: Good work!
      :bar: While bar is a local variable, it is not the first one in the code.
      :item: item is not a local variable.
      :.*: Incorrect, try again.
 
.. mchoice:: question11_7_3
   :answer_a: 4
   :answer_b: 6
   :answer_c: 10
   :answer_d: Code will give an error because x and z do not match.
   :correct: a
   :feedback_a: Correct, the output is right because the subtract function takes in x as the global variable for the z parameter and puts it into the function. The subtract function uses the local variable y for its return.
   :feedback_b: Incorrect, look again at what is being produced in the subtract function.
   :feedback_c: Incorrect, look again at what is being produced in the subtract function.
   :feedback_d: Incorrect, there shouldn't be any error.
   :practice: T
 
   What would be the result of running the following code?
 
   .. sourcecode:: python
 
     x = 3 * 2
     y = 1

     def subtract(z):
         y = 10
         return y - z
         
     print(subtract(x)) 
 
.. mchoice:: question11_7_4
   :answer_a: 33
   :answer_b: 12
   :answer_c: There is an error in the code.
   :correct: c
   :feedback_a: Incorrect, look again at what is happening in producing.
   :feedback_b: Incorrect, look again at what is happening in producing.
   :feedback_c: Yes! There is an error because we reference y in the producing function, but it was defined in adding. Because y is a local variable, we can't use it in both functions without initializing it in both. If we initialized y as 3 in both though, the answer would be 33.
   :practice: T
 
   What would be the result of running the following code?
 
   .. sourcecode:: python
 
     def adding(x):
         y = 3
         z = y + x + x
         return z
 
     def producing(x):
         z = x * y
         return z
 
     print(producing(adding(4)))
 
.. mchoice:: question11_7_5
   :answer_a: 1
   :answer_b: 9
   :answer_c: 10
   :answer_d: Error, local variable 'x' is referenced before assignment.
   :correct: d 
   :feedback_a: Incorrect, pay attention to the local scope in the function.
   :feedback_b: Incorrect, pay attention to the local scope in the function.
   :feedback_c: Incorrect, pay attention to the local scope in the function.
   :feedback_d: This code gives an error because the local variable 'x' was referenced in the local scope before it was assigned a value.  
     
   What would be the result of running the following code?
 
   .. sourcecode:: python
 
     x = 9
 
     def adding():
         x+=1
         print(x)
    
     adding()



   
.. code-block:: python

        v1 += 1
    Traceback (most recent call last):
        File "<stdin>", line 1, in <module>
    NameError: name 'v1' is not defined
        def foo():
            v1 += 1
        foo()
    Traceback (most recent call last):
        File "<stdin>", line 1, in <module>
        File "<stdin>", line 2, in foo
    UnboundLocalError: local variable 'v1' referenced before assignment
 
 
In the code above, notice and understand the different error messages. 
The local variables are created at the same time the local namespace 
is created. That is **any** variable that is assigned to anywhere 
in the function gets added to the local namespace immediately but 
it will remain **unbound** until the assignment statement is executed.