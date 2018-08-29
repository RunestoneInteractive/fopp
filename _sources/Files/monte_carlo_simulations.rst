🤔 Monte Carlo Simulations
============================

A lot of scientific work can be done with simulations.  Most drugs today are not tested on animals, or even manufactured in meatspace without significant testing via simulation in cyberspace. Investment strategies are simulated Millions of times to predict the most likely outcome, bridge designs, new computers, new cars, man many other things are designed and simulated in the computer before anything physical is created.  `Steve Jobs <https://en.wikipedia.org/wiki/Steve_Jobs>`_ is said to have told his idol `Seymour Cray <https://en.wikipedia.org/wiki/Seymour_Cray>`_ that he used a Cray supercomputer to help design and model the latest Mac, to which Cray is reported to have replied 'that's great I just bought a Mac to help me design the next Cray.'

In this project we are going to investigate the Monte-Carlo simulation, named after the famous gambling city in `Monaco <https://www.google.com/maps/place/Monte+Carlo,+Monaco-Ville,+Monaco/@43.7261188,7.2865825,11z/data=!4m5!3m4!1s0x12cdc287dedfadcd:0xee15296ed95b686c!8m2!3d43.7400718!4d7.4266436>`_.  

We will do three simulations in this project.  The first to help us calculate the value of pi. The second to predict the price of a stock, and the third to explore the "Monty Hall Paradox"

Approximating Pi
================

 As you may recall from trigonometry pi is an irrational number with a decimal that goes on forever without repeating.  There is no simple fraction that precisely equals pi, and there are many different formulas and techniques for `approximating the value of pi <https://en.wikipedia.org/wiki/Approximations_of_%CF%80#Practical_approximations>`_ such as the Leibniz formula:

.. math::

    \frac{\pi}{4} = \frac{1}{1} - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \frac{1}{9} ...

While calculating infinite sums might be fun, and Python can certainly handle it, The Monte Carlo simulation is definitely more fun and a lot more intuitive to understand.

Suppose you are throwing darts at a dartboard.  Many of the darts are going to hit the board and some are going to miss.  We are interested in exploring the ratio of the number of darts that hit the dartboard to the overall number of darts you throw:  :math:`darts_on_board / total_darts`.  Not too bad so far, but how do we get from here to a value for pi?

Let me describe our simulation a little more precisely.

1.  Our dartboard is a 'unit circle' that is a circle centered at 0,0 with a radius of 1.0.
2.  Our dartboard is in the middle of a square that is 2 x 2 and there is a "magical force field" that ensures that all the darts either land on the dartboard or on the 2x2 square.
3.  We can simulate the throwing of the darts (and our force field) by using our random number generator to chose a random x coordinate between -1 and +1 and a random y coordinate between -2 and +2.  This will tell us exactly where the dart lands.
4.  We know that a dart lands on the board if its distance to 0,0 is less than or equal to 1.0.  :math:`d = \sqrt{x^2 + y^2}`  We know this because the radius of our dart board is 1.0.
5. Since the area of the circle is :math:`\pi r^2` the area of a unit circle is just :math:`\pi` the area of the 2x2 square that contains our dart board is 4. So, the ratio of the number of darts that hit the dart board to the total number of darts we throw is :math:`\frac{\pi}{4}`.  If we calculate the ratio and multiply by 4 we get :math:`\pi`!!

What is even more fun is to use our turtle graphics package to simulate animate this simulation.  Every time we throw a dart we make a dot on the screen where it lands.  If you color the darts that hit the dart board blue and the darts that miss red you will definitely see a circle emerge as the simulation progresses.

Lets start with the animation part before we do too much math.  You should also review the ``win.setworldcoordinates`` function so that we can plot our darts using real numbers between -1 and 1.  Then before you plot a point check to see if the distance to 0,0 is less than or equal to 1 and set the color accordingly.
Try to simulate about 1000 dart throws and see what you get.

.. activecode:: act_monte_1
    :nocodelens:

    #your code here




Predicting Stock Prices
-----------------------



Monty Hall
----------
