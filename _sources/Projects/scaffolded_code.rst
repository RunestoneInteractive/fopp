..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.

:skipreading:`True`

.. _scaffolded_code:

🤔 A Preview of the End Goal
==============================

Computer Programming can be one of the most rewarding experiences ever.  You get to create things inside the computer that can do wondrous tasks.  From understanding human speech, to image processing, to computer generated animation, you can do almost anything with code!  However like any other skill that you learn you have to walk before you run.  You would not expect to sit down at a piano for the first time and play `Beethoven's Piano Sonata No.32; Op.111 in C Minor <https://youtu.be/1ljq4MwzAbo>`_  You have to work up to that with lots of practice. It is no different with writing code.

In this project the goal is to give you an idea of the kinds of things you will be able to do by the end of this course.  You are not going to understand the code that we give you in this project, but you will be able to use it to do some cool things.

For many of you reading this or taking a first course in computer science that there are many unfamiliar aspects of writing code.  The text editor used to create code may seem primitive as it lacks any kind of formatting.  The Python interpreter itself may seem incredibly annoying to you at first, as programming languages only do what you tell them.  They have no intelligence, they don't do what you **mean**, they do exactly what you **tell them**.  And if in the process of telling the computer what you want it to do, by writing code, you make a little typo, or forget a particular character the computer will just give you an error message and sit there stupidly waiting for you to fix it!  Don't let that discourage you, especially early on, dealing with errors is a normal part of the process and will get easier as time goes by.

Image Processing Functions
--------------------------

Here is an example of a Python program that converts a color image to be black and white.  You may or may not be able to look at the code and figure out what it does at this point, but this is definitely an example of something you will be able to do on your own by the end of the course.

.. activecode:: act_0_anim

    import image

    def process11(img):
        #get the height and width of the image
        width=img.getWidth()
        height=img.getHeight()
        for row in range(height):
            for col in range(width):
                p = img.getPixel(col, row)
                #What are the red, blue and green values for p?
                red_value = p.getRed()
                green_value = p.getGreen()
                blue_value = p.getBlue()
                if (red_value + green_value + blue_value)/3 >= 255/2:
                    newred = 255
                    newgreen = 255
                    newblue = 255
                else:
                    newred = 0
                    newgreen = 0
                    newblue = 0

                #set new pixel to new color values.
                newpixel = image.Pixel(newred, newgreen, newblue)

                img.setPixel(col, row, newpixel)
        # then draw the new images

    img = image.Image("LutherBellPic.jpg")
    img.setDelay(1,15)
    newwin=image.ImageWin(img.getWidth(),img.getHeight())
    img.draw(newwin)
    process11(img)

The window above contains the source code for a procedure that converts an image to black and white.  This procedure is often called a function, because it is a reusable bit of code that you might use in many different situations.  As a programmer you will work with source code a lot.  If we were to describe the process above in english this is how we might describe what is going on:

1. Get the height and width of the image.
2. Process every pixel in the image (located at a particular row and column) as follows:

   a. Get the red, green, and blue values of the pixel
   b. If the average value of red, green and blue is more than 127 then make a new all white pixel.  Otherwise make a new all black pixel.
   c. Replace the old color pixel with either the white or black pixel as deteremined in step b.



The following activecode editor contains 10 different image processing functions (process1, process2, ... process10) Each of these functions accepts an image as a parameter and returns a transformed image. A few of the functions take a second parameter that tells the function how to do its job.

