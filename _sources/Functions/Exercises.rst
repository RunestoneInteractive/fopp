..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-14-
   :start: 1

Extra Exercises
===============

.. activecode:: ac11_14_1
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Returningavaluefromafunction

   **1.** Write a function called ``int_return`` that takes an integer as input and returns the same integer.
   ~~~~
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(int_return(10), 10, "Testing that function int_return(10) returns 10")

   myTests().main()


.. activecode:: ac11_14_2
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Returningavaluefromafunction

   **1.1** Write a function named ``same`` that takes a string as input, and simply returns that string.
   ~~~~
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(same('hello'), 'hello', "Testing the same function on input 'hello'.")

   myTests().main()


.. activecode:: ac11_14_3
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Returningavaluefromafunction

   **1.2** Write a function called ``same_thing`` that returns the parameter, unchanged.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(same_thing(5), 5,"Testing the function same_thing with input 5")
         self.assertEqual(same_thing("Welcome"), "Welcome", "Testing the function same_thing with input 'Welcome'")

   myTests().main()


.. activecode:: ac11_14_4
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Returningavaluefromafunction

   **2.** Write a function called ``add`` that takes any number as its input and returns that sum with 2 added.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(add(-2), 0, "Testing that add(-2) returns 0")
         self.assertEqual(add(6), 8, "Testing that add(6) returns 8")
         self.assertEqual(add(4), 6, "Testing that add(4) returns 6")

   myTests().main()


.. activecode:: ac11_14_5
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Returningavaluefromafunction

   **2.1** Write a function called ``subtract_three`` that takes an integer or any number as input, and returns that number minus three.
   ~~~~
   
   ===== 

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(subtract_three(9), 6, "Testing the subtract_three function on input 9.")
         self.assertEqual(subtract_three(-5), -8, "Testing the subtract_three function on input -5.")

   myTests().main()


.. activecode:: ac11_14_6
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Returningavaluefromafunction

   **2.2** Write a function called ``change`` that takes one number as its input and returns that number, plus 7.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(change(5), 12,"Testing the function change with input 5")
         self.assertEqual(change(-10), -3, "Testing the function change with input -10")

   myTests().main()


.. activecode:: ac11_14_7
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Returningavaluefromafunction

   **3.** Write a function called ``change`` that takes any string, adds "Nice to meet you!" to the end of the argument given, and returns that new string.
   ~~~~

   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testThree(self):
         self.assertEqual(change("I'm Bob. "), "I'm Bob. Nice to meet you!", "Tests that change('I'm Bob. '') returns 'I'm Bob. Nice to meet you!'")   
         self.assertEqual(change(""), "Nice to meet you!", "Tests that change() returns 'Nice to meet you!'")

   myTests().main()


.. activecode:: ac11_14_8
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Returningavaluefromafunction

   **3.1** Write a function named ``intro`` that takes a string as input. Given the string "Becky" as input, the function should return: "Hello, my name is Becky and I love SI 106."
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(intro("Mike"), "Hello, my name is Mike and I love SI 106.", "Testing the intro function on input 'Mike'.")

   myTests().main()


.. activecode:: ac11_14_9
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Returningavaluefromafunction

   **3.2** Write a function called ``s_change`` that takes one string as input and returns that string, concatenated with the string " for fun.".
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(s_change("Coding"), "Coding for fun." ,"Testing the function s_change with input coding")
         self.assertEqual(s_change("We go to the beach"), "We go to the beach for fun." , "Testing the function s_change with input We go to the beach")

   myTests().main()


.. activecode:: ac11_14_10
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Afunctionthataccumulates

   **4.** Write a function, ``accum``, that takes a list of integers as input and returns the sum of those integers.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFourA(self):
         self.assertEqual(accum([5]), 5, "Tests that accum([5]) returns 5")
         self.assertEqual(accum([]), 0, "Tests that accum([]) returns 0")
         self.assertEqual(accum([2,4,6,8]), 20, "Tests that accum([2,4,6,8]) returns 20")

   myTests().main()


