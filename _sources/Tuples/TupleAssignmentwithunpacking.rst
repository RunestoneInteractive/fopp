..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: tuples-4-
   :start: 1

.. index::
    single: assignment; tuple 
    single: tuple; assignment 

Tuple Assignment with unpacking
-------------------------------

Python has a very powerful **tuple assignment** feature that allows a tuple of variable names on the left of an 
assignment statement to be assigned values from a tuple on the right of the assignment. Another way to think of this 
is that the tuple of values is **unpacked** into the variable names.

.. activecode:: ac12_4_1

    julia = "Julia", "Roberts", 1967, "Duplicity", 2009, "Actress", "Atlanta, Georgia"

    name, surname, birth_year, movie, movie_year, profession, birth_place = julia

This does the equivalent of seven assignment statements, all on one easy line. One requirement is that the number of 
variables on the left must match the number of elements in the tuple. 

Once in a while, it is useful to swap the values of two variables. With conventional assignment statements, we have to 
use a temporary variable. For example, to swap ``a`` and ``b``:

.. activecode:: ac12_4_2

    a = 1
    b = 2
    temp = a
    a = b
    b = temp
    print(a, b, temp)

Tuple assignment solves this problem neatly:

.. activecode:: ac12_4_3

    a = 1
    b = 2
    (a, b) = (b, a)
    print(a, b)

The left side is a tuple of variables; the right side is a tuple of values. Each value is assigned to its respective 
variable. All the expressions on the right side are evaluated before any of the assignments. This feature makes
tuple assignment quite versatile.

Naturally, the number of variables on the left and the number of values on the right have to be the same.

.. activecode:: ac12_4_4

    (a, b, c, d) = (1, 2, 3) # ValueError: need more than 3 values to unpack 

Earlier we were demonstrating how to use tuples as return values when calculating the area and circumference of a 
circle. Here we can unpack the return values after calling the function.

.. activecode:: ac12_4_5
    
    def circleInfo(r):
        """ Return (circumference, area) of a circle of radius r """
        c = 2 * 3.14159 * r
        a = 3.14159 * r * r
        return c, a

    print(circleInfo(10))
    
    circumference, area = circleInfo(10)
    print(circumference)
    print(area)

    circumference_two, area_two = circleInfo(45)
    print(circumference_two)
    print(area_two)

Python even provides a way to pass a single tuple to a function and have it be unpacked for assignment to the named 
parameters. 

.. activecode:: ac12_4_6

    def add(x, y):
        return x + y
        
    print(add(3, 4))
    z = (5, 4)
    print(add(*z)) # this line will cause the values to be unpacked
    print(add(z)) # this line causes an error

If you run this, you will be get an error caused by line 7, where it says that the function add is expecting two 
parameters, but you're only passing one parameter (a tuple). In line 6 you'll see that the tuple is unpacked and 5 is 
bound to x, 4 to y. 

Don't worry about mastering this idea yet. But later in the course, if you come across some code that someone else has 
written that uses the * notation inside a parameter list, come back and look at this again.

.. note::

    Unpacking into multiple variable names also works with lists, or any other sequence type, as long as there is exactly one value for each variable. For example, you can write ``x, y = [3, 4]``.

Unpacking Into Iterator Variables
---------------------------------

Multiple assignment with unpacking is particularly useful when you iterate through a list of tuples or lists.

For example, a dictionary consists of key-value pairs. When you call the items() method on a dictionary, you get back a sequence of
key-value pairs. Each of those pairs is a two-item tuple. (More generally, we refer to any two-item tuple as a
**pair**). You can iterate over the key-value pairs.

.. activecode:: ac12_4_7

    d = {"k1": 3, "k2": 7, "k3": "some other value"}

    for p in d.items():
        print("key: {}, value: {}".format(p[0], p[1]))

Each time line 4 is executed, p will refer to one key-value pair from d. A pair is just a tuple, so p[0] refers to the
key and p[1] refers to the value.

That code is easier to read if we unpack the key-value pairs into two variable names.

.. activecode:: ac12_4_8

    d = {"k1": 3, "k2": 7, "k3": "some other value"}

    for k, v in d.items():
        print("key: {}, value: {}".format(k, v))

More generally, if you have a list of tuples that each has more than two items, and you iterate through them with a for
loop pulling out information from the tuples, the code will be far more readable if you unpack them into separate
variable names right after the word ``for``.


The Pythonic Way to Enumerate Items in a Sequence
-------------------------------------------------

When we first introduced the for loop, we provided an example of how to iterate through the indexes of a sequence, and thus enumerate the items and their positions in the sequence.


.. activecode:: ac12_4_8b

   fruits = ['apple', 'pear', 'apricot', 'cherry', 'peach']
   for n in range(len(fruits)):
       print(n, fruits[n])

We are now prepared to understand a more pythonic approach to enumerating items in a sequence. Python provides a built-in function ``enumerate``. It takes a sequence as input and returns a sequence of tuples. In each tuple, the first element is an integer and the second is an item from the original sequence. (It actually produces an "iterable" rather than a list, but we can use it in a for loop as the sequence to iterate over.)

