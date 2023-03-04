..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

:skipreading:`True`

.. qnum::
   :prefix: AdAccum-6-
   :start: 1 

Exercises
---------


.. question:: q21_6_1

    .. tabbed:: q1

        .. tab:: Question

           .. actex:: ac21_6_1

              Write equivalent code using map instead of the manual accumulation below and assign it to the variable ``test``.
              ~~~~
              things = [3, 5, -4, 7]
   
              accum = []
              for thing in things:
                  accum.append(thing+1)
              print(accum)

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(test, [4, 6, -3, 8], "Testing whether test has been correctly defined.")
                      self.assertIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_2

    .. tabbed:: q2

        .. tab:: Question

           .. actex:: ac21_6_2

              Use manual accumulation to define the lengths function below.
              ~~~~
              def lengths(strings):
                  """lengths takes a list of strings as input and returns a list of numbers that are the lengths
                  of strings in the input list. Use manual accumulation!"""
                  # fill in this function's definition to make the test pass.
   
              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(lengths(["Hello", "hi", "bye"]), [5, 2, 3], "Testing whether lengths has been correctly defined.")
                      self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_3

    .. tabbed:: q3

        .. tab:: Question

           .. actex:: ac21_6_3

              Now define lengths using map instead.
              ~~~~
              def lengths(strings):
                  """lengths takes a list of strings as input and returns a list of numbers that are the lengths
                   of strings in the input list. Use map!"""
                   # fill in this function's definition to make the test pass.

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(lengths(["Hello", "hi", "bye"]), [5, 2, 3], "Testing whether lengths has been correctly defined.")
                      self.assertIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_4

    .. tabbed:: q4

        .. tab:: Question

           .. actex:: ac21_6_4

              Now define lengths using a list comprehension instead.
              ~~~~ 

              def lengths(strings):
                  """lengths takes a list of strings as input and returns a list of numbers that are the lengths
                  of strings in the input list. Use a list comprehension!"""
                  # fill in this function's definition to make the test pass.

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(lengths(["Hello", "hi", "bye"]), [5, 2, 3], "Testing whether lengths has been correctly defined.")
                      self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()
   
