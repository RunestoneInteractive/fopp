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
        ====
        from unittest.gui import TestCaseGui
        import re
        class myTests(TestCaseGui):
            def testOne(self):
                # check the answer
                self.assertTrue(re.search('Jack', self.getOutput()), 'Checking answer.')
                self.assertTrue(re.search('Kack', self.getOutput()), 'Checking answer.')
                self.assertTrue(re.search('Lack', self.getOutput()), 'Checking answer.')
                self.assertTrue(re.search('Mack', self.getOutput()), 'Checking answer.')
                self.assertTrue(re.search('Nack', self.getOutput()), 'Checking answer.')
                self.assertTrue(re.search('Ouack', self.getOutput()), 'Checking answer.')
                self.assertTrue(re.search('Pack', self.getOutput()), 'Checking answer.')
                self.assertTrue(re.search('Quack', self.getOutput()), 'Checking answer.')
            
                # hardcode check
                prefixes = ['J','K','L','M','N','Ou','P','Qu']
                self.assertFalse(re.search(r'('+'|'.join([p+suffix for p in prefixes])+r')', self.getEditorText()), 'Checking for hardcoding')
        myTests().main()


.. question:: q6_11_2

    .. actex:: ex6_11_2

        Get the user to enter some text and print it out in reverse order.
        ~~~~

        ====
        from unittest.gui import TestCaseGui
        import re
        class myTests(TestCaseGui):
            def testOne(self):
                self.assertTrue(re.search(user_input[::-1], self.getOutput()), 'Checking answer.')
            
        myTests().main()

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

        ====
        from unittest.gui import TestCaseGui
        import re
        class myTests(TestCaseGui):
            def testOne(self):
                _seq = [12, 10, 32, 3, 66, 17, 42, 99, 20]
                _seq.extend(["{:d} +{:d}".format(number, number**2) for number in _seq])
                _seq = [str(s) for s in _seq]
    
                output = self.getOutput().split('\n')
                for expected, line in zip(_seq,output):
                    self.assertTrue(re.search(expected, line), 'Checking line')
                outer_loops = re.findall(r'^(for[ (].* in.*: *)$', self.getEditorText(), re.M)
                inner_loops = re.findall(r'^( +for[ (].* in.*: *)$', self.getEditorText(), re.M)
                self.assertTrue(len(outer_loops)==2 and len(inner_loops)>=0, 'Checking for-statements')
        myTests().main()

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

               A drunk pirate makes a random turn and then takes 100 steps forward, makes another random turn, takes another 100 steps, turns another random amount, etc.  A social science student records the angle of each turn before the next 100 steps are taken.  Her experimental data is ``160, -43, 270, -97, -43, 200, -940, 17, -86``. (Positive angles are counter-clockwise.)  Use a turtle to draw the path taken by our drunk friend.  After the pirate is done walking, print the current heading.  Assume that the turtle originally has a heading of 0 and accumulate the changes in heading to print out the final.  Your solution should work for any sequence of experimental data.
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
               current_heading = 0
               for angle in [160, -43, 270, -97, -43, 200, -940, 17, -86]:

                   # we use .left() so that positive angles are counter-clockwise
                   # and negative angles are clockwise
                   current_heading = (current_heading + angle) % 360
                   lovelace.left(angle)
                   lovelace.forward(100)

               # the .heading() method gives us the turtle's current heading in degrees
               print("The pirate's final heading was", current_heading)

               wn.exitonclick()

       .. tab:: Discussion

           .. disqus::
                :shortname: interactivepython
                :identifier: a7e34946f59f348f2bfeb3f918eb57b7a

.. question:: iter_ex_8

   .. parsonsprob:: pp_3_8

      Write a program that will go through a list of temperatures and print them out to the user.
      -----
      temperatures = [-3, 78, 95, 28, 56, 42, 56, 81, -10, -]
      =====
      for temp in temperatures:
      =====
          print("The weather outside is: " + str(temp))

.. question:: iter_ex_9

   .. parsonsprob:: pp_3_9

      Write a program that will print out a greeting to each student in the list. This list should also keep track of how many students have been greeted and note that each time a new student has been greeted.
      -----
      students = ["Jay", "Stacy", "Iman", "Trisha", "Ahmed", "Daniel", "Shadae", "Tosin", "Charlotte"]
      =====
      num_students = 0
      =====
      for student in students:
      =====
          print("Welcome to class, " + student)
      =====
          num_students += 1
          print(str(num_students) + "student(s) have entered the classroom")


Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {% for q in questions: %}
        <div class='oneq full-width'>
            {{ q['htmlsrc']|safe }}
        </div>
    {% endfor %}
