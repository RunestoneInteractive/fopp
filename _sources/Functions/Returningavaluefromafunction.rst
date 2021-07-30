..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-4-
   :start: 1

Returning a value from a function
---------------------------------

.. image:: Figures/function_call.gif
   :alt: gif of a box labeled function with three spaces on the top for input and a space on the bottom for output. Three arrows enter the top and are labeled as input or arguments. The function box shakes, and then one arrow leaves the bottom of the function box.

Not only can you pass a parameter value into a function, a function can also produce a value. You have already
seen this in some previous functions that you have used. For example, ``len`` takes a list or string as a parameter
value and returns a number, the length of that list or string. ``range`` takes an integer as a parameter value and
returns a list containing all the numbers from 0 up to that parameter value.

Functions that return values are sometimes called **fruitful functions**. In many other languages, a function that
doesn't return a value is called a **procedure**, but we will stick here with the Python way of also calling it a
function, or if we want to stress it, a *non-fruitful* function.

.. youtube:: LGOZyrRCJ1o
    :divid: goog_return_values
    :height: 315
    :width: 560
    :align: left


.. image:: Figures/blackboxfun.png

How do we write our own fruitful function? Let's start by creating a very simple mathematical function that we will
call ``square``. The square function will take one number as a parameter and return the result of squaring that
number. Here is the black-box diagram with the Python code following.

.. image:: Figures/squarefun.png

.. activecode:: ac11_4_1

    def square(x):
        y = x * x
        return y

    toSquare = 10
    result = square(toSquare)
    print("The result of {} squared is {}.".format(toSquare, result))

The **return** statement is followed by an expression which is evaluated. Its result is returned to the caller as the
"fruit" of calling this function. Because the return statement can contain any Python expression we could have
avoided creating the **temporary variable** ``y`` and simply used ``return x*x``. Try modifying the square function
above to see that this works just the same. On the other hand, using **temporary variables** like ``y`` in the program
above makes debugging easier. These temporary variables are referred to as **local variables**.

Notice something important here. The name of the variable we pass as an argument --- ``toSquare`` --- has nothing to
do with the name of the formal parameter --- ``x``.  It is as if  ``x = toSquare`` is executed when ``square`` is
called. It doesn't matter what the value was named in the caller (the place where the function was invoked). Inside
``square``, it's name is ``x``.  You can see this very clearly in codelens, where the global variables and the local
variables for the square function are in separate boxes.

.. codelens:: clens11_4_1
    :python: py3

    def square(x):
        y = x * x
        return y

    toSquare = 10
    squareResult = square(toSquare)

There is one more aspect of function return values that should be noted. All Python functions return the special value
``None`` unless there is an explicit return statement with a value other than ``None``. Consider the following common
mistake made by beginning Python programmers. As you step through this example, pay very close attention to the return
value in the local variables listing. Then look at what is printed when the function is over.

.. codelens:: clens11_4_2
    :python: py3

    def square(x):
        y = x * x
        print(y)   # Bad! This is confusing! Should use return instead!

    toSquare = 10
    squareResult = square(toSquare)
    print("The result of {} squared is {}.".format(toSquare, squareResult))

The problem with this function is that even though it prints the value of the squared input, that value will not be
returned to the place where the call was done. Instead, the value ``None`` will be returned. Since line 6 uses the
return value as the right hand side of an assignment statement, ``squareResult`` will have ``None`` as its value and
the result printed in line 7 is incorrect. Typically, functions will return values that can be printed or processed in
some other way by the caller.

A return statement, once executed, immediately terminates execution of a function, even if it is not the last
statement in the function. In the following code, when line 3 executes, the value 5 is returned and assigned to the
variable x, then printed. Lines 4 and 5 never execute. Run the following code and try making some modifications of
it to make sure you understand why "there" and 10 never print out.

.. activecode:: ac11_4_2

  def weird():
      print("here")
      return 5
      print("there")
      return 10

  x = weird()
  print(x)

