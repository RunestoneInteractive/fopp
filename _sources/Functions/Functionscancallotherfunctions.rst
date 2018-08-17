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
the values for a, b, and c. 

As an additional example, we can build functions to find the most common letter in a string. 

You've done this recently with dictionary accumulation and the process followed a pattern where we accumulated a dictionary to hold letter counts and then found the max key in that dictionary. We can actually write functions to do these operations.

First off is the function that will accumulate a counts dictionary. Notice how we're replacing all spaces with an empty string. If we don't want to include other characters, such as punctuation or apostrophies, then we could change the function. For example, we could add an optional parameter to the function which would specify what characters should not be included in the dictionary. However, this solution should suffice for this prompt.

.. sourcecode:: python

    def letter_counts(phrase):
        letter_freq = {}
        for char in phrase.replace(" ", ""):
            if char not in letter_freq:
                letter_freq[char] = 0
            letter_freq[char] += 1
        return letter_freq

Then, we can write the function to find the key that occurs most frequently.

.. sourcecode:: python

    def max_key_in_a_dictionary(diction):
        best_key = list(diction.keys())[0]
        for k in diction:
            if diction[k] > diction[best_key]:
                best_key = k
        return best_key

To combine them all, we can then write a function that will find the most common letter in any string we provide as input!

.. activecode:: ac11_9_1

    def letter_counts(phrase):
        letter_freq = {}
        for char in phrase.replace(" ", ""):
            if char not in letter_freq:
                letter_freq[char] = 0
            letter_freq[char] += 1
        return letter_freq

    def max_key_in_a_dictionary(diction):
        best_key = list(diction.keys())[0]
        for k in diction:
            if diction[k] > diction[best_key]:
                best_key = k
        return best_key

    def most_common_letter(string_to_parse):
        letter_dict = letter_counts(string_to_parse)
        most_common = max_key_in_a_dictionary(letter_dict)
        return most_common

    print("Most common letter: " + most_common_letter("We must include in any language with which we hope to describe complex data-processing situations the capability for describing data."))
    print("Most common letter: " + most_common_letter("I've always been more interested in the future than in the past."))

As a note, we can also write the ``most_common_letter`` function so that the output of ``letter_counts`` is 
passed directly to ``max_key_in_a_dictionary``.

.. sourcecode:: python

    def most_common_lett(string_to_parse):
        return max_key_in_a_dictionary(letter_counts(string_to_parse))

**Check your Understanding**

.. activecode:: ac11_9_2
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
