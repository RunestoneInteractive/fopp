..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.


:skipreading:`True`

.. _common_words:

🤔 Exploring Common Words and SETI
====================================

Many projects require the use of a list of words.  In this project we will answer a few interesting questions about words in the english language making use of a list of the 5000 most common words. This particular list list of words is based on analyzing over 450 million words from magazines, newspapers, works of fiction and academic writing. It is highly representative of the english language.  the list we will be using is kindly made available from the `Word Frequency data <https://www.wordfrequency.info>`_ project.

Now you may be wondering about the rest of the title for this section.  What do common words and the `search for extra terrestrial intelligence <https://www.seti.org/animal-communications-information-theory-and-search-extraterrestrial-intelligence-seti>`_ have to do with one another?  A linguistic relationship called Zipf's Law appears to be one of the conditions for complex communications.  A simple way to describe Zipf's law is to say that words are not evenly distributed across texts; but rather a few words are very common and a lot of words are very rare.  There is a nice straight line plotted on a log-log scale that links the common and the rare words.  The slope of this line is approximately -1.

In fact if you study the signal systems for a different samples you will see that human communication follows this law as does the communication for Bottlenose Dolphins, Humpback Whales, and adult Squirrel Monkeys.  The darn Chipmunks that torment me in the summer time are close but not quite in the range.

In this lab we will answer the following questions to help us explore Zipf's Law.

1. What are the 10 most commonly used words?
#. How does the frequency of usage of the most common words compare to the least?
#. What percentage of usage do the top 25 most common words represent?
#. To see if this set of words follow Zipf's law we'll create a plot of the log of frequency versus the log of the rank.  Then we will use the Altair package to plot the graph.

Here are some other Fun questions we can explore once we've completed the first four.

#. Which of the words when spelled forward are also on the list when spelled backward?  For example 'pot' is one of the most common words and when you spell pot backwards you get 'top' which is also on the list.
#. How many new words can be reversed if you you add an 's' on the end?  For example adding an 's' to the end of 'pot' gives you 'stop' when reversed which is definitely on the list.
#. are nouns more common than verbs in the list?

Reading the data
----------------

The words from our list are in order from most frequently used to least where
the rank order is a function of both frequency and "dispersion", which measures how evenly the word is spread across the corpus (1 = most evenly distributed; 0 = appears irregularly in few texts). This means that its not the frequency column does not go perfectly from highest to lowest, there may be some cases where the frequency is high but the dispersion is low.  For example the word 're' has a frequency of 15,773 but a dispersion of only .47 its primarily used in legal writing not in writing for the general public.

Each word also has a part of speech which will be one of

* 'a' - article
* 'v' - verb
* 'c' - conjunction
* 'i' - preposition
* 't' - infinitive (to)
* 'p' - pronoun
* 'd' - pronoun
* 'x' - not or n't
* 'r' - adverb
* 'm' - number
* 'n' - noun
* 'e' - there
* 'j' - adjective
* 'u' - interjection

The data is a CSV file (Comma Separated Values).  You can see the columns below.

.. datafile:: words5000.csv
    :fromfile: words5000.csv



Your first task is to read this file and store the contents into five lists.  Remember as you read each line of the file, the line will be represented as a string.  Your goal is to split the line into five parts and put each of those parts onto the appropriate list.

.. activecode:: act_files_1
    :nocodelens:

    # your code here

As a bonus, I ran across this XKCD that many of you on liberal arts campuses may may enjoy:

.. image:: https://imgs.xkcd.com/comics/sustainable.png

Now lets explore `Zipf's Law <https://en.wikipedia.org/wiki/Zipf%27s_law>`_.

First lets look at what fraction of overall usage the top 10 most common words represent. The first thing we will need to do to accomplish this is turn the frequency count for each word into a percentage.  Once we have a new "column" for our table, then we can sum up the percentages for the first 10.

.. activecode:: act_files_2
    :nocodelens:

    Calculate the total usage percentage for the top 10 words in the list.  Store this result in a variable called ``top_10``  At the same time calculate the percentage for teh bottom 10 words in the list and store that result in ``bottom_10``

    ~~~~

    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertAlmostEqual(top_10, 0.276, 3)
            self.assertAlmostEqual(bottom_10, 0.00015, 5)
    MyTests().main()

Just to get a sense for the distribution of the words lets use Altair to graph the frequency of the words on the Y axis against the rank of the words on the X axis.   You should see a pretty dramatic (exponential) curve.  Its also not very useful because a few very large values dwarf all of the small values.

.. image:: https://imgs.xkcd.com/comics/log_scale.png

What Physicist (and other scientists) get really excited about is when experimental data such as our observations of word frequencies in the wild turn out to graph into a straight line.  They go totally bonkers if the straight line appears when you have to convert both the X and Y axis values using the base 10 log function.

The next step in our quest is to add two more columns of data to our table.  The log of the frequency and the log [Logarithm]_ of the rank.  You can compute the base 10 log of a number using ``math.log(N, 10)``.  Once you have added these two columns use Altair to graph the new quantities and be amazed!

.. activecode:: act_files_3
    :nocodelens:

with a little bit of work you can work out that the slope (remember slope is rise over run) is pretty close to -1.0 for the words in this corpus.


More Fun with words
-------------------

You can probably come up with an interesting list of questions about this list of popular words all on your own, but a couple of ideas to get you started are as follows:

Which of the words when spelled forward are also on the list when spelled backward?  For example 'pot' is one of the most common words and when you spell pot backwards you get 'top' which is also on the list.

.. activecode:: act_files_4
    :nocodelens:

How many new words can be reversed if you you add an 's' on the end?  For example adding an 's' to the end of 'pot' gives you 'stop' when reversed which is definitely on the list.

.. activecode:: act_files_5
    :nocodelens:


Finally lets look at the distribution of the different parts of speech in this 5000 word dataset.  Create a bar chart where the part of speech is on the x-axis and the number of words on the list that fall into that category is the y axis.

.. activecode:: act_files_6
    :nocodelens:


.. [Logarithm] A quantity representing the power to which a fixed number (the base) must be raised to produce a given number.  For example the base 10 log of 100 is 2.0 because :math:`10^2` is 100.  the base 2 log of 16 is 4.0 because :math:`2^4` is 16.


**Post Project Questions**

.. poll:: LearningZone_10a
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_10a
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_10a
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_10a
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...
