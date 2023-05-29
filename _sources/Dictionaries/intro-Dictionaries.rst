..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: dictionary, mapping type, key-value pair
   single: [ ]; dictionary access
   value; dictionary

.. qnum::
   :prefix: dictionaries-1-
   :start: 1

Getting Started with Dictionaries
=================================

Here is a video to help introduce you to the important concepts in creating and using Python dictionaries.

.. youtube:: eDQ19ahXsSk
    :divid: goog_keyvalpairs
    :height: 315
    :width: 560
    :align: left

Let us look at an example of using a dictionary for a simple problem. We will create a dictionary to translate English words into Spanish.
For this dictionary, the keys are strings and the values will also be strings.

One way to create a dictionary is to start with the empty dictionary and add **key-value pairs**. The empty dictionary
is denoted ``{}``.

.. codelens:: clens10_1_1
    :python: py3

    eng2sp = {}
    eng2sp['one'] = 'uno'
    eng2sp['two'] = 'dos'
    eng2sp['three'] = 'tres'
    print(eng2sp)

The first assignment creates an empty dictionary named ``eng2sp``. The other assignments add new key-value pairs to
the dictionary. The left hand side gives the dictionary and the key being associated. The right hand side gives the
value being associated with that key. We can print the current value of the dictionary in the usual way. The key-value
pairs of the dictionary are separated by commas. Each pair contains a key and a value separated by a colon.

The order of the pairs may not be what you expected. Python uses complex algorithms, designed for very fast access, to
determine where the key-value pairs are stored in a dictionary. For our purposes we can think of this ordering as
unpredictable [*]_ .


Another way to create a dictionary is to provide a bunch of key-value pairs using the same syntax as the previous
output.

.. codelens:: clens10_1_2
    :python: py3

    eng2sp = {'three': 'tres', 'one': 'uno', 'two': 'dos'}
    print(eng2sp)

It doesn't matter what order we write the pairs. The values in a dictionary are accessed with keys, not with indices,
so there is no need to care about ordering.

Here is how we use a key to look up the corresponding value.

.. codelens:: clens10_1_3
    :python: py3

    eng2sp = {'three': 'tres', 'one': 'uno', 'two': 'dos'}

    value = eng2sp['two']
    print(value)
    print(eng2sp['one'])

The key ``'two'`` yields the value ``'dos'``. The key ``one`` yields the value ``uno``.

**Check your understanding**

.. mchoice:: question10_1_1
   :answer_a: False
   :answer_b: True
   :correct: b
   :feedback_a: Dictionaries associate keys with values but there is no assumed order for the entries.
   :feedback_b: Yes, dictionaries are associative collections meaning that they store key-value pairs.

   A dictionary is an unordered collection of key-value pairs.

.. mchoice:: question10_1_2
   :answer_a: 12
   :answer_b: 6
   :answer_c: 23
   :answer_d: Error, you cannot use the index operator with a dictionary.
   :correct: b
   :feedback_a: 12 is associated with the key cat.
   :feedback_b: Yes, 6 is associated with the key dog.
   :feedback_c: 23 is associated with the key elephant.
   :feedback_d: The [ ] operator, when used with a dictionary, will look up a value based on its key.
   :practice: T

   What is printed by the following statements?

   .. sourcecode:: python

     mydict = {"cat":12, "dog":6, "elephant":23}
     print(mydict["dog"])

.. activecode:: ac10_1_1
   :language: python
   :autograde: unittest
   :practice: T

   **3.** Create a dictionary that keeps track of the USA's Olympic medal count. Each key of the dictionary should be the type of medal (gold, silver, or bronze) and each key's value should be the number of that type of medal the USA's won. Currently, the USA has 33 gold medals, 17 silver, and 12 bronze. Create a dictionary saved in the variable ``medals`` that reflects this information.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(medals.items()), sorted([("gold", 33), ("silver", 17), ("bronze", 12)]), "Testing that medals is correct.")

   myTests().main()

.. activecode:: ac10_1_2
   :language: python
   :autograde: unittest
   :practice: T

   **4.** You are keeping track of olympic medals for Italy in the 2016 Rio Summer Olympics! At the moment, Italy has 7 gold medals, 8 silver medals, and 6 bronze medals. Create a dictionary called ``olympics`` where the keys are the types of medals, and the values are the number of that type of medals that Italy has won so far.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(olympics.items()), sorted([('gold', 7), ('silver', 8), ('bronze', 6)]), "Testing that olympics was created correctly.")

   myTests().main()

.. tabbed:: tabbed_ac10_3_6

    .. tab:: Question

        .. activecode:: ac10_3_6
            :language: python
            :autograde: unittest
            :practice: T

            Every four years, the summer Olympics are held in a different country. Add a key-value pair to the dictionary ``places`` that reflects that the 2016 Olympics were held in Brazil. Do not rewrite the entire dictionary to do this!
            ~~~~
            places = {"Australia":2000, "Greece":2004, "China":2008, "England":2012}

            =====

            from unittest.gui import TestCaseGui

            class myTests(TestCaseGui):

                  def testOne(self):
                     self.assertEqual(sorted(places.items()), sorted([("Australia", 2000), ("Greece", 2004), ("China", 2008), ("England", 2012), ("Brazil", 2016)]), "Testing that places has been updated correctly.")

            myTests().main()

    .. tab:: Answer

        Add the following line:

        .. sourcecode:: python

            places['Brazil'] = 2016



.. [*] Instructors note: Python version 3.7 and later `provide ordering guarantees <https://mail.python.org/pipermail/python-dev/2017-December/151283.html>`_. However, it is best practice to write code that does not rely on any particular key order so this book will treat key-value pairs as unordered.