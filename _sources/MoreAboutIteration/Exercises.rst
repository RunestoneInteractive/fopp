..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

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

   .. tabbed:: q7

        .. tab:: Question

           .. actex:: ac14_9_7
              :nocodelens:

              Write a function to remove all the red from an image.

              .. raw:: html

                  <img src="../_static/LutherBellPic.jpg" id="luther.jpg">
                  <h4 style="text-align: left;">For this and the following exercises, use the
                  luther.jpg photo.</h4>
              ~~~~


        .. tab:: Answer

            .. activecode:: q7_answer
                :nocodelens:

                import image

                img = image.Image("luther.jpg")
                newimg = image.EmptyImage(img.getWidth(), img.getHeight())
                win = image.ImageWin()

                for col in range(img.getWidth()):
                    for row in range(img.getHeight()):
                        p = img.getPixel(col, row)

                        newred = 0
                        green = p.getGreen()
                        blue = p.getBlue()

                        newpixel = image.Pixel(newred, green, blue)

                        newimg.setPixel(col, row, newpixel)

                newimg.draw(win)
                win.exitonclick()

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_777006b154ca4af7ab8bd11cc25c208a

.. question:: moreiter_ex_8

   .. actex:: ac14_9_8
      :nocodelens:

      Write a function to convert the image to grayscale.
      ~~~~


.. question:: moreiter_ex_9

   .. tabbed:: q9

        .. tab:: Question

           .. actex:: ac14_9_9
              :nocodelens:

              Write a function to convert an image to black and white.
              ~~~~

        .. tab:: Answer

            .. activecode:: q9_answer
                :nocodelens:

                import image

                def convertBlackWhite(input_image):
                    grayscale_image = image.EmptyImage(input_image.getWidth(), input_image.getHeight())

                    for col in range(input_image.getWidth()):
                        for row in range(input_image.getHeight()):
                            p = input_image.getPixel(col, row)

                            red = p.getRed()
                            green = p.getGreen()
                            blue = p.getBlue()

                            avg = (red + green + blue) / 3.0

                            newpixel = image.Pixel(avg, avg, avg)
                            grayscale_image.setPixel(col, row, newpixel)

                    blackwhite_image = image.EmptyImage(input_image.getWidth(), input_image.getHeight())
                    for col in range(input_image.getWidth()):
                        for row in range(input_image.getHeight()):
                            p = grayscale_image.getPixel(col, row)
                            red = p.getRed()
                            if red > 140:
                                val = 255
                            else:
                                val = 0

                            newpixel = image.Pixel(val, val, val)
                            blackwhite_image.setPixel(col, row, newpixel)
                    return blackwhite_image


                win = image.ImageWin()
                img = image.Image("luther.jpg")

                bw_img = convertBlackWhite(img)
                bw_img.draw(win)

                win.exitonclick()

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_0f0fb41d607743998a86962a11eed53d

.. question:: moreiter_ex_10

   .. actex:: ac14_9_10
      :nocodelens:

      Sepia Tone images are those brownish colored images that may remind you of
      times past. The formula for creating a sepia tone is as follows:

      ::

           newR = (R × 0.393 + G × 0.769 + B × 0.189)
           newG = (R × 0.349 + G × 0.686 + B × 0.168)
           newB = (R × 0.272 + G × 0.534 + B × 0.131)

      Write a function to convert an image to sepia tone. *Hint:*
      Remember that rgb values must be integers between 0 and 255.
      ~~~~


