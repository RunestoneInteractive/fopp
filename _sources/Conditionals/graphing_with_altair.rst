..  Copyright (C)  Brad Miller
    Creative Commons Attribution-ShareAlike 4.0 International License

:skipreading:`True`


🤔 Graphing Kiva Data with Altair
===================================

Although making graphs with the turtle is a good way to learn about a few basics of computer graphics it is definitely not going to encourage you to make lots of graphs to explore your data.  Exploring a new pile of data is something that every curious data scientist should want and need to do.  There are many many graphing options available for Python programmers including:

* Matplotlib
* Seaborn
* Plotly
* Bokeh
* Altair

Altair was designed to work in a browser and makes use of a very powerful concept that we won't go into here called a grammar of graphics. Its pretty easy to use once you understand a few of the basics.  The two key ideas to understand are "marks" and "encodings"  

A mark essentially specifies the kind of chart we are going create such as a bar chart or a line graph or a scatter graph.  An encoding allows you to declare links between data columns and "visual encoding channels."   These two things work together very well and allow us to create many different kinds of graphs without having to explicitly draw anything!  In this way Altair is a declarative system.

Altair assumes that you have data that you can organize into a table of rows and columns where each of the rows represents an observation and each column is something that you can observe or label.  The data can be catagorized according to several different types.  These are bit more high level than the types we have been talking about with Python but you will probably recognize them. They are:

* Quanititative -- quantitative data is any numeric data it might represent a temperature or speed or a gpa.
* Ordinal -- ordinal data is used when the numeric value tells you something about the order of choices.  Such as in a survey when you are asked to rank your satisfcation on a scale from 1 to 5
* Nominal  -- nominal data is typically used to name things
* Temporal -- temporal data is data about time.

Some typical encoding channels include:

* position -- X or Y or both
* size
* color
* shape

Bar Charts
----------

To make a chart in Altair you have to specify the data that you want to work with, how you want to mark the data, and how you should encode the columns of data with the kind of mark you have chosen.

Lets make Bar chart.  Here is a table of data:

========  =====  ======
category  value  t_size
========  =====  ======
a         5      large
b         9      medium
c         7      small
========  =====  ======

.. activecode:: alt_kiva_bar1

    import altair

    data = altair.Data(category='abc', value=[5,9,7], t_size=['large', 'medium', 'small'])
    chart = altair.Chart(data)
    mark = chart.mark_bar()
    mark.encode(x='category:N',y='value',color='t_size:N')


You Try

1. Change the values so they are all bigger by a factor of 10.  Does the Chart automatically re-scale itself?
2. Add more data to category, value, and t_size to represent five more rows in the table and redo the graph.
3. What happens if you change the columns for x and y ?

Did you notice anything interesting?  Suppose the additional rows looked like this:

========  =====  ======
category  value  t_size
========  =====  ======
d         10     large
e         82     medium
a         70     small
e         42     large
g         64     small
========  =====  ======

Can you explain why the graph looks like it does? Just to be sure we are seeing the same thing, here's the code for the two tables combined below.

.. activecode:: alt_kiva_bar2

    import altair

    data = altair.Data(category='abcdeaeg', value=[5,9,7,10,82,70,42,64], t_size=['large', 'medium', 'small', 'large','medium','small','large','small'])
    chart = altair.Chart(data)
    mark = chart.mark_bar()
    mark.encode(x='category:N',y='value',color='t_size:N')

Notice that it adds together all of the the rows for the x channel.  This is just what you would want to if you wanted to show a total for a particular category.  Such as Graph the total amount of money lent in each country.  It also further shows the distribution -- by color -- of another variable within that category.  Sometimes this is called a stacked bar chart.  Just think of the work you would need to do to replicate this if you had to compute it all yourself and then draw it with a turtle.

Line Graph
----------

Lets make a line graph, this is the kind of graph that you would typically see in a math book to graph a function.  Let us first make some data to graph using the function $$y = x^2$$  We will graph it over the range of -10 to +10 for the x values.

.. activecode:: alt_kiva_line1

    import altair

    x_vals = range(-10, 11)
    y_vals = []
    for x in x_vals:
        y_vals.append(x*x)

    data = altair.Data(X=x_vals, Y=y_vals)
    chart = altair.Chart(data)
    mark = chart.mark_line()
    mark.encode(x='X',y='Y')

You try

1. change the mark to `mark_point` instead of `mark_line`
2. Choose a different function sine, log, 
3. plot $x(t) = 2 \cos(t) + \sin(t) \cos(60t), y(t) = \sin(2t) + \sin(60t)$ over a range of t values.
4. The equation for the "Butterfly curve" is `Here <https://en.wikipedia.org/wiki/Butterfly_curve_(transcendental)>`_ can you generate the data and use altair to plot it?


Scatter plot
------------

