..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.


:skipreading:`True`

.. _image_processing:

🤔 Image Processing
=====================

Whether you are into Facebook, Instagram, or Snapchat you are probably familiar with all kinds of image filters and manipulations.  It turns out that lots of the filters you can apply to images are pretty fun to code.  Hopefully you have read the :ref:`Nested Iteration and Image Processing section<image_proc>` to get yourself ready for this project.  In any case you will probably want to open up that section in another tab so you can refer to the image module functions that are provided.

You can use the following image using the name "golden_gate.png" or you can use any image you choose by using the full URL to the image.  For example: ``http://reputablejournal.com/images/ComputerHistory/TeleType.png``  will use an automatically reduced size image of a picture the author took in the computer history museum.


.. datafile:: golden_gate.png
    :image:
    :fromfile: ../../_static/GoldenGateBridgeCC.png


Image used under `Creative Commons Attribution License <https://commons.wikimedia.org/wiki/File:GoldenGateBridge-001.jpg>`_.

Basic Filters
-------------

To start, we'll try some pixel by pixel filters.  We have a few for you to try here, but feel free to experiment on your own as well.  You really can't go wrong here so let your imagination run wild.

The first thing to try is to create a grayscale version of a color image.  Grayscale is not quite black and white where each pixel would be "all on" or "all off" but rather a grayscale image is one in which the the red, green, and blue components of each pixel are all the same and in the range from 0 to 255.  Your first task is to figure out how to turn RGB values for each pixel which are likely different into three values for RGB that are the same.  There are several different ways you could do this, and there's not really a clear right or wrong, so just try the first thing that occurs to you and it will probably look pretty good.

.. activecode::  act_ip_1
    :nocodelens:

    import image

    img = image.Image("golden_gate.png")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(1, 2000) will speed up a lot                      # img.setDelay(delay, number of pixels between delay)

    for row in range(img.getHeight()):
        for col in range(img.getWidth()):
            p = img.getPixel(col, row)

            gray_value = # your code here

            newred = # your code here
            newgreen =  # your code here
            newblue =  # your code here

            newpixel = image.Pixel(newred, newgreen, newblue)

            img.setPixel(col, row, newpixel)

    img.draw(win)
    win.exitonclick()

Now that you have a grayscale image, try turning it into a black and white image by setting a threshold value for your gray_value.  That is, if gray_value is less than your threshold make r,g,b all 0.  If its more make r,g,b all 255.

.. activecode::  act_ip_2
    :nocodelens:

    import image

    img = image.Image("golden_gate.png")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    for row in range(img.getHeight()):
        for col in range(img.getWidth()):
            p = img.getPixel(col, row)

            # your code here

    img.draw(win)
    win.exitonclick()


Here is another pretty standard filter for photos called "Sepia tone"  It will remind you of the old-west photographer style images.  The formula to convert a photo into sepia tone is as follows:

::

    newR = (R × 0.393 + G × 0.769 + B × 0.189)
    newG = (R × 0.349 + G × 0.686 + B × 0.168)
    newB = (R × 0.272 + G × 0.534 + B × 0.131)

.. activecode::  act_ip_3
    :nocodelens:

    import image

    img = image.Image("golden_gate.png")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    for row in range(img.getHeight()):
        for col in range(img.getWidth()):
            p = img.getPixel(col, row)

            # your code here

    img.draw(win)
    win.exitonclick()


And finally here's an activecode place for you to go wild.  Try making everything neon.  Take away all of the green, double the blue.  whatever you can think of.  If you find something cool you can come back to it and try it on some different images.

.. activecode::  act_ip_4
    :nocodelens:

    import image

    img = image.Image("golden_gate.png")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    for row in range(img.getHeight()):
        for col in range(img.getWidth()):
            p = img.getPixel(col, row)

            # your code here

    img.draw(win)
    win.exitonclick()


Rotating, Scaling and Blending
------------------------------

In addition to filters, another really common thing to do with images is to crop, resize, and rotate them.  We will start with rotating , moving on to resizing and then we will apply the cropping operation to combine multiple images into one by taking parts of two or more images and adding them into a final image. Note that for this group of exercises we will not change the original image in place.  Instead we'll make a new Empty image and move the pixels from the original image into the appropriate place in the new image.


Lets start by rotating an image by 90 degrees in the clockwise direction.  This is an easy one to get wrong as your initial thought might be to just take a pixel from position x, y and put it at position y, x.  In fact this is easy to try so you should do that first to see why it is not quite correct.  To get this one right you might want to work through a small example to understand the correct pattern.  Thats good problem solving practice and really helps in this case.

.. activecode::  act_ip_5
    :nocodelens:

    import image

    # your code here

Now lets make an image larger.  We'll begin by enlarging the image by the same amount in both the width and the height.  This preserves a property of the image known as its aspect ratio.  You should think about this before  you start as how you solve this particular problem will make a huge difference in the complexity of your code.

.. activecode::  act_ip_6
    :nocodelens:

    import image

    # your code here

If get this one mastered then think about how you might enlarge the image by different factors in height and width.  You can make yourself look tall and thin (with an odd shaped head).  This is optional so if you decide to do it you can write it as an enhancement to the code in the activecode window above.

If you tried to enlarge an image really big you would notice that it starts to look like an 80's vintage video game.  That is the image will get really blocky. Later on in this project we'll introduce the idea of smoothing an image which can soften this blocky effect.

