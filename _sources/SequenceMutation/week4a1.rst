..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Week 4 Assessment 1
-------------------

**Check your understanding**

.. mchoice:: assess_question4_1_1_1
   :answer_a: I.
   :answer_b: II.
   :answer_c: Neither is the correct reference diagram.
   :feedback_a: Yes, when we are using the remove method, we are just editing the existing list, not making a new copy.
   :feedback_b: When we use the remove method, we just edit the existing list. We do not make a new copy that does not include the removed object.
   :feedback_c: One of the diagrams is correct - look again at what is happening to lst.
   :correct: a
   :practice: T
   :topics: 

   Which of these is a correct reference diagram following the execution of the following code?

   .. sourcecode:: python
   
    lst = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']
    lst.remove('pluto')
    first_three = lst[:2]

   I. 

   .. image:: Figures/week3a1_1.png
      :alt: First Potential Solution

   II. 

   .. image:: Figures/week3a1_2.png
      :alt: Second Potential Solution

.. mchoice:: assess_question4_1_1_2
   :answer_a: .pop()
   :answer_b: .insert()
   :answer_c: .count()
   :answer_d: .index()
   :feedback_a: pop removes and returns items (default is to remove and return the last item in the list) 
   :feedback_b: insert will add an item at whatever position is specified.
   :feedback_c: count returns the number of times something occurs in a list
   :feedback_d: Yes, index will return the position of the first occurance of an item.
   :correct: d
   :practice: T
   :topics: 

   Which method would you use to figure out the position of an item in a list?

.. mchoice:: assess_question4_1_1_3
   :answer_a: .insert()
   :answer_b: .pop()
   :answer_c: .append()
   :answer_d: .remove()
   :feedback_a: While you can use insert, it is not the best method to use because you need to specify that you want to stick the new item at the end.
   :feedback_b: pop removes an item from a list
   :feedback_c: Yes, though you can use insert to do the same thing, you don't need to provide the position.
   :feedback_d: remove gets rid of the first occurance of any item that it is told. It does not add an item.
   :correct: c
   :practice: T
   :topics: 

   Which method best to use when adding an item to the end of a list?


.. activecode:: assess_ac4_1_1_4
    :language: python

    **8.** Write code to add 'horseback riding' to the third position (english third) in the list ``sports``.
    ~~~~
    sports = ['cricket', 'football', 'volleyball', 'baseball', 'softball', 'track and field', 'curling', 'ping pong', 'hockey']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(sports, ['cricket', 'football', 'horseback riding', 'volleyball', 'baseball', 'softball', 'track and field', 'curling', 'ping pong', 'hockey'], "Testing that sports is set correctly (Don't worry about actual and expected values).")

    myTests().main()

.. activecode:: assess_ac4_1_1_5
    :language: python

    **9.** Write code to take 'London' out of the list ``trav_dest``.
    ~~~~
    trav_dest = ['Beirut', 'Milan', 'Pittsburgh', 'Buenos Aires', 'Nairobi', 'Kathmandu', 'Osaka', 'London', 'Melbourne']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(trav_dest, ['Beirut', 'Milan', 'Pittsburgh', 'Buenos Aires', 'Nairobi', 'Kathmandu', 'Osaka', 'Melbourne'], "Testing that trav_dest is set correctly (Don't worry about actual and expected values).")

    myTests().main()

.. activecode:: assess_ac4_1_1_6
    :language: python

    **10.** Write code to add 'Guadalajara' to the end of the list ``trav_dest`` using a list method.
    ~~~~
    trav_dest = ['Beirut', 'Milan', 'Pittsburgh', 'Buenos Aires', 'Nairobi', 'Kathmandu', 'Osaka', 'Melbourne']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(trav_dest, ['Beirut', 'Milan', 'Pittsburgh', 'Buenos Aires', 'Nairobi', 'Kathmandu', 'Osaka', 'Melbourne', 'Guadalajara'], "Testing that trav_dest is set correctly (Don't worry about actual and expected values).")
        self.assertNotIn('+', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")
        self.assertIn('.', self.getEditorText(), "Testing that a method was used in your code (Don't worry about actual and expected values).")

    myTests().main()

.. activecode:: assess_ac4_1_1_7
    :language: python

    **12.** Write code to rearrage the strings in the list ``winners`` so that they are in alphabetical order from A to Z.
    ~~~~
    winners = ['Kazuo Ishiguro', 'Rainer Weiss', 'Youyou Tu', 'Malala Yousafzai', 'Alice Munro', 'Alvin E. Roth']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(winners, ['Alice Munro', 'Alvin E. Roth', 'Kazuo Ishiguro', 'Malala Yousafzai', 'Rainer Weiss', 'Youyou Tu'], "Testing that winners is set correctly (Don't worry about actual and expected values).") 

    myTests().main()      

.. activecode:: assess_ac4_1_1_8
    :language: python
    :topics: Sequences/ListSlices

    **13.** Write code to switch the order of the ``winners`` list so that it is now Z to A. Assign this list to the variable ``z_winners``. 
    ~~~~
    winners = ['Alice Munro', 'Alvin E. Roth', 'Kazuo Ishiguro', 'Malala Yousafzai', 'Rainer Weiss', 'Youyou Tu']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(z_winners, ['Youyou Tu','Rainer Weiss', 'Malala Yousafzai','Kazuo Ishiguro', 'Alvin E. Roth', 'Alice Munro'], "Testing that z_winners is set correctly (Don't worry about actual and expected values).")

    myTests().main()
