..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.

:skipreading:`True`

.. _graphing_with_altair:

🤔 Graphing Kiva Data with Altair
===================================

Although making graphs with the turtle is a good way to learn about a few basics of computer graphics it is definitely not going to encourage you to make lots of graphs to explore your data.  Exploring a new pile of data is something that every curious data scientist should want and need to do.  There are many many graphing options available for Python programmers including:

* Matplotlib
* Seaborn
* Plotly
* Bokeh
* Altair

Altair was designed to work in a browser and makes use of a very powerful concept that we won't go into here called a grammar of graphics. Its pretty easy to use once you understand a few of the basics.  The two key ideas to understand are "marks" and "encodings"

A **mark** essentially specifies the kind of chart we are going create such as a bar chart or a line graph or a scatter graph.  In our version of Altair we support three different kinds of marks:

* mark_bar()  -- draw this chart using bars
* mark_point() -- draw this chart using points
* mark_line() -- draw this chart using lines


An **encoding** allows you to declare links between data columns and "visual encoding channels."   You specify an encoding for a particular mark by passing named parameters to the ``encode()`` method.  We will get into more detail on named parameters later in the book.  For now you can just enjoy the fact that they act link any other parameter but are in some ways easier to deal with because you don't have to worry about the order, you can just use them in any order by their name.

Some typical encoding channels include:

* x   - what data should be used for the x axis
* y - what data should be used for the y axis
* size - what data should be used to set the size  of the mark (especially for mark_point)
* color -- what data should be used to color the mark
* shape -- what data should be used to set the shape. Good for when you want to plot several things related columns of data together.


The mark and the encoding work together very well and allow us to create many different kinds of graphs without having to explicitly draw anything!  In this way Altair is a **declarative**  graphics package.

Altair assumes that you have data that you can organize into a table of rows and columns where each of the rows represents an observation and each column is something that you can observe or label.  The data can be categorized according to several different types.  These are bit more high level than the types we have been talking about with Python but you will probably recognize them. They are:

* Quantitative -- quantitative data is any numeric data it might represent a temperature or speed or a gpa.
* Ordinal -- ordinal data is used when the numeric value tells you something about the order of choices.  Such as in a survey when you are asked to rank your satisfaction on a scale from 1 to 5
* Nominal  -- nominal data is typically used to name things
* Temporal -- temporal data is data about time.

When you tell Altair what data you want to use for the x or y axes you will often want to give it a hint as to what type the data is.  It can often infer that for itself but not always. When you do give it a hint you just append a short string to the column name consisting of a colon and the first letter of the data type.  for example to tell it that the column category is nominal you should specify the column ``x="category:N"``

The easiest way to learn Altair is through some examples.  So let us look at a few.

Bar Charts
----------

To make a chart in Altair you have to specify the data that you want to work with, how you want to **mark** the data, and how you should **encode** the columns of data with the kind of mark you have chosen.

Lets make a Bar chart.  Here is a table of data:

========  =====  ==========
customer  cakes  flavor
========  =====  ==========
Alice     5      chocolate
Bob       9      vanilla
Clair     7      strawberry
========  =====  ==========

.. activecode:: alt_kiva_bar1
    :nocodelens:

    import altair

    data = altair.Data(customer=['Alice', 'Bob', 'Claire'], cakes=[5,9,7], flavor=['chocolate', 'vanilla', 'strawberry'])
    chart = altair.Chart(data)
    mark = chart.mark_bar()
    enc = mark.encode(x='customer:N',y='cakes',color='flavor:N')
    enc.display()


Breaking this down line by line:

First we create a representation of the table for altair by calling ``altair.Data``.  Here is an example of using named parameters.  Note that the parameter name will become the name of the columns. This example shows you the data printed in tabular form.

.. reveal:: alt_kiva_hideexb1

    .. activecode:: alt_kiva_exb1
        :nocodelens:

        import altair

        data = altair.Data(customer=['Alice', 'Bob', 'Claire'], cakes=[5,9,7], flavor=['chocolate', 'vanilla', 'strawberry'])
        print(data)

Back to the original code:

On line 4 of the program we make a Chart.  The chart is the holder of the data that we will mark and encode.  You can also give chart an optional parameter to tell it the title of the chart.

On line 5 we tell the chart that it is going to be a bar chart by calling the method ``mark_bar()``