.. activecode:: ac12_4_8c

   fruits = ['apple', 'pear', 'apricot', 'cherry', 'peach']
   for item in enumerate(fruits):
       print(item[0], item[1])

The pythonic way to consume the results of enumerate, however, is to unpack the tuples while iterating through them, so that the code is easier to understand.

.. activecode:: ac12_4_8d

   fruits = ['apple', 'pear', 'apricot', 'cherry', 'peach']
   for idx, fruit in enumerate(fruits):
       print(idx, fruit)


**Check your Understanding**

.. mchoice:: question12_4_1
   :practice: T
   :multiple_answers:
   :answer_a: Make the last two lines of the function be "return x" and "return y"  
   :answer_b: Include the statement "return [x, y]" 
   :answer_c: Include the statement "return (x, y)"
   :answer_d: Include the statement "return x, y"
   :answer_e: It's not possible to return two values; make two functions that each compute one value.
   :feedback_a: As soon as the first return statement is executed, the function exits, so the second one will never be executed; only x will be returned
   :feedback_b: return [x,y] is not the preferred method because it returns x and y in a list and you would have to manually unpack the values. But it is workable.
   :feedback_c: return (x, y) returns a tuple.
   :feedback_d: return x, y causes the two values to be packed into a tuple.
   :feedback_e: It is possible, and frequently useful, to have one function compute multiple values.
   :correct: b,c,d

   If you want a function to return two values, contained in variables x and y, which of the following methods will work?

.. mchoice:: question12_4_2
   :practice: T
   :answer_a: You can't use different variable names on the left and right side of an assignment statement.
   :answer_b: At the end, x still has it's original value instead of y's original value.
   :answer_c: Actually, it works just fine!
   :feedback_a: Sure you can; you can use any variable on the right-hand side that already has a value.
   :feedback_b: Once you assign x's value to y, y's original value is gone.
   :feedback_c: Once you assign x's value to y, y's original value is gone.
   :correct: b

   Consider the following alternative way to swap the values of variables x and y. What's wrong with it?
   
   .. code-block:: python 
        
        # assume x and y already have values assigned to them
        y = x
        x = y   

.. activecode:: ac12_4_9
   :language: python
   :autograde: unittest
   :practice: T
   :chatcodes:

   With only one line of code, assign the variables ``water``, ``fire``, ``electric``, and ``grass`` to the values "Squirtle", "Charmander", "Pikachu", and "Bulbasaur"
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(water, "Squirtle", "Testing that water is assigned to the correct value.")
         self.assertEqual(fire, "Charmander", "Testing that fire is assigned to the correct value.")
         self.assertEqual(electric, "Pikachu", "Testing that electric is assigned to the correct value.")
         self.assertEqual(grass, "Bulbasaur", "Testing that grass is assigned to the correct value.")

   myTests().main()
   
.. activecode:: ac12_4_10
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   With only one line of code, assign four variables, ``v1``, ``v2``, ``v3``, and ``v4``, to the following four values: 1, 2, 3, 4.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(v1, 1, "Testing that v1 was assigned correctly.")
         self.assertEqual(v2, 2, "Testing that v2 was assigned correctly.")
         self.assertEqual(v3, 3, "Testing that v3 was assigned correctly.")
         self.assertEqual(v4, 4, "Testing that v4 was assigned correctly.")

   myTests().main()


.. activecode:: ac12_4_11
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   If you remember, the .items() dictionary method produces a sequence of tuples. Keeping this in mind, we have provided you a dictionary called ``pokemon``. For every key value pair, append the key to the list ``p_names``, and append the value to the list ``p_number``. Do not use the .keys() or .values() methods.
   ~~~~

   pokemon = {'Rattata': 19, 'Machop': 66, 'Seel': 86, 'Volbeat': 86, 'Solrock': 126}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(p_names), sorted(['Rattata', 'Machop', 'Seel', 'Volbeat', 'Solrock']), "Testing that p_name has the correct values")
      def testTwo(self):
         self.assertEqual(sorted(p_number), sorted([19,66,86,86,126]), "Testing that p_number hsa the correct values")
         self.assertNotIn('.keys()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('.items()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('.values()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac12_4_12
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   The .items() method produces a sequence of key-value pair tuples. With this in mind, write code to create a list of keys from the dictionary ``track_medal_counts`` and assign the list to the variable name ``track_events``. Do **NOT** use the .keys() method.
   ~~~~

   track_medal_counts = {'shot put': 1, 'long jump': 3, '100 meters': 2, '400 meters': 2, '100 meter hurdles': 3, 'triple jump': 3, 'steeplechase': 2, '1500 meters': 1, '5K': 0, '10K': 0, 'marathon': 0, '200 meters': 0, '400 meter hurdles': 0, 'high jump': 1}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(track_events), sorted(['shot put', 'long jump', '100 meters', '400 meters', '100 meter hurdles', 'triple jump', 'steeplechase', '1500 meters', '5K', '10K', 'marathon', '200 meters', '400 meter hurdles', 'high jump']) , "Testing that track_events was created correctly.")
         self.assertNotIn('.keys()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('.items()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('in track_medal_counts:', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()
