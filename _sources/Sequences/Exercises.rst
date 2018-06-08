..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: sequences-8-
   :start: 1

Exercises
=========

.. activecode:: ac5_8_1
   :language: python
   :autograde: unittest
   :practice: T

   **1.** Assign the number of elements in ``lst`` to the variable ``output``.
   ~~~~
   lst = ["hi", "morning", "dog", "506", "caterpillar", "balloons", 106, "yo-yo", "python", "moon", "water", "sleepy", "daffy", 45, "donald", "whiteboard", "glasses", "markers", "couches", "butterfly", "100", "magazine", "door", "picture", "window", ["Olympics", "handle"], "chair", "pages", "readings", "burger", "juggle", "craft", ["store", "poster", "board"], "laptop", "computer", "plates", "hotdog", "salad", "backpack", "zipper", "ring", "watch", "finger", "bags", "boxes", "pods", "peas", "apples", "horse", "guinea pig", "bowl", "EECS"]
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(output, 52, "Testing that output value is assigned to correct value.")

   myTests().main()

.. activecode:: ac5_8_2
   :language: python
   :autograde: unittest
   :practice: T

   **2.** Assign the value of the 34th element of ``lst`` to the variable ``output``.
   ~~~~
   lst = ["hi", "morning", "dog", "506", "caterpillar", "balloons", 106, "yo-yo", "python", "moon", "water", "sleepy", "daffy", 45, "donald", "whiteboard", "glasses", "markers", "couches", "butterfly", "100", "magazine", "door", "picture", "window", ["Olympics", "handle"], "chair", "pages", "readings", "burger", "juggle", "craft", ["store", "poster", "board"], "laptop", "computer", "plates", "hotdog", "salad", "backpack", "zipper", "ring", "watch", "finger", "bags", "boxes", "pods", "peas", "apples", "horse", "guinea pig", "bowl", "EECS"]
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(output, "laptop", "Testing that output value is assigned to correct value.")

   myTests().main()


.. activecode:: ac5_8_3
   :language: python
   :autograde: unittest
   :practice: T
   
   **3.** Assign the number of elements in ``lst`` to the variable ``num_lst``.
   ~~~~
   lst = ["hi", "goodbye", "python", "106", "506", 91, ['all', 'Paul', 'Jackie', "UMSI", 1, "Stephen", 4.5], 109, "chair", "pizza", "wolverine", 2017, 3.92, 1817, "account", "readings", "papers", 12, "facebook", "twitter", 193.2, "snapchat", "leaders and the best", "social", "1986", 9, 29, "holiday", ["women", "olympics", "gold", "rio", 21, "2016", "men"], "26trombones"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(num_lst, 30, "Testing that num_lst has the correct length assigned.")

   myTests().main()

.. activecode:: ac5_8_4
   :language: python
   :autograde: unittest
   :practice: T
   
   **4.** Assign the value of the 23rd element of ``lst`` to the variable ``checking``.
   ~~~~
   lst = ["hi", "goodbye", "python", "106", "506", 91, ['all', 'Paul', 'Jackie', "UMSI", 1, "Stephen", 4.5], 109, "chair", "pizza", "wolverine", 2017, 3.92, 1817, "account", "readings", "papers", 12, "facebook", "twitter", 193.2, "snapchat", "leaders and the best", "social", "1986", 9, 29, "holiday", ["women", "olympics", "gold", "rio", 21, "2016", "men"], "26trombones"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(checking, "leaders and the best", "Testing that checking has the correct element assigned.")

   myTests().main()

.. activecode:: ac5_8_5
   :language: python
   :autograde: unittest
   :practice: T

   **5.** Assign the value of the last element of ``lst`` to the variable ``output``. Do this so that the length of lst doesn't matter.
   ~~~~
   lst = ["hi", "morning", "dog", "506", "caterpillar", "balloons", 106, "yo-yo", "python", "moon", "water", "sleepy", "daffy", 45, "donald", "whiteboard", "glasses", "markers", "couches", "butterfly", "100", "magazine", "door", "picture", "window", ["Olympics", "handle"], "chair", "pages", "readings", "burger", "juggle", "craft", ["store", "poster", "board"], "laptop", "computer", "plates", "hotdog", "salad", "backpack", "zipper", "ring", "watch", "finger", "bags", "boxes", "pods", "peas", "apples", "horse", "guinea pig", "bowl", "EECS"]
   
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testThree(self):
         self.assertEqual(output, "EECS", "Testing that output value is assigned to correct value.")

   myTests().main()

.. activecode:: ac5_8_6
   :language: python
   :autograde: unittest
   :practice: T
   
   **6.** Assign the last element of ``lst`` to the variable ``end_elem``. Do this so that it works no matter how long lst is.
   ~~~~
   lst = ["hi", "goodbye", "python", "106", "506", 91, ['all', 'Paul', 'Jackie', "UMSI", 1, "Stephen", 4.5], 109, "chair", "pizza", "wolverine", 2017, 3.92, 1817, "account", "readings", "papers", 12, "facebook", "twitter", 193.2, "snapchat", "leaders and the best", "social", "1986", 9, 29, "holiday", ["women", "olympics", "gold", "rio", 21, "2016", "men"], "26trombones"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(end_elem, lst[-1], "Testing that end_elem has the correct element assigned.")

   myTests().main()


.. activecode:: ac5_8_7
   :language: python
   :autograde: unittest
   :practice: T

   **7.** Create a new list of the 6th through 13th elements of ``lst`` (eight items in all) and assign it to the variable ``output``.
   ~~~~
   lst = ["swimming", 2, "water bottle", 44, "lollipop", "shine", "marsh", "winter", "donkey", "rain", ["Rio", "Beijing", "London"], [1,2,3], "gold", "bronze", "silver", "mathematician", "scientist", "actor", "actress", "win", "cell phone", "leg", "running", "horse", "socket", "plug", ["Phelps", "le Clos", "Lochte"], "drink", 22, "happyfeet", "penguins"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testFour(self):
         self.assertEqual(output, lst[5:13], "Testing that output value is assigned to correct value.")

   myTests().main()


.. activecode:: ac5_8_8
   :language: python
   :autograde: unittest
   :practice: T

   **8.** Create a new list using the 9th through 12th elements (four items in all) of ``new_lst`` and assign it to the variable ``sub_lst``.
   ~~~~
   new_lst = ["computer", "luxurious", "basket", "crime", 0, 2.49, "institution", "slice", "sun", ["water", "air", "fire", "earth"], "games", 2.7, "code", "java", ["birthday", "celebration", 1817, "party", "cake", 5], "rain", "thunderstorm", "top down"]

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sub_lst, new_lst[8:12], "Testing that sub_lst has the correct elements assigned.")

   myTests().main()

.. activecode:: ac5_8_9
   :language: python
   :autograde: unittest
   :practice: T

   **9.** Create a variable ``output`` and assign it to a list whose elements are the words in the string ``str1``.
   ~~~~
   str1 = "OH THE PLACES YOU'LL GO"

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testSix(self):
         self.assertEqual(output, ["OH", "THE", "PLACES", "YOU'LL", "GO"], "Testing that output value is assigned to correct value.")

   myTests().main()


.. activecode:: ac5_8_10
   :language: python
   :autograde: unittest
   :practice: T

   **10.** Create a variable called ``wrds`` and assign to it a list whose elements are the words in the string ``sent``. Do not worry about punctuation.
   ~~~~
   sent = "The bicentennial for our university is in 2017!"

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(wrds, sent.split(), "Testing that wrds has been correctly assigned.")

   myTests().main()
