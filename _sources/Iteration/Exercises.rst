..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: iter-11-
   :start: 1

Exercises
=========


.. question:: q6_11_1

    .. actex:: ex6_11_1

        In Robert McCloskey's
        book *Make Way for Ducklings*, the names of the ducklings are Jack, Kack, Lack,
        Mack, Nack, Ouack, Pack, and Quack.  This loop tries to output these names in order.

        Of course, that's not quite right because Ouack and Quack are misspelled.
        Can you fix it?
        ~~~~

        prefixes = "JKLMNOPQ"
        suffix = "ack"

        for p in prefixes:
            print(p + suffix)


.. question:: q6_11_2

    .. actex:: ex6_11_2

        Get the user to enter some text and print it out in reverse order.
        ~~~~

.. question:: q6_11_3


    .. actex:: ex6_11_3

        Get the user to enter some text and print out True if it's a palindrome, False otherwise. (Hint: reuse
        some of your code from the last question. The == operator compares two values to see if they are the same)
        ~~~~

.. question:: iter_ex_3

    .. tabbed:: q3

        .. tab:: Question


           .. actex:: ex_3_3

              Write a program that uses a for loop to print
                 |  ``One of the months of the year is January``
                 |  ``One of the months of the year is February``
                 |  ``One of the months of the year is March``
                 |  etc ...
              ~~~~

        .. tab:: Answer

            .. activecode:: q3_answer


                for amonth in ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']:
                    print("One of the months of the year is", amonth)

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: b271442ee0864973a023c19f27aeb401


.. question:: iter_ex_4


   .. actex:: ex_3_4

      Assume you have a list of numbers ``12, 10, 32, 3, 66, 17, 42, 99, 20``

      a. Write a loop that prints each of the numbers on a new line.
      b. Write a loop that prints each number and its square on a new line.
      ~~~~

.. question:: iter_ex_6

   .. actex:: ex_3_6
      :nocodelens:

      Write a program that asks the user for the number of sides, the length of the side, the color, and the fill color of a
      regular polygon.  The program should draw the polygon and then fill it in.
      ~~~~


.. question:: iter_ex_7

   .. tabbed:: q7

       .. tab:: Question

            .. actex:: ex_3_7
               :nocodelens:

               A drunk pirate makes a random turn and then takes 100 steps forward, makes another random turn, takes another 100 steps, turns another random amount, etc.  A social science student records the angle of each turn before the next 100 steps are taken.  Her experimental data is ``160, -43, 270, -97, -43, 200, -940, 17, -86``. (Positive angles are counter-clockwise.)  Use a turtle to draw the path taken by our drunk friend.  After the pirate is done walking, print the current heading.
               ~~~~

       .. tab:: Answer

           .. activecode:: iter_q7_answer
               :nocodelens:

               import turtle

               wn = turtle.Screen()
               lovelace = turtle.Turtle()

               # move the turtle forward a little so that the whole path fits on the screen
               lovelace.penup()
               lovelace.forward(60)

               # now draw the drunk pirate's path
               lovelace.pendown()
               for angle in [160, -43, 270, -97, -43, 200, -940, 17, -86]:

                   # we use .left() so that positive angles are counter-clockwise
                   # and negative angles are clockwise
                   lovelace.left(angle)
                   lovelace.forward(100)

               # the .heading() method gives us the turtle's current heading in degrees
               print("The pirate's final heading was", lovelace.heading())

               wn.exitonclick()

       .. tab:: Discussion

           .. disqus::
                :shortname: interactivepython
                :identifier: a7e34946f59f348f2bfeb3f918eb57b7a



