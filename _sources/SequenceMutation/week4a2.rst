..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Week 4 Assessment 2
-------------------

**Check your understanding**

.. fillintheblank:: assess_question3_3_1_1

   What will be the value of ``a`` after the following code has executed?

   .. sourcecode:: python

    a = ["holiday", "celebrate!"]
    quiet = a
    quiet.append("company")


   The value of ``a`` will be

   -  :\[["']holiday["'], ["']celebrate!["'], ["']company["']\]: Good work!
      :\[["']holiday["'], ["']celebrate!["']\]: This is the old value of a - a has changed.
      :.*: Incorrect, try again.

.. mchoice:: assess_question3_3_1_2
   :answer_a: yes
   :answer_b: no
   :feedback_a: Yes, the intent by the programmer was not executed properly if they wanted to print the list ['q', 'u'] because of aliasing.
   :feedback_b: If the intent was to print the list ['q', 'u'] then aliasing would cause a problem because z also replaces the 'u' with an 'i'.
   :correct: a
   :practice: T
   :topics: 

   Could aliasing cause potential confusion in this problem?

   .. sourcecode:: python

    b = ['q', 'u', 'i']
    z = b
    b[1] = 'i'
    z.remove('i')
    print(z)

.. mchoice:: assess_question3_3_1_3
   :answer_a: yes
   :answer_b: no
   :feedback_a: Though both lists have changed, it is not as likely to cause confusion.
   :feedback_b: These operations on the lists are not likely to cause confusion.
   :correct: b
   :practice: T
   :topics: 

   Could aliasing cause potential confusion in this problem?

   .. sourcecode:: python
  
    b = ['q', 'u', 'i']
    z = b
    b[1] = 'i'
    for elem in b:
        print(elem)
    for item in z:
        print(item)

.. mchoice:: assess_question3_3_1_4
   :answer_a: yes
   :answer_b: no
   :feedback_a: Since a string is immutable, aliasing won't be as confusing. Beware of using something like item = item + new_item with mutable objects though because it creates a new object. However, when we use += then that doesn't happen.
   :feedback_b: Since a string is immutable, aliasing won't be as confusing. Beware of using something like item = item + new_item with mutable objects though because it creates a new object. However, when we use += then that doesn't happen.
   :correct: b
   :practice: T
   :topics:

   Could aliasing cause potential confusion in this problem?

   .. sourcecode:: python

    sent = "Holidays can be a fun time when you have good company!"
    phrase = sent
    phrase = phrase + " Holidays can also be fun on your own!"

.. mchoice:: assess_question3_3_1_5
   :answer_a: I.
   :answer_b: II.
   :answer_c: III.
   :answer_d: IV.
   :feedback_a: When an object is concatinated with another using +=, a new copy is made. If this is done in the longer form (item = item + object) then it edits the original object.
   :feedback_b: When an object is concatinated with another using +=, a new copy is made. If this is done in the longer form (item = item + object) then it edits the original object.
   :feedback_c: When an object is concatinated with another using +=, a new copy is made. If this is done in the longer form (item = item + object) then it edits the original object.
   :feedback_d: Yes, the behavior of item = item + object_two is different than item += object_two where the first version makes a new object entirely and the second version changes the original object so that object_two is added to the first.
   :correct: d
   :practice: T
   :topics: 

   Which of these is a correct reference diagram following the execution of the following code?
   
   .. sourcecode:: python

    x = ["dogs", "cats", "birds", "reptiles"]
    y = x
    x += ['fish', 'horses']
    y = y + ['sheep']

   I.

   .. image:: Figures/week3a3_1.png
      :alt: First Potential Solution
   
   II.

   .. image:: Figures/week3a3_2.png
      :alt: Second Potential Solution
   
   III.

   .. image:: Figures/week3a3_3.png
      :alt: Third Potential Solution
   
   IV.

   .. image:: Figures/week3a3_4.png
      :alt: Fourth Potential Solution