Most often the mark_point option is used to make a scatter graph.  Here is a well known data set that contains the measured number of chirps per second along with the temperature at the time the number of chirps were measured.  The theory goes that if you are without your thermometer or weather app you can figure out the temperature by counting the number of times per second a nearby cricket chirps.   Using the data given make a scatter plot.

.. activecode:: alt_cricket_scatter1

    chirps = [20.0, 16.0, 19.8, 18.4, 17.1, 15.5, 14.7, 15.7, 15.4, 16.3, 15.0, 17.2, 16.0, 17.0, 14.4	]
    degreesf = [88.6, 71.6, 93.3, 84.3, 80.6, 75.2, 69.7, 71.6, 69.4, 83.3, 79.6, 82.6, 80.6, 83.5, 76.3]



Histogram
---------

Here are 100 IMDB movie ratings.  Lets figure out the distribution of these ratings by making a histogram.  Do do this we will introduce a couple of new ways to enhance the encoding of our different channels.  Recall that in order to make a histogram we divide up the data into bins and count the number of observations that go in each bin.  We can tell Altair that we want our axis to be a binned axis but to do that requires more than just giving it the name.  So we have an Axis object that we can use to help communicate this additional information.  ``altair.Axis`` takes a parameter to specify the name of the column in the table to use and takes an option parameter ``bin`` that tells altair to group the data into bins.  Now what about the y axis?  Since we want the y value to represent the number of things in the bin we need to have altair count them.  Altair supports a number of **aggregation functions** to help summarize groups of data.  In the case of binned data we make the y axis a string of 'count()' Technically we don't need an axis object to tell Altair to use count we could simply say ``y='count()'``


.. activecode:: alt_kiva_hist1

    import altair

    movie_ratings = [6.1, 6.9, 6.8, 3.4, 7.7, 3.8, 5.8, 7, 7, 7.5, 8.4, 6.8, 7, 6.1, 2.5, 8.9, 8.1, 7, 5.6, 6.3, 8.4, 6.9, 7.1, 5.7, 3.2, 6, 7.7, 6.4, 7, 7.1, 7.4, 6.8, 5.4, 4.9, 7.6, 4.6, 6.6, 5.6, 5.7, 7.1, 6.7, 7.3, 5.9, 3.2, 7.4, 7.6, 3.7, 6.8, 8.2, 6.1, 5.8, 8.4, 8.6, 6.2, 6.4, 5.1, 5.6, 4.4, 5.6, 5.7, 8.1, 5.4, 7.3, 5, 7.7, 6.9, 8.4, 7.5, 7.1, 8.2, 6.6, 6.4, 3.3, 5.7, 8.2, 8.2, 5.8, 8, 3.4, 8.2, 3.2, 5, 4.8, 7.3, 6.1, 5, 5.6, 6.1, 7.2, 8.4, 7.8, 4.3, 6.8, 4.9, 6.2, 8.3, 6.2, 7.9, 7.1, 7.3]

    data = altair.Data(ratings=movie_ratings)
    chart = altair.Chart(data)
    mark = chart.mark_bar()
    X = altair.Axis('ratings:Q', bin=True)
    Y = altair.Axis('count()')
    mark.encode(X,Y)




Kiva Graphs Revisited
---------------------

The final step for this lab is to recreate the three graphs we made with the turtle for the Kiva data

.. activecode:: alt_kiva_data1
    
    Make a scatter plot of the number of donors versus the time to raise the money for the loan. Make the size of the circle correspond to the loan amount. Make the color corresponds to the country.
    ~~~~
    loan_amount = [1250.0, 500.0, 1450.0, 200.0, 700.0, 100.0, 250.0, 225.0, 1200.0, 150.0, 600.0, 300.0, 700.0, 125.0, 650.0, 175.0, 1800.0, 1525.0, 575.0, 700.0, 1450.0, 400.0, 200.0, 1000.0, 350.0]

    country_name = ['Azerbaijan', 'El Salvador', 'Bolivia', 'Paraguay', 'El Salvador', 'Philippines', 'Philippines', 'Nicaragua', 'Guatemala', 'Philippines', 'Paraguay', 'Philippines', 'Bolivia', 'Philippines', 'Philippines', 'Madagascar', 'Georgia', 'Uganda', 'Kenya', 'Tajikistan', 'Jordan', 'Kenya', 'Philippines', 'Ecuador', 'Kenya']

    time_to_raise = [193075.0, 1157108.0, 1552939.0, 244945.0, 238797.0, 1248909.0, 773599.0, 116181.0, 2288095.0, 51668.0, 26717.0, 48030.0, 1839190.0, 71117.0, 580401.0, 800427.0, 1156218.0, 1166045.0, 2924705.0, 470622.0, 24078.0, 260044.0, 445938.0, 201408.0, 2370450.0]

    num_lenders_total = [38, 18, 51, 3, 21, 1, 10, 8, 42, 1, 18, 6, 28, 5, 16, 7, 54, 1, 18, 22, 36, 12, 8, 24, 8]