.. activecode:: ac11_14_11
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Afunctionthataccumulates

   **4.1** Write a function named ``total`` that takes a list of integers as input, and returns the total value of all those integers added together.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(total([1, 2, 3, 4, 5]), 15, "Testing the total function on input [1, 2, 3, 4, 5].")
         self.assertEqual(total([0, 0, 0, 0]), 0, "Testing the total function on input [0, 0, 0, 0].")
         self.assertEqual(total([]), 0, "Testing the total function on input [].")
         self.assertEqual(total([2]), 2, "Testing the total function on input [2].")

   myTests().main() 


.. activecode:: ac11_14_12
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Afunctionthataccumulates

   **4.2** Write a function called ``count`` that takes a list of numbers as input and returns all of the elements added togther.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(count([]), 0, "Testing the function count with input []")
         self.assertEqual(count([1, 5, 9, -2, 9, 23]), 45, "Testing the function count with input [1, 5, 9, -2, 9, 23]")

   myTests().main()


.. activecode:: ac11_14_13
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Returningavaluefromafunction

   **5.** Write a function, ``length``, that takes in a list as the input. If the length of the list is greater than or equal to 5, return "Longer than 5". If the length is less than 5, return "Less than 5".
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFive(self):
         self.assertEqual(length([]), "Less than 5", "Tests that length([]) returns 'Less than 5'")
         self.assertEqual(length([2, 2]), "Less than 5", "Tests that length([2, 2]) returns 'Less than 5'")
         self.assertEqual(length([4, 4, 4, 3, 5, 6, 7, 8, 9]), "Longer than 5", "Tests that length([4, 4, 4, 3, 5, 6, 7, 8, 9]) returns 'Longer than 5'")
         self.assertEqual(length([1, 1, 1, 1, 1]), "Longer than 5", "Tests that length([1, 1, 1, 1, 1]) returns 'Longer than 5'")

   myTests().main()


.. activecode:: ac11_14_14
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Returningavaluefromafunction

   **5.1** Write a function named ``num_test`` that takes a number as input. If the number is greater than 10, the function should return "Greater than 10." If the number is less than 10, the function should return "Less than 10." If the number is equal to 10, the function should return "Equal to 10."
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(num_test(5), "Less than 10.", "Testing the num_test function on input 5.")
         self.assertEqual(num_test(0), "Less than 10.", "Testing the num_test function on input 0.")
         self.assertEqual(num_test(12.99), "Greater than 10.", "Testing the num_test function on input 12.99.")
         self.assertEqual(num_test(10.00), "Equal to 10.", "Testing the num_test function on input 10.00.")

   myTests().main() 


.. activecode:: ac11_14_15
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Returningavaluefromafunction

   **5.2** Write a function called ``decision`` that takes a string as input, and then checks the number of characters. If it has over 17 characters, return "This is a long string", if it is shorter or has 17 characters, return "This is a short string".
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(decision("Well hello dolly"), "This is a short string", "Testing the function decision with input 'Well hello dolly'")
         self.assertEqual(decision("In olden days a glimps of stocking was looked on a something shocking but heaven knows, anything goes"), "This is a long string", "Testing the function decision with input 'In olden days a glimps of stocking was looked on a something shocking but heaven knows, anything goes'")
         self.assertEqual(decision("how do you do sir"), "This is a short string", "Testing the function decision with input 'how do you do sir'")

   myTests().main()


.. activecode:: ac11_14_16
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Functionscancallotherfunctions

   **6.** You will need to write two functions for this problem. The first function, ``divide`` that takes in any number and returns that same number divided by 2. The second function called ``sum`` should take any number, divide it by 2, and add 6. It should return this new number. You should call the ``divide`` function within the ``sum`` function. Do not worry about decimals.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testSixA(self):
         self.assertEqual(divide(4), 2, "Tests that divide(4) returns 2")
      def testSixB(self):
         self.assertEqual(sum(4), 8, "Tests that sum(4) returns 8")
         self.assertEqual(sum(2), 7, "Tests that sum(2) returns 7")
         self.assertEqual(sum(-6), 3, "Tests that sum(-6) returns 3")
         self.assertEqual(sum(0), 6, "Tests that sum(0) returns 6")

   myTests().main()


.. activecode:: ac11_14_17
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Functions/Functionscancallotherfunctions

   **6.1** Write two functions, one called ``addit`` and one called ``mult``. ``addit`` takes one number as an input and adds 5. ``mult`` takes one number as an input, and multiplies that input by whatever is returned by ``addit``, and then returns the result.
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