The fact that a return statement immediately ends execution of the code block inside a function is important to
understand for writing complex programs, and it can also be very useful. The following example is a situation where
you can use this to your advantage -- and understanding this will help you understand other people's code better, and
be able to walk through code more confidently.

Consider a situation where you want to write a function to find out, from a class attendance list, whether anyone's
first name is longer than five letters, called ``longer_than_five``. If there is anyone in class whose first name is
longer than 5 letters, the function should return ``True``. Otherwise, it should return ``False``.

In this case, you'll be using conditional statements in the code that exists in the **function body**, the code block
indented underneath the function definition statement (just like the code that starts with the line ``print("here")``
in the example above -- that's the body of the function ``weird``, above).

**Bonus challenge for studying:** After you look at the explanation below, stop looking at the code -- just the
description of the function above it, and try to write the code yourself! Then test it on different lists and make
sure that it works. But read the explanation first, so you can be sure you have a solid grasp on these function
mechanics.

First, an English plan for this new function to define called ``longer_than_five``:

* You'll want to pass in a list of strings (representing people's first names) to the function.
* You'll want to iterate over all the items in the list, each of the strings.
* As soon as you get to one name that is longer than five letters, you know the function should return ``True`` -- yes, there is at least one name longer than five letters!
* And if you go through the whole list and there was no name longer than five letters, then the function should return ``False``.

Now, the code:

.. activecode:: ac11_4_3

  def longer_than_five(list_of_names):
      for name in list_of_names: # iterate over the list to look at each name
          if len(name) > 5: # as soon as you see a name longer than 5 letters,
              return True # then return True!
              # If Python executes that return statement, the function is over and the rest of the code will not run -- you already have your answer!
      return False # You will only get to this line if you
      # iterated over the whole list and did not get a name where
      # the if expression evaluated to True, so at this point, it's correct to return False!

  # Here are a couple sample calls to the function with different lists of names. Try running this code in Codelens a few times and make sure you understand exactly what is happening.

  list1 = ["Sam","Tera","Sal","Amita"]
  list2 = ["Rey","Ayo","Lauren","Natalie"]

  print(longer_than_five(list1))
  print(longer_than_five(list2))


So far, we have just seen return values being assigned to variables. For example, we had the line
``squareResult = square(toSquare)``. As with all assignment statements, the right hand side is executed first. It
invokes the ``square`` function, passing in a parameter value 10 (the current value of ``toSquare``). That returns a
value 100, which completes the evaluation of the right-hand side of the assignment. 100 is then assigned to the
variable ``squareResult``. In this case, the function invocation was the entire expression that was evaluated.

Function invocations, however, can also be used as part of more complicated expressions. For example,
``squareResult = 2 * square(toSquare)``. In this case, the value 100 is returned and is then multiplied by 2 to
produce the value 200. When python evaluates an expression like ``x * 3``, it substitutes the current value of x into
the expression and then does the multiplication. When python evaluates an expression like ``2 * square(toSquare)``, it
substitutes the return value 100 for entire function invocation and then does the multiplication.

To reiterate, when executing a line of code ``squareResult = 2 * square(toSquare)``, the python
interpreter does these steps:

#. It's an assignment statement, so evaluate the right-hand side expression ``2 * square(toSquare)``.
#. Look up the values of the variables square and toSquare: square is a function object and toSquare is 10
#. Pass 10 as a parameter value to the function, get back the return value 100
#. Substitute 100 for square(toSquare), so that the expression now reads ``2 * 100``
#. Assign 200 to variable ``squareResult``

**Check your understanding**

