..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: turtle-11-
   :start: 1

.. Week 1 Assessment 3

Chapter Assessment - Turtle and Object Mechanics
------------------------------------------------

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
   :topics: PythonTurtle/InstancesAHerdofTurtles

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
   :topics: PythonTurtle/ObjectInstances

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
   :topics: PythonTurtle/ObjectInstances

   What does each instance of the Turtle class represent?


.. mchoice:: assess_question1_3_1_1_5
   :multiple_answers:
   :answer_a: Change the value of an attribute.
   :answer_b: Return values.
   :answer_c: Create new attributes of an instance and set their values.
   :answer_d: Delete object instances.
   :answer_e: None of the above.
   :correct: a,b,c
   :feedback_a: Methods can change the value that is associated with an attribute. 
   :feedback_b: Methods can return values.
   :feedback_c: Attributes do not need to be pre-declared; any code can add a new attribute to an instance just by assigning a value to it.
   :feedback_d: You do not explicitly delete object instances; when there are no variables or other references to them, so that they can't be accessed, they are automatically deleted.
   :feedback_e: Methods can do at least one of the above. Take another look.
   :practice: T
   :topics: PythonTurtle/ObjectInstances

   Select all of the following things that methods can do:


.. mchoice:: assess_question1_3_1_1_6
   :answer_a: student.title()
   :answer_b: title.student()
   :answer_c: title.student
   :answer_d: student(title)
   :answer_e: student.title
   :correct: e
   :feedback_a: This accesses the attribute but then tries to invoke it as a method, which will fail if title is not a method.
   :feedback_b: student is the object, so it goes before the period; the attribute goes after.
   :feedback_c: student is the object, so it goes before the period; the attribute goes after.
   :feedback_d: This would be the syntax for a function named student being called on a variable named title.
   :feedback_e: Yes, this is the correct syntax to use.
   :practice: T 
   :topics: PythonTurtle/ObjectInstances

   For an instance of a class that is assigned to the variable ``student``, what is the proper way to refer to the ``title`` attribute/instance variable?

.. fillintheblank:: assess_question1_3_1_1_7
   :practice: T
   :topics: PythonTurtle/ObjectInstances

   What is the name of jane's attribute (not method) that is referred to in the following code?

   .. sourcecode:: python

    import turtle

    jane = turtle.Turtle()
    jane.forward(20)
    print(jane.x)

   The attribute is

   -  :x: Good work!
      :jane: jane is an instance, not an attribute.
      :forward: forward is a method.
      :turtle: turtle is the class, not an attribute.
      :Turtle: Turtle is a method, not an attribute
      :.*: Incorrect, try again.

.. fillintheblank:: assess_question1_3_1_1_8
   :practice: T
   :topics: PythonTurtle/ObjectInstances

   What are the names of the instances in the following code? Please put one instance per blank space and enter them in the order that the computer would read them.

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


Chapter Assessment - Drawing with Turtle
----------------------------------------

.. activecode:: assess_ps_01_09a
    :language: python

    Write code to draw a regular pentagon (a five-sided figure with all sides the same length).

    ~~~~
    import turtle



.. activecode:: assess_ps_01_09
    :language: python

    Write a program that uses the turtle module to draw something. It doesn't have to be complicated, but draw something different than we have done in the past. (Hint: if you are drawing something complicated, it could get tedious to watch it draw over and over. Try setting ``.speed(10)`` for the turtle to draw fast, or ``.speed(0)`` for it to draw super fast with no animation.)
    ~~~~
    import turtle

