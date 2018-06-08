..  Copyright (C)  Lauren Murphy, Susan Doong, Haley Yaremych, Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: sort-7-
   :start: 1

Exercises
=========


.. activecode:: ac16_7_1
   :language: python
   :autograde: unittest
   :practice: T

   **1.** Sort the following string alphabetically, **from z to a**, and assign it to the variable ``sorted_letters``.
   ~~~~
   letters = "alwnfiwaksuezlaeiajsdl"
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted_letters, sorted(letters, reverse = True), "Testing that sorted_letters has the correct value.")

   myTests().main()


.. activecode:: ac16_7_2
   :language: python
   :autograde: unittest
   :practice: T

   **1.1** Sort the list, ``lst`` from largest to smallest. Save this new list to the variable ``lst_sorted``.
   ~~~~

   lst = [3, 5, 1, 6, 7, 2, 9, -2, 5]
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(lst_sorted, sorted(lst, reverse = True), "Testing that lst_sorted value is assigned to correct values.")

   myTests().main()


.. activecode:: ac16_7_3
   :language: python
   :autograde: unittest
   :practice: T

   **1.2** Sort the list below, ``animals``, into alphabetical order, a-z. Save the new list as ``animals_sorted``.
   ~~~~

   animals = ['elephant', 'cat', 'moose', 'antelope', 'elk', 'rabbit', 'zebra', 'yak', 'salamander', 'deer', 'otter', 'minx', 'giraffe', 'goat', 'cow', 'tiger', 'bear']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(animals_sorted, ['antelope', 'bear', 'cat', 'cow', 'deer', 'elephant', 'elk', 'giraffe', 'goat', 'minx', 'moose', 'otter', 'rabbit', 'salamander', 'tiger', 'yak', 'zebra'], "Testing that animals_sorted was created correctly.")

   myTests().main()


.. activecode:: ac16_7_4
   :language: python
   :autograde: unittest
   :practice: T

   **2.** The dictionary, ``medals``, shows the medal count for six countries during the Rio Olympics. Sort the country names so they appear alphabetically. Save this list to the variable ``alphabetical``.
   ~~~~

   medals = {'Japan':41, 'Russia':56, 'South Korea':21, 'United States':121, 'Germany':42, 'China':70}
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(alphabetical, sorted(medals.keys()), "Testing that alphabetical value is assigned to correct values.")

   myTests().main()


.. activecode:: ac16_7_5
   :language: python
   :autograde: unittest
   :practice: T

   **2.1** Sort the following dictionary based on the keys so that they are sorted a to z. Assign the resulting value to the variable ``sorted_keys``.
   ~~~~

   dictionary = {"Flowers": 10, 'Trees': 20, 'Chairs': 6, "Firepit": 1, 'Grill': 2, 'Lights': 14}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted_keys, sorted(dictionary), "Testing that sorted_keys has the correct value.")

   myTests().main()


.. activecode:: ac16_7_6
   :language: python
   :autograde: unittest
   :practice: T

   **2.2** Below, we have provided the dictionary ``groceries``, whose keys are grocery items, and values are the number of each item that you need to buy at the store. Sort the dictionary's keys into alphabetical order, and save them as a list called ``grocery_keys_sorted``.
   ~~~~

   groceries = {'apples': 5, 'pasta': 3, 'carrots': 12, 'orange juice': 2, 'bananas': 8, 'popcorn': 1, 'salsa': 3, 'cereal': 4, 'coffee': 5, 'granola bars': 15, 'onions': 7, 'rice': 1, 'peanut butter': 2, 'spinach': 9}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(grocery_keys_sorted, ['apples', 'bananas', 'carrots', 'cereal', 'coffee', 'granola bars', 'onions', 'orange juice', 'pasta', 'peanut butter', 'popcorn', 'rice', 'salsa', 'spinach'], "Testing that grocery_keys_sorted was created correctly.")

   myTests().main()  


.. activecode:: ac16_7_7
   :language: python
   :autograde: unittest
   :practice: T

   **3.** Given the same dictionary, ``medals``, now sort by the medal count. Save the three countries with the highest medal count to the list, ``top_three``.
   ~~~~

   medals = {'Japan':41, 'Russia':56, 'South Korea':21, 'United States':121, 'Germany':42, 'China':70}
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testThree(self):
         self.assertEqual(top_three, sorted(medals, key = lambda x: medals[x], reverse = True)[:3], "Testing that top_three value is assigned to correct values.")

   myTests().main()


.. activecode:: ac16_7_8
   :language: python
   :autograde: unittest
   :practice: T

   **3.1** Sort the following dictionary based on the value from highest to lowest. Assign the resulting value to the variable ``sorted_values``.
   ~~~~

   dictionary = {"Flowers": 10, 'Trees': 20, 'Chairs': 6, "Firepit": 1, 'Grill': 2, 'Lights': 14}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted_values, sorted(dictionary, key = lambda x: dictionary[x], reverse = True), "Testing that sorted_values has the correct value.")

   myTests().main()


