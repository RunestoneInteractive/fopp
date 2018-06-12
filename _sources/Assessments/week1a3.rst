..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Week 1 Assessment 3 - Turtle Chapter
------------------------------------

**Check your understanding**

.. mchoice:: assess_question1_3_1_1_1
   :multiple_answers:
   :answer_a: Tex.forward(20)
   :answer_b: forward() + 20
   :answer_c: forward(20)
   :answer_d: forward(20).Tex
   :answer_e: Tex.forward(10 + 10)
   :correct: a,e
   :feedback_a: This is a correct way to move a turtle forward.
   :feedback_b: This does not use the turtle method necessary to move a turtle forward. Additionally, how would the program know what turtle should be moving?
   :feedback_c: This does not use the turtle method necessary to move a turtle forward. Additionally, how would the program know what turtle should be moving?
   :feedback_d: This is not the correct structure to execute the task.
   :feedback_e: You are allowed to write expressions inside of methods, so this is correctly written.
   :practice: T

   What are correct ways to tell a turtle named Tex to move forward 20 pixels? Select as many as apply.

.. mchoice:: assess_question1_3_1_1_2
   :answer_a: turtle(Turtle)
   :answer_b: turtle.Turtle()
   :answer_c: Turtle.turtle()
   :answer_d: Turtle(turtle)
   :correct: b
   :feedback_a: When making a new instace of the turtle class, you need to use dot notation.
   :feedback_b: Yes, this is the correct way.
   :feedback_c: turtle represents the class and should be first.
   :feedback_d: When making a new instace of the turtle class, you need to use dot notation.
   :practice: T

   Which is the correct way to make a new instance of the Turtle class?

.. mchoice:: assess_question1_3_1_1_3
   :answer_a: The turtle class.
   :answer_b: The same turtle that is used in each drawing your programs make.
   :answer_c: A unique 'turtle' that you can use to draw.
   :correct: c
   :feedback_a: Though each instance does use the turtle class, this is not the best answer.
   :feedback_b: Each instance that is made using the turtle class is unique. Remember how you can have multiple 'turtles' in a single drawing? Each of those are different turtles but they are all instances of the turtle class.
   :feedback_c: Yes, an instance of the turtle class represents a unique turtle. The turtle class is like a stencil or mold that can be used to make as many turtles as you would like.
   :practice: T

   What does each instance of the Turtle class represent?

.. mchoice:: assess_question1_3_1_1_4
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Just like the variables you've learned about so far, you can assign values to an attribute and look up the values that are assigned to the attribute.
   :feedback_b: The only difference is the structure that is used to refer to it.
   :practice: T

   True or False, attributes/instance variables are just like other variables in Python?

.. mchoice:: assess_question1_3_1_1_5
   :multiple_answers:
   :answer_a: Change the value of an attribute.
   :answer_b: Return values.
   :answer_c: Create new attributes and set their value.
   :answer_d: Delete instances of a class.
   :answer_e: None of the above.
   :correct: a,b,c
   :feedback_a: Methods can change the value that is associated with an attribute. 
   :feedback_b: Methods can return values.
   :feedback_c: Methods can create new attributes and then set that attribute's value.
   :feedback_d: Methods cannot delete instances of a class.
   :feedback_e: Methods can do at least one of the above. Take another look.
   :practice: T

   Select all of the following things that methods can do:


.. mchoice:: assess_question1_3_1_1_6
   :answer_a: student.title()
   :answer_b: title.student()
   :answer_c: title.student
   :answer_d: student(title)
   :answer_e: student.title
   :correct: e
   :feedback_a: This is not the structure used to refer to an attribute.
   :feedback_b: This is not the structure or order used to refer to an attribute.
   :feedback_c: This is not the order used to refer to an attribute.  
   :feedback_d: This would be the syntax for a function named student being called on a variable named title.
   :feedback_e: Yes, this is the correct structure to use.
   :practice: T 

   For an instance of a class that is assigned to the variable ``student``, what is the propper way to refer to the ``title`` attribute/instance variable?

.. fillintheblank:: assess_question1_3_1_1_7

   What is the name of the attribute in the following code?

   .. sourcecode:: python

    import turtle

    jane = turtle.Turtle()
    jane.forward(20)
    print(jane.x)

   The attribute is

   -  :x: Good work!
      :jane: jane is an instance, not an attribute.
      :forward: forward is a method, not an attribute.
      :turtle: turtle is the class, not an attribute.
      :Turtle: Turtle is a method, not an attribute
      :.*: Incorrect, try again.

.. fillintheblank:: assess_question1_3_1_1_8

   What is the name of the instances in the following code? Please put one instance per blank space and enter them in the order that the computer would read them.

   .. sourcecode:: python

    import turtle
    wn = turtle.Screen()

    jazz = turtle.Turtle()
    jazz.forward(50)
    jazz.right(90)
    pop = turtle.Turtle()
    pop.left(180)
    pop.forward(76)


   -  :wn: Good work!
      :jazz: Try a different location
      :pop: Try a different location
      :.*: Incorrect, try again.
   -  :jazz: Good work!
      :wn: Try a different location
      :pop: Try a different location
      :.*: Incorrect, try again.
   -  :pop: Good work!
      :wn: Try a different location
      :jazz: Try a different location
      :.*: Incorrect, try again.
