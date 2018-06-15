..  Copyright (C)  Jaclyn Cohen, Lauren Murphy, Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Exercises
=========


.. activecode:: ee_ch13_01
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: Classes/ImprovingourConstructor
   :tags: Classes/ImprovingourConstructor.rst

   **1.** Define a class called Bike that accepts a string and a float as input, and assigns those inputs respectively to two instance variables, ``color`` and ``price``. Assign to the variable ``testOne`` an instance of ``Bike`` whose color is **blue** and whose price is **89.99**. Assign to the variable ``testTwo`` an instance of Bike whose color is **purple** and whose price is **25.0**.
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


.. activecode:: ee_ch13_011
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: Classes/ImprovingourConstructor
   :tags: Classes/ImprovingourConstructor.rst

   **1.1** Create a class called ``NumberSet`` that accepts 2 integers as input, and defines two instance variables: ``num1`` and ``num2``, which hold each of the input integers. Then, create an instance of  ``NumberSet`` where its num1 is 6 and its num2 is 10. Save this instance to a variable ``t``.
   ~~~~
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOneA(self):
         self.assertEqual(t.num1, 6, "Testing that t.num1 has correct number assigned.")
      def testOneB(self):
         self.assertEqual(t.num2, 10, "Testing that t.num2 has correct number assigned.")

   myTests().main()


.. activecode:: ee_ch13_021
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: Classes/AddingOtherMethodstoourClass
   :tags: Classes/ImprovingourConstructor.rst, Classes/AddingOtherMethodstoourClass.rst

   **2.** Create a class called ``AppleBasket`` whose constructor accepts two inputs: a string reprsenting a color, and a number representing a quantity of apples. The constructor should initialize 2 instance variables: ``apple_color`` and ``apple_quantity``.  Write a class method called ``increase`` that increases the quantity by 1 each time it is invoked. You should also write a string method for this class that returns a string of the format: **A basket of QUANTITY# COLOR apples.** e.g. *A basket of 4 red apples.* or *A basket of 50 blue apples.* (Writing some test code that creates instances and assigns values to variables may help you solve this problem!)
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


.. activecode:: ee_ch13_022
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: Classes/AddingOtherMethodstoourClass
   :tags: Classes/ImprovingourConstructor.rst, Classes/AddingOtherMethodstoourClass.rst

   **2.1** Create a class called Animal that accepts two numbers as inputs and assigns them respevtively to two instance variables: ``arms`` and ``legs``. Create a class method called ``limbs`` that, when called, returns the total number of limbs the animal has. To the variable name ``spider``, assign an instance of ``Animal`` that has 4 arms and 4 legs. Call the limbs method on the ``spider`` instance and save the result to the variable name ``spidlimbs``.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(spider.arms, 4, "Testing that spider was assigned the correct number of arms.")
         self.assertEqual(spider.legs, 4, "Testing that spider was assigned the correct number of legs.")
         self.assertEqual(spidlimbs, 8, "Testing that spidlimbs was assigned correctly.")

   myTests().main()    


.. activecode:: ee_ch13_03
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: Classes/ConvertinganObjecttoaString
   :tags: Classes/AddingOtherMethodstoourClass.rst, Classes/ImprovingourConstructor.rst, Classes/ConvertinganObjecttoaString.rst

   **3.** Define a class called ``Bank`` that accepts the name you want associated with your bank account in a string, and a float that represents the amount of money in the account. The constructor should initialize two instance variables from those inputs: ``name`` and ``amt``. Add a string method so that when you print an instance of ``Bank``, you see "Your account, [name goes here], has [start_amt goes here] dollars." Create an instance of this class with ``"Bob"`` as the name and ``100.0`` as the amount. Save this to the variable ``t1``.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(t1.__str__(), "Your account, Bob, has 100 dollars.", "Testing that t1 is assigned to correct value")

   myTests().main()


.. activecode:: ee_ch13_032
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: Classes/ConvertinganObjecttoaString
   :tags: Classes/AddingOtherMethodstoourClass.rst, Classes/ImprovingourConstructor.rst, Classes/ConvertinganObjecttoaString.rst

   **3.1.** Create a class called Cereal that accepts three inputs: 2 strings and 1 integer, and assigns them to 3 instance variables in the constructor: ``name``, ``brand``, and ``fiber``. When an instance of ``Cereal`` is printed, the user should see the following: "[name] cereal is produced by [brand] and has [fiber integer] grams of fiber in every serving!" To the variable name ``c1``, assign an instance of ``Cereal`` whose name is ``"Corn Flakes"``, brand is ``"Kellogg's"``, and fiber is ``2``. To the variable name ``c2``, assign an instance of ``Cereal`` whose name is ``"Honey Nut Cheerios"``, brand is ``"General Mills"``, and fiber is ``3``. Practice printing both!
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(c1.__str__(), "Corn Flakes cereal is produced by Kellogg's and has 2 grams of fiber in every serving!", "Testing that c1 prints correctly.")
      def testTwo(self): 
         self.assertEqual(c2.__str__(), "Honey Nut Cheerios cereal is produced by General Mills and has 3 grams of fiber in every serving!", "Testing that c2 prints correctly.")

   myTests().main()  

