..  Copyright (C)  Paul Rensick, Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

..  shortname:: Keyword Parameters
..  description:: Using keyword parameters when calling a function.

.. qnum::
   :prefix: advfuncs-2-
   :start: 1

Keyword Parameters
==================

In the previous section, on :ref:`Optional Parameters <optional_params_chap>` you learned how to define default values 
for formal parameters, which made it optional to provide values for those parameters when invoking the functions.

In this chapter, you'll see one more way to invoke functions with optional parameters, with keyword-based parameter 
passing. This is particularly convenient when there are several optional parameters and you want to provide a value for 
one of the later parameters while not providing a value for the earlier ones.

The online official python documentation includes a tutorial on optional 
parameters which covers the topic quite well. Please read the content 
there: `Keyword arguments <http://docs.python.org/3/tutorial/controlflow.html#keyword-arguments>`_

Don't worry about the ``def cheeseshop(kind, *arguments, **keywords):`` example. You should be able to get by without 
understanding ``*parameters`` and ``**parameters`` in this course. But do make sure you understand the stuff above that.

The basic idea of passing arguments by keyword is very simple. When invoking a function, inside the parentheses there 
are always 0 or more values, separated by commas. With keyword arguments, some of the values can be of the form 
``paramname = <expr>`` instead of just ``<expr>``. Note that when you have ``paramname = <expr>`` in a function 
definition, it is defining the default value for a parameter when no value is provided in the invocation; when you have 
``paramname = <expr>`` in the invocation, it is supplying a value, overriding the default for that paramname.

To make it easier to follow the details of the examples in the official python tutorial, you can step through them in CodeLens.

.. codelens:: keyword_params_1
   :python: py3

   def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
       print("-- This parrot wouldn't" + action,)
       print("if you put" + str(voltage) + "volts through it.")
       print("-- Lovely plumage, the" +  type)
       print("-- It's " + state + "!")
       
   parrot(1000)                                          # 1 positional argument
   parrot(voltage=1000)                                  # 1 keyword argument
   parrot(voltage=1000000, action='VOOOOOM')             # 2 keyword arguments
   parrot(action='VOOOOOM', voltage=1000000)             # 2 keyword arguments
   parrot('a million', 'bereft of life', 'jump')         # 3 positional arguments
   parrot('a thousand', state='pushing up the daisies')  # 1 positional, 1 keyword
   
As you step through it, each time the function is invoked, make a prediction about what each of the four parameter 
values will be during execution of lines 2-5. Then, look at the stack frame to see what they actually are during the 
execution.

.. note::

   Note that we have yet another, slightly different use of the = sign here. As a stand-alone, top-level statement, 
   ``x=3``, the variable x is set to 3. Inside the parentheses that invoke a function, ``x=3`` says that 3 should be 
   bound to the local variable x in the stack frame for the function invocation. Inside the parentheses of a function 
   definition, ``x=3`` says that 3 should be the value for x in every invocation of the function where no value is 
   explicitly provided for x.


Keyword Parameters with .format
-------------------------------

Earlier you learned how to use the ``format`` method for strings, which allows you to structure strings like 
fill-in-the-blank sentences. Now that you've learned about optional and keyword parameters, we can introduce a new way to 
use the ``format`` method.

This other option is to specifically refer to keywords for interpolation values, like below.

.. activecode:: ac15_2_1
 
   names_scores = [("Jack",[67,89,91]),("Emily",[72,95,42]),("Taylor",[83,92,86])]
   for name, scores in names_scores:
       print("The scores {nm} got were: {s1},{s2},{s3}.".format(nm=name,s1=scores[0],s2=scores[1],s3=scores[2]))


Sometimes, you may want to use the ``.format`` method to insert the same value into a string 
multiple times. You can do this by simply passing the same string into the format method, 
assuming you have included ``{}`` s in the string everywhere you want to interpolate them. But 
you can also use positional passing references to do this! The order in which you pass 
arguments into the ``format`` method matters: the first one is argument ``0``, the second is 
argument ``1``, and so on.

For example,

.. activecode:: ac15_2_2
 
   # this works
   names = ["Jack","Jill","Mary"]
   for n in names:
       print("'{}!' she yelled. '{}! {}, {}!'".format(n,n,n,"say hello"))

   # but this also works!
   names = ["Jack","Jill","Mary"]
   for n in names:
       print("'{0}!' she yelled. '{0}! {0}, {1}!'".format(n,"say hello"))


**Check your understanding**

.. mchoice:: question15_2_1
   :answer_a: 2
   :answer_b: 3
   :answer_c: 5
   :answer_d: 7
   :answer_e: Runtime error since not enough values are passed in the call to f
   :correct: d
   :feedback_a: 2 is bound to x, not z
   :feedback_b: 3 is the default value for y, not z
   :feedback_c: 5 is bound to y, not z
   :feedback_d: 2 is bound x, 5 to y, and z gets its default value, 7
   :feedback_e: z has a default value in the function definition, so it's optional to pass a value for it.
   :practice: T

   What value will be printed for z?
   
   .. code-block:: python 

      initial = 7
      def f(x, y = 3, z = initial):
          print("x, y, z are:", x, y, z)
      
      f(2, 5) 
         
