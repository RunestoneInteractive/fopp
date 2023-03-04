..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.

.. _turtle_driving:

🤔 Driving the Turtle
=======================

:skipreading:`True`

This first activity is designed to get you started writing some simple programs in Python using the `turtle graphics <https://en.wikipedia.org/wiki/Turtle_graphics>`_ system.  There is a :ref:`chapter<turtles_chap>` on turtle graphics that will go into more detail but for today you can have some fun and do a lot by simply modifying the following example:

.. activecode:: act_turtle_1
    :nocodelens:

    import turtle

    my_turtle = turtle.Turtle()   # create a turtle
    my_turtle.color('green')      # set the color
    my_turtle.forward(50)         # draw a green line of length 50
    my_turtle.up()                # lift up the tail
    my_turtle.forward(50)         # move forward 50 without drawing
    my_turtle.right(90)           # change direction to the right, left works too
    my_turtle.down()              # put the tail down
    my_turtle.backward(100)       # draw a green line 100 units long


The  metaphor to have in your head for this is that you have a turtle that you can control from your program.  The turtle understands a few basic instructions such as `forward`, `backward`, `left`, `right`, `up`, `down`, `color` and others that you can look up.  You can use these basic instructions to quite a bit, and as we learn more and more about Python programming you will be able to make the turtle do more interesting tasks, for example it is even possible to write a retro style video game using turtle graphics if that is your thing.

Don't worry about making mistakes, it is normal and happens to even the most experienced programmers.  At worst you can simply reload the page if you get stuck.  If you try something and don't like it the slider at the top of the window where you enter code can be used to back up to a previous version of your program.

.. activecode:: act_turtle_2
    :nocodelens:

    Using the above example to get started create a turtle and draw an interesting picture.
    ~~~~
    import turtle

    # Your code here

**Post Project Questions**

.. poll:: LearningZone_1
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_1
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_1
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_1
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...

