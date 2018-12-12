..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: nested-2-
   :start: 1

Nested Dictionaries
-------------------

Just as lists can contain items of any type, the value associated with a key in a dictionary can also be an object of any 
type. In particular, it is often useful to have a list or a dictionary as a value in a dictionary. And of course, those 
lists or dictionaries can also contain lists and dictionaries. There can be many layers of nesting.

Only the values in dictionaries can be objects of arbitrary type. The keys in dictionaries must be one of the immutable 
data types (numbers, strings, tuples).


**Check Your Understanding**

.. mchoice:: question17_2_1
   :practice: T
   :multiple_answers:
   :answer_a: d[5] = {1: 2, 3: 4}
   :answer_b: d[{1:2, 3:4}] = 5
   :answer_c: d['key1']['d'] = d['key2']
   :answer_d: d[key2] = 3
   :correct: a,c
   :feedback_a: 5 is a valid key; {1:2, 3:4} is a dictionary with two keys, and is a valid value to associate with key 5.
   :feedback_b: Dictionary keys must be of immutable types. A dictionary can't be used as a key in a dictionary.
   :feedback_c: d['key2'] is {'b': 3, 'c': "yes"}, a python object. It can be bound to the key 'd' in a dictionary {'a': 5, 'c': 90, 5: 50}
   :feedback_d: key2 is an unbound variable here. d['key2'] would be OK.
    
   Which of the following is a legal assignment statement, after the following code executes?
    
   .. code-block:: python 
    
       d = {'key1': {'a': 5, 'c': 90, 5: 50}, 'key2':{'b': 3, 'c': "yes"}}

.. activecode:: ac17_2_1
   :language: python
   :autograde: unittest
   :practice: T

   **1.** Extract the value associated with the key color and assign it to the variable ``color``. Do not hard code this.

   ~~~~

   info = {'personal_data': 
            {'name': 'Lauren',
             'age': 20,
             'major': 'Information Science',
             'physical_features':
                {'color': {'eye': 'blue',
                           'hair': 'brown'},
                 'height': "5'8"}
            },
          'other':
            {'favorite_colors': ['purple', 'green', 'blue'],
             'interested_in': ['social media', 'intellectual property', 'copyright', 'music', 'books']
            }
         }

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(color, {'eye': 'blue', 'hair': 'brown'}, "Testing that color has the correct value.")

   myTests().main()

