..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-9-
   :start: 1

.. index::
    functional decomposition
    generalization
    abstraction
    flow of execution
    composition
    function; composition

Functions can call other functions (Compostion)
-----------------------------------------------

It is important to understand that each of the functions we write can be used and called from other functions we 
write. This is one of the most important ways that computer programmers take a large problem and break it down into a 
group of smaller problems. This process of breaking a problem into smaller subproblems is called **functional decomposition**.

Here's a simple example of functional decomposition using two functions. The first function called ``square`` simply 
computes the square of a given number. The second function called ``sum_of_squares`` makes use of square to compute
the sum of three numbers that have been squared.

.. codelens:: clens11_9_1
    :python: py3

    def square(x):
        y = x * x
        return y

    def sum_of_squares(x,y,z):
        a = square(x)
        b = square(y)
        c = square(z)

        return a+b+c

    a = -5
    b = 2
    c = 10
    result = sum_of_squares(a,b,c)
    print(result)

Even though this is a pretty simple idea, in practice this example illustrates many very important Python concepts, 
including local and global variables along with parameter passing. Note that the body of ``square`` is not executed 
until it is called from inside the ``sum_of_squares`` function for the first time on line 6.  

Also notice that when ``square`` is called (at Step 8, for example), there are two groups of local variables, one for 
``square`` and one for ``sum_of_squares``.  Each group of local variables is called a **stack frame**. The variables 
``x``, and ``y`` are local variables in both functions. These are completely differenet variables, even though they 
have the same name. Each function invocation creates a new frame, and variables are looked up in that frame. Notice 
that at step 9, y has the value 25 is one frame and 2 in the other.  

What happens when you to refer to variable y on line 3? Python looks up the value of y in the stack frame for the 
``square`` function. If it didn't find it there, it would go look in the global frame.  

As we have already seen, you can call one function from within another. This ability to build functions 
by using other functions is called **composition**.

In the above code, we actually did this in the ``sum_of_squares`` function, where we called our ``square`` function to get 
the values for a, b, and c. As an additional example, we'll write a function that takes two points, the center of the circle 
and a point on the perimeter, and computes the area of the circle.

To start off, we'll introduce two functions that will be used in the process, ``distance`` which calculates the distance between two points and ``area`` which calculates the area of a circle:

.. sourcecode:: python

    def distance(x1, y1, x2, y2):
        dx = x2 - x1
        dy = y2 - y1
        dsquared = dx**2 + dy**2
        result = dsquared**0.5
        return result

    def area(radius):
        b = 3.14159 * radius**2
        return b

Assume that the center point is stored in the variables ``xc`` and ``yc``, and the perimeter point is in ``xp`` and 
``yp``. The first step is to find the radius of the circle, which is the distance between the two points:

.. sourcecode:: python
    
    radius = distance(xc, yc, xp, yp)

The second step is to find the area of a circle with that radius and return it.

.. sourcecode:: python
    
    result = area(radius)
    return result

Wrapping that up in a function, we get:

.. activecode:: ac200_2_1
    
    def distance(x1, y1, x2, y2):
      dx = x2 - x1
      dy = y2 - y1
      dsquared = dx**2 + dy**2
      result = dsquared**0.5
      return result

    def area(radius):
        b = 3.14159 * radius**2
        return b

    def area2(xc, yc, xp, yp):
        radius = distance(xc, yc, xp, yp)
        result = area(radius)
        return result

    print(area2(0, 0, 1, 1))

We called this function ``area2`` to distinguish it from the ``area`` function defined earlier. There can 
only be one function with a given name within a module.

Note that we could have written the composition without storing the intermediate results.

.. sourcecode:: python
    
    def area2(xc, yc, xp, yp):
        return area(distance(xc, yc, xp, yp))

**Check your Understanding**

.. activecode:: ac11_9_1
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Functionscancallotherfunctions

   **1.** Write two functions, one called ``addit`` and one called ``mult``. ``addit`` takes one number as an input and adds 5. ``mult`` takes one number as an input, and multiplies that input by whatever is returned by ``addit``, and then returns the result.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(mult(1), 6,"Testing the function mult with input 1 (should be 6)")
         self.assertEqual(mult(-2), -6, "Testing the function mult with input -2 (should be -6)")
         self.assertEqual(mult(0), 0, "Testing the function mult with input 0 (should be 0)")

      def testTwo(self):
         self.assertEqual(addit(1), 6, "Testing the function addit with input 1 (should be 6)")
         self.assertEqual(addit(-2), 3, "Testing the function addit with input -2 (should be 3)")
         self.assertEqual(addit(0), 5, "Testing the function addit with input 0 (should be 5)")

   myTests().main()
