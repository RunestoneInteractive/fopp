..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: tuples-3-
   :start: 1

.. index::
    single: tuple; return value
    return; tuple

Tuples as Return Values
-----------------------

Functions can return tuples as return values. This is very useful --- we often want to know some batsman's highest and 
lowest score, or we want to find the mean and the standard deviation, or we want to know the year, the month, and the 
day, or if we're doing some ecological modeling we may want to know the number of rabbits and the number of wolves on 
an island at a given time.  In each case, a function (which can only return a single value), can create a single tuple holding multiple elements. 

For example, we could write a function that returns both the area and the circumference of a circle of radius r.

.. activecode:: ac12_3_1

    
    def circleInfo(r):
        """ Return (circumference, area) of a circle of radius r """
        c = 2 * 3.14159 * r
        a = 3.14159 * r * r
        return (c, a)

    print(circleInfo(10))

Again, we can take advantage of packing to make the code look a little more readable on line 4

.. activecode:: ac12_3_2

    
    def circleInfo(r):
        """ Return (circumference, area) of a circle of radius r """
        c = 2 * 3.14159 * r
        a = 3.14159 * r * r
        return c, a

    print(circleInfo(10))

**Check your Understanding**

.. activecode:: ac12_3_3
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   **1.** Define a function called ``information`` that takes as input, the variables ``name``, ``birth_year``, ``fav_color``, and ``hometown``. It should return a tuple of these variables in this order.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(information("Sarah", 1996, "purple", "St. Louis"), ("Sarah", 1996, "purple", "St. Louis"), "Testing that information returns the correct tuple on input ('Sarah', 1996, 'purple', 'St. Louis')")

   myTests().main()

.. activecode:: ac12_3_4
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   **2.** Define a function called ``info`` with the following required parameters: ``name``, ``age``, ``birth_year``, ``year_in_college``, and ``hometown``. The function should return a tuple that contains all the inputted information.
   ~~~~

   def info():

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(info(name='Tina', age=20, birth_year=1996, year_in_college='sophomore', hometown='Detroit'), ('Tina', 20, 1996, 'sophomore', 'Detroit'), "Testing the function info on input: name='Tina', age=20, birth_year=1996, year_in_college='sophomore', hometown='Detroit'.")

   myTests().main()
