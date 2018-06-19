..  Copyright (C) Lauren Murphy, Susan Doong, Haley Yaremych, Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: nested-5-
   :start: 1

Exercises
=========

.. activecode:: ac17_5_1
   :language: python
   :autograde: unittest
   :practice: T

   **1.** The variable ``nested`` contains a nested list. Assign 'snake' to the variable ``output`` using indexing.

   ~~~~

   nested = [['dog', 'cat', 'horse'], ['frog', 'turtle', 'snake', 'gecko'], ['hamster', 'gerbil', 'rat', 'ferret']]
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(output, "snake", "Testing that output is assigned to correct value")

   myTests().main()


.. activecode:: ac17_5_2
   :language: python
   :autograde: unittest
   :practice: T

   **1.1** Below, we have provided a list of lists. Use indexing to assign the element 'horse' to the variable name ``idx1``.

   ~~~~

   animals = [['cat', 'dog', 'mouse'], ['horse', 'cow', 'goat'], ['cheetah', 'giraffe', 'rhino']]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(idx1, 'horse', "Testing that idx1 was assigned correctly.")

   myTests().main()


.. activecode:: ac17_5_3
   :language: python
   :autograde: unittest
   :practice: T

   **1.2** Using indexing, retrieve the string 'willow' from the list and assign that to the variable ``plant``.

   ~~~~

   data = ['bagel', 'cream cheese', 'breakfast', 'grits', 'eggs', 'bacon', [34, 9, 73, []], [['willow', 'birch', 'elm'], 'apple', 'peach', 'cherry']]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(plant, 'willow', "Testing that plant has the correct value.")

   myTests().main()


.. activecode:: ac17_5_4
   :language: python
   :autograde: unittest
   :practice: T

   **2.** Below, a list of lists is provided. Use in and not in tests to create variables with Boolean values. See comments for further instructions.

   ~~~~

   lst = [['apple', 'orange', 'banana'], [5, 6, 7, 8, 9.9, 10], ['green', 'yellow', 'purple', 'red']]

   #Test to see if 'yellow' is in the third list of lst. Save to variable ``yellow``


   #Test to see if 4 is in the second list of lst. Save to variable ``four``


   #Test to see if 'orange' is in the first element of lst. Save to variable ``orange``
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(yellow, True, "Testing that yellow is assigned to correct value")
      def testTwoB(self):
         self.assertEqual(four, False, "Testing that four is assigned to correct value")
      def testTwoC(self):
         self.assertEqual(orange, True, "Testing that orange is assigned to correct value")

   myTests().main()


.. activecode:: ac17_5_5
   :language: python
   :autograde: unittest
   :practice: T

   **2.1** Below, we've provided a list of lists. Use in statements to create variables with Boolean values - see the ActiveCode window for further directions.

   ~~~~

   L = [[5, 8, 7], ['hello', 'hi', 'hola'], [6.6, 1.54, 3.99], ['small', 'large']]

   # Test if 'hola' is in the list L. Save to variable name test1

   # Test if [5, 8, 7] is in the list L. Save to variable name test2

   # Test if 6.6 is in the third element of list L. Save to variable name test3

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testA(self):
         self.assertEqual(test1, False, "Testing that test1 has the correct value.")
      def testB(self):
         self.assertEqual(test2, True, "Testing that test2 has the correct value.")
      def testC(self):
         self.assertEqual(test3, True, "Testing that test3 has the correct value.")

   myTests().main()  


.. activecode:: ac17_5_6
   :language: python
   :autograde: unittest
   :practice: T

   **2.2** Provided is a nested data structure. Follow the instructions in the comments below. Do not hard code.

   ~~~~

   nested = {'data': ['finding', 23, ['exercises', 'hangout', 34]], 'window': ['part', 'whole', [], 'sum', ['math', 'calculus', 'algebra', 'geometry', 'statistics',['physics', 'chemistry', 'biology']]]}

   # Check to see if the string data is a key in nested, if it is, assign True to the variable data, otherwise assign False.

   # Check to see if the integer 24 is in the value of the key data, if it is then assign to the variable twentyfour the value of True, otherwise False.

   # Check to see that the string 'whole' is not in the value of the key window. If it's not, then assign to the variable whole the value of True, otherwise False.

   # Check to see if the string 'physics' is a key in the dictionary nested. If it is, assign to the variable physics, the value of True, otherwise False.

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(data, True, "Testing that data has the correct value.")
      def testTwo(self):
         self.assertEqual(twentyfour, False, "Testing that twentyfour has the correct value.")
      def testThree(self):
         self.assertEqual(whole, False, "Testing that whole has the correct value.")
      def testFour(self):
         self.assertEqual(physics, False, "Testing that physics has the correct value.")

   myTests().main()


