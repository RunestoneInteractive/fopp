..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Week 4 Assessment 3
-------------------

.. mchoice:: assess_question4_1_3_1
   :answer_a: I.
   :answer_b: II.
   :answer_c: III.
   :answer_d: IV.
   :feedback_a: Yes, when we make our own diagrams we want to keep the old information because sometimes other variables depend on them. It can get cluttered though if there is a lot of information.
   :feedback_b: Not quite, we want to keep track of old information because sometimes other variables depend on them. 
   :feedback_c: Look again at what is happening when join is executed.
   :feedback_d: What happens to the spaces in a string when it is split by whitespace?
   :correct: a
   :practice: T
   :topics: 

   Which of these is a correct reference diagram following the execution of the following code?

   .. sourcecode:: python

    sent = "The mall has excellent sales right now."
    wrds = sent.split()
    wrds[1] = 'store'
    new_sent = " ".join(wrds)

   I.

   .. image:: Figures/week3a2_1.png
      :alt: First Potential Solution
   
   II.

   .. image:: Figures/week3a2_2.png
      :alt: Second Potential Solution
   
   III.

   .. image:: Figures/week3a2_3.png
      :alt: Third Potential Solution
   
   IV.

   .. image:: Figures/week3a2_4.png
      :alt: Fourth Potential Solution


.. activecode:: assess_ac_4_1_3_2
    :language: python

    **11.** Write code to find the postion of the string "Tony" in the list ``awards`` and save that information in the variable ``pos``.
    ~~~~
    awards = ['Emmy', 'Tony', 'Academy', 'Grammy']


    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

      def test_output(self):
        self.assertEqual(pos, 1, "Testing that pos is set correctly (Don't worry about actual and expected values).")

    myTests().main()
