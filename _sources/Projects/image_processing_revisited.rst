..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.

:skipreading:`True`

.. _image_processing_revisited:

🤔 Image Processing Revisited
===============================

.. raw:: html

    <img src="../_static/GoldenGateBridgeCC.png" id="GoldenGateBridgeCC.png"></img>

Image used under `Creative Commons Attribution License <https://commons.wikimedia.org/wiki/File:GoldenGateBridge-001.jpg>`_.

Use the name "GoldenGateBridgeCC.png" to access this image.

Returning to the code that you wrote in the original image processing project.  convert your grayscale algorithm into a function called ``grayscale`` that takes an image as a parameter and returns a **new** image that has been converted to grayscale, leaving the old image alone.  Display the old image on the top of the window and the new image below.

.. activecode:: act_imfunc_1



Next convert your rotation and scaling algorithms into functions. Your rotation function should take two parameters, an image, and the number of degrees to rotate.  If you only know how to rotate an image by 90, 180, or 270 degrees then you should check the parameters and print an error if it is not one of those values.  If you are ready to tackle rotating by any number of degrees now would be a great time to do so.   Your scaling function should take an image as a parameter along with a scale factor.  Both of these functions should return a new image leaving the original alone.

Then use the functions together to take an image, rotate it by 90 degrees, enlarge it by a factor of 2 and convert it to gray scale.

.. activecode:: act_imfunc_2


Next design and write functions that will allow you to do:

* smoothing
* edge detection

Do the smoothing here using our old friend the noisyman.

.. raw:: html

    <img src="../_static/noisyman.png" id="noisyman.png"><br />
    noisyman.png

.. activecode:: act_imfunc_3

Do the edge detection here.


.. activecode:: act_imfunc_4

Write a function called ``montage`` that takes a background image and a foreground image and a row and column.  The foreground image should be a green-backgrounded image so you can place it anywhere on the background image.  The row and column parameters tell you where to put the foreground image in the background image.

.. raw:: html

    <img src="../_static/ducky.jpg" id="ducky.jpg"><br />
    ducky.jpg

A fun test for this and your other functions is to write a program that makes a row of small rubber ducks swimming in the bay under the golden gate bridge!

.. activecode:: act_imfunc_5


**Post Project Questions**

.. poll:: LearningZone_12c
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_12c
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_12c
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_12c
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...