.. activecode:: alt_kiva_data2
    
    Make a bar chart that shows the total amount of money loaned in each country.
    ~~~~
    loan_amount = [1250.0, 500.0, 1450.0, 200.0, 700.0, 100.0, 250.0, 225.0, 1200.0, 150.0, 600.0, 300.0, 700.0, 125.0, 650.0, 175.0, 1800.0, 1525.0, 575.0, 700.0, 1450.0, 400.0, 200.0, 1000.0, 350.0]

    country_name = ['Azerbaijan', 'El Salvador', 'Bolivia', 'Paraguay', 'El Salvador', 'Philippines', 'Philippines', 'Nicaragua', 'Guatemala', 'Philippines', 'Paraguay', 'Philippines', 'Bolivia', 'Philippines', 'Philippines', 'Madagascar', 'Georgia', 'Uganda', 'Kenya', 'Tajikistan', 'Jordan', 'Kenya', 'Philippines', 'Ecuador', 'Kenya']

    time_to_raise = [193075.0, 1157108.0, 1552939.0, 244945.0, 238797.0, 1248909.0, 773599.0, 116181.0, 2288095.0, 51668.0, 26717.0, 48030.0, 1839190.0, 71117.0, 580401.0, 800427.0, 1156218.0, 1166045.0, 2924705.0, 470622.0, 24078.0, 260044.0, 445938.0, 201408.0, 2370450.0]

    num_lenders_total = [38, 18, 51, 3, 21, 1, 10, 8, 42, 1, 18, 6, 28, 5, 16, 7, 54, 1, 18, 22, 36, 12, 8, 24, 8]

.. activecode:: alt_kiva_data3
    
    Make a bar chart that shows the number of loans in each country.
    ~~~~
    loan_amount = [1250.0, 500.0, 1450.0, 200.0, 700.0, 100.0, 250.0, 225.0, 1200.0, 150.0, 600.0, 300.0, 700.0, 125.0, 650.0, 175.0, 1800.0, 1525.0, 575.0, 700.0, 1450.0, 400.0, 200.0, 1000.0, 350.0]

    country_name = ['Azerbaijan', 'El Salvador', 'Bolivia', 'Paraguay', 'El Salvador', 'Philippines', 'Philippines', 'Nicaragua', 'Guatemala', 'Philippines', 'Paraguay', 'Philippines', 'Bolivia', 'Philippines', 'Philippines', 'Madagascar', 'Georgia', 'Uganda', 'Kenya', 'Tajikistan', 'Jordan', 'Kenya', 'Philippines', 'Ecuador', 'Kenya']

    time_to_raise = [193075.0, 1157108.0, 1552939.0, 244945.0, 238797.0, 1248909.0, 773599.0, 116181.0, 2288095.0, 51668.0, 26717.0, 48030.0, 1839190.0, 71117.0, 580401.0, 800427.0, 1156218.0, 1166045.0, 2924705.0, 470622.0, 24078.0, 260044.0, 445938.0, 201408.0, 2370450.0]

    num_lenders_total = [38, 18, 51, 3, 21, 1, 10, 8, 42, 1, 18, 6, 28, 5, 16, 7, 54, 1, 18, 22, 36, 12, 8, 24, 8]

.. activecode:: alt_kiva_data4
    
    Make a histogram that shows the distribution of the loan amounts.
    ~~~~
    loan_amount = [1250.0, 500.0, 1450.0, 200.0, 700.0, 100.0, 250.0, 225.0, 1200.0, 150.0, 600.0, 300.0, 700.0, 125.0, 650.0, 175.0, 1800.0, 1525.0, 575.0, 700.0, 1450.0, 400.0, 200.0, 1000.0, 350.0]

    country_name = ['Azerbaijan', 'El Salvador', 'Bolivia', 'Paraguay', 'El Salvador', 'Philippines', 'Philippines', 'Nicaragua', 'Guatemala', 'Philippines', 'Paraguay', 'Philippines', 'Bolivia', 'Philippines', 'Philippines', 'Madagascar', 'Georgia', 'Uganda', 'Kenya', 'Tajikistan', 'Jordan', 'Kenya', 'Philippines', 'Ecuador', 'Kenya']

    time_to_raise = [193075.0, 1157108.0, 1552939.0, 244945.0, 238797.0, 1248909.0, 773599.0, 116181.0, 2288095.0, 51668.0, 26717.0, 48030.0, 1839190.0, 71117.0, 580401.0, 800427.0, 1156218.0, 1166045.0, 2924705.0, 470622.0, 24078.0, 260044.0, 445938.0, 201408.0, 2370450.0]

    num_lenders_total = [38, 18, 51, 3, 21, 1, 10, 8, 42, 1, 18, 6, 28, 5, 16, 7, 54, 1, 18, 22, 36, 12, 8, 24, 8]



.. raw:: html

    <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.




**Post Project Questions**

.. poll:: LearningZone_8b
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_8b
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_8b
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_8b
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...
