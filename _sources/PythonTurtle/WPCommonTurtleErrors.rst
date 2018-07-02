..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: turtle-9-
   :start: 1

👩‍💻 Common ``turtle`` Errors
==============================

Below we'll describe common errors that beginning programmers encounter when writing turtle code. 
Some of these errors can be applied to other instances as well!

1. Forgetting a Parenthesis

.. activecode:: ac3_9_1

   import turtle
   wn = turtle.Screen()
   alex = turtle.Turtle()

   alex.forward(50
   alex.right(90)

When you run the example above you'll see how an error occurs. This is because we accidentally left off the ")" when we 
tell alex to move forward. This is a common error for programmers of any skill level - it's easy to miss one and not 
notice! If you get a syntax error like this or - expecially in this textbook - one that says there was bad syntax on a 
line that isn't visible to you then likely you're missing a parenthesis, quotation, or bracket.

2. Issues with Variable Names

Sometimes we misspell a variable name, either by making it capitalized when it wasn't previously capitalized or swiching 
letters around. Other times we accidentally refer to the wrong variable name. Checkout the code below for some examples.

.. activecode:: ac3_9_2

   import turtle
   wn = turtle.Screen()
   alex = Turtle.turtle()      #switched turtle and Turtle

   alex.forward(50)
   alex.right(90)

.. activecode:: ac3_9_3

   import turtle
   wn = turtle.Screen()
   june = turtle.Turtle()      

   june.forward(50)
   right.june(90)             #switched the variable for jane with the direction to turn in

.. activecode:: ac3_9_4

   import turtle
   wn = turtle.Screen()
   june = turtle.Turtle()      

   june.forward(50)
   June.right(90)            #capitalized the variable June even though all others were lowercase

3. Incorrect Arguments

We can also incorrectly provide arguments to a method or function. When that happens, you'll see an error message like the 
one below.

.. activecode:: ac3_9_5

   import turtle
   wn = turtle.Screen()
   june = turtle.Turtle() 

   for _ in range():
       june.color("green", "yellow")
       june.forward("50")
       june.right(90)

We wanted to iterate and draw a square, but we forgot to specify how many times we should iterate over the for loop. As a 
result, we ran into an error because the range function requires at least one argument. Try fixing this so that the code 
builds a square. Do you think you'll run into other problems? Predict what will happen and then try it out!


