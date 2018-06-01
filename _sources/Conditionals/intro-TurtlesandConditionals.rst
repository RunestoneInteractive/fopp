..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: condition-1-
   :start: 1

Intro: What we can do with Turtles and Conditionals
---------------------------------------------------

To build further on our turtle drawings, we can start to include something called a **selection** or 
**conditional statement**. Using this kind of statement will allow up to check conditions and change the 
behavior of the program accordingly. 

.. activecode:: ac7_1_1

    import turtle
    wn = turtle.Screen()

    Amy = turtle.Turtle()
    Amy.pencolor("Pink")
    Amy.forward(50)
    if Amy.pencolor() == "Pink":
        Amy.right(60)
        Amy.forward(100)
    else:
        Amy.left(60)
        Amy.forward(100)
        
    Kenji = turtle.Turtle()
    Kenji.forward(60)
    if Kenji.pencolor() == "Pink":
        Kenji.right(60)
        Kenji.forward(100)
    else:
        Kenji.left(60)
        Kenji.forward(100)

In the above code, we first set Amy's pen color to be "Pink" and then move her forward. Next we want one of 
two actions to happen, either Amy should move right and then forward, or left and then forward. The direction 
that we want her to go in depends on her pen color. If her pen color is set to pink - which is determined by 
writing ``Amy.pencolor() == "Pink"`` which checks to see if the value returned by ``Amy.pencolor()`` is the 
equivalent to the string "Pink" - then we should have her move right and forward. Else (or otherwise) she 
should move left and forward. Both things can't happen though. She can't move right, forward *and* left, 
forward. We then do the same thing for Kenji, though in this case, we didn't change Kenji's pen color.

It might seem a bit odd to add the conditionals in this example. Wouldn't we already know that we set up Amy 
and Kenji's colors, so why would we need a conditional? While it's true that this isn't the *best* place to 
use a conditional, we can combine conditional statements with for loops to make something pretty cool! 

.. activecode:: ac7_1_2

    import turtle
    wn = turtle.Screen()

    Amy = turtle.Turtle()
    Amy.pencolor("Pink")
    Amy.right(170)

    colors = ["Purple", "Yellow", "Orange", "Pink", "Orange", "Yellow", "Purple", "Orange", "Pink", "Pink", "Orange", "Yellow", "Purple", "Orange", "Purple", "Yellow", "Orange", "Pink", "Orange", "Purple", "Purple", "Yellow", "Orange", "Pink", "Orange", "Yellow", "Purple", "Yellow"]


    for color in colors:
        if Amy.pencolor() == "Purple":
            Amy.forward(50)
            Amy.right(59)
        if Amy.pencolor() == "Yellow":
            Amy.forward(65)
            Amy.left(98)
        if Amy.pencolor() == "Orange":
            Amy.forward(30)
            Amy.left(60)
        if Amy.pencolor() == "Pink":
            Amy.forward(50)
            Amy.right(57)

        Amy.pencolor(color)

The above example combines a for loop with a set of conditional statements. Here, we loop through a list of 
colors and each iteration checks to see what Amy's pen color is. Depending on the pen color, the turtle will 
move in a certain direction, for a certain distance. Before the for loop iterates, Amy's pen color is changed 
to whatever ``color`` is in the for loop and it continues. Note how the color doesn't change until the end, 
so that we can start using whatever color Amy is set to initally. This means that the last color in the list 
``colors`` will not be used, though you can see how the icon changes to the appropriate color.
    
This chapter will further detail how to use conditional statements.