On line 6 we tell the mark the encodings to use.  We tell it that the values for the x axis should come from the customer column and to treat them as nominal data.  That is great for a bar chart as the columns often do correspond to names.  The values for the y axis will come from the cakes column. In a bar chart its natural to think of the values being proportional to the height of the bar.  Which is exactly what Altair does for a bar chart.  We are also going to color the bars (this is optional) using the value from flavor column.

On line 7 we tell Altair to display the chart.

**You Try**

1. Change the values so they are all bigger by a factor of 10.  Does the Chart automatically re-scale itself?
2. Add more data to customer, cakes, and flavor to represent five more rows in the table and redo the graph.
3. What happens if you change the columns for x and y ?

Did you notice anything interesting?  Suppose the additional rows looked like this:

========  =====  ==========
customer  cakes  flavor
========  =====  ==========
Drake     10     chocolate
Emma      82     vanilla
Alice     70     strawberry
Emma      42     chocolate
Ginger    64     strawberry
========  =====  ==========

Can you explain why the graph looks like it does? Just to be sure we are seeing the same thing, here's the code for the two tables combined below.

.. activecode:: alt_kiva_bar2
    :nocodelens:

    import altair

    data = altair.Data(customer=['Alice', 'Bob', 'Claire', 'Drake', 'Emma','Alice', 'Emma', 'Ginger'],
        cakes=[5,9,7,10,82,70,42,64],
        flavor=['chocolate', 'vanilla', 'strawberry','chocolate','vanilla','strawberry','chocolate','strawberry'])
    chart = altair.Chart(data)
    mark = chart.mark_bar()
    enc = mark.encode(x='customer:N',y='cakes',color='flavor:N')
    enc.display()

Notice that it adds together all of the the rows for the x channel.  This is just what you would want to if you wanted to show a total for a particular category.  Such as Graph the total amount of money lent in each country.  It also further shows the distribution -- by color -- of another variable within that category.  Sometimes this is called a stacked bar chart.  Just think of the work you would need to do to replicate this if you had to compute it all yourself and then draw it with a turtle.

Line Graph
----------

Lets make a line graph, this is the kind of graph that you would typically see in a math book to graph a function.  Let us first make some data to graph using the function $$y = x^2$$  We will graph it over the range of -10 to +10 for the x values.

.. activecode:: alt_kiva_line1
    :nocodelens:

    import altair

    x_vals = range(-10, 11)
    y_vals = []
    for x in x_vals:
        y_vals.append(x*x)

    data = altair.Data(X=x_vals, Y=y_vals)
    chart = altair.Chart(data)
    mark = chart.mark_line()
    enc = mark.encode(x='X',y='Y')
    enc.display()

What we are doing here is calculating the square of the integers from -10 to +10 and storing them in y_vals.  You can even print y_vals to see that its just an ordinary list if you want.

On line 8 we make data, just like we did in or previous examples.  You may want to add a line ``print(data)`` to see the data for the chart in its tabular form by adding a line after 8.

On line 10 we tell the chart that the mark will be a line.

One line 11 we tell the chart to use the column named X as the x values and Y as the y values.  Notice that we don't need to tell it what kind of data the columns contain as Altair will infer that both are Quantitative.  It doesn't hurt to add a ':Q' at the end if you want.

**You try**

1. Change the mark to ``mark_point`` instead of ``mark_line``
2. Change the mark to be a ``mark_bar`` -- Cool right, its like 3 graphs for the price of one!
3. Change the data so that instead of calling the columns X and Y you call one ``num`` and the other ``square_num``
4. Add a color parameter to the encoding use either X or Y to specify the color value.  Don't give it a type and see how it looks.  then specify that you want it to treat the column as nominal ':N' and you will see how the color scheme changes.  This gives you a lot of flexibility in how your chart gets colored.
5. Choose a different function sine, log,
6. plot $x(t) = 2 \cos(t) + \sin(t) \cos(60t), y(t) = \sin(2t) + \sin(60t)$ over a range of t values.
7. The equation for the "Butterfly curve" is `Here <https://en.wikipedia.org/wiki/Butterfly_curve_(transcendental)>`_ can you generate the data and use Altair to plot it?


Scatter plot
------------

Most often the mark_point option is used to make a scatter graph.  Here is a well known data set that contains the measured number of chirps per second along with the temperature at the time the number of chirps were measured.  The theory goes that if you are without your thermometer or weather app you can figure out the temperature by counting the number of times per second a nearby cricket chirps.   Using the data given make a scatter plot.  This is really just like the line plot we did above but using ``mark_point``