.. activecode:: act_0_imageproc
    :hidecode:
    :nocodelens:

    import image
    import math

    #Here are the functions that should be in the background for them to explore

    def stacked(original, modified):
        # This function will give a stacked image,
        # showing the original and modified together.
        # The sizes of the images need to be the same.

        # Get the height and width of the image
        width=original.getWidth()
        height=original.getHeight()

        # make a new window twice as tall
        newimg = image.EmptyImage(width,height*2)
        # put the original in the top
        for row in range(height):
            for col in range(width):
                p = original.getPixel(col, row)
                newimg.setPixel(col, row, p)
        # and the modified in the bottom
        for row in range(height):
            for col in range(width):
                p = modified.getPixel(col, row)
                newimg.setPixel(col, row + height, p)
        # then draw the new images
        newwin=image.ImageWin(width,height*2)
        newimg.draw(newwin)
        return newimg

    def process1(img):
        width=img.getWidth()
        height=img.getHeight()
        newimg = image.EmptyImage(width,height)
        for row in range(height):
            for col in range(width):
                p = img.getPixel(col, row)
                # find the distance to the center
                distance = math.sqrt((col - width/2)**2+(row - height/2)**2)
                scaling_factor = (height - distance)/height
                newred = p.getRed()*scaling_factor
                newgreen = p.getGreen()*scaling_factor
                newblue = p.getBlue()*scaling_factor
                #set new pixel to new color values.
                newpixel = image.Pixel(newred, newgreen, newblue)
                newimg.setPixel(col, row, newpixel)

        newwin=image.ImageWin(width,height)
        newimg.draw(newwin)

        return newimg

    def process2(img):
        width=img.getWidth()
        height=img.getHeight()
        scaling_factor = 0.3
        newimg = image.EmptyImage(width,height)
        for row in range(height):
            for col in range(width):
                p = img.getPixel(col, row)
                #What are the red, blue and green values for p?
                red_value = p.getRed()
                green_value = p.getGreen()
                blue_value = p.getBlue()

                #average those values
                average_value = (red_value + green_value + blue_value)/3

                # if the cell is light, make it lighter
                if average_value >= 170:
                    newred = int(255 - (255 - red_value)*scaling_factor)
                    newgreen = int(255 - (255 - green_value)*scaling_factor)
                    newblue =  int(255 - (255 - blue_value)*scaling_factor)
                elif average_value < 90:
                    newred = red_value*scaling_factor
                    newgreen = green_value*scaling_factor
                    newblue =  blue_value*scaling_factor
                else:
                    newred = red_value
                    newgreen = green_value
                    newblue =  blue_value

                #set new pixel to new color values.
                newpixel = image.Pixel(newred, newgreen, newblue)

                newimg.setPixel(col, row, newpixel)

        newwin=image.ImageWin(width,height)
        newimg.draw(newwin)
        return newimg

    def process3(img):
        #get the height and width of the image
        width=img.getWidth()
        height=img.getHeight()
        newimg = image.EmptyImage(width,height)
        for row in range(height):
            for col in range(width):
                p = img.getPixel(col, row)
                #What are the red, blue and green values for p?
                red_value = p.getRed()
                green_value = p.getGreen()
                blue_value = p.getBlue()

                # average those values to get the grey value
                gray_value = (red_value + green_value + blue_value)/3

                # set new color values to all be our grey value
                newred = gray_value
                newgreen = gray_value
                newblue = gray_value

                #set new pixel to new color values.
                newpixel = image.Pixel(newred, newgreen, newblue)

                newimg.setPixel(col, row, newpixel)
        # then draw the new images
        newwin=image.ImageWin(width,height)
        newimg.draw(newwin)
        return newimg

    def process4(img):
        width=img.getWidth()
        height=img.getHeight()
        newimg = image.EmptyImage(height,width) #fresh canvas for rotated image
        for row in range(height):
            for col in range(width):
                p = img.getPixel(col, row)
                newimg.setPixel( (height-1) - row,col,p)
        newwin=image.ImageWin(width,height)
        newimg.draw(newwin)
        return newimg

    def rotate_by_90(img):

        width=img.getWidth()

        height=img.getHeight()

        newimg = image.EmptyImage(height,width) #fresh canvas for rotated image

        for row in range(height):

            for col in range(width):

                p = img.getPixel(col, row)

                newimg.setPixel( (height-1) - row,col,p)

        newwin=image.ImageWin(width,height)

        newimg.draw(newwin)

        return newimg

    def process5(img, number):
        angle = int(number*90)
        if angle%90 != 0:
            print("angle must be a multiple of 90 degrees.")
        elif angle%360 == 0:
            return img
        elif angle%360 == 90:
            return rotate_by_90(img)
        elif angle%360 == 180:
            return rotate_by_90(rotate_by_90(img))
        else:
            return rotate_by_90(rotate_by_90(rotate_by_90(img)))

    def process6(img,xscale,yscale):
        width = img.getWidth()
        height = img.getHeight()
        newimg = image.EmptyImage(xscale*width,yscale*height)
        win = image.ImageWin(width,height)
        img.draw(win)
        for row in range(int(yscale*height)):
            for col in range(int(xscale*width)):
                p = img.getPixel(int(col/xscale),int(row/yscale))
                newimg.setPixel(col,row,p)
        return newimg

    def process7(img):
        #get the height and width of the image
        width=img.getWidth()
        height=img.getHeight()
        newimg = image.EmptyImage(width,height)
        for row in range(height):
            for col in range(width):
                p = img.getPixel(col, row)
                #What are the red, blue and green values for p?
                red_value = p.getRed()
                green_value = p.getGreen()
                blue_value = p.getBlue()

                # average those values to get the grey value
                gray_value = (red_value + green_value + blue_value)/3


                if gray_value >= 255/2:
                    newred = 255
                    newgreen = 255
                    newblue = 255
                else:
                    newred = 0
                    newgreen = 0
                    newblue = 0

                #set new pixel to new color values.
                newpixel = image.Pixel(newred, newgreen, newblue)

                newimg.setPixel(col, row, newpixel)
        # then draw the new images
        newwin=image.ImageWin(width,height)
        newimg.draw(newwin)
        return newimg

    def process8(img):
        #get the height and width of the image
        width=img.getWidth()
        height=img.getHeight()
        newimg = image.EmptyImage(width,height)
        for row in range(height):
            for col in range(width):
                p = img.getPixel(col, row)
                #What are the red, blue and green values for p?
                red_value = p.getRed()
                green_value = p.getGreen()
                blue_value = p.getBlue()

                scaling_factor = .8
                newred = int(255 - (255 - red_value)*scaling_factor)
                newgreen = int(255 - (255 - green_value)*scaling_factor)
                newblue = int(255 - (255 - blue_value)*scaling_factor)

                #set new pixel to new color values.
                newpixel = image.Pixel(newred, newgreen, newblue)

                newimg.setPixel(col, row, newpixel)
        # then draw the new images
        newwin=image.ImageWin(width,height)
        newimg.draw(newwin)
        return newimg

    def process9(img):
        #get the height and width of the image
        width=img.getWidth()
        height=img.getHeight()
        newimg = image.EmptyImage(width,height)
        for row in range(height):
            for col in range(width):
                p = img.getPixel(col, row)
                #What are the red, blue and green values for p?
                red_value = p.getRed()
                green_value = p.getGreen()
                blue_value = p.getBlue()

                scaling_factor = .8
                newred = red_value*scaling_factor
                newgreen = green_value*scaling_factor
                newblue = blue_value*scaling_factor

                #set new pixel to new color values.
                newpixel = image.Pixel(newred, newgreen, newblue)

                newimg.setPixel(col, row, newpixel)
        # then draw the new images
        newwin=image.ImageWin(width,height)
        newimg.draw(newwin)
        return newimg

    def process10(img):
        #get the height and width of the image
        width=img.getWidth()
        height=img.getHeight()
        newimg = image.EmptyImage(width,height)
        for row in range(height):
            for col in range(width):
                p = img.getPixel(col, row)
                #What are the red, blue and green values for p?
                red_value = p.getRed()
                green_value = p.getGreen()
                blue_value = p.getBlue()
                max_color = max(red_value, blue_value, green_value)
                if red_value + green_value + blue_value >= 550:
                    newred = 255
                    newgreen = 255
                    newblue = 255
                elif red_value + green_value + blue_value <= 150:
                    newred = 0
                    newgreen = 0
                    newblue = 0
                elif max_color == red_value:
                    newred = 255
                    newgreen = 0
                    newblue = 0
                elif max_color == green_value:
                    newred = 0
                    newgreen = 255
                    newblue = 0
                else:
                    newred = 0
                    newgreen = 0
                    newblue = 255

                #set new pixel to new color values.
                newpixel = image.Pixel(newred, newgreen, newblue)

                newimg.setPixel(col, row, newpixel)
        # then draw the new images
        newwin=image.ImageWin(width,height)
        newimg.draw(newwin)
        return newimg