.. activecode:: ac17_5_7
   :language: python
   :autograde: unittest
   :practice: T

   **3.** The variable ``nested_d`` contains a nested dictionary with the gold medal counts for the top four countries in the past three Olympics. Assign the value of Great Britain's gold medal count from the London Olympics to the variable ``london_gold``. Use indexing. Do not hardcode.

   ~~~~

   nested_d = {'Beijing':{'China':51, 'USA':36, 'Russia':22, 'Great Britain':19}, 'London':{'USA':46, 'China':38, 'Great Britain':29, 'Russia':22}, 'Rio':{'USA':35, 'Great Britain':22, 'China':20, 'Germany':13}}
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(london_gold, 29, "Testing that london_gold is assigned to correct value")

   myTests().main()


.. activecode:: ac17_5_8
   :language: python
   :autograde: unittest
   :practice: T

   **3.1** Below, we have provided a nested dictionary. Index into the dictionary to create variables that we have listed in the ActiveCode window.

   ~~~~

   sports = {'swimming': ['butterfly', 'breaststroke', 'backstroke', 'freestyle'], 'diving': ['springboard', 'platform', 'synchronized'], 'track': ['sprint', 'distance', 'jumps', 'throws'], 'gymnastics': {'women':['vault', 'floor', 'uneven bars', 'balance beam'], 'men': ['vault', 'parallel bars', 'floor', 'rings']}}

   # Assign the string 'backstroke' to the name v1

   # Assign the string 'platform' to the name v2

   # Assign the list ['vault', 'floor', 'uneven bars', 'balance beam'] to the name v3

   # Assign the string 'rings' to the name v4

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testA(self):
         self.assertEqual(v1, 'backstroke', "Testing that v1 was created correctly.")
         self.assertNotIn("v1 = 'backstroke'", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('v1 = "backstroke"', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
      def testB(self):
         self.assertEqual(v2, 'platform', "Testing that v2 was created correctly.")
         self.assertNotIn('v2 = "platform"', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn("v2 = 'platform'", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
      def testC(self):
         self.assertEqual(v3, ['vault', 'floor', 'uneven bars', 'balance beam'], "Testing that v3 was created correctly.")
         self.assertNotIn("v3 = ['vault', 'floor', 'uneven bars', 'balance beam']", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
      def testD(self):
         self.assertEqual(v4, 'rings', "Testing that v4 was created correctly.")
         self.assertNotIn("v4 = 'rings'", self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('v4 = "rings"', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main() 


.. activecode:: ac17_5_9
   :language: python
   :autograde: unittest
   :practice: T

   **3.2** Extract the value associated with the key color and assign it to the variable ``color``. Do not hard code this.

   ~~~~

   info = {'personal_data': 
            {'name': 'Lauren', 'age': 20, 'major': 'Information Science', 'physical_features': {'color': {'eye': 'blue', 'hair': 'brown'}, 'height': "5'8"}}, 'other': {'favorite_colors': ['purple', 'green', 'blue'], 'interested_in': ['social media', 'intellectual property', 'copyright', 'music', 'books']}}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(color, {'eye': 'blue', 'hair': 'brown'}, "Testing that color has the correct value.")

   myTests().main()


.. activecode:: ac17_5_10
   :language: python
   :autograde: unittest
   :practice: T

   **4.** Given the list, ``nested_d``, save the medal count for the USA from all three Olympics in the dictionary to the list ``US_count``.

   ~~~~

   nested_d = {'Beijing':{'China':51, 'USA':36, 'Russia':22, 'Great Britain':19}, 'London':{'USA':46, 'China':38, 'Great Britain':29, 'Russia':22}, 'Rio':{'USA':35, 'Great Britain':22, 'China':20, 'Germany':13}}

   US_count = []
      

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFour(self):
         self.assertEqual(sorted(US_count), [35, 36, 46], "Testing that US_count is assigned to correct values.")

   myTests().main()


.. activecode:: ac17_5_11
   :language: python
   :autograde: unittest
   :practice: T

   **4.1** Below, we have provided a list of lists that contain information about people. Write code to create a new list that contains every person's last name, and save that list as ``last_names``.

   ~~~~

   info = [['Tina', 'Turner', 1939, 'singer'], ['Matt', 'Damon', 1970, 'actor'], ['Kristen', 'Wiig', 1973, 'comedian'], ['Michael', 'Phelps', 1985, 'swimmer'], ['Barack', 'Obama', 1961, 'president']]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(last_names, ['Turner', 'Damon', 'Wiig', 'Phelps', 'Obama'], "Testing that last_names was created correctly.")

   myTests().main()


.. activecode:: ac17_5_12
   :language: python
   :autograde: unittest
   :practice: T

   **4.2** Iterate through the contents of ``l_of_l`` and assign the third element of sublist to a new list called ``third``.

   ~~~~

   l_of_l = [['purple', 'mauve', 'blue'], ['red', 'maroon', 'blood orange', 'crimson'], ['sea green', 'cornflower', 'lavender', 'indigo'], ['yellow', 'amarillo', 'mac n cheese', 'golden rod']]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(third, ['blue', 'blood orange', 'lavender', 'mac n cheese'], "Testing that third has the correct list assigned to it.")

   myTests().main()


.. activecode:: ac17_5_13
   :language: python
   :autograde: unittest
   :practice: T

   **5.** Given below is a list of lists of athletes. Create a list, ``t``, that saves only the athlete's name if it contains the letter "t". If it does not contain the letter "t", save the athlete name into list ``other``.

   ~~~~

   athletes = [['Phelps', 'Lochte', 'Schooling', 'Ledecky', 'Franklin'], ['Felix', 'Bolt', 'Gardner', 'Eaton'], ['Biles', 'Douglas', 'Hamm', 'Raisman', 'Mikulak', 'Dalton']]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFive(self):
         self.assertEqual(t, ['Lochte', 'Bolt', 'Eaton', 'Dalton'], "Testing that t is assigned to correct values.")
      def testFiveA(self):
         self.assertEqual(other, ['Phelps', 'Schooling', 'Ledecky', 'Franklin', 'Felix', 'Gardner', 'Biles', 'Douglas', 'Hamm', 'Raisman', 'Mikulak'], "Testing that other is assigned to correct values.")

   myTests().main()


.. activecode:: ac17_5_14
   :language: python
   :autograde: unittest
   :practice: T

   **5.1** Below, we have provided a list of lists named ``L``. Use nested iteration to save every string containing "b" into a new list named ``b_strings``.

   ~~~~

   L = [['apples', 'bananas', 'oranges', 'blueberries', 'lemons'], ['carrots', 'peas', 'cucumbers', 'green beans'], ['root beer', 'smoothies', 'cranberry juice']]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(b_strings, ['bananas', 'blueberries', 'cucumbers', 'green beans', 'root beer', 'cranberry juice'], "Testing that b_strings was created correctly.")

   myTests().main() 


.. activecode:: ac17_5_15
   :language: python
   :autograde: unittest
   :practice: T

   **5.2** **Challenge:** Iterate through the list so that if the character 'm' is in the string, then it should be added to a new list called ``m_list``. Hint: Because this isn't just a list of lists, think about what type of object you want your data to be stored in. Conditionals may help you.

   ~~~~

   d = ['good morning', 'hello', 'chair', 'python', ['music', 'flowers', 'facebook', 'instagram', 'snapchat', ['On my Own', 'monster', 'Words dont come so easily', 'lead me right']], 'Stressed Out', 'Pauver Coeur', 'Reach for Tomorrow', 'mariners song', 'Wonder sleeps here']

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(m_list, ['good morning', 'music', 'instagram', 'On my Own', 'monster', 'Words dont come so easily', 'lead me right', 'Reach for Tomorrow', 'mariners song'], "Testing that m_list has the correct list assigned to it.")

   myTests().main()


.. activecode:: ac17_5_16
   :language: python
   :autograde: unittest
   :practice: T

   **6.** **Challenge** The nested dictionary, ``pokemon``, shows the number of various Pokemon that each person has caught while playing Pokemon Go. Find the total number of rattatas, dittos, and pidgeys caught and assign to the variables ``r``, ``d``, and ``p`` respectively. Do not hardcode. Note: Be aware that not every trainer has caught a ditto.

   ~~~~

   pokemon = {'Trainer1':
             {'normal': {'rattatas':15, 'eevees': 2, 'ditto':1}, 'water': {'magikarps':3}, 'flying': {'zubats':8, 'pidgey': 12}}, 
            'Trainer2':
             {'normal': {'rattatas':25, 'eevees': 1}, 'water': {'magikarps':7}, 'flying': {'zubats':3, 'pidgey': 15}}, 
            'Trainer3':
             {'normal': {'rattatas':10, 'eevees': 3, 'ditto':2}, 'water': {'magikarps':2}, 'flying': {'zubats':3, 'pidgey': 20}}, 
            'Trainer4':
             {'normal': {'rattatas':17, 'eevees': 1}, 'water': {'magikarps':9}, 'flying': {'zubats':12, 'pidgey': 14}}}


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testSix(self):
         self.assertEqual(r, 67, "Testing that r is assigned to correct value.")
      def testSixB(self):
         self.assertEqual(d, 3, "Testing that d is assigned to correct value.")
      def testSixC(self):
         self.assertEqual(p, 61, "Testing that p is assigned to correct value.")
     
   myTests().main()


.. activecode:: ac17_5_17
   :language: python
   :autograde: unittest
   :practice: T

   **6.1** **Challenge:** Below, we have provided a nested list called ``big_list``. Use nested iteration to create a dictionary, ``word_counts``, that contains all the words in ``big_list`` as keys, and the number of times they occur as values.

   ~~~~

   big_list = [[['one', 'two'], ['seven', 'eight']], [['nine', 'four'], ['three', 'one']], [['two', 'eight'], ['seven', 'four']], [['five', 'one'], ['four', 'two']], [['six', 'eight'], ['two', 'seven']], [['three', 'five'], ['one', 'six']], [['nine', 'eight'], ['five', 'four']], [['six', 'three'], ['four', 'seven']]]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(word_counts.items()), sorted([('eight', 4), ('five', 3), ('four', 5), ('nine', 2), ('one', 4), ('seven', 4), ('six', 3), ('three', 3), ('two', 4)]), "Testing that word_counts was created correctly.")

   myTests().main() 


.. activecode:: ac17_5_18
   :language: python
   :autograde: unittest
   :practice: T

   **6.2** **Challenge:** Provided is a dictionary that contains pokemon go player data, where each player reveals the amount of candy each of their pokemon have. If you pooled all the data together, which pokemon has the highest number of candy? Assign that pokemon to the variable ``most_common_pokemon``.

   ~~~~

   pokemon_go_data = {'bentspoon': 
                         {'Rattata': 203, 'Pidgey': 120, 'Drowzee': 89, 'Squirtle': 35, 'Pikachu': 3, 'Eevee': 34, 'Magikarp': 300, 'Paras': 38}, 
                     'Laurne': 
                         {'Pidgey': 169, 'Rattata': 245, 'Squirtle': 9, 'Caterpie': 38, 'Weedle': 97, 'Pikachu': 6, 'Nidoran': 44, 'Clefairy': 15, 'Zubat': 79, 'Dratini': 4}, 
                     'picklejarlid':
                          {'Rattata': 32, 'Drowzee': 15, 'Nidoran': 4, 'Bulbasaur': 3, 'Pidgey': 56, 'Weedle': 21, 'Oddish': 18, 'Magmar': 6, 'Spearow': 14}, 
                     'professoroak': 
                          {'Charmander': 11, 'Ponyta': 9, 'Rattata': 107, 'Belsprout': 29, 'Seel': 19, 'Pidgey': 93, 'Shellder': 43, 'Drowzee': 245, 'Tauros': 18, 'Lapras': 18}}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(most_common_pokemon, 'Rattata', "Testing that most_common_pokemon has the correct value.")

   myTests().main()
