..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

:skipreading:`True`

.. qnum::
   :prefix: intro-12-
   :start: 1

Chapter Assessment
------------------

**Check your understanding**

.. mchoice:: assess_question1_1_1
   :answer_a: Because computers are better at solving problems.
   :answer_b: So that you don't have to solve the problem yourself. 
   :answer_c: So that you have a general solution to a problem.
   :answer_d: Because you need a set of instructions to follow.
   :feedback_a: Computers aren't necessarily better at solving problems, though often they can be quicker than humans. Additionally, algorithms can be used to solve non-computer related problems.
   :feedback_b: While it is beneficial to have a set of instructions that others can follow, this isn't the best answer. By creating the algorithm, you solve a problem for yourself and others.
   :feedback_c: Yes, by creating a general solution you can then express it as a program if you choose, and then use a computer to automate the execution.
   :feedback_d: While it is beneficial to have a set of instructions as that is what an algorithm **is**, it is not **why** we would want to create one.
   :correct: c
   :practice: T
   :topics: GeneralIntro/Algorithms

   Why create an algorithm?

.. activecode:: assess_question1_1_2
    :language: python
    :autograde: unittest

    Write code to print out the phrase "Hello World".
    ~~~~

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertIn("Hello World", self.getOutput(), "Your output should contain a phrase Hello World")

    myTests().main()


Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {% for q in questions: %}
        <div class='oneq full-width'>
            {{ q['htmlsrc']|safe }}
        </div>
    {% endfor %}
