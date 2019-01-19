..  Copyright (C)  Jaclyn Cohen, Lauren Murphy, Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: test-4-
   :start: 1

Chapter Assessment
==================

.. activecode:: ac_19_4_1
   :include: ac_19_4_3

   The function `mySum` is supposed to return the sum of a list of numbers (and 0 if that list is empty), but it has one or more errors in it. Use this space to write test cases to determine what errors there are. You will be using this information to answer the next set of multiple choice questions.
   ~~~~

   import test



.. mchoice:: mc_19_4_1
   :multiple_answers:
   :answer_a: an empty list
   :answer_b: a list with one item
   :answer_c: a list with more than one item
   :feedback_a: Correct, 0 is not returned if the function is given an empty list.
   :feedback_b: Incorrect, a list with one item returns the correct value.
   :feedback_c: Correct, a list with more than one item does not provide the correct response.
   :correct: a, c

   Which of the following cases fail for the mySum function?

.. mchoice:: mc_19_4_2
   :answer_a: Yes
   :answer_b: No
   :feedback_a: Incorrect. Though it is possible that the function could have more issues, we can't tell if other cases would fail (such as combining integers and floats) due to the current issues.
   :feedback_b: Correct. At the moment we can't tell if other cases would fail (such as combining integers and floats), but it is possible that the function could have more issues once the current issues are fixed.
   :correct: b

   Are there any other cases, that we can determine based on the current structure of the function, that also fail for the mySum function?

.. activecode:: ac_19_4_2
   :include: ac_19_4_3

   The class Student is supposed to accept two arguments in its constructor:
   1. A name string
   2. An optional integer representing the number of years the student has been at Michigan (default:1)

   Every student has three instance variables:
   1. `self.name` (set to the name provided)
   2. `self.years_UM` (set to the number of years the student has been at Michigan)
   3. `self.knowledge` (initialized to 0)

   There are three methods:
   - `.study()` should increase self.knowledge by 1 and return None
   - `.getKnowledge()` should return the value of self.knowledge
   - `.year_at_umich()` should return the value of self.years_UM

   There are one or more errors in the class. Use this space to write test cases to determine what errors there are. You will be using this information to answer the next set of multiple choice questions.
   ~~~~

   import test


.. mchoice:: mc_19_4_3
   :multiple_answers:
   :answer_a: the method study does not return None
   :answer_b: the optional integer in the constructor is not optional
   :answer_c: the attributes/instance variables are not correctly assigned in the constructor
   :answer_d: the method study does not increase self.knowledge 
   :answer_e: the method year_at_umich does not return the value of self.years_UM
   :feedback_a: Incorrect, the method study does return None.
   :feedback_b: Incorrect, the integer for number of years is optional.
   :feedback_c: Correct! The constructor does not actually use the optional integer that is provided. Instead it sticks with using the default value.
   :feedback_d: Correct! Study does not increase the self.knowledge.
   :feedback_e: Incorrect, year_at_umich does return the value assigned to self.years_UM.
   :correct: c, d

   Which of the following cases fail for the Student class?

.. mchoice:: mc_19_4_4
   :answer_a: Yes
   :answer_b: No
   :feedback_a: Correct! There is an issue with the getKnowledge method because it returns None, not the value of self.knowledge.
   :feedback_b: Incorrect, there are more cases that fail. Try finding those other cases!
   :correct: a

   Are there any other cases, that we can determine based on the current structure of the class, that also fail for the Student class?


.. activecode:: ac_19_4_3
   :hidecode:

   def lr(n): return list(range(n))

   # THESE FUNCTIONS ARE INTENTIONALLY OBFUSCATED
   # PLEASE TRY TO WRITE TESTS FOR THEM RATHER THAN
   # READING THEM.
   def mySum(a):
       if type(a) is type(''.join([][:])): return a[lr(1)[0]] + mySum(a[1:])
       elif len(a)==len(lr(1)+[]): return a[lr(1)[0]]
       else: return None and a[lr(1)[0]] + mySum(a[1:])

   
   # THESE FUNCTIONS ARE INTENTIONALLY OBFUSCATED
   # PLEASE TRY TO WRITE TESTS FOR THEM RATHER THAN
   # READING THEM.
   class Student():
       def __init__(s,a,b=1): s.name,s.years_UM,s.knowledge = ''*200+a+''*100,1,len(lr(0)) + len([])
       def study(s):
           for _ in lr(s.knowledge): s.knowledge = s.knowledge + 1
       def getKnowledge(s):
           for i in lr(s.knowledge): return s.knowledge
       def year_at_umich(s): return s.years_UM