.. raw:: html

    <img src="../_static/yawning_squirrel.jpg" id="yawning_squirrel.jpg">
    <h4 style="text-align: center;">yawning_squirrel.jpg</h4>

.. raw:: html

    <img src="../_static/LutherBellPic.jpg" id="LutherBellPic.jpg">
    <h4 style="text-align: center;">LutherBellPic.jpg</h4>

Your first task is to experiment with the different functions to discover what they do.  You can use either of the supplied images in your experimenting as sometimes one image "works better" for demonstrating an effect than the other. Before you try each function, you might look at the code for it in the box above and see if you can make a prediction about what it does.  Don't worry if it looks like complete gibberish to you you can still do this just by experimenting with the different processes.

The following code box gives you a framework for trying each process.

.. activecode:: act_0_learnfuncs
    :include: act_0_imageproc
    :nocodelens:

    # Here is seed text that can go in the activecode window for them to modify
    original = image.Image('yawning_squirrel.jpg')
    final = process10(original)
    newwin=image.ImageWin(final.getWidth(),final.getHeight())
    final.draw(newwin)

.. dragndrop:: act_0_image_match
   :feedback: Keep trying
   :match_1: process1(img)|||Adds vignette effect - dark corners
   :match_2: process2(img)|||Adds clarendon type effect - darks darker and lights lighter
   :match_3: process3(img)|||greyscale
   :match_4: process4(img)|||Rotates by 90 degrees
   :match_5: process5(img,number)|||Rotates by multiples of 90 degrees
   :match_6: process6(img, num1, num2)|||Enlarges in the x and y direction
   :match_7: process7(img)|||Converts image to high contrast - black and white only
   :match_8: process8(img)|||Lightens image
   :match_9: process9(img)|||Darkens image
   :match_10: process10(img)|||Converts to only black, white, red, blue and green

Now it is your turn to combine these various effects together.  The output from one function can be passed as the input toa new function for example:  `process1(process4(myimg))`  Will combine the effects of process1 and process4.  You can combine as many of these together as you wish.  Experiement as much as you want to see what kind of creative effects you can achieve.

.. activecode:: act_0_experiment
    :include: act_0_imageproc
    :nocodelens:

    # Here is seed text that can go in the activecode window for them to modify
    original = image.Image('yawning_squirrel.jpg')
    step1 = process1(original)
    final = process4(step1)
    newwin=image.ImageWin(final.getWidth(),final.getHeight())
    final.draw(newwin)


**Post Project Questions**

.. poll:: LearningZone_0
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_0
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_0
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_0
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...

