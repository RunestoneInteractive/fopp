..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.

:skipreading:`True`

.. _better_pizza_predictions:

🤔 Better Pizza Predictions with Multiple Regression
=======================================================



In :ref:`regression_analysis` We developed a model for predicting pizza prices based on their diameter.  In this section lets try to improve that model by using more data.  In this case we will use both the diameter and the number of toppings.

.. csv-table::

    Training Inst,Diameter,Toppings,Price
    1,6,2,7
    2,8,1,9
    3,10,0,13
    4,14,2,17.5
    5,18,0,18

The question is how can we generalize the :math:`y = mx+b` equation in a scenario where we have more than just the x and y dimensions.  The answer is that it does generalize but rather than as a line when we get to more than two dimensions the equation we are after describes a hyper-plane.  We can see the plane in 3D but after that we can't visualize it very well.  So the equation we are after looks like the following :math:`y = c_1x_1 + c_2x_2 + c_nx_n + b` Where :math:`c_i` is the equivalent of the m value for each different dimension.

Another way to write this is simply

.. math::

    y = b + \sum{c_ix_i}

In our higher dimensional space we are not really calculating the y coordinate but rather making a prediction for some value such as the pizza price based on the known quantities of some other variables weighted by the different  coefficients.  We still need the b term to ensure that our hyperplane does not have to pass through the origin of our multi-dimensional space.  We can simplify the equation even more if we use the convention that :math:`x_0 = 1`.  This allows us to write the equation with b included inside the summation and then the value for :math:`c_0` plays the role of b.  This gives us a very clean equation:

.. math::

    prediciton = \sum{c_ix_i}

The reason this simplification is powerful and important is that we have now boiled down our prediction to taking the dot product of two vectors. :math:`\vec{c}`  and :math:`\vec{x}`  .  That may take a moment to sink in.  The fact that we can express these as vector operations is really good these days because things like dot products can be computed in parallel very quickly on modern GPU hardware.

We'll come back in a minute and talk about how we will calculate :math:`\vec{c}` using the same brute force method we did for the one dimensional problem.  But for now let's get our hands dirty and write a function called dot that computes the dot product of two vectors. :math:`dot = \sum{a_ib_i}` where the two vectors are :math:`\vec{a}` and :math:`\vec{b}`.

.. activecode:: multreg_dot

    def dot(a,b):
        # your code here

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(dot([1,2,3],[4,5,6]), 32, "testing [1,2,3] and [4,5,6]")
           self.assertEqual(dot([0,0,0],[4,5,6]), 0, "testing with one vector all 0's")
           self.assertEqual(dot([1,1,1],[1,1,1]), 3, "testing vectors of all 1's ")
           self.assertEqual(dot([1,1,1],[-1,-1,-1]), -3, "testing vectors of all 1's and -1's ")
           self.assertEqual(dot([1,1,1,1],[-1,-1,1,1]), 0, "testing vectors of all 1's and -1's ")

    myTests().main()

Now that we have our dot product we can go back to the structure of our initial regression problem.  If you recall what we did there, we tried fiddling with the values for m and b just a little bit and kept the modification that decreased our mean squared error (MSE).  We will play the same game, but instead of changing m and b we will make small changes to each of the values :math:`c_i`.  You can see how this process of "learning" the regression vector will get computationally expensive!

.. datafile:: pizza_toppings.csv

    Training Inst,Diameter,Toppings,Price
    1,6,2,7
    2,8,1,9
    3,10,0,13
    4,14,2,17.5
    5,18,0,18

Now using the data above calculate the vector of coefficients for the bias, diameter and number of toppings.  Your function should return a list corresponding to :math:`\vec{c}`

You can improve upon the solution from  :ref:`regression_analysis` because you can now use a ``while loop``.   You can have your program continue until your values for :math:`\vec{c}` stop changing.  You may not want to do this immediately, but you should definitely give it a try before you move on.

.. activecode:: multreg_learn

    import sys
    # Give this program more time to run
    sys.setExecutionLimit(60000)

    def fit():
        # your code here

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

       # [1.18750070681955, 1.010416621897852, 0.39583316275729197]
       def testOne(self):
           res = fit()
           self.assertAlmostEqual(res[0], 1.1875, 2)
           self.assertAlmostEqual(res[1], 1.0104, 2)
           self.assertAlmostEqual(res[2], 0.3958, 2)

    myTests().main()


Graphing the Error
------------------

Now that you have written this algorithm it may be hard for you to visualize this as "learning."  It seems like random updates more than intelligence.  Yet, at each iteration the error gets a bit smaller.  You can see this for yourself if you make a list of the error calculated each time through the loop and graph it over time using altair.



.. poll:: LearningZone_14a
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_14a
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_14a
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_14a
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...
