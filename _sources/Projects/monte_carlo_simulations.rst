..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.

:skipreading:`True`

.. _monte_carlo_simulations:

🤔 Monte Carlo Simulations
============================

A lot of scientific work can be done with simulations.  Most drugs today are not tested on animals, or even manufactured at all in real life, without significant testing via simulation in cyberspace. Investment strategies are simulated Millions of times to predict the most likely outcome, bridge designs, new computers, new cars, man many other things are designed and simulated in the computer before anything physical is created.  `Steve Jobs <https://en.wikipedia.org/wiki/Steve_Jobs>`_ is said to have told his idol `Seymour Cray <https://en.wikipedia.org/wiki/Seymour_Cray>`_ that he used a Cray supercomputer to help design and model the latest Mac, to which Cray is reported to have replied 'that's great I just bought a Mac to help me design the next Cray.'

In this project we are going to investigate the Monte-Carlo simulation, named after the famous gambling city in `Monaco <https://www.google.com/maps/place/Monte+Carlo,+Monaco-Ville,+Monaco/@43.7261188,7.2865825,11z/data=!4m5!3m4!1s0x12cdc287dedfadcd:0xee15296ed95b686c!8m2!3d43.7400718!4d7.4266436>`_.

We will do three simulations in this project.  The first to help us calculate the value of :math:`\pi`. The second to predict the price of a stock, and the third to explore the "Monty Hall Paradox".

Approximating Pi
----------------

As you may recall from trigonometry pi is an irrational number with a decimal that goes on forever without repeating.  There is no simple fraction that precisely equals pi, and there are many different formulas and techniques for `approximating the value of pi <https://en.wikipedia.org/wiki/Approximations_of_%CF%80#Practical_approximations>`_ such as the Leibniz formula:

.. math::

    \frac{\pi}{4} = \frac{1}{1} - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \frac{1}{9} ...

While calculating infinite sums might be fun, and Python can certainly handle it, The Monte Carlo simulation is definitely more fun and a lot more intuitive to understand.

Suppose you are throwing darts at a dartboard.  Many of the darts are going to hit the board and some are going to miss.  We are interested in exploring the ratio of the number of darts that hit the dartboard to the overall number of darts you throw:  :math:`darts\_on\_board / total\_darts`.  Not too bad so far, but how do we get from here to a value for pi?

Let me describe our simulation a little more precisely.

1.  Our dartboard is a 'unit circle' that is a circle centered at 0,0 with a radius of 1.0.
2.  Our dartboard is in the middle of a square that is 2 x 2 and there is a "magical force field" that ensures that all the darts either land on the dartboard or on the 2x2 square.
3.  We can simulate the throwing of the darts (and our force field) by using our random number generator to chose a random x coordinate between -1 and +1 and a random y coordinate between -1 and +1.  This will tell us exactly where the dart lands.
4.  We know that a dart lands on the circle dartboard if its distance to 0,0 is less than or equal to 1.0.  :math:`d = \sqrt{x^2 + y^2}`  We know this because the radius of our dartboard is 1.0.
5. Since the area of the circle is :math:`\pi r^2` the area of a unit circle is just :math:`\pi`, and the area of the 2x2 square that contains our dartboard is 4. So, the ratio of the number of darts that hit the dartboard to the total number of darts we throw is :math:`\frac{\pi}{4}`.  If we calculate the ratio and multiply by 4 we get :math:`\pi`!!

What is even more fun is to use our turtle graphics package to simulate animate this simulation.  Every time we throw a dart we make a dot on the screen where it lands.  If you color the darts that hit the dartboard blue and the darts that miss red you will definitely see a circle emerge as the simulation progresses.

Let's start with the animation part before we do too much math.  You should also review the ``win.setworldcoordinates`` function so that we can plot our darts using real numbers between -1 and 1.  Then before you plot a point check to see if the distance to 0,0 is less than or equal to 1 and set the color accordingly.
Try to simulate about 1000 dart throws and see what you get.

.. activecode:: act_monte_1
    :nocodelens:

    #your code here
    # recommend myturtle.tracer(12,25) for faster animation


Now that you have the animation working you can add in the counting and make a calculation of the value of pi.  You can speed up the animation considerably with the use of the tracer function.  Ordinarily the turtle draws the picture incrementally every time you perform a drawing operation.  For example a straight line of 100 might be drawn in 10 segments with a small pause between each segment.  The ``tracer(skips,pause)`` function allows you to say only perform every ``skips`` updates and to wait for only ``pause`` milliseconds.  One funny side effect of this is that in a few odd cases your picture might look incomplete so if you use this it's a good idea to also call ``update`` at the end of all your drawing to be sure you have the full picture.


.. activecode:: act_monte_2
    :nocodelens:


Probably your first try with 1000 or 2000 repetitions will get you to around 3.1 or so.  If you want to get a lot closer to the actual value for pi 3.1415926... then you will need to repeat the simulation itself several hundred  or a thousand times and take the average of the predictions.  To keep in practice with your graphing, you can keep track of each value for pi in a list and make a histogram of the predicted values for pi.  It should be a nice "bell shape" with the center close to 3.14.   You can experiment and compare notes with other students to try different values for the number of darts to throw and the number of experiments to try.

.. note:: Extending the Time Limit

    When doing a long running simulation like the pi calculation you may run up against the time limit we have set for your program.  25 seconds.  to increase the time you can do the following in your program:

    .. code-block:: python

        import sys
        sys.setExecutionLimit(60000)

    That ups the time limit to 60 seconds.  The value you pass is in milliseconds.


