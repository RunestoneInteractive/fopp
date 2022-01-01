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
   :prefix: moreiter-9-
   :start: 1

Exercises
---------


.. question:: moreiter_ex_1
   :number: 1

   .. tabbed:: q1

        .. tab:: Question

           .. actex:: ac14_9_1

              **1.** Using a while loop, create a list ``numbers`` that contains the numbers 0 through 35. Your while loop should initialize a counter variable to 0. On each iteration, the loop should append the current value of the counter to the list and the counter should increase by 1. The while loop should stop when the counter is greater than 35.
              ~~~~


              =====

              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                 def testOne(self):
                    self.assertEqual(numbers, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "Testing that numbers is assigned to correct values")

              myTests().main()

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_5784e08291ba43199d43fdab277849f5


.. question:: moreiter_ex_2

   .. actex:: ac14_9_2

      Using a while loop, create a list called ``L`` that contains the numbers 0 to 10. (i.e.: Your while loop should initialize a counter variable to 0. On each iteration, the loop should append the current value of the counter variable to ``L`` and then increase the counter by 1. The while loop should stop once the counter variable is greater than 10.)
      ~~~~

      =====

      from unittest.gui import TestCaseGui
 
      class myTests(TestCaseGui):
 
         def testOne(self):
            self.assertEqual(L, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Testing that L was created correctly.")

      myTests().main()

.. question:: moreiter_ex_3

   .. tabbed:: q3

        .. tab:: Question

           .. actex:: ac14_9_3

              Using a while loop, create a list called ``nums`` that contains the numbers 0 though 20. (i.e: your while looop should initialize a counter variable on 0. During each iteration, the loop should append the current value of the counter variable to ``nums`` and then increase the counter by 1. The while loop should stop once the counter variable is greater than 20)
              ~~~~

              ====
              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(nums, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"Testing that nums has been assigned the correct elements")

              myTests().main()

.. question:: moreiter_ex_4

    .. actex:: ac14_9_4
       :nocodelens:

       Modify the walking turtle program so that rather than a 90 degree left or right turn the
       angle of the turn is determined randomly at each step.
       ~~~~


.. question:: moreiter_ex_5

   .. tabbed:: q5

        .. tab:: Question

           .. actex:: ac14_9_5
              :nocodelens:

              Modify the turtle walk program so that you have two turtles each with a
              random starting location. Keep the turtles moving until one of them leaves the screen.
              ~~~~

        .. tab:: Answer

            .. activecode:: q5_answer
                :nocodelens:

                import random
                import turtle

                def moveRandom(wn, t):
                    coin = random.randrange(0,2)
                    if coin == 0:
                        t.left(90)
                    else:
                        t.right(90)

                    t.forward(50)

                def areColliding(t1, t2):
                    if t1.distance(t2) < 2:
                        return True
                    else:
                        return False

                def isInScreen(w, t):
                    leftBound = - w.window_width() / 2
                    rightBound = w.window_width() / 2
                    topBound = w.window_height() / 2
                    bottomBound = -w.window_height() / 2

                    turtleX = t.xcor()
                    turtleY = t.ycor()

                    stillIn = True
                    if turtleX > rightBound or turtleX < leftBound:
                        stillIn = False
                    if turtleY > topBound or turtleY < bottomBound:
                        stillIn = False
                    return stillIn

                t1 = turtle.Turtle()
                t2 = turtle.Turtle()
                wn = turtle.Screen()

                t1.shape('turtle')
                t2.shape('circle')

                leftBound = -wn.window_width() / 2
                rightBound = wn.window_width() / 2
                topBound = wn.window_height() / 2
                bottomBound = -wn.window_height() / 2

                t1.up()
                t1.goto(random.randrange(leftBound, rightBound),
                        random.randrange(bottomBound, topBound))
                t1.setheading(random.randrange(0, 360))
                t1.down()

                t2.up()
                t2.goto(random.randrange(leftBound, rightBound),
                        random.randrange(bottomBound, topBound))
                t2.setheading(random.randrange(0, 360))
                t2.down()


                while isInScreen(wn, t1) and isInScreen(wn, t2):
                    moveRandom(wn, t1)
                    moveRandom(wn, t2)

                wn.exitonclick()

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_0cd01637a1814f86b11f576c37a46437


.. question:: moreiter_ex_6

   .. actex:: ac14_9_6
      :nocodelens:

      Create a while loop that initializes a counter at 0 and will run until the counter reaches 50. If the value of the counter is divisible by 10, append the value to the list, ``tens``.
      ~~~~

      =====

      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

         def testTwo(self):
            self.assertEqual(tens, [0, 10, 20, 30, 40, 50], "Testing that tens is assigned to correct values.")

      myTests().main()

.. question:: moreiter_ex_7

   .. actex:: ac14_9_7
      :nocodelens:

      Use a while loop to iterate through the numbers 0 through 35. If a number is divisible by 3, it should be appended to a list called ``three_nums``.
      ~~~~

      =====

      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

         def testOne(self):
            self.assertEqual(three_nums, [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33], "Testing that three_nums was created correctly.")

      myTests().main()


Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {% for q in questions: %}
        <div class='oneq full-width'>
            {{ q['htmlsrc']|safe }}
        </div>
    {% endfor %}
