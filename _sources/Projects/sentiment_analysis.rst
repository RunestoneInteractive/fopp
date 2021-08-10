..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.

:skipreading:`True`

.. qnum::
   :prefix: SA-
   :start: 1

.. _sentiment_analysis:

🤔 Sentiment Analysis of Climate Change Tweets
================================================

Here is a classic problem from statistics class.  Suppose you have two unmarked bowls of cookies. Bowl1 has 30 Oreos and 10 Chips Ahoy!  The other bowl, Bowl2, contains 20 Oroes and 20 Chips Ahoy!  So many questions follow from this simple setup.

* If I do pick from bowl1 what are the chances that I'll pick an Oreo (my favorite!)
* If I pick from bowl2 what are the chances that the cookie is an Oreo?
* If I pick from a random bowl and I get an Oreo what are the chances that I picked the cookie out of bowl1 versus bowl2
* Who cares what bowl I pick from as long as I get an Oreo?
* Why don't mathematicians ever mark their bowls!?

These questions may seem trivial, or even uninteresting to you, but stay with me as they do help illustrate one of the most important mathematical formulas of the data science era -- Bayes Theorem of conditional probability.

We can state the theorem as follows:

.. math::

    P(A | B) = \frac{P(B | A)P(A)}{P(B)}

In English we would say that the probability of A given B is the probability of B given A times the probability of A divided by the probability of B.

In terms of our cookie questions we would like to know the probability that I get an Oreo given that I choose from bowl B.

Luckily a lot of probability just boils down to couting and dividing.  The spreadsheet below shows you how to use a table of data to calculate everything you need.  You can click in any of the cells to see how they were calculated, but in the end you will see that we don't use the formula above, we can directly compute any of the conditional probabilities directly from the table!  The probability of choosing an Oreo given than we know we are choosing from bowl 2 is 30 / 40 because we know there are 30 Oreos and 10 Chips Ahoy! for a total of 40 cookies in Bowl1.

Similarly if we want to know the probability that we chose a cookie out of bowl one given that we know we chose an oreo it is 30 / 50 because there are 30 Oreos in Bowl1 and 20 Oreos in Bowl2 for a total of 50 Oreos.

.. raw:: html

    <script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
    <script src="../_static/excel-formula.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jexcel/2.0.2/js/jquery.jexcel.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jexcel/2.0.2/css/jquery.jexcel.min.css" type="text/css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jstat/1.7.1/jstat.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/numeric/1.2.6/numeric.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>

    <script src="https://bossanova.uk/components/jexcel/dist/js/formulas.js"></script>
    <div style="width: 600px; margin-right: auto; margin-left: auto;">
    <div id="my"></div>
    </div>

    <script>
        var data = [
        ['Cookie', 'Bowl1', 'Bowl2', 'Total'],
        ['Oreo',30,20,'=SUM(B2:C2)',],
        ['Chips Ahoy!',10,20,'=SUM(B3:C3)',],
        [,'=sum(B2:B3)','=sum(C2:C3)','=sum(d2:d3)',],
        [,,,,],
        ['P(Bowl1)','=B4/D4',,,],
        ['P(Bowl2)','=C4/D4',,,],
        ['P(Oreo)','=D2/D4',,,],
        ['P(ChipsAhoy)','=D3/D4',,,],
        [,,,,],
        ['P(Oreo | Bowl1)','=B2/B4',,,],
        ['P(Oreo | Bowl2)','=C2/C4',,,],
        [,,,,],
        ['P(ChipsAhoy | Bowl1)','=B3/B4',,,],
        ['P(chipsAhoy | Bowl2)','=C3/C4',,,],
        [,,,,],
        ['P(Bowl1 | Oreo)','=B2/D2',,,],
        ['P(Bow2 | Oreo)','=C2/D2',,,],
        ['P(Bow1 | ChipsAhoy)','=B3/D3',,,],
        ['P(Bowl2 | ChipsAhoy)','=C3/D3',,,],
        [,,,,]
        ]

        $('#my').jexcel({
        data:data,
        colWidths: [ 200, 80, 100, 100 ]
        });

        function AVG(v)
        {
            var sum = v.reduce(function(a, b) { return a + b; });
            var avg = sum / v.length;

            return avg;
        }
    </script>