.. activecode:: act_monte_3



Predicting Stock Prices
-----------------------

Next we want to turn our attention to doing a monte carlo simulation of a stock price.  Many money managers do a very similar simulation for their clients to help them with financial planning for retirement or saving for a college education.

The idea behind a stock simulation derives from Burton Malkiel's random walk theory.  In the random walk theory we flip a coin, if the coin is heads then the stock goes up a little bit, but if the coin is tails the stock goes down a little bit.  How much the stock goes up or down will be determined based on analyzing how much it typically changes from day to day in the past.

Let's begin by first reading the stock data from a CSV file.  You can see the columns below for the data which is real historical data.  You could obtain this data from a number of different sources and use your own favorite stock if you would like.  You'll notice there are two columns for the closing price of the stock:  Close and Adj Close.  We are interested in the Adj Close column as that adjusts the stock price for future splits.  A split happens when a company decides to lower their price by increasing the number of shares.  A two for one split is common, so when a split happens, instead of 1 share at $60.00 per share you now have 2 shares at $30.00.  You can see how on a graph this would make it look like the price was cut in half.

.. datafile:: AAPL_train.csv
    :fromfile: AAPL_train.csv


First, let's use Altair to graph the closing price of the stock over 1000 days.

.. activecode:: act_monte_4
    :nocodelens:

Once you have your initial graph, let's look at how much the stock changes from day to day.  To do this we will make a new list of numbers where we take the price from day N and subtract the price from day N-1.   Next we'll use Altair to graph these changes to see if we can detect any pattern in how the stock changes from day to day.  In fact it should look quite random.

.. activecode:: act_monte_5
    :nocodelens:


Now that we have the changes and have confirmed that they seem to change randomlyfrom day to day, let's make a histogram to see the distribution of the daily changes.  Hey, it's bell-shaped!

.. activecode:: act_monte_6
    :nocodelens:

Now we will compute some statistics -- the mean change from day to day as well as the standard deviation of the changes.  We want to know the standard deviation because we will use that to determine how much our stock might go up or down on any given day. You should get a mean of about 0.03 and a standard deviation of 0.548.


**Let's Predict**

Armed with the information from above we can make predictions for the next 250 days.  We have the real data for the next 250 days below so we can see how accurate we are.  To do this we'll use the ``random.gauss`` function from the random module.  This function returns a random number where the numbers are distributed according to a bell shaped curve, that is most of the numbers will be close the mean and some will be closer to the boundaries defined by our standard deviation.  The gauss function takes two parameters: the mean si first and the standard deviation is next.

To predict the next 250 days we'll take the closing price of our last day as the starting point and then add whatever value we get from our call to ``random.gauss(mean,std)``  This gives us a prediction for the next day. To predict the day after we use the first predicted value as our starting point and then add a random amount to that.  We can repeat this 250 times to get our final prediction.

When professional money managers do this they will run the calculation a few hundred thousand times or even a million times and they will keep track of the worst case -- that is the lowest closing price at the end of the 250 day period, the best case -- the highest closing price at the end of the 250 day period, and the median case.  That is the closing price that falls in the middle of all the possible closing prices.

You probably don't want to run this a million times in your browser but let us give it a try for 10,000 times.  What is your worst case, best case and average price for the final price.

.. activecode:: act_monte_7


Once you have those values you can use the real numbers below and compare your prediction to see how well you did.   You can also join forces with the rest of your class to see if you did even better as a group.


.. datafile:: AAPL_test.csv
    :fromfile: AAPL_test.csv






Monty Hall Challenge
--------------------

This is a pretty famous problem that can even get experienced statisticians arguing with each other.  It comes from the famous game show of the 70's called Let's make a deal.  Here's a video, but please don't throw away an entire half hour, you can get the gist of it in a few minutes.  And then skip ahead to the end to see the "Big Deal of the Day" at around 18:30.

.. youtube:: 5-pEPE4LCFE
    :height: 315
    :width: 420
    :align: left


The big deal of the day works like this. There is usually one big prize, and  two `booby prizes <https://en.wikipedia.org/wiki/Booby_prize>`_, such as a goat. You can choose to get the whatever is behind door number 1, door number 2, or door number 3.  Once you have picked your door then Monty will reveal what is behind one of the other doors.  He won't reveal the grand prize but he might show you the goat.  Then Monty will give you the opportunity to switch your door.  The question is, should you switch?  Do you increase your odds of getting the grand prize by switching doors?  Does it stay the same?  Or, do your odds of winning go down if you switch?  If you have already heard this keep it to yourself and let everyone make their best guess before find out the truth.

The math behind this is pretty complicated, but now that you are an experienced Monte Carlo simulator you can solve this one. With some Python code.  Using the random number generator you can put a prize behind a door.  Then using the random number generator you can let the 'contestant' pick a door.  You will then remove a door using the rule that you cannot reveal the grand prize.  Then you can simulate what happens if the contestant switches doors or not.  You can do this 10,000 times to determine the odds of winning if you switch and the odds of winning of you stick. Since this is meant to be the challenge section I'll leave it at that and you can start coding.

.. activecode:: act_monte_8


**Post Project Questions**

.. poll:: LearningZone_10b
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_10b
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_10b
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_10b
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...