.. question:: moreiter_ex_11

   .. tabbed:: q11

        .. tab:: Question

           .. actex:: ac14_9_11
              :nocodelens:

              Write a function to uniformly enlarge an image by a factor of 2 (double the size).
              ~~~~
              
        .. tab:: Answer

            .. activecode:: answer_7_11
               :nocodelens:

               import image

               def double(oldimage):
                   oldw = oldimage.getWidth()
                   oldh = oldimage.getHeight()

                   newim = image.EmptyImage(oldw * 2, oldh * 2)
                   for row in range(oldh):
                       for col in range(oldw):
                           oldpixel = oldimage.getPixel(col, row)

                           newim.setPixel(2*col, 2*row, oldpixel)
                           newim.setPixel(2*col+1, 2*row, oldpixel)
                           newim.setPixel(2*col, 2*row+1, oldpixel)
                           newim.setPixel(2*col+1, 2*row+1, oldpixel)

                   return newim

               img = image.Image("luther.jpg")
               win = image.ImageWin(img.getWidth()*2, img.getHeight()*2)

               bigimg = double(img)
               bigimg.draw(win)

               win.exitonclick()


        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_9ca319187b4a4c2399402de0d99c0b1d

.. question:: moreiter_ex_12

       .. actex:: ac14_9_12
          :nocodelens:

          After you have scaled an image too much it looks blocky.  One way of
          reducing the blockiness of the image is to replace each pixel with the
          average values of the pixels around it.  This has the effect of smoothing
          out the changes in color.  Write a function that takes an image as a
          parameter and smooths the image.  Your function should return a new image
          that is the same as the old but smoothed.
          ~~~~

.. question:: moreiter_ex_13

    .. tabbed:: q13

        .. tab:: Question

           .. actex:: ac14_9_13
              :nocodelens:

              Write a general pixel mapper function that will take an image and a pixel mapping function as
              parameters. The pixel mapping function should perform a manipulation on a single pixel and return
              a new pixel.
              ~~~~

        .. tab:: Answer

            .. activecode:: q13_answer
                :nocodelens:

                import image

                def pixelMapper(oldimage, rgbFunction):
                    width = oldimage.getWidth()
                    height = oldimage.getHeight()
                    newim = image.EmptyImage(width, height)

                    for row in range(height):
                        for col in range(width):
                            originalpixel = oldimage.getPixel(col, row)
                            newpixel = rgbFunction(originalpixel)
                            newim.setPixel(col, row, newpixel)

                    return newim

                def graypixel(oldpixel):
                    intensitysum = oldpixel.getRed() + oldpixel.getGreen() + oldpixel.getBlue()
                    aveRGB = intensitysum // 3
                    newPixel = image.Pixel(aveRGB, aveRGB, aveRGB)
                    return newPixel

                win = image.ImageWin()
                img = image.Image("luther.jpg")

                newim = pixelMapper(img, graypixel)
                newim.draw(win)

                win.exitonclick()


        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_eb9f71a62de24efaa61f64b5a7e5d9c9

.. question:: moreiter_ex_14

   .. actex:: ac14_9_14
      :nocodelens:

      Use a while loop to iterate through the numbers 0 through 35. If a number is divisible by 3, it should be appended to a list called ``three_nums``.
      ~~~~

      =====

      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

         def testOne(self):
            self.assertEqual(three_nums, [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33], "Testing that three_nums was created correctly.")

      myTests().main()

.. question:: moreiter_ex_15

   .. actex:: ac14_9_15

      Write a while loop that is initialized at 0 and stops at 15. If the counter is an even number, append the counter to a list called ``eve_nums``.
      ~~~~

      =====

      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

         def testOne(self):
            self.assertEqual(eve_nums, [0,2,4,6,8,10,12,14], "Testing that eve_nums has been assigned the correct elements")

      myTests().main()

.. question:: moreiter_ex_16

   .. actex:: ac14_9_16

      Write a function, ``sublist``, that takes in a list of numbers as the parameter. In the function, use a while loop to return a sublist of the input list. The sublist should contain the same values of the original list up until it reaches the number 5 (it should not contain the number 5).
      ~~~~

      =====

      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

         def testThree(self):
            self.assertEqual(sublist([1, 2, 3, 4, 5, 6, 7, 8]), [1, 2, 3, 4], "Testing that sublist([1, 2, 3, 4, 5, 6, 7, 8]) returns [1, 2, 3, 4]")
            self.assertEqual(sublist([5]), [], "Testing that sublist([5]) returns []")
            self.assertEqual(sublist([8, 6, 5]), [8, 6], "Testing that sublist([8, 6, 5]) returns [8, 6]")
            self.assertEqual(sublist([1, 6, 2, 3, 9]), [1, 6, 2, 3, 9], "Testing that sublist([1, 6, 2, 3, 9]) returns ([1, 6, 2, 3, 9])")

      myTests().main()

