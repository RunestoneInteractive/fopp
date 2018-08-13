Driving the Turtle
==================


This first activity is designed to get you started writing some simple programs in Python using the `turtle graphics <https://en.wikipedia.org/wiki/Turtle_graphics>`_ system.  There is a :ref:` chapter <turtles_chap>` on turtle graphics that will go into more detail but for today you can have some fun and do a lot by simply modifying the following example:

.. activecode:: act_turtle_1
    :nocodelens:

    import turtle

    my_turtle = turtle.Turtle()   # create a turtle
    my_turtle.color('green')      # set the color
    my_turtle.forward(50)         # draw a green line of length 50
    my_turtle.up()                # lift up the tail
    my_turtle.forward(50)          # move forward 50 without drawing
    my_turtle.right(90)           # change direction to the right, left works too
    my_turtle.down()              # put the tail down
    my_turtle.backward(100)       # draw a green line 100 units long


The  metaphor to have in your head for this is that you have a turtle that you can control from your program.  The turtle understands a few basic instructions such as `forward`, `backward`, `left`, `right`, `up`, `down`, `color` and others that you can look up.  You can use these basic instructions to quite a bit, and as we learn more and more about Python programming you will be able to make the turtle do more interesting tasks, for example it is even possible to write a retro style video game using turtle graphics if that is your thing.

Don't worry about making mistakes, it is normal and happens to even the most experienced programmers.  At worst you can simply reload the page if you get stuck.  If you try something and don't like it the slider at the top of the window where you enter code can be used to back up to a previous version of your program.


.. activecode:: act_turtle_2
    :nocodelens:

    Using the above example to get started create a turtle and draw an interesting picture.
    ~~~~
    import turtle

    # Your code here

