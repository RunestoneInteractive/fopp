..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: dictionaries-2-
   :start: 1

.. index:: del; dictionary
   statement; del

Dictionary operations
---------------------

The ``del`` statement removes a key-value pair from a dictionary. For example, the following dictionary contains the 
names of various fruits and the number of each fruit in stock. If someone buys all of the pears, we can remove the 
entry from the dictionary.

.. codelens:: clens10_2_1
    :python: py3

    inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}
    
    del inventory['pears']

Dictionaries are mutable, as the delete operation above indicates. As we've seen before with lists, this means that the 
dictionary can be modified by referencing an association on the left hand side of the assignment statement. In the 
previous example, instead of deleting the entry for ``pears``, we could have set the inventory to ``0``.

.. codelens:: clens10_2_2
    :python: py3

    inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}
    
    inventory['pears'] = 0

.. note:: 
   
   Setting the value associated with ``pears`` to 0 has a different effect than removing the key-value pair entirely 
   with ``del``. Try printout out the two dictionaries in the examples above.

Similarily, a new shipment of 200 bananas arriving could be handled like this. Notice that there are now 512 bananas---
the dictionary has been modified. Note also that the ``len`` function also works on dictionaries. It returns the number 
of key-value pairs.

.. codelens:: clens10_2_3
    :python: py3

    inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}    
    inventory['bananas'] = inventory['bananas'] + 200

    numItems = len(inventory)

Notice that there are now 512 bananas---the dictionary has been modified. Note also that the ``len`` function also 
works on dictionaries. It returns the number of key-value pairs.

**Check your understanding**

.. mchoice:: question10_2_1
   :answer_a: 12
   :answer_b: 0
   :answer_c: 18
   :answer_d: Error, there is no entry with mouse as the key.
   :correct: c
   :feedback_a: 12 is associated with the key cat.
   :feedback_b: The key mouse will be associated with the sum of the two values.
   :feedback_c: Yes, add the value for cat and the value for dog (12 + 6) and create a new entry for mouse.
   :feedback_d: Since the new key is introduced on the left hand side of the assignment statement, a new key-value pair is added to the dictionary.
   :practice: T

   What is printed by the following statements?
   
   .. sourcecode:: python

     mydict = {"cat":12, "dog":6, "elephant":23}
     mydict["mouse"] = mydict["cat"] + mydict["dog"]
     print(mydict["mouse"])

.. activecode:: ac10_2_1
   :language: python
   :autograde: unittest

   **2.** Update the value for "Phelps" in the dictionary ``swimmers`` to include his medals from the Rio Olympics by adding 5 to the current value (Phelps will now have 28 total medals). Do not rewrite the dictionary.
   ~~~~
   swimmers = {'Manuel':4, 'Lochte':12, 'Adrian':7, 'Ledecky':5, 'Dirado':4, 'Phelps':23}
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testThree(self):
         self.assertEqual(sorted(swimmers.items()), sorted([('Adrian', 7), ('Dirado', 4), ('Ledecky', 5), ('Lochte', 12), ('Phelps', 28), ('Manuel',4)]), "Testing that swimmers is assigned to correct values.")

   myTests().main()
