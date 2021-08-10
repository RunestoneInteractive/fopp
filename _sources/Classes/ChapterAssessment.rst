..  Copyright (C)  Jaclyn Cohen, Lauren Murphy, Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Chapter Assessment
==================

.. activecode:: ac_ch13_01
   :practice: T
   :topics: Classes/ImprovingourConstructor.rst
   :tags: Classes/ImprovingourConstructor.rst
   :autograde: unittest

   Define a class called ``Bike`` that accepts a string and a float as input, and assigns those inputs respectively to two instance variables, ``color`` and ``price``. Assign to the variable ``testOne`` an instance of ``Bike`` whose color is **blue** and whose price is **89.99**. Assign to the variable ``testTwo`` an instance of Bike whose color is **purple** and whose price is **25.0**. 
   ~~~~


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(testOne.color, "blue", "Testing that testOne has the correct color assigned.")
         self.assertEqual(testOne.price, 89.99, "Testing that testOne has the correct price assigned.")

      def testTwo(self):
         self.assertEqual(testTwo.color, "purple", "Testing that testTwo has the correct color assigned.")
         self.assertEqual(testTwo.price, 25.0, "Testing that testTwo has the correct color assigned.")

   myTests().main()

.. activecode:: ac_ch13_021
   :practice: T
   :topics: Classes/AddingOtherMethodstoourClass.rst
   :tags: Classes/ImprovingourConstructor.rst, Classes/AddingOtherMethodstoourClass.rst
   :autograde: unittest

   Create a class called ``AppleBasket`` whose constructor accepts two inputs: a string representing a color, and a number representing a quantity of apples. The constructor should initialize two instance variables: ``apple_color`` and ``apple_quantity``.  Write a class method called ``increase`` that increases the quantity by ``1`` each time it is invoked. You should also write a ``__str__`` method for this class that returns a string of the format: ``"A basket of [quantity goes here] [color goes here] apples."`` e.g. ``"A basket of 4 red apples."`` or ``"A basket of 50 blue apples."`` (Writing some test code that creates instances and assigns values to variables may help you solve this problem!)
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         tester = AppleBasket("red",4)
         self.assertEqual(tester.apple_quantity, 4, "Testing the initialization of the apple_quantity inst var.")
      def testTwo(self):   
         tester = AppleBasket("red",4)
         tester.increase()
         self.assertEqual(tester.apple_quantity, 5, "Testing the increase method")
      def testThree(self):
         tester = AppleBasket("green",17)
         self.assertEqual(tester.__str__(),"A basket of 17 green apples.")


   myTests().main()  


.. activecode:: ac_ch13_03
   :practice: T
   :topics: Classes/AddingOtherMethodstoourClass.rst
   :tags: Classes/AddingOtherMethodstoourClass.rst, Classes/ImprovingourConstructor.rst, Classes/ConvertinganObjecttoaString.rst
   :autograde: unittest

   Define a class called ``BankAccount`` that accepts the name you want associated with your bank account in a string, and an integer that represents the amount of money in the account. The constructor should initialize two instance variables from those inputs: ``name`` and ``amt``. Add a string method so that when you print an instance of ``BankAccount``, you see ``"Your account, [name goes here], has [start_amt goes here] dollars."`` Create an instance of this class with ``"Bob"`` as the name and ``100`` as the amount. Save this to the variable ``t1``.
   ~~~~

   

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(t1.__str__(), "Your account, Bob, has 100 dollars.", "Testing that t1 is assigned to correct value")

   myTests().main()