.. mchoice:: question15_2_2
   :answer_a: 2
   :answer_b: 3
   :answer_c: 5
   :answer_d: 10
   :answer_e: Runtime error since no value is provided for y, which comes before z
   :correct: b
   :feedback_a: 2 is bound to x, not y
   :feedback_b: 3 is the default value for y, and no value is specified for y, 
   :feedback_c: say what?
   :feedback_d: 10 is the second value passed, but it is bound to z, not y.
   :feedback_e: That's the beauty of passing parameters with keywords; you can skip some parameters and they get their default values.
   :practice: T

   What value will be printed for y?
   
   .. code-block:: python 

      initial = 7
      def f(x, y = 3, z = initial):
          print("x, y, z are:", x, y, z)
      
      f(2, z = 10)
           
.. mchoice:: question15_2_3
   :answer_a: 2
   :answer_b: 3
   :answer_c: 5
   :answer_d: 7
   :answer_e: Runtime error since two different values are provided for x
   :correct: e
   :feedback_a: 2 is bound to x since it's the first value, but so is 5, based on keyword.
   :feedback_b: 
   :feedback_c: 5 is bound to x by keyword, but 2 is also bound to it by virtue of being the value and not having a keyword. In the online environment, it actually allows this, but not in a proper python interpreter.
   :feedback_d: 
   :feedback_e: 2 is bound to x since it's the first value, but so is 5, based on keyword.
   :practice: T

   What value will be printed for x?
   
   .. code-block:: python 

      initial = 7
      def f(x, y = 3, z = initial):
          print("x, y, z are:", x, y, z)
      
      f(2, x=5) 
   
.. mchoice:: question15_2_4
   :answer_a: 2
   :answer_b: 7
   :answer_c: 0
   :answer_d: Runtime error since two different values are provided for initial.
   :correct: b
   :feedback_a: 2 is bound to x, no z
   :feedback_b: the default value for z is determined at the time the function is defined; at that time initial has the value 7.
   :feedback_c: the default value for z is determined at the time the function is defined, not when it is invoked.
   :feedback_d: there's nothing wrong with reassigning the value of a variable at a later time.
   :practice: T

   What value will be printed for z?
   
   .. code-block:: python 

      initial = 7
      def f(x, y = 3, z = initial):
          print ("x, y, z are:", x, y, z)
      initial = 0
      f(2)

.. mchoice:: question15_2_5
   :answer_a: 'first!' she yelled. 'Come here, first! f_one, f_two, and f_three are here!'
   :answer_b: 'Alexey!' she yelled. 'Come here, Alexey! Catalina, Misuki, and Pablo are here!'
   :answer_c: 'Catalina!' she yelled. 'Come here, Catalina! Alexey, Misuki, and Pablo are here!'
   :answer_d: There is an error. You cannot repeatedly use the keyword parameters.
   :correct: c
   :feedback_a: Remember, the values inside of {} are variable names. The values of the variables will be used.
   :feedback_b: Look again at what value is set to the variable first.
   :feedback_c: Yes, the keyword parameters will determine the order of the strings.
   :feedback_d: This is not an error, you can do that in Python!
   :practice: T

   What value will be printed below?
   
   .. code-block:: python 

      names = ["Alexey", "Catalina", "Misuki", "Pablo"]
      print("'{first}!' she yelled. 'Come here, {first}! {f_one}, {f_two}, and {f_three} are here!'".format(first = names[1], f_one = names[0], f_two = names[2], f_three = names[3]))

.. activecode:: ac15_2_3
   :language: python
   :autograde: unittest
   :practice: T

   **5.** Define a function called ``multiply``. It should have one required parameter, a string. It should also have one optional parameter, an integer, named ``mult_int``, with a default value of 10. The function should return the string multiplied by the integer. (i.e.: Given inputs "Hello", mult_int=3, the function should return "HelloHelloHello")
   ~~~~
   def multiply():

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(multiply("Hello", mult_int = 3), "HelloHelloHello", "Testing the function multiply on inputs 'Hello', 3.")
         self.assertEqual(multiply("Goodbye"), "GoodbyeGoodbyeGoodbyeGoodbyeGoodbyeGoodbyeGoodbyeGoodbyeGoodbyeGoodbye", "Testing the function mulitply on input 'Goodbye'.")

   myTests().main()

.. activecode:: ac15_2_4
   :language: python
   :autograde: unittest
   :practice: T

   **6.** Currently the function is supposed to take 1 required parameter, and 2 optional parameters, however the code doesn't work because a parameter name without a default value follows a parameter name with a default value. Fix the code so that it passes the test. This should only require changing one line of code.
   ~~~~
   def waste(var = "Water", mar, marble = "type"):
       final_string = var + " " + marble + " " + mar
       return final_string

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(waste("Pokemon"), "Water type Pokemon", "Testing that waste returns the correct string on input 'Pokemon'")

   myTests().main()