.. question:: q21_6_5

    .. tabbed:: q5

        .. tab:: Question

           .. actex:: ac21_6_5

              Write a function called positives_Acc that receives list of numbers as the input (like [3, -1, 5, 7]) and returns a list of only the positive numbers, [3, 5, 7], via manual accumulation.
              ~~~~ 

              things = [3, 5, -4, 7]
              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      things = [3, 5, -4, 7]
                      self.assertEqual(positives_Acc(things), [3, 5, 7], "Testing whether positives_Acc has been correctly defined.")
                      self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_6

    .. tabbed:: q6

        .. tab:: Question

           .. actex:: ac21_6_6

              Write a function called positives_Fil that receives list of things as the input and returns a list of only the positive things, [3, 5, 7], using the filter function.
              ~~~~ 

              things = [3, 5, -4, 7]
              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      things = [3, 5, -4, 7]
                      self.assertEqual(positives_Fil(things), [3, 5, 7], "Testing whether positives_Fil has been correctly defined.")
                      self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_7

    .. tabbed:: q7

        .. tab:: Question

           .. actex:: ac21_6_7

              Write a function called positives_Li_Com that receives list of things as the input and returns a list of only the positive things, [3, 5, 7], using the list comprehension.
              ~~~~ 

              things = [3, 5, -4, 7]
              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      things = [3, 5, -4, 7]
                      self.assertEqual(positives_Li_Com(things), [3, 5, 7], "Testing whether positives_Li_Com has been correctly defined.")
                      self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_8

    .. tabbed:: q8

        .. tab:: Question

           .. actex:: ac21_6_8

              Define longwords using manual accumulation.
              ~~~~ 

              def longwords(strings):
                  """Return a shorter list of strings containing only the strings with more than four characters. Use manual accumulation."""
                  # write your code here

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(longwords(["Hello", "hi", "bye", "wonderful"]), ["Hello", "wonderful"], "Testing whether longwords has been correctly defined.")
                      self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_9

    .. tabbed:: q9

        .. tab:: Question

           .. actex:: ac21_6_9

              Define longwords using filter.
              ~~~~ 

              def longwords_Fil(strings):
                  """Return a shorter list of strings containing only the strings with more than four characters. Use the filter function."""
                  # write your code here

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(longwords_Fil(["Hello", "hi", "bye", "wonderful"]), ["Hello", "wonderful"], "Testing whether longwords_Fil has been correctly defined.")
                      self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_10

    .. tabbed:: q10

        .. tab:: Question

           .. actex:: ac21_6_10

              Define longwords using a list comprehension.
              ~~~~ 

              def longwords_Li_Comp(strings):
                  """Return a shorter list of strings containing only the strings with more than four characters. Use a list comprehension."""
                  # write your code here
              
              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                   def testOne(self):
                       self.assertEqual(longwords_Li_Comp(["Hello", "hi", "bye", "wonderful"]), ["Hello", "wonderful"], "Testing whether longwords_Li_Comp has been correctly defined.")
                       self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                       self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_11

    .. tabbed:: q11

        .. tab:: Question

           .. actex:: ac21_6_11

              Write a function called ``longlengths`` that returns the lengths of those strings that have at least 4 characters. Try it with a list comprehension.
              ~~~~ 

              def longlengths(strings):
                  return None

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(longlengths(["Hello", "hi", "bye", "wonderful"]), [5, 9], "Testing whether longlengths has been correctly defined.")
                      self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_12

    .. tabbed:: q12

        .. tab:: Question

           .. actex:: ac21_6_12

              Write a function called ``longlengths`` that returns the lengths of those strings that have at least 4 characters. Try it using map and filter.
              ~~~~ 

              def longlengths(strings):
                  return None

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(longlengths(["Hello", "hi", "bye", "wonderful"]), [5, 9], "Testing whether longlengths has been correctly defined.")
                      self.assertIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_13

    .. tabbed:: q13

        .. tab:: Question

           .. actex:: ac21_6_13

              Write a function that takes a list of numbers and returns the sum of the squares of all the numbers. Try it using an accumulator pattern.
              ~~~~ 

              def sumSquares(L):
                  return None

              nums = [3, 2, 2, -1, 1]

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                       self.assertEqual(sumSquares(nums), 19, "Testing whether sumSquares has been correctly defined.")
                       self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                       self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                       self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_14

    .. tabbed:: q14

        .. tab:: Question

           .. actex:: ac21_6_14

              Write a function that takes a list of numbers and returns the sum of the squares of all the numbers. Try it using map and sum.
              ~~~~ 

              def sumSquares(L):
                  return None

              nums = [3, 2, 2, -1, 1]

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(sumSquares(nums), 19, "Testing whether sumSquares has been correctly defined.")
                      self.assertIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_15

    .. tabbed:: q15

        .. tab:: Question

           .. actex:: ac21_6_15

              Use the zip function to take the lists below and turn them into a list of tuples, with all the first items in the first tuple, etc.
              ~~~~ 

              L1 = [1, 2, 3, 4]
              L2 = [4, 3, 2, 3]
              L3 = [0, 5, 0, 5]
   
              tups = []

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(tups, [(1, 4, 0), (2, 3, 5), (3, 2, 0), (4, 3, 5)], "Testing whether tups has been correctly defined.")
                      self.assertNotIn('map(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertNotIn('filter(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertNotIn('sum(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
                      self.assertIn('zip(', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

              myTests().main()

.. question:: q21_6_16

    .. tabbed:: q16

        .. tab:: Question

           .. actex:: ac21_6_16

              Use zip and map or a list comprehension to make a list consisting the maximum value for each position. For L1, L2, and L3, you would end up with a list [4, 5, 3, 5].
              ~~~~ 

              L1 = [1, 2, 3, 4]
              L2 = [4, 3, 2, 3]
              L3 = [0, 5, 0, 5]
   
              maxs = []

              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(maxs, [4, 5, 3, 5], "Testing whether maxs has been correctly defined.")

              myTests().main()

.. question:: q21_6_17

    .. tabbed:: q17

        .. tab:: Question

           .. actex:: ac21_6_17

              Write code to assign to the variable ``compri_sample`` all the values of the key name in the dictionary ``tester`` if they are Juniors. Do this using list comprehension.
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

.. question:: q21_6_18

    .. tabbed:: q18

        .. tab:: Question

           .. actex:: ac21_6_18

              **Challenge** The nested for loop given takes in a list of lists and combines the elements into a single list. Do the same thing using a list comprehension for the list ``L``. Assign it to the variable ``result2``.
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

.. question:: q21_6_19

    .. tabbed:: q19

        .. tab:: Question

           .. actex:: ac21_6_19

              **Challenge:** Write code to assign to the variable ``class_sched`` all the values of the key ``important classes``. Do this using list comprehension.
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

.. question:: q21_6_20

    .. tabbed:: q20

        .. tab:: Question

           .. actex:: ac21_6_20

              **Challenge:** Below, we have provided a list of lists that contain numbers. Using list comprehension, create a new list ``threes`` that contains all the numbers from the original list that are divisible by 3. This can be accomplished in one line of code.
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

Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {% for q in questions: %}
        <div class='oneq full-width'>
            {{ q['htmlsrc']|safe }}
        </div>
    {% endfor %}
