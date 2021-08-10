..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.

:skipreading:`True`

.. _drawing_a_circle:

🤔 Drawing a Circle with the Turtle
=====================================

Suppose that we want our turtle to draw a circle, the circle should have a certain radius that the user can supply and then the turtle can draw one from the current location of the turtle.

Drawing a circle may sound like a real challenge, but here is another example of a problem solving exercise where you can start simple work out a few cases with paper and pencil in order to see the pattern.  Once you see the pattern then you can generalize your solution.

To begin lets think of a simpler shape we can have the turtle draw such as a triangle, and since a radius doesn't really make a lot of sense for a triangle lets suppose that the user supplies us with the length of the side for a triangle.

.. activecode:: act_circle_1
    :nocodelens:

    Ask the user for a side length and then draw a triangle.
    ~~~~


.. activecode:: act_circle_2
    :nocodelens:

    Ask the user for a side length and then draw a square
    ~~~~

.. activecode:: act_circle_3
    :nocodelens:

    Ask the user for a side length and then draw an octagon (8-sided)
    ~~~~

Now there are a couple of jumps we need to make:

1.  Although we think of a circle as being perfectly round, we can't really achieve that on a computer screen.  So our circle will be an approximation of a circle.  In fact you have probably already noticed that the octagon looks a lot more circle-ish than the triangle did.  So we will approximate our turtle by making a polygon with a lot of sides.

2.  How did you figure out how far to make the turtle turn for the triangle, square, and octagon?

to make the leap to drawing our approximate circle we will need to figure out how many sides we need how long those sides should be and how much to turn.  Depending on the order you answer the questions, you may get a different final program.  Remember that you can always do a little experiementing to see what looks good, you don't have to have the perfect answer on the first try, and its OK to use an assumption for one of the answers to the three questions.

.. activecode:: act_circle_4
    :nocodelens:

    Ask the user for a radius and then draw a circle with that radius.
    ~~~~


Bonus

.. activecode:: act_circle_5
    :nocodelens:

    Ask the user for a radius and then draw a circle with that radius, but make the center of the circle at the current location of the turtle.
    ~~~~



**Post Project Questions**

.. poll:: LearningZone_5
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_5
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_5
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_5
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...