focusing on the problem of deciding if we chose from Bowl1 or Bowl2 for a moment.  If we pick out an Oreo that means there is a 60% chance it came from Bowl1 and a 40% chance that it came from Bowl2.  That doesn't give us a ton of confidence that we have the right bowl.  But what if we gather more data?  What if we put the cookie back, *carefully* stir the cookies around and then pick another one.  If this one comes out as an Oreo how can we use that information to improve our guess about which bowl we chose from?

It turns out that it does, the more evidence we get the better we are able to predict the Bowl.  When we go down this road we are going to take a bit of a mathematical shortcut so that our answer will not be a probability anymore, but thats OK as our end goal is to build a **classifier** that as an algorithm just given some data tells us whether something is one thing or another.  For example given Oreo, Oreo, Oreo, Chips Ahoy! It is most likely that the bow we were picking from is Bowl1.


The way to think about this is what is the probability of it being bowl one given Oreo, Oreo, Oreo, Chips Ahoy!  Or to state it mathematically :math:`P(C | x_1, x_2, x_3, ...x_n)` It turns out that this is proportional to :math:`P( x_1, x_2, x_3, ...x_n | C) \cdot P(C)`  Now we can combine the individual probabilities using multiplication.  So the above statement is again proportional to:

.. math::

    P(C) \cdot \prod{P(x_i | C)

When chosing between multiple categories we can think of each category as :math:`C_j` and then that gives us

.. math::

     P(C_j) \cdot \prod_i^n{P(x_i | C_j)}

Now if we compute that formula for each possible :math:`C_j` then the one with the higest value is our winner.

Lets work out the example we have outlined to get the scores given our Oreo, Oreo, Oreo, Chips Ahoy! example.  The probability that we get an Oreo given that it is Bowl1 is .75 And the probability that it is a Chips Ahoy! given that it is Bowl1 is .25  The probability that it is Bowl1 is .5

.. activecode:: act_comp_bowls

    b1score = .75 * .75 * .75 * .25 * .5
    b2score = .5 * .5 * .5 * .5 * .5

    print('b1score = {} and b2score = {}'.format(b1score, b2score))

OK since b1score is higher we would predict that we were picking cookies out of Bowl1.

**Check your Understanding**


.. fillintheblank:: act_fb_cookies1

    Modify the spreadsheet so that the number of chips ahoy in Bowl1 is 40, and the number of oreos is Bowl2 is 30.  What are the new scores for Bowl1 |blank| and Bowl2 |Blank| ?

    - :[0].02.*: Is Correct
      :x: Incorrect

    - :[0].03.*: Is Correct
      :x: Is incorrect


.. fillintheblank:: act_fb_cookies2

    Now lets add a third kind of cookie to both bowls.  Suppose we had a bunch of Fig Newtons. 20 of them in Bow1 and 30 of them in Bowl2 and we have the following series of draws:  Oreo, Fig Newton, Fig Newton, Chips Ahoy, Oreo.  What are the new scores for Bowl1 |blank| and Bowl2 |Blank| ?

    - :1: Is Correct
      :x: Incorrect

    - :1: Is Correct
      :x: Is incorrect

Going from Cookies to Tweets
----------------------------

This all gets much more interesting when we look at a more real world problem.  In fact this kind of Bayesian Classification became extremely popular 20 years ago as the first spam filter for email that worked well.  More recently it has become a good technique for doing sentiment analysis.

The transition is not too bad if you think of it like this.  Instead of bowls of cookies we have bags of words.  One bag has all the words we have collected from millions of emails that users have marked as spam.  The other bag contains all the words we have collected from emails that were not spam.  We can build a table just like we did for our Oreo and Chips Ahoy example.  Of course this will have a lot more rows as we have a much greater variety.  Nevertheless we can count how many times each word occurs in our spam bag and how many times it occurs in the non-spam bag.  And compute our probabilities from there.

To start with, we have a bunch of tweets that have been categorized as either climate change is real, and tweets that are of the climate change is fake variety.  We will use those to build our two bags of words.  There are also a bunch of tweets that have categorized as neutral, but we will leave them for a challenge exercise and focus on the two extremes.

.. datafile:: climate_tweets.csv
    :fromfile: ../_static/climate_small.csv
    :rows: 40

Step 1 Cleaning the Data
~~~~~~~~~~~~~~~~~~~~~~~~

1. Remove punctuation  (Challenge: except for URLs)
2. Convert all to lower case
3. Write to file for the next step.

.. activecode:: act_tweets_clean


Step 2 Building the Model
~~~~~~~~~~~~~~~~~~~~~~~~~

1. Make a Dictionary for climate change existence and a Dictionary for climate change denial.
1. For each tweet split the string into a list of words and add those words to the appropriate counter, based on the existence column.  **Challenge** Do not include so called stop-words that is words that are popular and used in all tweets, such as a, an, the, etc.
1. Make a combined dictionary that includes all of the words from both counters where a word appears in both counters this dictionary should containe the total count.
1. Write out a CSV file like the following:

.. csv-table::

    word, Y_counts, N_counts, Total_count
    global, 2271, 2167, 4438

.. activecode:: act_tweets_build


.. raw:: html

    <div style="width: 600px; margin-right: auto; margin-left: auto;">
    <div id="climate_words"></div>
    </div>

    <script>
        var data = [
            ['Word','Y','N','Total',,],
            ['climate',1981,350,2331,,],
            ['change',1831,303,2134,,],
            ['global',1546,898,2444,,],
            ['Warming',1398,868,2266,,],
            ['rt',514,228,742,,],
            ['link',499,32,531,,],
            ['new',169,39,208,,],
            ['news',149,21,170,,],
            ['green',129,14,143,,],
            ['report',112,21,133,,],
            ['snow',84,124,208,,],
            ['tcot',69,121,190,,],
            ['al',15,88,103,,],
            ['gore',14,83,97,,],
            ['dc',79,76,155,,],
            [,8589,3266,11855,,],
            [,,,,,]
        ];
        $('#climate_words').jexcel({
        data:data,
        colWidths: [ 200, 80, 100, 100 ]
        });

    </script>

The table above shows you an example (the numbers will not match yours exactly) of what you should produce.  Now using this table lets review what we leared from the cookie example above my making a couple of calculations.

.. fillintheblank:: act_cc_oneword

   What is the probability that if a tweet contains the word 'green' that it is from a Y tweet? |blank|  What is the probablility that it is from an N tweet?

   - :[0].015.*: Is the correct answer
     :x: Word is the same as Cookie, Y is the same as Bowl1 and N is the same as Bowl2

   - :[0].004.*: Is the correct answer
     :x: Word is the same as Cookie, Y is the same as Bowl1 and N is the same as Bowl2

.. fillintheblank:: act_cc_multwords

   What are the scores for Y and N given that a tweet has the words green, snow and gore?  Y: |blank| N: |blank|

   - :0.000000173.*: Is the correct answer
     :0.000000239.*: Don't forget to multiply by the probability of the class
     :x: Look at the example we worked in Activecode 1

   - :0.00000113.*: Is the correct answer
     :0.00000413.*: Don't forget to multiply by the probability of the class
     :x: Look at the example we worked in Activecode 1

You will notice that the numbers get pretty small since we are multiplying a lot of small numbers together.  Remember this is just a score and is not really a probability any more.

Step 3 Classifying new Tweets
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The datafile ``climate_test.csv`` contains a bunch of uncategorized tweets.  Your job is to classify each tweet using the Naive Bayes algorithm we described above as either a Y tweet or an N tweet.

1. For every tweet, split the tweet into a list of words
2. initialize two variables yscore, nscore to 1.0
3. For each word in the tweet:

   a. compute P(word|Y)
   b. update yscore
   c. compute P(word|N)
   d. update nscore

4. classify this tweet as either Y or N depending on which of yscore and nscore is greater.
5. Write the index number along with the classification to a file.

.. activecode:: act_tweets_classify

.. datafile:: climate_test.csv
    :fromfile: ../_static/climate_test.csv


Step 4 Scoring the Model
~~~~~~~~~~~~~~~~~~~~~~~~

The data file ``climate_test_answers.csv`` contains the tweet number and the correct classification for that tweet.  Compute the number of tweets you have correctly classified in the previous step by comparing your answers to the answers in this data file.

.. activecode:: act_tweets_score


.. datafile:: climate_test_answers.csv
    :fromfile: ../_static/climate_test_answers.csv
    :hide:

