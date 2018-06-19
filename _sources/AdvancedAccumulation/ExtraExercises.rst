..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: AdAccum-7-
   :start: 1

Extra Exercises
===============


.. activecode:: ac21_7_1
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/map

   **1.** Using map, create a list assigned to the variable ``greeting_doubled`` that doubles each element in the list ``lst``.
   ~~~~

   lst = [["hi", "bye"], "hello", "goodbye", [9, 2], 4]
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOneA(self):
         self.assertEqual(greeting_doubled, [['hi', 'bye', 'hi', 'bye'], 'hellohello', 'goodbyegoodbye', [9, 2, 9, 2], 8], "Testing that greeting_doubled is assigned to correct values")
         self.assertIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


   myTests().main()


.. activecode:: ac21_7_2
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/map

   **1.1** Write code to assign to the variable ``map_testing`` all the elements in lst_check while adding the string "Fruit: " to the beginning of each element using mapping.
   ~~~~

   lst_check = ['plums', 'watermelon', 'kiwi', 'strawberries', 'blueberries', 'peaches', 'apples', 'mangos', 'papaya']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(map_testing, ['Fruit: plums', 'Fruit: watermelon', 'Fruit: kiwi', 'Fruit: strawberries', 'Fruit: blueberries', 'Fruit: peaches', 'Fruit: apples', 'Fruit: mangos', 'Fruit: papaya'], "Testing that map_testing has the correct values.")
         self.assertIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


   myTests().main()


.. activecode:: ac21_7_3
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/map

   **1.2** Below, we have provided a list of strings called ``abbrevs``. Use map to produce a new list called ``abbrevs_upper`` that contains all the same strings in upper case.
   ~~~~

   abbrevs = ["usa", "esp", "chn", "jpn", "mex", "can", "rus", "rsa", "jam"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(abbrevs_upper, ["USA", "ESP", "CHN", "JPN", "MEX", "CAN", "RUS", "RSA", "JAM"], "Testing that abbrevs_upper is correct.")
         self.assertIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


   myTests().main()


.. activecode:: ac21_7_4
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/filter

   **2.** Using filter, filter ``lst`` so that it only contains words containing the letter "o". Assign to variable ``lst2``. Do not hardcode this.
   ~~~~

   lst = ["witch", "halloween", "pumpkin", "cat", "candy", "wagon", "moon"]
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(lst2, ['halloween', 'wagon', 'moon'], "Testing that lst is assigned to correct values.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


   myTests().main()


.. activecode:: ac21_7_5
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/filter

   **2.1** Write code to assign to the variable ``filter_testing`` all the elements in lst_check that have a w in them using filter.
   ~~~~

   lst_check = ['plums', 'watermelon', 'kiwi', 'strawberries', 'blueberries', 'peaches', 'apples', 'mangos', 'papaya']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(filter_testing, ['watermelon', 'kiwi', 'strawberries'], "Testing that filter_testing has the correct values.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


   myTests().main()


.. activecode:: ac21_7_6
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/filter

   **2.2** Below, we have provided a list of strings called ``countries``. Use filter to produce a list called ``b_countries`` that only contains the strings from ``countries`` that begin with B.
   ~~~~

   countries = ['Canada', 'Mexico', 'Brazil', 'Chile', 'Denmark', 'Botswana', 'Spain', 'Britain', 'Portugal', 'Russia', 'Thailand', 'Bangladesh', 'Nigeria', 'Argentina', 'Belarus', 'Laos', 'Australia', 'Panama', 'Egypt', 'Morocco', 'Switzerland', 'Belgium']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(b_countries, ['Brazil', 'Botswana', 'Britain', 'Bangladesh', 'Belarus', 'Belgium'], "Testing that b_countries is correct.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


   myTests().main()  

.. activecode:: ac21_7_7
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   **4.** The for loop below produces a list of numbers greater than 10. Below the given code, use list comprehension to accomplish the same thing. Assign it the the variable ``lst2``. Only one line of code is needed.
   ~~~~

   L = [12, 34, 21, 4, 6, 9, 42]
   lst = []
   for x in L:
       if x > 10:
           lst.append(x)
   print(lst)

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFourA(self):
         self.assertEqual(lst2, [12, 34, 21, 42], "Testing that lst2 is assigned to correct values")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()


.. activecode:: ac21_7_8
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   **4.1** Write code to assign to the variable ``compri`` all the values of the key name in the dictionary ``tester``. Do this using list comprehension.
   ~~~~

   tester = {'info': [{"name": "Lauren", 'class standing': 'Junior', 'major': "Information Science"},{'name': 'Ayo', 'class standing': "Bachelor's", 'major': 'Information Science'}, {'name': 'Kathryn', 'class standing': 'Senior', 'major': 'Sociology'}, {'name': 'Nick', 'class standing': 'Junior', 'major': 'Computer Science'}, {'name': 'Gladys', 'class standing': 'Sophomore', 'major': 'History'}, {'name': 'Adam', 'major': 'Violin Performance', 'class standing': 'Senior'}]}


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(compri), sorted(['Lauren', 'Ayo', 'Kathryn', 'Nick', 'Gladys', 'Adam']), "Testing that compri has the correct values.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()


.. activecode:: ac21_7_9
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   **4.2** Below, we have provided a list of tuples that contain the names of Game of Thrones characters. Using list comprehension, create a list of strings called ``first_names`` that contains only the first names of everyone in the original list.
   ~~~~

   people = [('Snow', 'Jon'), ('Lannister', 'Cersei'), ('Stark', 'Arya'), ('Stark', 'Robb'), ('Lannister', 'Jamie'), ('Targaryen', 'Daenerys'), ('Stark', 'Sansa'), ('Tyrell', 'Margaery'), ('Stark', 'Eddard'), ('Lannister', 'Tyrion'), ('Baratheon', 'Joffrey'), ('Bolton', 'Ramsey'), ('Baelish', 'Peter')]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(first_names, ['Jon', 'Cersei', 'Arya', 'Robb', 'Jamie', 'Daenerys', 'Sansa', 'Margaery', 'Eddard', 'Tyrion', 'Joffrey', 'Ramsey', 'Peter'], "Testing that first_names is correct.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main() 


.. activecode:: ac21_7_10
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   **5.** Use list comprehension to create a list called ``lst2`` that doubles each element in the list, ``lst``.
   ~~~~

   lst = [["hi", "bye"], "hello", "goodbye", [9, 2], 4]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFiveA(self):
         self.assertEqual(lst2, [['hi', 'bye', 'hi', 'bye'], 'hellohello', 'goodbyegoodbye', [9, 2, 9, 2], 8], "Testing that  lst2 is assigned to correct values")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
      
   myTests().main()


.. activecode:: ac21_7_11
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   **5.1** Write code to assign to the variable ``compri_sample`` all the values of the key name in the dictionary ``tester`` if they are Juniors. Do this using list comprehension.
   ~~~~

   tester = {'info': [{"name": "Lauren", 'class standing': 'Junior', 'major': "Information Science"},{'name': 'Ayo', 'class standing': "Bachelor's", 'major': 'Information Science'}, {'name': 'Kathryn', 'class standing': 'Senior', 'major': 'Sociology'}, {'name': 'Nick', 'class standing': 'Junior', 'major': 'Computer Science'}, {'name': 'Gladys', 'class standing': 'Sophomore', 'major': 'History'}, {'name': 'Adam', 'major': 'Violin Performance', 'class standing': 'Senior'}]}


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(compri_sample), sorted(['Lauren', 'Nick']), "Testing that compri_sample has the correct values.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()


.. activecode:: ac21_7_12
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   **5.2** Below, we have provided a list of tuples that contain students' names and their final grades in PYTHON 101. Using list comprehension, create a new list ``passed`` that contains the names of students who passed the class (had a final grade of 70 or greater).
   ~~~~

   students = [('Tommy', 95), ('Linda', 63), ('Carl', 70), ('Bob', 100), ('Raymond', 50), ('Sue', 75)]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(passed, ['Tommy', 'Carl', 'Bob', 'Sue'], "Testing that passed is correct.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main() 


.. activecode:: ac21_7_13
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/zip

   **6.** Below we have provided two lists of numbers, ``L1`` and ``L2``. Using zip and list comprehension, create a new list, ``L3``, that sums the two numbers if the number from ``L1`` is greater than 10 and the number from ``L2`` is less than 5. This can be accomplished in one line of code.
   ~~~~

   L1 = [1, 5, 2, 16, 32, 3, 54, 8, 100]
   L2 = [1, 3, 10, 2, 42, 2, 3, 4, 3]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testSix(self):
         self.assertEqual(L3, [18, 57, 103], "Testing that L3 is assigned to correct values")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
      
   myTests().main()


.. activecode:: ac21_7_14
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/zip

   **6.1** Write code using zip and filter so that these lists (l1 and l2) are combined into one big list and assigned to the variable ``opposites`` if they are both longer than 3 characters each.
   ~~~~
   
   l1 = ['left', 'up', 'front']
   l2 = ['right', 'down', 'back']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(opposites, [('left','right'), ('front','back')], "Testing that opposites has the correct list of tuples.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


   myTests().main()


.. activecode:: ac21_7_15
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/zip

   **6.2** Below, we have provided a ``species`` list and a ``population`` list. Use zip to combine these lists into one list of tuples called ``pop_info``. From this list, create a new list called ``endangered`` that contains the names of species whose populations are below 2500.
   ~~~~

   species = ['golden retriever', 'white tailed deer', 'black rhino', 'brown squirrel', 'field mouse', 'orangutan', 'sumatran elephant', 'rainbow trout', 'black bear', 'blue whale', 'water moccasin', 'giant panda', 'green turtle', 'blue jay', 'japanese beetle']

   population = [10000, 90000, 1000, 2000000, 500000, 500, 1200, 8000, 12000, 2300, 7500, 100, 1800, 9500, 125000]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(pop_info, [('golden retriever', 10000), ('white tailed deer', 90000), ('black rhino', 1000), ('brown squirrel', 2000000), ('field mouse', 500000), ('orangutan', 500), ('sumatran elephant', 1200), ('rainbow trout', 8000), ('black bear', 12000), ('blue whale', 2300), ('water moccasin', 7500), ('giant panda', 100), ('green turtle', 1800), ('blue jay', 9500), ('japanese beetle', 125000)], "Testing that pop_info was created correctly.")
      def testTwo(self): 
         self.assertEqual(endangered, ['black rhino', 'orangutan', 'sumatran elephant', 'blue whale', 'giant panda', 'green turtle'], "Testing that endangered was created correctly.")
      def testThree(self):
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()   

.. activecode:: ac21_7_16
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   **7.** **Challenge** The nested for loop given takes in a list of lists and combines the elements into a single list. Do the same thing using a list comprehension for the list ``L``. Assign it to the variable ``result2``.
   ~~~~

   def onelist(lst):
       result = []
       for each_list in lst:
           for item in each_list:
               result.append(item)
       return result

   L = [["hi", "bye"], ["hello", "goodbye"], ["hola", "adios", "bonjour", "au revoir"]]


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testSeven(self):
         self.assertEqual(result2, ['hi', 'bye', 'hello', 'goodbye', 'hola', 'adios', 'bonjour', 'au revoir'], "Testing that result2 is assigned to correct values")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
      
   myTests().main()

.. activecode:: ac21_7_17
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: AdvancedAccumulation/listcomp

   **7.1** **Challenge:** Write code to assign to the variable ``class_sched`` all the values of the key ``important classes``. Do this using list comprehension.
   ~~~~

   tester = {'info': [
            {"name": "Lauren", 'class standing': 'Junior', 'major': "Information Science", 'important classes': ['SI 106', 'ENGLISH 125', 'SI 110', 'AMCULT 202']},
            {'name': 'Ayo', 'class standing': "Bachelor's", 'major': 'Information Science', "important classes": ['SI 106', 'SI 410', 'PSYCH 111']}, 
            {'name': 'Kathryn', 'class standing': 'Senior', 'major': 'Sociology', 'important classes': ['WOMENSTD 220', 'SOC 101', 'ENS 384']}, 
            {'name': 'Nick', 'class standing': 'Junior', 'major': 'Computer Science', "important classes": ['SOC 101', 'AMCULT 334', 'EECS 281']}, 
            {'name': 'Gladys', 'class standing': 'Sophomore', 'major': 'History', 'important classes': ['ENGLISH 125', 'HIST 259', 'ENGLISH 130']}, 
            {'name': 'Adam', 'major': 'Violin Performance', 'class standing': 'Senior', 'important classes': ['PIANO 101', 'STUDIO 300', 'THEORY 229', 'MUSC 356']}]}


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(class_sched), sorted(['SI 106', 'ENGLISH 125', 'SI 110', 'AMCULT 202','SI 106', 'SI 410', 'PSYCH 111', 'WOMENSTD 220', 'SOC 101', 'ENS 384', 'SOC 101', 'AMCULT 334', 'EECS 281', 'ENGLISH 125', 'HIST 259', 'ENGLISH 130', 'PIANO 101', 'STUDIO 300', 'THEORY 229', 'MUSC 356']), "Testing that class_sched has the correct list.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac21_7_18
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T

   **7.2** **Challenge:** Below, we have provided a list of lists that contain numbers. Using list comprehension, create a new list ``threes`` that contains all the numbers from the original list that are divisible by 3. This can be accomplished in one line of code.
   ~~~~

   nums = [[4, 3, 12, 10], [8, 7, 6], [5, 18, 15, 7, 11], [9, 4], [24, 20, 17], [3, 5]]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(threes, [3, 12, 6, 18, 15, 9, 24, 3], "Testing that threes was created correctly.")
         self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main() 