.. activecode:: alt_cricket_scatter1
    :nocodelens:

    chirps = [20.0, 16.0, 19.8, 18.4, 17.1, 15.5, 14.7, 15.7, 15.4, 16.3, 15.0, 17.2, 16.0, 17.0, 14.4	]
    degreesf = [88.6, 71.6, 93.3, 84.3, 80.6, 75.2, 69.7, 71.6, 69.4, 83.3, 79.6, 82.6, 80.6, 83.5, 76.3]



Histogram
---------

Here are 100 IMDB movie ratings.  Lets figure out the distribution of these ratings by making a histogram.  Do do this we will introduce a couple of new ways to enhance the encoding of our different channels.  Recall that in order to make a histogram we divide up the data into bins and count the number of observations that go in each bin.  We can tell Altair that we want our axis to be a binned axis but to do that requires more than just giving it the name.  So we have an Axis object that we can use to help communicate this additional information.  ``altair.Axis`` takes a parameter to specify the name of the column in the table to use and takes an option parameter ``bin`` that tells altair to group the data into bins.  Now what about the y axis?  Since we want the y value to represent the number of things in the bin we need to have altair count them.  Altair supports a number of **aggregation functions** to help summarize groups of data.  In the case of binned data we make the y axis a string of 'count()' Technically we don't need an axis object to tell Altair to use count we could simply say ``y='count()'``


.. activecode:: alt_kiva_hist1
    :nocodelens:

    import altair

    movie_ratings = [6.1, 6.9, 6.8, 3.4, 7.7, 3.8, 5.8, 7, 7, 7.5, 8.4, 6.8, 7, 6.1, 2.5, 8.9, 8.1, 7, 5.6, 6.3, 8.4, 6.9, 7.1, 5.7, 3.2, 6, 7.7, 6.4, 7, 7.1, 7.4, 6.8, 5.4, 4.9, 7.6, 4.6, 6.6, 5.6, 5.7, 7.1, 6.7, 7.3, 5.9, 3.2, 7.4, 7.6, 3.7, 6.8, 8.2, 6.1, 5.8, 8.4, 8.6, 6.2, 6.4, 5.1, 5.6, 4.4, 5.6, 5.7, 8.1, 5.4, 7.3, 5, 7.7, 6.9, 8.4, 7.5, 7.1, 8.2, 6.6, 6.4, 3.3, 5.7, 8.2, 8.2, 5.8, 8, 3.4, 8.2, 3.2, 5, 4.8, 7.3, 6.1, 5, 5.6, 6.1, 7.2, 8.4, 7.8, 4.3, 6.8, 4.9, 6.2, 8.3, 6.2, 7.9, 7.1, 7.3]

    data = altair.Data(ratings=movie_ratings)
    chart = altair.Chart(data)
    mark = chart.mark_bar()
    X = altair.Axis('ratings:Q', bin=True)
    Y = altair.Axis('count()')
    enc = mark.encode(x=X,y=Y)
    enc.display()


A few words of explanation for the bar chart may make it clearer what is going on here.

Hopefully everything up to line 8 will look pretty similar to you.  but on 8 we are have to get a bit more fancy with our encoding.  We are telling Altair that our X axis is going to use the ratings data and we are adding the ':Q' to be sure it knows that it is quantitative.  You can remove the :Q and it will still work fine.  The key to making the histogram is to tell Altair that we are going to put the X data into bins.  Just like you did in the last project, but you don't have to calculate it this time, Altair will do the work.

On line 9 we tell Altair that the y values will be the ``count()`` of the things that are in the bins.  If you specify a function like count you are telling it how to aggregate the values on the other axis.

**You Try**

1. What happens if you remove the ``bin=True`` ?
2. What happens if you switch the x and y axes?


Kiva Graphs Revisited
---------------------

The final step for this lab is to recreate the three graphs we made with the turtle for the Kiva data.  You should refer back to the examples we just worked through to help you figure out what to do.