.. question:: moreiter_ex_17

   .. actex:: ac14_9_17

      Write a function called ``stop_at_four`` that iterates through a list of numbers. Using a while loop, append each number to a new list until the number 4 appears. The function should return the new list.
      ~~~~

      def stop_at_four():



      =====

      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

         def testOne(self):
            self.assertEqual(stop_at_four([0, 9, 4.5, 1, 7, 4, 8, 9, 3]), [0, 9, 4.5, 1, 7], "Testing the function stop_at_four on the input [0, 9, 4.5, 1, 7, 4, 8, 9, 3].")
            self.assertEqual(stop_at_four([4, 1, 2, 8]), [], "Testing the function stop_at_four on the input [4, 1, 2, 8].")
            self.assertEqual(stop_at_four([4]), [], "Testing the function stop_at_four on the input [4].")
            self.assertEqual(stop_at_four([1, 6, 2, 3, 9]), [1, 6, 2, 3, 9], "Testing that stop_at_four([1, 6, 2, 3, 9]) returns ([1, 6, 2, 3, 9])")

      myTests().main()

.. question:: moreiter_ex_18

   .. actex:: ac14_9_18

      Write a function called ``check_nums`` that takes a list as its parameter, and contains a while loop that only stops once the element of the list is the number 7. What is returned is a list of all of the numbers up until it reaches 7.
      ~~~~

      =====

      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

         def testOne(self):
            self.assertEqual(check_nums([0,2,4,9,2,3,6,8,12,14,7,9,10,8,3]), [0,2,4,9,2,3,6,8,12,14], "Testing that check_nums stops on the correct postion with input [0,2,4,9,2,3,6,8,12,14,7,9,10,8,3]")
            self.assertEqual(check_nums([9,302,4,62,78,97,10,7,8,23,53,1]), [9,302,4,62,78,97,10], "Testing that check_nums stops on the correct position with input [9,302,4,62,78,97,10,7,8,23,53,1]")
            self.assertEqual(check_nums([7,8,3,2,4,51]), [], "Testing that check_nums stops on the correct position with input [7,8,3,2,4,51]")
            self.assertEqual(check_nums([1, 6, 2, 3, 9]), [1, 6, 2, 3, 9], "Testing that check_nums([1, 6, 2, 3, 9]) returns ([1, 6, 2, 3, 9])")

      myTests().main()

.. question:: moreiter_ex_19

   .. actex:: ac14_9_19

      Write a function, ``sublist``, that takes in a list of strings as the parameter. In the function, use a while loop to return a sublist of the input list. The sublist should contain the same values of the original list up until it reaches the string "STOP" (it should not contain the string "STOP").
      ~~~~

      =====

      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

         def testFour(self):
            self.assertEqual(sublist(["bob", "joe", "lucy", "STOP", "carol", "james"]), ["bob", "joe", "lucy"], "Testing that sublist(['bob', 'joe', 'lucy', 'STOP', 'carol', 'james']) returns ['bob', 'joe', 'lucy']")
            self.assertEqual(sublist(["STOP"]), [], "Testing that sublist(['STOP']) returns []")
            self.assertEqual(sublist(["jackie", "paul", "STOP"]), ["jackie", "paul"], "Testing that sublist(['jackie', 'paul', 'STOP']) returns ['jackie', 'paul']")

      myTests().main()

