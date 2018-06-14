..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: advfuncs-4-
   :start: 1

Exercises
=========

.. activecode:: ac15_4_1
   :language: python
   :autograde: unittest
   :practice: T

   **1.** Write a function called ``str_mult`` that takes in a required string parameter and an optional integer parameter. The default value for the integer parameter should be 3. The function should return the string multiplied by the integer parameter.
   ~~~~
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(str_mult("ha"), "hahaha", "Testing that str_mult('ha') returns 'hahaha'")
         self.assertEqual(str_mult("ha", 10), "hahahahahahahahahaha", "Testing that str_mult('ha') returns 'hahahahahahahahahaha'")
         self.assertEqual(str_mult("ha", 0), "", "Testing that str_mult('ha', 0) returns ''")

   myTests().main()


.. activecode:: ac15_4_2
   :language: python
   :autograde: unittest
   :practice: T

   **1.1** Define a function called ``multiply``. It should have one required parameter, a string. It should also have one optional parameter, an integer, named ``mult_int``, with a default value of 10. The function should return the string multiplied by the integer. (i.e.: Given inputs "Hello", mult_int=3, the function should return "HelloHelloHello")
   ~~~~

   def multiply():

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(multiply("Hello", mult_int = 3), "HelloHelloHello", "Testing the function multiply on inputs 'Hello', 3.")
         self.assertEqual(multiply("Goodbye"), "GoodbyeGoodbyeGoodbyeGoodbyeGoodbyeGoodbyeGoodbyeGoodbyeGoodbyeGoodbye", "Testing the function mulitply on input 'Goodbye'.")

   myTests().main()


.. activecode:: ac15_4_3
   :language: python
   :autograde: unittest
   :practice: T

   **1.2** Create a function called ``mult`` that has two parameters, the first is required and should be an integer, the second is an optional parameter that can either be a number or a string but whose default is 6. The function should return the first parameter multiplied by the second.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(mult(2), 12, "Testing that mult returns the correct value on input (2)")
         self.assertEqual(mult(5,3), 15, "Testing that mult returns the correct value on input (3,5)")
         self.assertEqual(mult(4,"hello"), "hellohellohellohello", "testing that mult returns the correct value on input (4, 'hello'")

   myTests().main()


.. activecode:: ac15_4_4
   :language: python
   :autograde: unittest
   :practice: T

   **2.** The following function, ``greeting``, does not work. Please fix the code so that it runs without error. This only requires one change in the definition of the function.
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


.. activecode:: ac15_4_5
   :language: python
   :autograde: unittest
   :practice: T

   **2.1** Below is a function, ``sum``, that does not work. Change the function definition so the code works. The function should still have a required parameter, intx, and an optional parameter, intz with a defualt value of 5.
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


.. activecode:: ac15_4_6
   :language: python
   :autograde: unittest
   :practice: T

   **2.2** Currently the function is supposed to take 1 required parameter, and 2 optional parameters, however the code doesn't work. Fix the code so that it passes the test. This should only require changing one line of code.
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


.. activecode:: ac15_4_7
   :language: python
   :autograde: unittest
   :practice: T

   **3.** Write a function, ``test``, that takes in three parameters: a required integer, an optional boolean whose default value is ``True``, and an optional dictionary, called ``dict1``, whose default value is ``{2:3, 4:5, 6:8}``. If the boolean parameter is True, the function should test to see if the integer is a key in the dictionary. The value of that key should then be returned. If the boolean parameter is False, return the boolean value "False".
   ~~~~
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testThree(self):
         self.assertEqual(test(2), 3, "Testing that test(2) returns 3")
         self.assertEqual(test(4, False), False, "Testing that test(4, False) returns False")
         self.assertEqual(test(5, dict1 = {5:4, 2:1}), 4, "Testing that test(5, dict1 = {5:4, 2:1}) returns 4")

   myTests().main()


