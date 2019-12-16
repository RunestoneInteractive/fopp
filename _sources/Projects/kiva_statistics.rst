..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.


:skipreading:`True`

.. _kiva_statistics:

🤔 Computing Statistics with Kiva Data
========================================

`Kiva <http://kiva.org>`_ is an international nonprofit, founded in 2005 and based in San Francisco, with a mission to connect people through lending to alleviate poverty. We celebrate and support people looking to create a better future for themselves, their families and their communities.  By lending as little as $25 on Kiva, anyone can help a borrower start or grow a business, go to school, access clean energy or realize their potential. For some, it’s a matter of survival, for others it’s the fuel for a life-long ambition.  The following table contains some data that we will use to practice on some basic descriptive statistics that are commonly used in data science.

.. csv-table:: Kiva Lending Data
    :file: kiva_smallest.csv
    :header-rows: 1



There are some great (more advanced) tools in Python for working with massive tables of data.  In fact this table is a random sample of a data set from Kiva that contains 1.4 million rows!  We will move on to more and bigger data sets in time, but for now we need a simple way to work with this sample.  To do that we will represent each column of the table as its own list.

To keep your coding easier and cleaner we will show you these lists here, but they will be automatically included for you in later activecodes.  You can just use the list by name and it will be fine.

.. activecode:: act_kiva_1

    loan_amount = [1250.0, 500.0, 1450.0, 200.0, 700.0, 100.0, 250.0, 225.0, 1200.0, 150.0, 600.0, 300.0, 700.0, 125.0, 650.0, 175.0, 1800.0, 1525.0, 575.0, 700.0, 1450.0, 400.0, 200.0, 1000.0, 350.0]

    country_name = ['Azerbaijan', 'El Salvador', 'Bolivia', 'Paraguay', 'El Salvador', 'Philippines', 'Philippines', 'Nicaragua', 'Guatemala', 'Philippines', 'Paraguay', 'Philippines', 'Bolivia', 'Philippines', 'Philippines', 'Madagascar', 'Georgia', 'Uganda', 'Kenya', 'Tajikistan', 'Jordan', 'Kenya', 'Philippines', 'Ecuador', 'Kenya']

    time_to_raise = [193075.0, 1157108.0, 1552939.0, 244945.0, 238797.0, 1248909.0, 773599.0, 116181.0, 2288095.0, 51668.0, 26717.0, 48030.0, 1839190.0, 71117.0, 580401.0, 800427.0, 1156218.0, 1166045.0, 2924705.0, 470622.0, 24078.0, 260044.0, 445938.0, 201408.0, 2370450.0]

    num_lenders_total = [38, 18, 51, 3, 21, 1, 10, 8, 42, 1, 18, 6, 28, 5, 16, 7, 54, 1, 18, 22, 36, 12, 8, 24, 8]


Level 1 Questions
-----------------

#. What is the total amount of money loaned?
#. What is the average loan amount?
#. What is the largest/smallest loan?
#. What country got the largest/smallest loan?
#. What is the variance of the money loaned?
#. What is the average number of days needed to fund a loan?

The questions in the list above are the way you would probably think of them when brainstorming or having a discussion with a colleague.  Answering them in code often requires more precision in the way the questions are posed.  We will restate these questions below and make them more precise.

.. activecode:: act_kiva_2
    :include: act_kiva_1

    Compute the total amount of money loaned and store it in the variable ``loan_total``
    ~~~~
    # Your code here
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertTrue('loan_total' in self.getEditorText(), "you need a loan_total variable")
            self.assertEqual(loan_total, sum(loan_amount), "Use the accumulator pattern to add up all the loans")
            self.assertFalse('sum(' in self.getEditorText(), "you may not use sum")

    MyTests().main()



.. activecode:: act_kiva_3
    :include: act_kiva_1

    Compute the average amount of money loaned and store it in the variable ``loan_average``
    ~~~~
    # Your code here
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertTrue('loan_average' in self.getEditorText(), "you need a loan_total variable")
            self.assertEqual(loan_average, sum(loan_amount)/len(loan_amount), "Use the accumulator pattern to add up all the loans")
            self.assertFalse('sum(' in self.getEditorText(), "you may not use sum")

    MyTests().main()