.. question:: moreiter_ex_20

   .. actex:: ac14_9_20

      Write a function called ``stop_at_z`` that iterates through a list of strings. Using a while loop, append each string to a new list until the string that appears is "z". The function should return the new list.
      ~~~~

      def stop_at_z():

      =====

      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

         def testOne(self):
            self.assertEqual(stop_at_z(['c', 'b', 'd', 'zebra', 'h', 'r', 'z', 'm', 'a', 'k']), ['c', 'b', 'd', 'zebra', 'h', 'r'], "Testing the function stop_at_z on the input ['c', 'b', 'd', 'zebra', 'h', 'r', 'z', 'm', 'a', 'k'].")
            self.assertEqual(stop_at_z(['zoo', 'zika', 'ozzie', 'pizzazz', 'z', 'pizza', 'zap', 'haze']), ['zoo', 'zika', 'ozzie', 'pizzazz'], "Testing the function stop_at_z on the input ['zoo', 'zika', 'ozzie', 'pizzazz', 'z', 'pizza', 'zap', 'haze'].")
            self.assertEqual(stop_at_z(['z']), [], "Testing the function stop_at_z on the input ['z'].")

      myTests().main()

.. question:: moreiter_ex_21

   .. actex:: ac14_9_21

      Below is a for loop that works. Underneath the for loop, rewrite the problem so that it does the same thing, but using a while loop instead of a for loop. Assign the accumulated total in the while loop code to the variable ``sum2``. Once complete, sum2 should equal sum1.
      ~~~~

      sum1 = 0

      lst = [65, 78, 21, 33]

      for x in lst:
          sum1 = sum1 + x

      =====

      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

         def testFive(self):
            self.assertEqual(sum2, 197, "Testing that sum2 is assigned to correct value.")
            self.assertIn('while', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")

      myTests().main()

.. question:: moreiter_ex_22

   .. actex:: ac14_9_22

      Below, we've provided a for loop that sums all the elements of ``list1``. Write code that accomplishes the same task, but instead uses a while loop. Assign the accumulator variable to the name ``accum``.
      ~~~~

      list1 = [8, 3, 4, 5, 6, 7, 9]

      tot = 0
      for elem in list1: 
          tot = tot + elem

      =====

      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

         def testOne(self):
            self.assertEqual(accum, 42, "Testing that accum has the correct value.")
            self.assertIn('while', self.getEditorText(), "Testing your code (Don't worry about actual and expected values).")


      myTests().main()

.. question:: moreiter_ex_23

   .. actex:: ac14_9_23

      **Challenge:** Write a function called ``beginning`` that takes a list as input and contains a while loop that only stops once the element of the list is the string 'bye'. What is returned is a list that contains up to the first 10 strings, regardless of where the loop stops. (i.e., if it stops on the 32nd element, the first 10 are returned. If "bye" is the 5th element, the first 4 are returned.) *If you want to make this even more of a challenge, do this without slicing*
      ~~~~

      =====

      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

         def testOne(self):
            self.assertEqual(beginning(['water', 'phone', 'home', 'chapstick', 'market', 'headphones', 'bye', 'stickie notes', 'snapchat', 'facebook', 'social media']), ['water', 'phone', 'home', 'chapstick', 'market', 'headphones'], "Testing that beginning returns the correct list on input ['water', 'phone', 'home', 'chapstick', 'market', 'headphones', 'bye', 'stickie notes', 'snapchat', 'facebook', 'social media']")
            self.assertEqual(beginning(['bye', 'no', 'yes', 'maybe', 'sorta']), [], "Testing that beginning returns the correct list on input ['bye', 'no', 'yes', 'maybe', 'sorta']")
            self.assertEqual(beginning(['hello', 'hi', 'hiyah', 'howdy', 'what up', 'whats good', 'holla', 'good afternoon', 'good morning', 'sup', 'see yah', 'toodel loo', 'night', 'until later', 'peace', 'bye', 'good-bye', 'g night']),['hello', 'hi', 'hiyah', 'howdy', 'what up', 'whats good', 'holla', 'good afternoon', 'good morning', 'sup'] , "Testing that beginning returns the correct list on input ['hello', 'hi', 'hiyah', 'howdy', 'what up', 'whats good', 'holla', 'good afternoon', 'good morning', 'sup', 'see yah', 'toodel loo', 'night', 'until later', 'peace', 'bye', 'good-bye', 'g night']")

      myTests().main()
