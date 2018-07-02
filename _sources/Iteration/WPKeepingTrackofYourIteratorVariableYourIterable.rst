..  Copyright (C) Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: iter-7-
   :start: 1

WP: Keeping Track of Your Iterator Variable and Your Iterable
=============================================================

When students first begin using for loops, they sometimes have difficulty understanding the difference between the iterator variable and the iterable. 

The iterable is the object that you will parsing through in a for loop. Generally, this object does not change while the for loop is being executed.

The iterator variable is the variable which stores a portion of the iterable when the for loop is being executed. Each time the loop iterates, the value of the iterator variable will change to a different portion of the iterable.  

.. mchoice:: question3_2_1_2
   :answer_a: string
   :answer_b: list
   :answer_c: tuple
   :answer_d: iterable
   :answer_e: error, unable to iterate over the object.
   :feedback_a: Incorrect, that is not the type of the iterable.
   :feedback_b: Yes, the iterable is n, and it is a list.
   :feedback_c: Incorrect, that is not the type of the iterable.
   :feedback_d: Incorrect, that is not the type of the iterable.
   :feedback_e: Incorrect, Python can iterate over this type.
   :correct: b
   :practice: T
   :topics: 

   What is the type of your iterable?

   .. sourcecode:: python

       n = ["word", "phrase", 8, ("beam")]
       for item in n:
           print(item)


.. mchoice:: question3_2_1_2
   :answer_a: string
   :answer_b: list
   :answer_c: tuple
   :answer_d: iterable
   :answer_e: error, unable to iterate over the object.
   :feedback_a: Yes, the iterable in this example is a string
   :feedback_b: Incorrect, that is not the type of the iterable.
   :feedback_c: Incorrect, that is not the type of the iterable.
   :feedback_d: Incorrect, that is not the type of the iterable.
   :feedback_e: Incorrect, Python can iterate over this type.

   :correct: a
   :practice: T
   :topics: 

   What is the type of your iterable?

   .. sourcecode:: python

       t = "couch"
       for z in t:
           print(z)

.. mchoice:: question3_2_1_2
   :answer_a: string
   :answer_b: list
   :answer_c: tuple
   :answer_d: iterable
   :answer_e: error, unable to iterate over the object.
   :feedback_a: Incorrect, there are no strings present in the code.
   :feedback_b: Incorrect, there are no lists present in the code.
   :feedback_c: Incorrect, there are no tuples in the code.
   :feedback_d: Incorrect, there are no iterable objects in the code.
   :feedback_e: Yes, Python is unable to iterate over integers and floats.
   :correct: e
   :practice: T
   :topics: 

   What is the type of your iterable?

   .. sourcecode:: python

       y = 18
       for z in y:
           print(z)


.. mchoice:: question3_2_1_2
   :answer_a: string
   :answer_b: list
   :answer_c: tuple
   :answer_d: iterable
   :answer_e: error, unable to iterate over the object.
   :feedback_a: Incorrect, the iterable is not a string.
   :feedback_b: Incorrect, there is no list in the code.
   :feedback_c: Yes, the iterable in this situation is a tuple.
   :feedback_d: Incorrect, that is not the best answer for this problem.
   :feedback_e: Incorrect, Python can iterate over this type.
   :correct: c
   :practice: T
   :topics: 

   What is the type of your iterable?

   .. sourcecode:: python

       t = ("couch", "chair", "washer", "dryer", "table")
       for z in t:
           print(z)

****************************************************************
****************************************************************
****************************************************************
****************************************************************
****************************************************************
.. mchoice:: question3_2_1_2
   :answer_a: string
   :answer_b: list
   :answer_c: tuple
   :answer_d: iterable
   :answer_e: error, unable to iterate over the object. 
   :feedback_a: 
   :feedback_b: 
   :feedback_c: 
   :feedback_d: 
   :correct: 
   :practice: T
   :topics: 

   What is the type of your iterable?

   .. sourcecode:: python

       t = "couch"
       for z in t:
           print(z)

****************************************************************
****************************************************************
****************************************************************
****************************************************************
****************************************************************

.. mchoice:: question3_2_1_2
   :answer_a: string
   :answer_b: list
   :answer_c: tuple
   :answer_d: integer
   :answer_e: error, unable to iterate and initialize the iterator variable
   :feedback_a: Correct! Every item in the iterator variable will be a string.
   :feedback_b: Incorrect, that is not the type of the iterator variable.
   :feedback_c: Incorrect, that is not the type of the iterator variable.
   :feedback_d: Incorrect, that is not the type of the iterator variable.
   :feedback_e: Incorrect, the for loop is iterating over an iterable object.
   :correct: a
   :practice: T
   :topics: 

   What’s the type of your iterator variable? 

   .. sourcecode:: python

       t = ["couch", "chair", "washer", "dryer", "table"]
       for z in t:
           print(z)