.. activecode:: ac15_4_8
   :language: python
   :autograde: unittest
   :practice: T

   **3.1** Define a function called ``nums`` that has three parameters. The first parameter, an integer, should be required. A second parameter named ``mult_int`` should be optional with a default value of 5. The final parameter, ``switch``, should also be optional with a default value of False. The function should multiply the two integers together, and if switch is True, should change the sign of the product before returning it.
   ~~~~

   def nums():

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(nums(5), 25, "Testing the function nums on input 5.")
         self.assertEqual(nums(2, mult_int = 4), 8, "Testing the function nums on inputs 2, mult_int = 4.")
         self.assertEqual(nums(3, switch = True), -15, "Testing the function nums on inputs 3, switch = True.")
         self.assertEqual(nums(4, mult_int = 3, switch = True), -12, "Testing the function nums on inputs 4, mult_int = 3, switch = True.")
         self.assertEqual(nums(0, switch = True), 0, "Testing the function nums on inputs 0, switch = True.")

   myTests().main()  


.. activecode:: ac15_4_9
   :language: python
   :autograde: unittest
   :practice: T

   **3.2** Write a function called ``checkingIfIn`` that takes three parameters. The first is a required parameter, which should be a string. The second is an optional parameter called ``direction`` with a default value of ``True``. The third is an optional parameter called ``d`` that has a default value of ``{'apple': 2, 'pear': 1, 'fruit': 19, 'orange': 5, 'banana': 3, 'grapes': 2, 'watermelon': 7}``. Write the function ``checkingIfIn`` so that when the second parameter is ``True``, it checks to see if the first parameter is a key in the third parameter; if it is, return ``True``, otherwise return ``False``.

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


.. activecode:: ac15_4_10
   :language: python
   :autograde: unittest
   :practice: T

   **4.** Write a function called ``together`` that takes three parameters, the first is a required parameter that is a number (integer or float), the second is a required parameter that is a string, and the third is an optional parameter whose default is " ". What is returned is the first parameter, concatenated with the second, using the third.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(together(12, 'cats'), '12 cats', "Testing that together returns the correct string on input (12, 'cats')")
         self.assertEqual(together(17.3, 'birthday cakes'), '17.3 birthday cakes', "Testing that together returns the correct string on input (17.3, 'birthday cakes')")
         self.assertEqual(together(3, 'dogs', ': '), '3: dogs', "Testing that together returns the correct string on input (3, 'dogs', ': ')")
         self.assertEqual(together(493.3, 'beans', ' lima '), '493.3 lima beans', "Testing that together returns the correct string on input (493.3, 'beans', 'lima')")

   myTests().main()   


.. activecode:: ac15_4_11
   :language: python
   :autograde: unittest
   :practice: T

   **5.** We have provided the function ``checkingIfIn`` such that if the first input parameter is in the third, dictionary, input parameter, then the function returns that value, and otherwise, it returns ``False``. Follow the instructions in the active code window for specific variable assignmemts.
   ~~~~

   def checkingIfIn(a, direction = True, d = {'apple': 2, 'pear': 1, 'fruit': 19, 'orange': 5, 'banana': 3, 'grapes': 2, 'watermelon': 7}):
       if direction == True:
           if a in d:
               return d[a]
           else:
               return False
       else:
           if a not in d:
               return True
           else:
               return d[a]

   # Call the function so that it returns False and assign that function call to the variable c_false

   # Call the fucntion so that it returns True and assign it to the variable c_true

   # Call the function so that the value of fruit is assigned to the variable fruit_ans

   # Call the function using the first and third parameter so that the value 8 is assigned to the variable param_check

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(c_false, False, "Testing that c_false has the correct value")
      def testTwo(self):
         self.assertEqual(c_true, True, "Testing that c_true has the correct value")
      def testThree(self):
         self.assertEqual(fruit_ans, 19, "Testing that fruit_ans has the correct value")
      def testFour(self):
         self.assertEqual(param_check, 8, "Testing that param_check has the correct value")
         

   myTests().main()