.. activecode:: ac16_7_9
   :language: python
   :autograde: unittest
   :practice: T

   **3.2** Once again, we have provided the dictionary ``groceries``. Once again, you should return a list of its keys, but this time they should be sorted by their values, from highest to lowest. Save the new list as ``most_needed``.
   ~~~~

   groceries = {'apples': 5, 'pasta': 3, 'carrots': 12, 'orange juice': 2, 'bananas': 8, 'popcorn': 1, 'salsa': 3, 'cereal': 4, 'coffee': 5, 'granola bars': 15, 'onions': 7, 'rice': 1, 'peanut butter': 2, 'spinach': 9}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(most_needed, ['granola bars', 'carrots', 'spinach', 'bananas', 'onions', 'coffee', 'apples', 'cereal', 'salsa', 'pasta', 'peanut butter', 'orange juice', 'rice', 'popcorn'], "Testing that most_needed was created correctly.")

   myTests().main() 


.. activecode:: ac16_7_10
   :language: python
   :autograde: unittest
   :practice: T

   **4.** Create a function called ``last_four`` that takes in an ID number and returns the last four digits. For example, the number 17573005 should return 3005. Then, use this function to sort the list of ids stored in the variable, ``ids``, from lowest to highest. Save this sorted list in the variable, ``sorted_ids``. Hint: Remember that only strings can be indexed, so conversions may be needed.
   ~~~~

   def last_four(x):


   ids = [17573005, 17572342, 17579000, 17570002, 17572345, 17579329]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFour(self):
         self.assertEqual(sorted_ids, sorted(ids, key = last_four), "Testing that sorted_ids is assigned to correct values.")

   myTests().main()


.. activecode:: ac16_7_11
   :language: python
   :autograde: unittest
   :practice: T

   **4.1** You will be sorting the following list by each element's second letter a to z. Create a function to use when sorting that takes a string as input and return sthe second letter of that string and name it ``second_let``. Create a variable called ``func_sort`` and assign the sorted list to it. Do not use lambda.
   ~~~~

   ex_lst = ['hi', 'how are you', 'bye', 'apple', 'zebra', 'dance']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(func_sort, sorted(ex_lst, key = second_let), "Testing that func_sort has the correct value.")
         self.assertNotIn("lambda", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()


.. activecode:: ac16_7_12
   :language: python
   :autograde: unittest
   :practice: T

   **4.2** Below, we have provided a list of strings called ``nums``. Write a function called ``last_char`` that takes a string as input, and returns only its last character. Use this function to sort the list ``nums`` by the last digit of each number, from highest to lowest, and save this as a new list called ``nums_sorted``.
   ~~~~

   nums = ['1450', '33', '871', '19', '14378', '32', '1005', '44', '8907', '16']

   def last_char(): 

   nums_sorted = 

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testA(self):
         self.assertEqual(nums_sorted, ['19', '14378', '8907', '16', '1005', '44', '33', '32', '871', '1450'], "Testing that nums_sorted was created correctly.")
      def testB(self): 
         self.assertEqual(last_char('pants'), 's', "Testing the function last_char on input 'pants'.")


   myTests().main() 


.. activecode:: ac16_7_13
   :language: python
   :autograde: unittest
   :practice: T

   **5.** Sort the list ``ids`` by the last four digits of each id. Do this using lambda and not using a defined function. Save this sorted list in the variable ``sorted_id``.
   ~~~~

   ids = [17573005, 17572342, 17579000, 17570002, 17572345, 17579329]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFive(self):
         self.assertEqual(sorted_id, [17570002, 17572342, 17572345, 17573005, 17579000, 17579329], "Testing that sorted_id is assigned to correct value.")
         self.assertIn("lambda", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()


.. activecode:: ac16_7_14
   :language: python
   :autograde: unittest
   :practice: T

   **5.1** Sort the following list by each element's second letter a to z. Do so by using lambda. Assign the resulting value to the variable ``lambda_sort``.
   ~~~~

   ex_lst = ['hi', 'how are you', 'bye', 'apple', 'zebra', 'dance']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(lambda_sort, sorted(ex_lst, key = lambda z: z[1]), "Testing that lambda_sort has the correct value.")
         self.assertIn("lambda", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()


.. activecode:: ac16_7_15
   :language: python
   :autograde: unittest
   :practice: T

   **5.2** Once again, sort the list ``nums`` based on the last digit of each number from highest to lowest. However, now you should do so by writing a lambda function. Save the new list as ``nums_sorted_lambda``.
   ~~~~

   nums = ['1450', '33', '871', '19', '14378', '32', '1005', '44', '8907', '16']

   nums_sorted_lambda = 

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testA(self):
         self.assertEqual(nums_sorted_lambda, ['19', '14378', '8907', '16', '1005', '44', '33', '32', '871', '1450'], "Testing that nums_sorted_lambda was created correctly.")
         self.assertIn("lambda", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


   myTests().main() 
