
.. _decorators:

Function Wrapping and Decorators
=======================================

This section introduces an advanced python concept called *function wrapping* and a special syntax for it called *decorators*. It is not necessary to use decorators in your programming, but they are an elegant way to do function wrapping, and it will be helpful for you to understand what they do when you see them in other people's code.

In Python, functions are "first class" objects, meaning they can be treated like any other object. Beyond calling functions, we can also reference them, pass them as arguments to other functions, or return them. Although we cannot directly manipulate the *behavior* of a function, we can wrap it in another function that does something before or after the original function is called or change the arguments that a function takes. This is called *function wrapping*.

We could write a function ``compose`` that accepts two functions as arguments and returns a new function that calls the first function with the output of the second function::

    def compose(func1, func2): # func1 and func2 are functions
        return lambda x: func1(func2(x)) # return a *new* function that calls func1 with the output of func2

For example, below, we had a function ``subtract_32`` that accepts a number as an argument and returns ``32`` subtracted from that number, and a function ``multiply_5_9`` that accepts a number as an argument and returns the product of that number and ``5/9``. We can create a new function that "composes" these two functions by executing ``subtract_32`` first and then passing its output to ``multiply_5_9`` (which happens to be how we can convert Fahrenheit temperatures to Celsius temperatures):

.. activecode:: ac15_6_1

    def compose(func1, func2): # func1 and func2 are functions
        # return a *new* function that calls func1 with the output of func2
        return lambda x: func1(func2(x))

    def subtract_32(x):
        return x - 32

    def multiply_5_9(x):
        return x * 5/9
    
    f_to_c = compose(multiply_5_9, subtract_32)

    print(f_to_c(32))  #   0.0
    print(f_to_c(212)) # 100.0

Function wrapping is a powerful idea that can be applied to many problems but it can be difficult to grasp at first. For example, suppose we wanted to write a function that adds logging to another function. That is, we want to write a function ``addLogging`` that accepts a function as an argument and returns a new function that calls the original function but prints something before and after the function is called. In the code below, ``addLogging`` is analogous to the ``compose`` function except: 1. it accepts one argument (rather than two) 2. it is defined using ``def`` (rather than ``lambda``) 3. it calls ``print()`` before and after the function is called (rather than calling one function with the output of the other).

.. activecode:: ac15_6_2

    def addLogging(func): # The argument, func is a function

        def wrapper(x): # x is the argument that we're going to pass to func
            print(f"About to call the function with argument {x}")
            result = func(x) # actually call our function and store the result
            print(f"Done with the function with argument {x}. Result: {result}")
            return result # return whatever our function returned

        return wrapper # return our new function
    
    def double(x):
        print("Inside double")
        return x * 2

    logged_double = addLogging(double)

    double_3 = logged_double(3)
    print(f"logged_double(3) returned {double_3}")

    print("-"*20)

    logged_add_one = addLogging(lambda x: x + 1)
    ten_plus_1 = logged_add_one(10)
    print(f"logged_add_one(10) returned {ten_plus_1}")

This kind of function wrapping is common enough that Python provides a special syntax for it called **decorators**. A decorator is a function that accepts a function as an argument and returns a new function. The new function is usually a "wrapped" version of the original function. The decorator syntax is to place an ``@`` symbol followed by the name of the decorator function on the line before the function definition. Now, we can wrap our ``double`` function with the ``addLogging`` decorator by placing ``@addLogging`` on the line before the function definition. This is equivalent to calling ``addLogging`` with ``double`` as an argument and assigning the result to ``double``:

.. activecode:: ac15_6_3

    def addLogging(func): # The argument, func is a function

        def wrapper(x): # x is the argument that we're going to pass to func
            print(f"About to call the function with argument {x}")
            result = func(x) # actually call our function and store the result
            print(f"Done with the function with argument {x}. Result: {result}")
            return result # return whatever our function returned

        return wrapper # return our new function
    
    @addLogging # equivalent to double = addLogging(double)
    def double(x):
        print("Inside double")
        return x * 2
    
    double(10)

We can now easily "enable" or "disable" logging by commenting out the ``@addLogging`` line. This is much easier than having to change the code inside the ``double`` function itself.

To give another example, suppose we wanted to "password protect" access to calling a function. We could create a function ``passwordProtect`` that will wrap our function inside of code that ensures the user has the correct password.

Try running the code below and entering the correct password (``password123``) when prompted. Then, try running the code again and entering an incorrect password. Notice that the ``printSecretMessage`` function is only called if the user enters the correct password.

.. activecode:: ac15_6_4

    # This is a decorator function that takes another function as an argument.
    def passwordProtect(func):

        # This inner function is the one that will actually be called
        # when we use the decorator on another function.
        def wrappedFunc():
            password = input('Enter the password to call the function:')
            
            if password == 'password123': # correct password? then call the original function
                func()
            else: # If the password is not correct, deny access
                print("Access denied. Sorry, you need to enter the correct password to get the secret message.")
        
        return wrappedFunc


    @passwordProtect
    def printSecretMessage():
        secretMessage = "Shhh...this is a secret message"
        
        # We print a series of "~" characters the same length as the message,
        # then the message itself, then another series of "~" characters.
        print("~" * len(secretMessage))
        print(secretMessage)
        print("~" * len(secretMessage))

    # By adding the decorator, we prompt the user for a password before printing the secret message.
    printSecretMessage()

Although this example is made up for illustration, this kind of function wrapping can be used in web applications to protect access to sensitive pages. For example, code for a Web server might wrap code that transmits personal information with a decorator that checks if the user is logged in. Decorators give us a convenient syntax for modifying the behavior of functions we write.