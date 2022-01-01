..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

:skipreading:`True`

.. qnum::
   :prefix: turtle-10-
   :start: 1

Exercises
---------


.. question:: turtle_ex_1
   :number: 1

   .. tabbed:: q1

        .. tab:: Question

           .. actex:: ac3_8_1

              Write a program that prints ``We like Python's turtles!`` 100 times.
              ~~~~

        .. tab:: Answer

            .. activecode::  answer3_8_1
                :nocanvas:

                for _ in range(100):
                    print("We like Python's turtles!")

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: f858d02024e54ae1b6b50ed8c65a01e6


.. question:: turtle_ex_2

   .. shortanswer:: turtle_reflect

      Turtle objects have methods and attributes. For example, a turtle has a position and when you move the turtle forward, the position changes. Think about the other methods shown in the Summary of Turtle Methods page. Which attibutes, if any, does each method relate to?  Does the method change the attribute?

.. question:: turtle_ex_3

   .. tabbed:: q3

        .. tab:: Question

           .. actex:: ac3_8_3
              :nocodelens:

              Use ``for`` loops to make a turtle draw these regular polygons
              (regular means all sides the same lengths, all angles the same):

              * An equilateral triangle
              * A square
              * A hexagon (six sides)
              * An octagon (eight sides)
              ~~~~

        .. tab:: Answer

            .. sourcecode:: python

                # draw an equilateral triangle
                import turtle

                wn = turtle.Screen()
                norvig = turtle.Turtle()

                for i in range(3):
                    norvig.forward(100)

                    # the angle of each vertice of a regular polygon
                    # is 360 divided by the number of sides
                    norvig.left(360/3)

                wn.exitonclick()

            .. sourcecode:: python

                # draw a square
                import turtle

                wn = turtle.Screen()
                kurzweil = turtle.Turtle()

                for i in range(4):
                    kurzweil.forward(100)
                    kurzweil.left(360/4)

                wn.exitonclick()

            .. sourcecode:: python

                # draw a hexagon
                import turtle

                wn = turtle.Screen()
                dijkstra = turtle.Turtle()

                for i in range(6):
                    dijkstra.forward(100)
                    dijkstra.left(360/6)

                wn.exitonclick()

            .. sourcecode:: python

                # draw an octogon
                import turtle

                wn = turtle.Screen()
                knuth = turtle.Turtle()

                for i in range(8):
                    knuth.forward(75)
                    knuth.left(360/8)

                wn.exitonclick()

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: f36e8bc742b89424e82f111ba2d1dd33f

.. question:: turtle_ex_4

   .. tabbed:: q4

        .. tab:: Question

           .. actex:: ac3_8_4
              :nocodelens:

              Write a program to draw a shape like this:

              .. image:: Figures/star.png
              ~~~~

        .. tab:: Answer

            .. activecode:: answer3_8_4
                :nocodelens:

                import turtle

                turing = turtle.Turtle()

                for i in range(5):
                    turing.forward(110)
                    turing.left(216)

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: c611217310057488aab6a34d4b591e753


.. question:: turtle_ex_5

   .. actex:: ac3_8_5
      :nocodelens:

      Write a program to draw a face of a clock that looks something like this:

      .. image:: Figures/tess_clock1.png
      ~~~~

.. question:: turtle_ex_6

   .. tabbed:: q6

        .. tab:: Question

           .. actex:: ac3_8_6
              :nocodelens:

              Write a program to draw some kind of picture.  Be creative and experiment
              with the turtle methods.
              ~~~~

        .. tab:: Answer

            .. activecode:: answer3_8_6
                :nocodelens:

                import turtle

                tanenbaum = turtle.Turtle()

                tanenbaum.hideturtle()
                tanenbaum.speed(20)

                for i in range(350):
                    tanenbaum.forward(i)
                    tanenbaum.right(98)

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: e928a562a4f5c41f9892c9bfc4a1d5883

.. question:: turtle_ex_7

   .. actex:: ac3_8_7
      :nocodelens:

      Create a turtle and assign it to a variable.  When you print its type, what do you get?
      ~~~~


Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {% for q in questions: %}
        <div class='oneq full-width'>
            {{ q['htmlsrc']|safe }}
        </div>
    {% endfor %}
