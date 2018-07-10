..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: tuples-5-
   :start: 1

Unpacking Dictionary Items
--------------------------

A dictionary consists of key-value pairs. When you call the items() method on a dictionary, you get back a list of 
key-value pairs. Each of those pairs is a two-item tuple. (More generally, we refer to any two-item tuple as a 
**pair**). You can iterate over the key-value pairs.

.. activecode:: ac12_5_1

    d = {"k1": 3, "k2": 7, "k3": "some other value"}
    
    for p in d.items():
        print(p[0])
        print(p[1])
        print('*** LOOP ***')
        
Each time line 4 is executed, p will refer to one key-value pair from d. A pair is just a tuple, so p[0] refers to the 
key and p[1] refers to the value.

That code is easier to read if we unpack the key-value pairs into two variable names.

.. activecode:: ac12_5_2

    d = {"k1": 3, "k2": 7, "k3": "some other value"}
    
    for k, v in d.items():
        print(k)
        print(v)
        print('*** LOOP ***')

More generally, if you have a list of tuples that each has more than two items, and you iterate through them with a for 
loop pulling out information from the tuples, the code will be far more readable if you unpack them into separate 
variable names right after the word ``for``.

**Check your Understanding**

.. activecode:: ac12_5_3
   :language: python
   :autograde: unittest
   :chatcodes:

   **1.** If you remember, the .items() dictionary method produces a list of tuples. Keeping this in mind, we have provided you a dictionary called ``pokemon``. For every key value pair, append the key to the list ``p_names``, and append the value to the list ``p_number``. Do not use the .keys() or .values() methods.
   ~~~~

   pokemon = {'Rattata': 19, 'Machop': 66, 'Seel': 86, 'Volbeat': 86, 'Solrock': 126}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(p_names), sorted(['Rattata', 'Machop', 'Seel', 'Volbeat', 'Solrock']), "Testing that p_name has the correct values")
      def testTwo(self):
         self.assertEqual(sorted(p_number), sorted([19,66,86,86,126]), "Testing that p_number hsa the correct values")
         self.assertNotIn('.keys()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('.items()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('.values()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

.. activecode:: ac12_5_4
   :language: python
   :autograde: unittest
   :chatcodes:

   **2.** The .items() method produces a list of key-value pair tuples. With this in mind, write code to create a list of keys from the dictionary ``track_medal_counts`` and assign the list to the variable name ``track_events``. Do **NOT** use the .keys() method.
   ~~~~

   track_medal_counts = {'shot put': 1, 'long jump': 3, '100 meters': 2, '400 meters': 2, '100 meter hurdles': 3, 'triple jump': 3, 'steeplechase': 2, '1500 meters': 1, '5K': 0, '10K': 0, 'marathon': 0, '200 meters': 0, '400 meter hurdles': 0, 'high jump': 1}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(track_events), sorted(['shot put', 'long jump', '100 meters', '400 meters', '100 meter hurdles', 'triple jump', 'steeplechase', '1500 meters', '5K', '10K', 'marathon', '200 meters', '400 meter hurdles', 'high jump']) , "Testing that track_events was created correctly.")
         self.assertNotIn('.keys()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertIn('.items()', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
         self.assertNotIn('in track_medal_counts:', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

   myTests().main()