.. mchoice:: question3_2_1_2
   :answer_a: string
   :answer_b: list
   :answer_c: tuple
   :answer_d: integer
   :answer_e: error, unable to iterate and initialize the iterator variable
   :feedback_a: Incorrect, think about what the for loop will look at first.
   :feedback_b: Incorrect, that is the type of the iterable, not the iterator variable.
   :feedback_c: Incorrect, there is no tuple in the code.
   :feedback_d: Yes, the first item in t is an integer.
   :feedback_e: Incorrect, the for loop is iterating over an iterable object.
   :correct: d
   :practice: T
   :topics: 

   What’s the type of your iterator variable in the first iteration? 

   .. sourcecode:: python

       t = [9, "setter", 3, "wing spiker", 10, "middle blocker"]
       for z in t:
           print(z)


.. mchoice:: question3_2_1_2
   :answer_a: string
   :answer_b: list
   :answer_c: tuple
   :answer_d: integer
   :answer_e: error, unable to iterate and initialize the iterator variable
   :feedback_a: Yes, the second item in t is a string.
   :feedback_b: Incorrect, that is the type of the iterable, not the iterator variable.
   :feedback_c: Incorrect, there is no tuple in the code.
   :feedback_d: Incorrect, think about what the for loop will look at during the second iteration.
   :feedback_e: Incorrect, the for loop is iterating over an iterable object.
   :correct: a
   :practice: T
   :topics: 

   What’s the type of your iterator variable in the second iteration? 

   .. sourcecode:: python

       t = [9, "setter", 3, "wing spiker", 10, "middle blocker"]
       for z in t:
           print(z)



One exercise for a number from a list
One exercise for a string from a list
One exercise for a single character from a string
One exercise for a number from a range() output






.. codelens:: question3_2_1_2
   :question: What is the value of the iterator variable after line 5 executes?
   :feedback: The value of the iterator variable is changed inside of the for loop.
   :breakline: 5
   :correct: globals.val

    item = ["M", "I", "S", "S", "O", "U", "R", "I"]
    for val in item:
        val = val + "!"




.. mchoice:: question3_2_1_2
   :answer_a: 
   :answer_b: 
   :answer_c: 
   :answer_d: 
   :feedback_a: 
   :feedback_b: 
   :feedback_c: 
   :feedback_d: 
   :correct: 
   :practice: T
   :topics: 

   Which is the correct way to tell a turtle to move forward 20 pixels?


.. mchoice:: question3_2_1_2
   :answer_a: 
   :answer_b: 
   :answer_c: 
   :answer_d: 
   :feedback_a: 
   :feedback_b: 
   :feedback_c: 
   :feedback_d: 
   :correct: 
   :practice: T
   :topics: 

   Which is the correct way to tell a turtle to move forward 20 pixels?

.. mchoice:: question3_2_1_2
   :answer_a: 
   :answer_b: 
   :answer_c: 
   :answer_d: 
   :feedback_a: 
   :feedback_b: 
   :feedback_c: 
   :feedback_d: 
   :correct: 
   :practice: T
   :topics: 

   Which is the correct way to tell a turtle to move forward 20 pixels?


.. mchoice:: question3_2_1_2
   :answer_a: 
   :answer_b: 
   :answer_c: 
   :answer_d: 
   :feedback_a: 
   :feedback_b: 
   :feedback_c: 
   :feedback_d: 
   :correct: 
   :practice: T
   :topics: 

   Which is the correct way to tell a turtle to move forward 20 pixels?


.. mchoice:: question3_2_1_2
   :answer_a: 
   :answer_b: 
   :answer_c: 
   :answer_d: 
   :feedback_a: 
   :feedback_b: 
   :feedback_c: 
   :feedback_d: 
   :correct: 
   :practice: T
   :topics: 

   Which is the correct way to tell a turtle to move forward 20 pixels?


.. mchoice:: question3_2_1_2
   :answer_a: 
   :answer_b: 
   :answer_c: 
   :answer_d: 
   :feedback_a: 
   :feedback_b: 
   :feedback_c: 
   :feedback_d: 
   :correct: 
   :practice: T
   :topics: 

   Which is the correct way to tell a turtle to move forward 20 pixels?

