..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Week 5 Assessment 1
-------------------

**Check your understanding**

.. mchoice:: assess_question5_1_1_1
   :answer_a: byzo
   :answer_b: x
   :answer_c: z
   :answer_d: c
   :correct: d
   :feedback_a: This is the variable with our string, but it does not accumulate anything.
   :feedback_b: This is the iterator variable. It changes each time but does not accumulate.
   :feedback_c: This is a variable inside the for loop. It changes each time but does not accumulate or retain the old expressions that were assigned to it.
   :feedback_d: Yes, this is the accumulator variable. By the end of the program, it will have a full count of how many items are in byzo.
   :practice: T

   Which of these is the accumulator variable?
   
   .. sourcecode:: python

    byzo = 'hello world!'
    c = 0
    for x in byzo:
        z = x + "!"
        print(z)
        c = c + 1

.. mchoice:: assess_question5_1_1_2
   :answer_a: cawdra
   :answer_b: elem
   :answer_c: t
   :correct: a
   :feedback_a: Yes, this is the sequence that we iterate over.
   :feedback_b: This is the iterator variable. It changes each time but is not the whole sequence itself.
   :feedback_c: This is the accumulator variable. By the end of the program, it will have a full count of how many items are in cawdra.
   :practice: T

   Which of these is the sequence?
   
   .. sourcecode:: python

    cawdra = ['candy', 'daisy', 'pear', 'peach', 'gem', 'crown']
    t = 0
    for elem in cawdra:
        t = t + len(elem)

.. mchoice:: assess_question5_1_1_3
   :answer_a: item
   :answer_b: lst
   :answer_c: num
   :correct: a
   :feedback_a: Yes, this is the iterator variable. It changes each time but is not the whole sequence itself.
   :feedback_b: This is the sequence that we iterate over.
   :feedback_c: This is the accumulator variable. By the end of the program, it will have the total value of the integers that are in lst.
   :practice: T

   Which of these is the iterator variable?
   
   .. sourcecode:: python

    lst = [5, 10, 3, 8, 94, 2, 4, 9]
    num = 0
    for item in lst:
        num += item

.. fillintheblank:: assess_question5_1_1_4

   What is the iterator variable in the following?

   .. sourcecode:: python

    rest = ["sleep", 'dormir', 'dormire', "slaap", 'sen', 'yuxu', 'yanam']
    let = ''
    for phrase in rest:
        let += phrase[0]

   The iterator variable is

   -  :phrase: Good work!
      :rest: rest is the sequence, not the iterator variable.
      :let: let is the accumulator variable, not the iterator variable.
      :.*: Incorrect, try again.

.. activecode:: assess_week5_01
   :language: python
   :autograde: unittest
   :practice: T

   2. Currently there is a string called ``str1``. Write code to create a list called ``chars`` which should contain the characters from ``str1``. Each character in ``str1`` should be its own element in the list ``chars``.
   ~~~~
   str1 = "I love python"
   # HINT: what's the accumulator? That should go here.
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(chars, ['I', ' ', 'l', 'o', 'v', 'e', ' ', 'p', 'y', 't', 'h', 'o', 'n'], "Testing that chars is assigned to correct values.")

   myTests().main()
