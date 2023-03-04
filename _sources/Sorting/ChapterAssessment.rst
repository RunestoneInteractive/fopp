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

Chapter Assessment
==================

.. activecode:: ac18_7_1
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Sorting/Optionalkeyparameter

   Sort the following string alphabetically, **from z to a**, and assign it to the variable ``sorted_letters``.
   ~~~~

   letters = "alwnfiwaksuezlaeiajsdl"
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted_letters, sorted(letters, reverse = True), "Testing that sorted_letters has the correct value.")

   myTests().main()


.. activecode:: ac18_7_2
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Sorting/Optionalreverseparameter

   Sort the list below, ``animals``, into alphabetical order, a-z. Save the new list as ``animals_sorted``.
   ~~~~

   animals = ['elephant', 'cat', 'moose', 'antelope', 'elk', 'rabbit', 'zebra', 'yak', 'salamander', 'deer', 'otter', 'minx', 'giraffe', 'goat', 'cow', 'tiger', 'bear']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(animals_sorted, ['antelope', 'bear', 'cat', 'cow', 'deer', 'elephant', 'elk', 'giraffe', 'goat', 'minx', 'moose', 'otter', 'rabbit', 'salamander', 'tiger', 'yak', 'zebra'], "Testing that animals_sorted was created correctly.")

   myTests().main()

.. activecode:: assess_ac18_7_2a
    :language: python
    :autograde: unittest    
    :practice: T
    :topics: Sorting/intro-SortingwithSortandSorted

    Write code to rearrange the strings in the list ``winners`` so that they are in alphabetical order by first name from A to Z.
    ~~~~

    winners = ['Kazuo Ishiguro', 'Rainer Weiss', 'Youyou Tu', 'Malala Yousafzai', 'Alice Munro', 'Alvin E. Roth']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(winners, ['Alice Munro', 'Alvin E. Roth', 'Kazuo Ishiguro', 'Malala Yousafzai', 'Rainer Weiss', 'Youyou Tu'], "Testing that winners is set correctly.")

    myTests().main()

.. activecode:: assess_ac18_7_2b
    :language: python
    :autograde: unittest
    :practice: T
    :topics: Sorting/Optionalreverseparameter

    Write code to switch the order of the ``winners`` list so that it is now Z to A, by first name. Assign this list to the variable ``z_winners``.
    ~~~~

    winners = ['Alice Munro', 'Alvin E. Roth', 'Kazuo Ishiguro', 'Malala Yousafzai', 'Rainer Weiss', 'Youyou Tu']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(z_winners, ['Youyou Tu','Rainer Weiss', 'Malala Yousafzai','Kazuo Ishiguro', 'Alvin E. Roth', 'Alice Munro'], "Testing that z_winners is set correctly.")

    myTests().main()


.. activecode:: assess_ac18_7_2c
    :language: python
    :autograde: unittest
    :practice: T
    :topics: Sorting/Optionalkeyparameter

    Write code to switch the order of the ``winners`` list so that it is now A to Z by *last name*. Assign this list to the variable ``z_winners``.
    ~~~~

    winners = ['Alice Munro', 'Alvin E. Roth', 'Kazuo Ishiguro', 'Malala Yousafzai', 'Rainer Weiss', 'Youyou Tu']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(z_winners, ['Kazuo Ishiguro', 'Alice Munro', 'Alvin E. Roth', 'Youyou Tu', 'Rainer Weiss', 'Malala Yousafzai'], "Testing that z_winners is set correctly.")

    myTests().main()


.. activecode:: ac18_7_3
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Sorting/SortingaDictionary

   The dictionary, ``medals``, shows the medal count for six countries during the Rio Olympics. Sort the country names so they appear alphabetically. Save this list to the variable ``alphabetical``.
   ~~~~

   medals = {'Japan':41, 'Russia':56, 'South Korea':21, 'United States':121, 'Germany':42, 'China':70}
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(alphabetical, sorted(medals.keys()), "Testing that alphabetical value is assigned to correct values.")

   myTests().main()

.. activecode:: ac18_7_4
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Sorting/SortingaDictionary

   Given the same dictionary, ``medals``, now sort by the medal count. Save the three countries with the highest medal count to the list, ``top_three``.
   ~~~~

   medals = {'Japan':41, 'Russia':56, 'South Korea':21, 'United States':121, 'Germany':42, 'China':70}
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testThree(self):
         self.assertEqual(top_three, sorted(medals, key = lambda x: medals[x], reverse = True)[:3], "Testing that top_three value is assigned to correct values.")

   myTests().main()

.. activecode:: ac18_7_5
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Sorting/SortingaDictionary

   We have provided the dictionary ``groceries``. You should return a list of its keys, but they should be sorted by their values, from highest to lowest. Save the new list as ``most_needed``.
   ~~~~

   groceries = {'apples': 5, 'pasta': 3, 'carrots': 12, 'orange juice': 2, 'bananas': 8, 'popcorn': 1, 'salsa': 3, 'cereal': 4, 'coffee': 5, 'granola bars': 15, 'onions': 7, 'rice': 1, 'peanut butter': 2, 'spinach': 9}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(most_needed, ['granola bars', 'carrots', 'spinach', 'bananas', 'onions', 'coffee', 'apples', 'cereal', 'salsa', 'pasta', 'peanut butter', 'orange juice', 'rice', 'popcorn'], "Testing that most_needed was created correctly.")

   myTests().main() 


.. activecode:: ac18_7_6
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Sorting/Optionalkeyparameter

   Create a function called ``last_four`` that takes in a single ID number and returns the last four digits. For example, the number 17573005 should return 3005. Then, use the resulting function to sort the list of ids stored in the variable, ``ids``, from lowest to highest. Save this sorted list in the variable, ``sorted_ids``. Hint: Remember that only strings can be indexed, so conversions may be needed.
   ~~~~

   def last_four(x):


   ids = [17573005, 17572342, 17579000, 17570002, 17572345, 17579329]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFour(self):
         self.assertEqual(sorted_ids, sorted(ids, key = last_four), "Testing that sorted_ids is assigned to correct values.")

   myTests().main()

.. activecode:: ac18_7_7
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Sorting/Optionalkeyparameter

   Sort the list ``ids`` by the last four digits of each id. Do this using lambda and not using a defined function. Save this sorted list in the variable ``sorted_id``.
   ~~~~

   ids = [17573005, 17572342, 17579000, 17570002, 17572345, 17579329]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFive(self):
         self.assertEqual(sorted_id, [17570002, 17572342, 17572345, 17573005, 17579000, 17579329], "Testing that sorted_id is assigned to correct value.")
         self.assertIn("lambda", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()


.. activecode:: ac18_7_8
   :language: python
   :autograde: unittest
   :practice: T
   :topics: Sorting/Optionalkeyparameter

   Sort the following list by each element's second letter a to z. Do so by using lambda. Assign the resulting value to the variable ``lambda_sort``.
   ~~~~

   ex_lst = ['hi', 'how are you', 'bye', 'apple', 'zebra', 'dance']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(lambda_sort, sorted(ex_lst, key = lambda z: z[1]), "Testing that lambda_sort has the correct value.")
         self.assertIn("lambda", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

