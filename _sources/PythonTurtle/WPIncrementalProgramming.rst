..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: turtle-8-
   :start: 1

👩‍💻  Incremental Programming
===============================

By now you've likely come across occasions where your code will be long or complex. If you 
approach problems like this by writing out all the code and *then* running it, you'll likely
find yourself frustrated by the debugging process. There are ways to make programming easier
though!

1.  **Start Small**  This is probably the single biggest piece of advice for programmers at 
every level. Of course it's tempting to sit down and crank out an entire program at once. But, 
when the program -- inevitably -- does not work then you have a myriad of options for things 
that might be wrong. Where to start? Where to look first? How to figure out what went wrong? 
I'll get to that in the next section. So, start with something really small. Maybe just two 
lines and then make sure that runs ok. Hitting the run button is quick and easy, and gives you 
immediate feedback about whether what you have just done is ok or not. Another immediate 
benefit of having something small working is that you have something to turn in. Turning in a 
small, incomplete program, is almost always better than nothing.

2.  **Keep it working**  Once you have a small part of your program working the next step is 
to figure out something small to add to it. If you keep adding small pieces of the program one 
at a time, it is much easier to figure out what went wrong, as it is most likely that the 
problem is going to be in the new code you have just added. Less new code means its easier to 
figure out where the problem is.

This notion of **Get something working and keep it working** is a mantra that you can repeat 
throughout your career as a programmer. It's a great way to avoid the frustrations mentioned 
above. Think of it this way. Every time you have a little success, your brain releases a tiny 
bit of chemical that makes you happy. So, you can keep yourself happy and make programming 
more enjoyable by creating lots of small victories for yourself.

Below we have already started to build a house. To practice incremental programming, try drawing 
the rest of the house. Each time you draw something new on the screen, run the program to see if 
it executed in the way that you expected!

.. activecode:: ac3_100_1

    import turtle
    wn = turtle.Screen()
    bob = turtle.Turtle()
    bob.right(90)
    bob.forward(50)
    bob.left(90)
    bob.forward(50)

    # Add your code below!


