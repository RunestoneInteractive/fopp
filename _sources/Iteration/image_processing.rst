🤔 Image Processing
=====================

Whether you are into Facebook, Instagram, or Snapchat you are probably familiar with all kinds of image filters and manipulations.  It turns out that lots of the filters you can apply to images are pretty fun to code.  Hopefully you have read the :ref:`Nested Iteration and Image Processing section<image_proc>` to get yourself ready for this project.  In any case you will probably want to open up that section in another tab so you can refer to the image module functions that are provided.


Basic Filters
-------------

To start, we'll try some pixel by pixel filters.  We have a few for you to try here, but feel free to experiment on your own as well.  You really can't go wrong here so let your imagination run wild.

The first thing to try is to create a grayscale version of a color image.  Grayscale is not quite black and white where each pixel would be "all on" or "all off" but rather a grayscale image is one in which the the red, green, and blue components of each pixel are all the same and in the range from 0 to 255.  Your first task is to figure out how to turn rgb values for each pixel which are likely different into three values for rgb that are the same.  There are several different ways you could do this, and there's not really a clear right or wrong, so just try the first thing that occurs to you and it will probably look pretty good.

.. activecode::  act_ip_1
    :nocodelens:

    import image

    img = image.Image("luther.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

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

    img = image.Image("luther.jpg")
    win = image.ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    img.setDelay(1,15)   # setDelay(0) turns off animation

    for row in range(img.getHeight()):
        for col in range(img.getWidth()):
            p = img.getPixel(col, row)

            # your code here

    img.draw(win)
    win.exitonclick()


Here is another pretty standard filter for photos called "Sepiatone"  It will remind you of the old-west photographer style images.  The formula to convert a photo into sepiatone is as follows:


.. activecode::  act_ip_3
    :nocodelens:

    import image

    img = image.Image("luther.jpg")
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

    img = image.Image("luther.jpg")
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



Image Kernels for Machine Learning
----------------------------------

