Computing Statistics with Kiva Data
===================================

`Kiva <http://kiva.org>`_ is an international nonprofit, founded in 2005 and based in San Francisco, with a mission to connect people through lending to alleviate poverty. We celebrate and support people looking to create a better future for themselves, their families and their communities.  By lending as little as $25 on Kiva, anyone can help a borrower start or grow a business, go to school, access clean energy or realize their potential. For some, it’s a matter of survival, for others it’s the fuel for a life-long ambition.  The following table contains some data that we will use to practice on some basic descriptive statistics that are commonly used in data science.

======= =========== ============ ====== ============= =================
id      loan_amount country_name status time_to_raise num_lenders_total
======= =========== ============ ====== ============= =================
212763  1250.0      Azerbaijan   funded 193075.0      38
76281   500.0       El Salvador  funded 1157108.0     18
444097  1450.0      Bolivia      funded 1552939.0     51
402224  200.0       Paraguay     funded 244945.0      3
634949  700.0       El Salvador  funded 238797.0      21
1383386 100.0       Philippines  funded 1248909.0     1
351     250.0       Philippines  funded 773599.0      10
35651   225.0       Nicaragua    funded 116181.0      8
784253  1200.0      Guatemala    funded 2288095.0     42
1328839 150.0       Philippines  funded 51668.0       1
1094905 600.0       Paraguay     funded 26717.0       18
336986  300.0       Philippines  funded 48030.0       6
163170  700.0       Bolivia      funded 24078.0       28
1323915 125.0       Philippines  funded 71117.0       5
528261  650.0       Philippines  funded 580401.0      16
495978  175.0       Madagascar   funded 800427.0      7
1251510 1800.0      Georgia      funded 1156218.0     54
642684  1525.0      Uganda       funded 1166045.0     1
974324  575.0       Kenya        funded 2924705.0     18
7487    700.0       Tajikistan   funded 470622.0      22
957     1450.0      Jordan       funded 3046687.0     36
647494  400.0       Kenya        funded 260044.0      12
706941  200.0       Philippines  funded 445938.0      8
889708  1000.0      Ecuador      funded 201408.0      24
882568  350.0       Kenya        funded 2370450.0     8
======= =========== ============ ====== ============= =================


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

    Store the amount of the minimum loan in  ``min_loan`` and the amount of the maximum loan in ``max_loan`` Then, store the name of the country that received the largest loan in ``max_country`` and the smallest loan in ``min_country``  Hint: ``max`` and ``min`` are builting Python functions that you can use to find the minimum value or maximum value in any sequence.
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
            self.assertEqual(philipines_count, country_name.count('Philippines'), "")
            self.assertTrue('country_name.count' in self.getEditorText(), "you should use a list method to count")

    
    MyTests().main()


.. activecode:: act_kiva_7
    :include: act_kiva_1

    For each unique country name, print a line that shows the name of the country and then the number of loans made in that country
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

#. What is the average amount of money loaned per individual?
#. In which country was the loan granted that took the longest to fund?
#. What is the average amount of time / dollar it takes to fund a loan?
#. What is the average amount of loans made to people in the Philippines?
#. What percentage of the loans were funded (some could be expired)
#. Is there a relationship between the loan amount and the number of people?  Or time to fund?  How would we measure this? Covariance? Correlation?
#. What is the standard deviation of the money loaned?   The Empirical Rule or 68-95-99.7% Rule reminds us that 68% of the population falls within 1 standard  deviation.  Does this hold for our data?

.. math::

    covariance = \frac{\sum{x -\bar{x}} \cdot \sum{y-\bar{y}}}{n}

.. math::

    variance = \frac{\sum{ (x-\bar{x})^2}}{n}

.. math::

    stdev = \sqrt{variance}

.. math::

    pearson = \frac{covariance(x,y)}{std(x) std(y)}
    

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

    What is the name of the country with the loan that took the longest to raise?
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