.. mchoice:: question11_4_1
   :answer_a: You should never use a print statement in a function definition.
   :answer_b: You should not have any statements in a function after the return statement.  Once the function gets to the return statement it will immediately stop executing the function.
   :answer_c: You must calculate the value of x+y+z before you return it.
   :answer_d: A function cannot return a number.
   :correct: b
   :feedback_a: Although you should not mistake print for return, you may include print statements inside your functions.
   :feedback_b: This is a very common mistake so be sure to watch out for it when you write your code!
   :feedback_c: Python will automatically calculate the value x+y+z and then return it in the statement as it is written
   :feedback_d: Functions can return any legal data, including (but not limited to) numbers, strings, lists, dictionaries, etc.
   :practice: T

   What is wrong with the following function definition:

   .. code-block:: python

     def addEm(x, y, z):
         return x+y+z
         print('the answer is', x+y+z)

.. mchoice:: question11_4_2
   :answer_a: The value None
   :answer_b: The value of x+y+z
   :answer_c: The string 'x+y+z'
   :correct: a
   :feedback_a: We have accidentally used print where we mean return.  Therefore, the function will return the value None by default.  This is a VERY COMMON mistake so watch out!  This mistake is also particularly difficult to find because when you run the function the output looks the same.  It is not until you try to assign its value to a variable that you can notice a difference.
   :feedback_b: Careful!  This is a very common mistake.  Here we have printed the value x+y+z but we have not returned it.  To return a value we MUST use the return keyword.
   :feedback_c: x+y+z calculates a number (assuming x+y+z are numbers) which represents the sum of the values x, y and z.
   :practice: T

   What will the following function return?

   .. code-block:: python

    def addEm(x, y, z):
        print(x+y+z)

.. mchoice:: question11_4_3
   :answer_a: 25
   :answer_b: 50
   :answer_c: 25 + 25
   :correct: b
   :feedback_a: It squares 5 twice, and adds them together.
   :feedback_b: The two return values are added together.
   :feedback_c: The two results are substituted into the expression and then it is evaluated. The returned values are integers in this case, not strings.
   :practice: T

   What will the following code output?

   .. code-block:: python

       def square(x):
           y = x * x
           return y

       print(square(5) + square(5))

.. mchoice:: question11_4_4
   :answer_a: 8
   :answer_b: 16
   :answer_c: Error: can't put a function invocation inside parentheses
   :correct: b
   :feedback_a: It squares 2, yielding the value 4. But that doesn't mean the next value multiplies 2 and 4.
   :feedback_b: It squares 2, yielding the value 4. 4 is then passed as a value to square again, yeilding 16.
   :feedback_c: This is a more complicated expression, but still valid. The expression square(2) is evaluated, and the return value 4 substitutes for square(2) in the expression.

   What will the following code output?

   .. code-block:: python

       def square(x):
           y = x * x
           return y

       print(square(square(2)))

.. mchoice:: question11_4_5
   :answer_a: 1
   :answer_b: Yes
   :answer_c: First one was longer
   :answer_d: Second one was at least as long
   :answer_e: Error
   :correct: c
   :feedback_a: cyu2 returns the value 1, but that's not what prints.
   :feedback_b: "Yes" is longer, but that's not what prints.
   :feedback_c: cyu2 returns the value 1, which is assigned to z.
   :feedback_d: cyu2 returns the value 1, which is assigned to z.
   :feedback_e: what do you think will cause an error.
   :practice: T

   What will the following code output?

   .. code-block:: python

       def cyu2(s1, s2):
           x = len(s1)
           y = len(s2)
           return x-y

       z = cyu2("Yes", "no")
       if z > 0:
           print("First one was longer")
       else:
           print("Second one was at least as long")

.. mchoice:: question11_4_6
   :answer_a: square
   :answer_b: g
   :answer_c: a number
   :correct: b
   :feedback_a: Before executing square, it has to figure out what value to pass in, so g is executed first
   :feedback_b: g has to be executed and return a value in order to know what paramater value to provide to x.
   :feedback_c: square and g both have to execute before the number is printed.
   :practice: T

   Which will print out first, square, g, or a number?

   .. code-block:: python

       def square(x):
           print("square")
           return x*x

       def g(y):
           print("g")
           return y + 3

       print(square(g(2)))