.. activecode:: act_kiva_4
    :include: act_kiva_1

    Store the amount of the minimum loan in  ``min_loan`` and the amount of the maximum loan in ``max_loan`` Then, store the name of the country that received the largest loan in ``max_country`` and the smallest loan in ``min_country``  Hint: ``max`` and ``min`` are built in Python functions that you can use to find the minimum value or maximum value in any sequence.
    ~~~~
    # Your code here
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(min_loan, min(loan_amount), "dont be afraid to use the hint")
            self.assertEqual(max_loan, max(loan_amount), "dont be afraid to use the hint")
            self.assertEqual(min_country, country_name[loan_amount.index(min(loan_amount))], "dont be afraid to use the hint")
            self.assertEqual(max_country, country_name[loan_amount.index(max(loan_amount))], "dont be afraid to use the hint")
            self.assertTrue("index" in self.getEditorText())
            self.assertTrue("min(" in self.getEditorText(), "use the min function")
            self.assertTrue("max(" in self.getEditorText(), "use the max function")



    MyTests().main()



.. activecode:: act_kiva_5
    :include: act_kiva_1

    Compute the average number of lenders per loan and store it in a variable ``average_lenders``
    ~~~~
    # Your code here
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertTrue('average_lenders' in self.getEditorText(), "you need a average_lenders variable")
            self.assertEqual(average_lenders, sum(num_lenders_total) / len(num_lenders_total), "This is very similar to an earlier problem")
            self.assertFalse('sum(' in self.getEditorText(), "you may not use sum")

    MyTests().main()



.. activecode:: act_kiva_6
    :include: act_kiva_1

    Compute the total number of loans made to the Philippines and store it in a variable ``philippines_count``
    ~~~~
    # Your code here
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertTrue('philippines_count' in self.getEditorText(), "you need a philippines_count variable")
            self.assertEqual(philippines_count, country_name.count('Philippines'), "")
            self.assertTrue('country_name.count' in self.getEditorText(), "you should use a list method to count")


    MyTests().main()


.. activecode:: act_kiva_7
    :include: act_kiva_1

    For each unique country name, print a line that shows the name of the country and then the number of loans made in that country, like this: "Guatemala 1"
    ~~~~
    unique_countries = ['Guatemala', 'Paraguay', 'Tajikistan', 'Kenya', 'Azerbaijan', 'El Salvador', 'Bolivia', 'Ecuador', 'Georgia', 'Philippines', 'Uganda', 'Madagascar', 'Nicaragua', 'Jordan']

    # Your code here
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            res = '''Guatemala 1\nParaguay 2\nTajikistan 1\nKenya 3\nAzerbaijan 1\nEl Salvador 2\nBolivia 2\nEcuador 1\nGeorgia 1\nPhilippines 7\nUganda 1\nMadagascar 1\nNicaragua 1\nJordan 1\n'''
            self.assertEqual(self.getOutput(), res, "Use the accumulator pattern to add up all the loans")


    MyTests().main()




Level 2 Questions
-----------------

#. What is the average amount of loans made to people in the Philippines?
#. In which country was the loan granted that took the longest to fund?
#. What is the average amount of time / dollar it takes to fund a loan?
#. What is the standard deviation of the money loaned?   The Empirical Rule or 68-95-99.7% Rule reminds us that 68% of the population falls within 1 standard  deviation.  Does this hold for our data?
#. Is there a relationship between the loan amount and the number of people?  Or time to fund?  How would we measure this? Covariance? Correlation?



.. activecode:: act_kiva_8
    :include: act_kiva_1

    The index positions for the Phillipines are  ``[5, 6, 9, 11, 13, 14, 22]`` Use that information to compute the average loan amount for the Phillipines.  Store your result in the variable ``p_average``
    ~~~~
    # Your code here
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertTrue('p_average' in self.getEditorText(), "you need a p_average variable")
            tot = 0
            for i in [5, 6, 9, 11, 13, 14, 22]:
                tot += loan_amount[i]
            res = tot / 7
            self.assertEqual(p_average, res, "Use the accumulator pattern to add up the loans just for the Philippines")


    MyTests().main()