Once you have conquered enlarging an image its time to take on reducing an image.  The key to this is to start simple.  Don't try to invent the perfect solution to this problem before you solve a simple version.  What I mean by that is that in order to shrink an image, the ideal solution would be to summarize the colors contained in a block of pixels down to one.  But one way to do that summary is to simply pick one pixel to be the representative for the whole group.  If you get that strategy working then you might think about more advanced statistical techniques such as using the median of the color values or taking an average of all of the color values in a block of pixels.

.. activecode::  act_ip_7
    :nocodelens:

    import image

    # your code here

For our final project from this section lets take parts from two different images and glue them into a new image.  If your art department has a green screen this is a fun chance to put yourself into a scene of some kind.  If not, its still fun to take parts of two images and blend them together.  You can blend two images by averaging their pixel values.  Of course if you prefer to have one image be "on top" of another image then you can just replace the pixel values of the bottom image with the top.


.. activecode::  act_ip_8
    :nocodelens:

    import image

    # your code here

Challenge:  Can you figure out how to rotate your image by an arbitrary angle?  Here's a diagram that will give you a pretty big hint, but remember that in the diagram the x and y coordinates grow up and to the right with 0,0 in the lower left.  However, in your image 0,0 is in the upper left corner and x and y grow down and to the right.  Also you'll have to be really careful about how you size your resulting image to make sure you have room for your rotated image.

.. image:: http://robgrondahl.com/MPG/Wiki/2DRotation.bmp

Diagram licensed under Creative Commons Attribution (http://robgrondahl.com)

.. activecode::  act_ip_9
    :nocodelens:

    import image

    # your code here

Image Kernels for Machine Learning
----------------------------------

This is definitely a more advanced section, but if you are comfortable with all of the exercises up to now, you are going to like this.

Cleaning up noise
~~~~~~~~~~~~~~~~~

Here is a "friend" of mine in a photo taken long ago.  Its been in a box in the closet for years, gathering dust, getting crushed by books and generally aging as old photos tend to do.  I recently scanned it to add it to my digital collection.  But I'm not too happy with the result.

.. raw:: html

    <img src="../_static/noisyman.png" id="noisyman.png"><br />
    noisyman.png

Your job is to digitally restore my friend and make him look like new.  How are you going to do that? Well, what do we have to work with?  If you look at the image, most of the speckles are just one pixel that is out of whack caused by dust on the picture, or a small scratch.  Clearly that pixel value is incorrect **with respect to the pixels surrounding it.**  So we need to fix that.

Your first inclination would be to find the bad pixels and fix only those, but there is an even easier solution for us.  We can simply pretend that all pixels need to be fixed.  There are two strategies we can use:

1.  Replace every pixel with the average of the 8 pixels around it.
2.  Replace every pixel with the median pixel value of the 8 pixels around it.

This strategy should work pretty well as the "bad" pixels tend to be close to 0 or 255 whereas the good pixels are in more in the middle.

To find the neighbors we will use some nested loops where we calculate the range of the loops based on the current pixel location.  For example if we are trying to fix the pixels at row 11 and column 23 then we would want to look at the all the pixel values between row 10, column 22 and row 12 and column 24.  This process of iterating over the neighbors of a pixel is called a **kernel** and is widely used in image processing.

One word of caution before you dive into this, is that there is literally an  "edge case" and a "corner case" that you need to worry about or your program will crash.  That is the pixels around the edge do not have 8 neighbors.  We can deal with this the hard way or the easy way.  The hard way is to add some conditionals to your program to detect these edges and respond by dealing with a different number of neighbors.

The easy way to deal with this is to make the tradeoff that the pixels at the edge of the image are fine as they are, and we can start fixing our image at row 1, column 1 and stop 1 column from the right and 1 row from the bottom.  Now there are no special cases to worry about and you probably won't even notice the difference.

.. activecode::  act_ip_10
    :nocodelens:

    import image

    # your code here

One super clever strategy is to use the max and min functions to figure out the correct neighbor indexes.  You might try to figure this out if you are really a perfectionist.

Smoothing
~~~~~~~~~

This exercises is really a remix of the last problem and a return to our image enlargement problem, and we can fix the blocky nature of the enlarged image by replacing each pixel with the average of its neighbors.

.. activecode::  act_ip_11
    :nocodelens:

    import image

    # your code here


Edge detection
~~~~~~~~~~~~~~

the Sobel kernel has two parts to it one to calculate the gradient, that is how the darkness of the image is changing from left to right and another to measure how the darkness of the image is changing from top to bottom.

.. math::

   G_x = \left[ {\begin{array}{ccc}
   1 & 0 & -1 \\
   2 & 0 & -2 \\
   1 & 0 & -1 \\
  \end{array} } \right]


.. math::

   G_y = \left[ {\begin{array}{ccc}
   1 & 2 & 1 \\
   0 & 0 & 0 \\
   -1 & -2 & -1 \\
  \end{array} } \right]


You apply each of the kernels to the neighboring pixels by multiplying the neighbors by the value in the small matrix.  Then we combine the x and y gradients using

:math:`G = \sqrt{G_x^2 + G_y^2}`

This definitely gives you a taste of why image processing requires so much computational power.  its going to take a while for our Python in the browser to work its way over all of the pixels doing all of this computation for each one.  Its also why this one is last as it can be really time consuming and frustrating to debug something.

.. activecode::  act_ip_12
    :nocodelens:

    import image

    # your code here


**Post Project Questions**

.. poll:: LearningZone_9b
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_9b
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_9b
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_9b
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...