.. activecode:: alt_kiva_data1
    :nocodelens:

    Make a scatter plot of the number of donors versus the time to raise the money for the loan. Make the size of the circle correspond to the loan amount. Make the color corresponds to the country.
    ~~~~
    loan_amount = [1250.0, 500.0, 1450.0, 200.0, 700.0, 100.0, 250.0, 225.0, 1200.0, 150.0, 600.0, 300.0, 700.0, 125.0, 650.0, 175.0, 1800.0, 1525.0, 575.0, 700.0, 1450.0, 400.0, 200.0, 1000.0, 350.0]

    country_name = ['Azerbaijan', 'El Salvador', 'Bolivia', 'Paraguay', 'El Salvador', 'Philippines', 'Philippines', 'Nicaragua', 'Guatemala', 'Philippines', 'Paraguay', 'Philippines', 'Bolivia', 'Philippines', 'Philippines', 'Madagascar', 'Georgia', 'Uganda', 'Kenya', 'Tajikistan', 'Jordan', 'Kenya', 'Philippines', 'Ecuador', 'Kenya']

    time_to_raise = [193075.0, 1157108.0, 1552939.0, 244945.0, 238797.0, 1248909.0, 773599.0, 116181.0, 2288095.0, 51668.0, 26717.0, 48030.0, 1839190.0, 71117.0, 580401.0, 800427.0, 1156218.0, 1166045.0, 2924705.0, 470622.0, 24078.0, 260044.0, 445938.0, 201408.0, 2370450.0]

    num_lenders_total = [38, 18, 51, 3, 21, 1, 10, 8, 42, 1, 18, 6, 28, 5, 16, 7, 54, 1, 18, 22, 36, 12, 8, 24, 8]


.. activecode:: alt_kiva_data2
    :nocodelens:

    Make a bar chart that shows the total amount of money loaned in each country.
    ~~~~
    loan_amount = [1250.0, 500.0, 1450.0, 200.0, 700.0, 100.0, 250.0, 225.0, 1200.0, 150.0, 600.0, 300.0, 700.0, 125.0, 650.0, 175.0, 1800.0, 1525.0, 575.0, 700.0, 1450.0, 400.0, 200.0, 1000.0, 350.0]

    country_name = ['Azerbaijan', 'El Salvador', 'Bolivia', 'Paraguay', 'El Salvador', 'Philippines', 'Philippines', 'Nicaragua', 'Guatemala', 'Philippines', 'Paraguay', 'Philippines', 'Bolivia', 'Philippines', 'Philippines', 'Madagascar', 'Georgia', 'Uganda', 'Kenya', 'Tajikistan', 'Jordan', 'Kenya', 'Philippines', 'Ecuador', 'Kenya']

    time_to_raise = [193075.0, 1157108.0, 1552939.0, 244945.0, 238797.0, 1248909.0, 773599.0, 116181.0, 2288095.0, 51668.0, 26717.0, 48030.0, 1839190.0, 71117.0, 580401.0, 800427.0, 1156218.0, 1166045.0, 2924705.0, 470622.0, 24078.0, 260044.0, 445938.0, 201408.0, 2370450.0]

    num_lenders_total = [38, 18, 51, 3, 21, 1, 10, 8, 42, 1, 18, 6, 28, 5, 16, 7, 54, 1, 18, 22, 36, 12, 8, 24, 8]

.. activecode:: alt_kiva_data3
    :nocodelens:

    Make a bar chart that shows the number of loans in each country.
    ~~~~
    loan_amount = [1250.0, 500.0, 1450.0, 200.0, 700.0, 100.0, 250.0, 225.0, 1200.0, 150.0, 600.0, 300.0, 700.0, 125.0, 650.0, 175.0, 1800.0, 1525.0, 575.0, 700.0, 1450.0, 400.0, 200.0, 1000.0, 350.0]

    country_name = ['Azerbaijan', 'El Salvador', 'Bolivia', 'Paraguay', 'El Salvador', 'Philippines', 'Philippines', 'Nicaragua', 'Guatemala', 'Philippines', 'Paraguay', 'Philippines', 'Bolivia', 'Philippines', 'Philippines', 'Madagascar', 'Georgia', 'Uganda', 'Kenya', 'Tajikistan', 'Jordan', 'Kenya', 'Philippines', 'Ecuador', 'Kenya']

    time_to_raise = [193075.0, 1157108.0, 1552939.0, 244945.0, 238797.0, 1248909.0, 773599.0, 116181.0, 2288095.0, 51668.0, 26717.0, 48030.0, 1839190.0, 71117.0, 580401.0, 800427.0, 1156218.0, 1166045.0, 2924705.0, 470622.0, 24078.0, 260044.0, 445938.0, 201408.0, 2370450.0]

    num_lenders_total = [38, 18, 51, 3, 21, 1, 10, 8, 42, 1, 18, 6, 28, 5, 16, 7, 54, 1, 18, 22, 36, 12, 8, 24, 8]

.. activecode:: alt_kiva_data4
    :nocodelens:

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