.. mchoice:: question11_4_7
   :answer_a: 3
   :answer_b: 2
   :answer_c: None
   :correct: b
   :feedback_a: The function gets to a return statement after 2 lines are printed, so the third print statement will not run.
   :feedback_b: Yes! Two printed lines, and then the function body execution reaches a return statement.
   :feedback_c: The function returns an integer value! However, this code does not print out the result of the function invocation, so you can't see it (print is for people). The only lines you see printed are the ones that occur in the print statements before the return statement.
   :practice: T

   How many lines will the following code print?

   .. code-block:: python

       def show_me_numbers(list_of_ints):
           print(10)
           print("Next we'll accumulate the sum")
           accum = 0
           for num in list_of_ints:
               accum = accum + num
           return accum
           print("All done with accumulation!")

       show_me_numbers([4,2,3])

.. activecode:: ac11_4_4
   :language: python
   :autograde: unittest
   :practice: T

   **8.** Write a function named ``same`` that takes a string as input, and simply returns that string.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(same('hello'), 'hello', "Testing the same function on input 'hello'.")

   myTests().main()


.. activecode:: ac11_4_5
   :language: python
   :autograde: unittest
   :practice: T

   **9.** Write a function called ``same_thing`` that returns the parameter, unchanged.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(same_thing(5), 5,"Testing the function same_thing with input 5")
         self.assertEqual(same_thing("Welcome"), "Welcome", "Testing the function same_thing with input 'Welcome'")

   myTests().main()

.. activecode:: ac11_4_6
   :language: python
   :autograde: unittest
   :practice: T

   **10.** Write a function called ``subtract_three`` that takes an integer or any number as input, and returns that number minus three.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(subtract_three(9), 6, "Testing the subtract_three function on input 9.")
         self.assertEqual(subtract_three(-5), -8, "Testing the subtract_three function on input -5.")

   myTests().main()


.. activecode:: ac11_4_7
   :language: python
   :autograde: unittest
   :practice: T

   **11.** Write a function called ``change`` that takes one number as its input and returns that number, plus 7.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(change(5), 12,"Testing the function change with input 5")
         self.assertEqual(change(-10), -3, "Testing the function change with input -10")

   myTests().main()

.. activecode:: ac11_4_8
   :language: python
   :autograde: unittest
   :practice: T

   **12.** Write a function named ``intro`` that takes a string as input. This string ist intended to be a person's name and the output is a standardized greeting. For example, given the string "Becky" as input, the function should return: "Hello, my name is Becky and I love SI 106."
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(intro("Mike"), "Hello, my name is Mike and I love SI 106.", "Testing the intro function on input 'Mike'.")

   myTests().main()


.. activecode:: ac11_4_9
   :language: python
   :autograde: unittest
   :practice: T

   **13.** Write a function called ``s_change`` that takes one string as input and returns that string, concatenated with the string " for fun.".
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(s_change("Coding"), "Coding for fun." ,"Testing the function s_change with input coding")
         self.assertEqual(s_change("We go to the beach"), "We go to the beach for fun." , "Testing the function s_change with input We go to the beach")

   myTests().main()

.. activecode:: ac11_4_10
   :language: python
   :autograde: unittest
   :practice: T

   **14.** Write a function called ``decision`` that takes a string as input, and then checks the number of characters. If it has over 17 characters, return "This is a long string", if it is shorter or has 17 characters, return "This is a short string".
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(decision("Well hello dolly"), "This is a short string", "Testing the function decision with input 'Well hello dolly'")
         self.assertEqual(decision("In olden days a glimps of stocking was looked on a something shocking but heaven knows, anything goes"), "This is a long string", "Testing the function decision with input 'In olden days a glimps of stocking was looked on a something shocking but heaven knows, anything goes'")
         self.assertEqual(decision("how do you do sir"), "This is a short string", "Testing the function decision with input 'how do you do sir'")

   myTests().main()
