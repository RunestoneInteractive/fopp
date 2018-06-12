..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Week 1 Assessment 1
-------------------

**Check your understanding**

.. mchoice:: assess_question1_1_1
   :answer_a: A solution to a problem that can be solved by a computer.
   :answer_b: A step by step list of instructions that if followed exactly will solve the problem under consideration.
   :answer_c: A series of instructions implemented in a programming language.
   :answer_d: A special kind of notation used by programmers.
   :feedback_a: While it is true that algorithms often do solve problems, this is not the best answer.  An algorithm is more than just the solution to the problem for a computer.  An algorithm can be used to solve all sorts of problems, including those that have nothing to do with computers.
   :feedback_b: Algorithms are like recipes:  they must be followed exactly, they must be clear and unambiguous, and they must end.
   :feedback_c: Programming languages are used to express algorithms, but an algorithm does not have to be expressed in terms of a programming language.
   :feedback_d: Programmers sometimes use a special notation to illustrate or document an algorithm, but this is not the definition of an algorithm.
   :correct: b
   :practice: T
   :topics: GeneralIntro/Algorithms

   An algorithm is:

.. mchoice:: assess_question1_1_2
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


.. mchoice:: assess_question1_1_3
   :answer_a: natural languages can be parsed while formal languages cannot.
   :answer_b: ambiguity, redundancy, and literalness.
   :answer_c: there are no differences between natural and formal languages.
   :answer_d: tokens, structure, syntax, and semantics.
   :feedback_a: Actually both languages can be parsed (determining the structure of the sentence), but formal languages can be parsed more easily in software.
   :feedback_b: All of these can be present in natural languages, but cannot exist in formal languages.
   :feedback_c: There are several differences between the two but they are also similar.
   :feedback_d: These are the similarities between the two.
   :correct: b
   :practice: T
   :topics: GeneralIntro/FormalandNaturalLanguages

   The differences between natural and formal languages include:

.. mchoice:: assess_question1_1_4
   :answer_a: True
   :answer_b: False
   :feedback_a: It usually takes longer to read a program because the structure is as important as the content and must be interpreted in smaller pieces for understanding.
   :feedback_b: It usually takes longer to read a program because the structure is as important as the content and must be interpreted in smaller pieces for understanding.
   :correct: b
   :practice: T
   :topics: GeneralIntro/FormalandNaturalLanguages

   True or False:  Reading a program is like reading other kinds of text.

.. activecode:: assess_question1_1_5
   :language: python
   :autograde: unittest

   1 Write code to print out the phrase "Hello World".
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertIn("Hello World", self.getOutput(), "Testing output (Don't worry about actual and expected values).")

   myTests().main()
