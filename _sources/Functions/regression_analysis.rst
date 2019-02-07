🤔 Predicting Pizza Prices - Linear Regression
================================================

Linear regression is probably one of the most widely used algorithms in data science, and many other sciences.  One of the best things about linear regression is that it allows us to learn from things that we know or observations and measurements of things we know to make predictions about new things.  These predictions might be about the likelihood of a person buying a product online or the chance that someone will default on their loan payments.  To start we are going to use an even simpler example predicting the price of pizza based on its diameter.

I have made an extensive study of the pizza places in my neighborhood and here is a table of observations of pizza diameters and their price.

======== =====
Diameter Price
======== =====
6        7
8        9
10       13
14       17.5
18       18
======== =====

Your first task is to make a scatter plot of the data with Altair using diameter as the x axis and price as the y axis.

.. activecode:: act_pizza_1
    :nocodelens:


What you can see pretty easily from this graph is that as the diameter of the pizza goes up, so does the price.  

If you were to draw a straight line through the points that came as close as possible to all of them, it would look like this:

.. image:: Figures/pizza_best_fit.png


The orange line called the trend-line or the regression line is our best guess at a line that describes the data.  This is important because we can come up with an equation for the line that will allow us to predict the y value (price) for any given x value (diameter).  Linear regression is all about finding the best equation for the line.

How do we do that?  There are actually several different ways we can come up with the equation for the line.  We will look at two different solutions, one is a closed form equation that will work for any problem like this in just two dimensions.  The second is a solution that will allow us to generalize the idea of a best fit line to many dimensions!

Recall the equation for a line that you learned in algebra:  :math:`y
= mx + b` .  What we need to do is to determine values for m and b.   One way we can do that is to simply guess! And keep refining our guesses until we get to a point where we are not really getting any better.  You may think this sounds kind of stupid, but it is actually a pretty fundamental part of many machine learning algorithms.  You may also be wondering how we decide what does it mean to "get better"?  In the case of our pizza problem we have some data to work with, and so for a given guess for m and b we can compare the calculated y against the known value of y and measure our error.  For example:  Suppose we guess that b = 5 and that m = .8 for a diameter of 10 we get :math:`y = .7 \times 10 + 5` or 12.  Checking against our table the value should be 13 so our error is our known value minus our predicted value :math:`13 - 12` or 1.  If we try the same thing for a diameter of 8 we get :math:`y = .7 \times 8 + 5` or 10.6.  The error here is :math:`9 - 10.6` or -1.6. But negative error in our context is as bad as the positive one of the same difference from the truth, so what matters in our case is the absolute value of the error.

Write a Python program to calculate the values for all diameters in the original data and print them out in a table, using a slope of .7 and intercept of 5.

.. activecode:: act_pizza_2

Now plot the original set of data along with the this new table of data.  Make the original one color and your calculated table another color.  Experiment with some different guesses for the slope and intercept to see how it works.

.. activecode:: act_pizza_3

Next lets add another column to the table where we include the error. Now we have our 'predicted values' and a bunch of error measurements.  One common way we combine these error measurements together is to compute the `Mean Squared Error (MSE) <https://en.wikipedia.org/wiki/Least_squares>`_.  It is easy to compute because all we have to do is to square each of our errors, add them up, and then divide by the number of error terms we have.  Why do we square them first?
We have already observed that what is relevant is actually the absolute value of the error and not its sign. If we just sum both positive and negative values together, they tend to cancel each other making our final mean error small.  To mitigate that we could compute the sum of their absolute values to get the `Sum of Absolute Errors (SAE) <https://en.wikipedia.org/wiki/Least_absolute_deviations>`_ measure. Although in some cases SAE provides advantages over MSE, there is some wonderful math behind MSE which will take advantage later, and therefore we will use the MSE to get a total error.
We call MSE (or SAE) an `objective function <https://en.wikipedia.org/wiki/Loss_function>`_. In many machine learning algorithms our goal is to minimize the objective function.  That is what we want to do here, we want to find the value for m and b that minimizes the error.

To do this we will follow the algorithm consisting of the following steps:

1. Pick a random value for m and b
2. Compute the MSE for all our known points
3. Repeat the following steps 1000 times
    a. Make m slightly bigger and recompute the MSE. Does that make it smaller?  If so, then use this new value for m.  If it doesn't make MSE smaller, then make m slightly smaller and see if that helps.
    b. Make b slightly bigger and recompute the MSE. Does that make it smaller?  If so, then use this new value for b and go back to step 3a.  If not, then try a slightly smaller b and see if that makes the MSE smaller. If so. keep this value for b and go back to step 3a.
4. After repeating the above enough times we will be very close to the best possible values for m and b.  We can now use these values to make predictions for other pizzas where we know the diameter but don't know the price.


Let's develop some intuition for this whole thing by writing a function and trying to minimize the error.

You will write three functions ``compute_y(x, m, b)`` (to compute y value for a single x), ``compute_all_y(list_of_x, m, b)`` (to compute y values for a list of x's) which would use ``compute_y``, and ``compute_mse(list_of_known, list_of_predictions)`` to estimate our objective function:

.. activecode:: act_pizza_4

Next write a function ``improve_estimate(list_of_known, list_of_predictions, m, b)`` that systematically, i.e. implementing steps 3a and 3b, tries different values for m and b in order to minimize the MSE and to return new values for m and b. Put this function in a loop for 1000 times, progressively minimizing our objective function, and see what your value is for m and b at the end.

.. activecode:: act_pizza_5


Congratulations!  You have just written your first "machine learning" algorithm.  One fun thing you can do is to save the MSE at the end of each time through the loop then plot it.  You should see the error go down pretty quickly and then level off or go down very gradually.  Note that the error will not ever get to 0 because our data isn't perfectly linear.

At this point your algorithm's ability to 'learn' is limited by how much you change the slope (m) and intercept (b) values each time through the loop.  At the beginning it's good to change them by a lot, but as you get closer to the best answer it's better to tweak them by smaller and smaller amounts. Can you adjust your code above to do this?

And now it is time to take advantage of the wonderful math! In case of MSE as the objective function, there is even a closed form solution to this problem that one could derive using a bit of calculus.  It is worthwhile to have the students do this to see that their solution is very very close to the solution you get from a simple formula that for two dimensional data is :math:`slope = \frac{covariance}{variance}` and :math:`intercept = mean(y) - slope * mean(x)`.  Write a function that will calculate the slope and intercept using this method and compare the slope and intercept with your previous error.

.. activecode:: act_pizza_6


**Post Project Questions**

.. poll:: LearningZone_12b
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_12b
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_12b
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_12b
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...
