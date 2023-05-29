..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: advfuncs-5-
   :start: 1

Chapter Assessment
==================

.. activecode:: ac15_5_1
   :language: python
   :autograde: unittest
   :practice: T

   Create a function called ``mult`` that has two parameters, the first is required and should be an integer, the second is an optional parameter that can either be a number or a string but whose default is 6. The function should return the first parameter multiplied by the second.
   ~~~~
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(mult(2), 12, "Testing that mult returns the correct value on input (2)")
         self.assertEqual(mult(5,3), 15, "Testing that mult returns the correct value on input (3,5)")
         self.assertEqual(mult(4,"hello"), "hellohellohellohello", "testing that mult returns the correct value on input (4, 'hello'")

   myTests().main()


.. activecode:: ac15_5_2
   :language: python
   :autograde: unittest
   :practice: T

   The following function, ``greeting``, does not work. Please fix the code so that it runs without error. This only requires one change in the definition of the function.
   ~~~~
   def greeting(greeting="Hello ", name, excl="!"):
       return greeting + name + excl

   print(greeting("Bob"))
   print(greeting(""))
   print(greeting("Bob", excl="!!!"))
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(greeting("Bob"), "Hello Bob!", "Testing that greeting('Bob') returns 'Hello Bob!'.")
         self.assertEqual(greeting(""), "Hello !", "Testing that greeting('') return 'Hello !'.")

   myTests().main()


.. activecode:: ac15_5_3
   :language: python
   :autograde: unittest
   :practice: T

   Below is a function, ``sum``, that does not work. Change the function definition so the code works. The function should still have a required parameter, ``intx``, and an optional parameter, ``intz`` with a defualt value of 5.
   ~~~~
   def sum(intz=5, intx):
       return intz + intx

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sum(8, intz = 2), 10, "Testing the function sum on inputs 8, 2.")
         self.assertEqual(sum(12), 17, "Testing the function sum on input 12.")

   myTests().main()

.. activecode:: ac15_5_4
   :language: python
   :autograde: unittest
   :practice: T

   Write a function, ``test``, that takes in three parameters: a required integer, an optional boolean whose default value is ``True``, and an optional dictionary, called ``dict1``, whose default value is ``{2:3, 4:5, 6:8}``. If the boolean parameter is True, the function should test to see if the integer is a key in the dictionary. The value of that key should then be returned. If the boolean parameter is False, return the boolean value "False".
   ~~~~
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testThree(self):
         self.assertEqual(test(2), 3, "Testing that test(2) returns 3")
         self.assertEqual(test(4, False), False, "Testing that test(4, False) returns False")
         self.assertEqual(test(5, dict1 = {5:4, 2:1}), 4, "Testing that test(5, dict1 = {5:4, 2:1}) returns 4")

   myTests().main()

.. activecode:: ac15_5_5
   :language: python
   :autograde: unittest
   :practice: T

   Write a function called ``checkingIfIn`` that takes three parameters. The first is a required parameter, which should be a string. The second is an optional parameter called ``direction`` with a default value of ``True``. The third is an optional parameter called ``d`` that has a default value of ``{'apple': 2, 'pear': 1, 'fruit': 19, 'orange': 5, 'banana': 3, 'grapes': 2, 'watermelon': 7}``. Write the function ``checkingIfIn`` so that when the second parameter is ``True``, it checks to see if the first parameter is a key in the third parameter; if it is, return ``True``, otherwise return ``False``.

   But if the second paramter is ``False``, then the function should check to see if the first parameter is *not* a key of the third. If it's *not*, the function should return ``True`` in this case, and if it is, it should return ``False``.
   ~~~~
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(checkingIfIn('grapes'), True, "Testing that checkingIfIn returns the correct boolean on input 'grapes'")
         self.assertEqual(checkingIfIn('carrots'), False, "Testing that checkingIfIn returns the correct boolean on input 'carrots'")
         self.assertEqual(checkingIfIn('grapes', False), False, "Testing that checkingIfIn returns the correct boolean on input ('grapes', False)")
         self.assertEqual(checkingIfIn('carrots', False), True, "Testing that checkingIfIn returns the correct boolean on input ('carrots', False)")
         self.assertEqual(checkingIfIn('grapes', d = {'carrots': 1, 'peas': 9, 'potatos': 8, 'corn': 32, 'beans': 1}), False, "Testing that checkingIfIn returns the correct boolean on input ('grapes', d = {'carrots': 1, 'peas': 9, 'potatos': 8, 'corn': 32, 'beans': 1})")
         self.assertEqual(checkingIfIn('peas', d = {'carrots': 1, 'peas': 9, 'potatos': 8, 'corn': 32, 'beans': 1}), True, "Testing that checkingIfIn returns the correct boolean on input ('peas', d = {'carrots': 1, 'peas': 9, 'potatos': 8, 'corn': 32, 'beans': 1})")
         self.assertEqual(checkingIfIn('peas', False, {'carrots': 1, 'peas': 9, 'potatos': 8, 'corn': 32, 'beans': 1}), False, "Testing that checkingIfIn returns the correct boolean on input ('peas', False, {'carrots': 1, 'peas': 9, 'potatos': 8, 'corn': 32, 'beans': 1})")
         self.assertEqual(checkingIfIn('apples', False, {'carrots': 1, 'peas': 9, 'potatos': 8, 'corn': 32, 'beans': 1}), True, "Testing that checkingIfIn returns the correct boolean on input ('apples', False, {'carrots': 1, 'peas': 9, 'potatos': 8, 'corn': 32, 'beans': 1})")

   myTests().main()

.. activecode:: ac15_5_6
   :language: python
   :autograde: unittest
   :practice: T

   We have provided a function below and the skeleton of three invocations of the function. Fill in the parameters of the invocations to produce the specified outputs
   ~~~~
   def f(x, y = 3, z = 7):
      return ("{} {} {}".format(x, y, z))

   # fill in just one parameter value to make val1 have the value "Hi 3 7"
   val1 = f()
   # fill in two parameter values to make val2 have the value "Hi Hi 7"
   val2 = f()
   # fill in two parameters to make vale have the value "Hi 3 Hi"
   val3 = f()

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(val1, "Hi 3 7", "Testing that val1 has the correct value")
      def testTwo(self):
         self.assertEqual(val2, "Hi Hi 7", "Testing that val2 has the correct value")
      def testThree(self):
         self.assertEqual(val3, "Hi 3 Hi", "Testing that val3 has the correct value")
      ### would be good to define additional tests that check to make sure student is only suppplying minimum number of parameter values


   myTests().main()