.. activecode:: act_kiva_9
    :include: act_kiva_1

    What is the name of the country with the loan that took the longest to raise?  Store your result in the variable ``longest_to_fund``
    ~~~~
    # Your code here
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertTrue('longest_to_fund' in self.getEditorText(), "you need a loan_total variable")
            self.assertEqual(longest_to_fund, country_name[time_to_raise.index(max(time_to_raise))], "Hint: max and index are your friends")

    MyTests().main()



.. activecode:: act_kiva_10
    :include: act_kiva_1

    What is the arithmetic mean of the time / dollar it takes to fund a loan?  The arithmetic mean is the average of the individual time/dollar calculations, not the average of the sum of time divided by the sum of dollar amounts. Store your result in the variable ``a_mean``
    ~~~~
    # Your code here
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertTrue('a_mean' in self.getEditorText(), "you need a a_mean variable")
            self.assertAlmostEqual(a_mean, 1974.424, places=3, feedback="Use the accumulator pattern to add up all the loans")
            self.assertFalse('sum(' in self.getEditorText(), "you should not use sum")


    MyTests().main()

For our final few exercises we are interested in exploring the distribution of the data as well as the relationships between two of our variables.  To do this we need to introduce a few more statistical concepts including variance, standard deviation, covariance and correlation.

**Variance** looks at a single variable and measures how far the set of numbers are spread out from their average value.  However its a bit hard to interpret because the units are squared so its not on the same scale as our original numbers.  This is why most of the time we use the **standard devation**, which is just the square root of the variance.  A large standard deviation tells us that our data is quite spread out while a small standard deviation tells us that most of our data is pretty close to the mean.

.. math::

    variance = \frac{\sum{ (x-\bar{x})^2}}{n}

.. math::

    stdev = \sqrt{variance}

Don't let the fancy math get you down the variance is just the sum of the squared values of each value minus the average for that value divided by the number of values.  This is a little more complicated that what you have done before but you can definitely do this.

.. activecode:: act_kiva_11
    :include: act_kiva_1

    Calculate the standard deviation of the loan_amount variable and store the variance in loan_var and the standard deviation in ``loan_stdev``.
    ~~~~
    # Your code here
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertTrue('loan_stdev' in self.getEditorText(), "you need a loan_stdev variable")
            self.assertAlmostEqual(loan_var, 250456.0, 1, "")
            self.assertAlmostEqual(loan_stdev, 500.456, 3,  "Hint: x ** 0.5  is the same as the square root")


    MyTests().main()

In data science we are often most interested in two variables that seem to influence one another.  That is, we can observe that as one variable grows a second grows with it, or as one variable grows another variable shrinks at a similar rate.  We will look at two ways to explore the relationships between these variables.

**Covariance** measures the larger values of one variable correspond to the larger values of a second variable as well as the extent to which the smaller values of one variable correspond to the smaller values of a second variable.  If the covariance is positive it  means the two variables grow together (positive correlation).  If the magnitude is negative it means one variable grows while the other shrinks.  The magnitude is hard to interpret because it depends on the values of the variables.  So Most often the covariance is normalized so that the values are between minus 1 and positive 1, this is the **pearson correlation coefficient**  A -1 indicates a strong negative correlation, a value of 0 indicates that the variables are not correlated at all, and a +1 indicates a strong positive correlation.

Historically the pearson correlation coefficient has been used in recommender systems to find groups of like minded shoppers that can recommend products to each other.  It was the basis of Amazon.com's recommender system from 1997 to 2000.  I know this because I was part of the team that wrote that software :-)


.. math::

    covariance = \frac{\sum{(x -\bar{x}) \cdot (y-\bar{y})}}{n}


.. math::

    pearson = \frac{covariance(x,y)}{std(x) std(y)}


.. activecode:: act_kiva_12
    :include: act_kiva_1

    Calculate the pearson correlation between the loan_amount and the num_lenders_total or between time_to_raise and the loan_amount or between num_lenders_total and time_to_raise.  If you divide up the class you can compare values to see which pair has the strongest correlation.
    ~~~~
    loan_amount_num_lenders = 0
    loan_amount_ttr = 0
    num_lenders_ttr = 0



**Post Project Questions**

.. poll:: LearningZone_7
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_7
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_7
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_7
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...
