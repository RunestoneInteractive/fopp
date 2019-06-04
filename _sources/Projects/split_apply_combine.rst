..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.


:skipreading:`True`

.. _split_apply_combine:

🤔 Stack Overflow Developer Survey
====================================

Each year the people at `Stack Overflow <https://stackoverflow.com>`_ ask the developer community about all kinds of things related to their jobs.  What's your favorite language?  What part of your job do you like the best?  What was your major in college?  How much do you make?

In the world of data science there is a common programming pattern called split-apply-combine that helps you answer some very high-powered questions.  In this project we'll apply this pattern from the ground up to answer some questions from the Stack Overflow 2018 programmer survey.  You may find this survey very interesting to study for yourself, just to get a sense for what programmers in the wild do with their time, what they studied how much they make etc.  The survey has a wealth of information and we will just barely scratch the surface.

Getting Started
---------------

Now that you are experienced with working with files lets look at a bit of the data set.  The survey had 98,855 respondents.  We will work with a sample of 2000 of those responses for this lab.  In addition we have narrowed down the questions from 129 to just 13.  At the end of this lab I'll provide you with another sample file that contains ALL 129 columns and a sample of 1000 responses so you can explore more deeply if you wish.  The columns we have included in this data set are:

* Respondent
* Country
* JobSatisfaction
* UndergradMajor
* ConvertedSalary
* Exercise
* Gender
* RaceEthnicity
* EducationParents
* HoursOutside
* Age
* LastNewJob
* LanguageWorkedWith


.. datafile:: so_survey.csv
    :fromfile: so_survey.csv


Here are some sample questions to get you thinking.  You should spend some time brainstorming some other questions you might want to mine from this data.

* How many developers responded to the survey from each country?
* What are the top 10 most popular programming languages?
* What is the average salary for male programmers?  Female?
* What is the maximum reported salary in each country?
* What is the most popular programming language for programmers that exercise at least 3-4 times a week?
* Is there any relationship between salary and job satisfaction?
* Are people who majored in computer science more or less satisfied with their  jobs than humanities majors?

.. shortanswer:: act_so_sa1

    As a potential future programmer and member of the programming community what questions do you have?


Split Apply Combine
-------------------

So what do we mean by the split apply combine pattern?  This is a common action when we want to split our data into groups, perform some kind of summary actions on the group and them combine all the groups back together into one.  In the database world this is often called a 'group by' operation. followed by some kind fo aggregate operation such as finding the max of some value for each group or the sum of a value for each group or the mean of all the values for each group.  When the results are reported back they are done so for the group.

Lets think about this in terms of our first question.  How many programmers responded from each country?  Wow, part of the challenge here is that we don't even have a list of countries to start with!  One way to visualize this is to take all of the rows of the table of data we have for this survey and organize them by country.  So all of the USA rows are together all of the Moroccan rows are together, all of the Cambodian rows are together, etc.  From a visual perspective you could now imagine counting the number of rows of the table in each group to answer the question.

1. split -- organize all the rows of the table by country
2. apply -- apply our counting function to count the number of rows for each country (group)
3. combine -- create a table of results consisting of a column for country and a column for the count.

To program this we will take a somewhat easier path, as we don't know how to sort our table yet! In fact this is a perfect job for (you guessed it) a dictionary!  Remember that dictionaries map keys to values.  In this case the key is the name of the country and the value is the count.  This may be one of the most common patterns of using a dictionary in a program.

For each row in the table:

1. split -- does our dictionary have a key for the current country?  If not add it to the dictionary with a value of 1.  If the country is already in the dictionary then simply add 1 to its value.

2. apply -- Well, we've kind of taken a short cut by combining steps 1 and 2.  Using the accumulator pattern in step 1!!

3. combine -- iterate over the keys of the dictionary and print the key value pairs.

Lets practice this pattern, by reading the data from the CSV file, note that to make it a bit easier to process I've made the separator a ``|`` rather than a ``,``.  We might want to represent this table in memory as we did with the kiva data set by creating a list for each column, but that would be a bit tedious with 13 columns, and outright cruel with 129 columns.  Luckily for these first few exercises we can get everything we want by simply reading the data from the file one line at a time.

.. activecode:: act_sac_1

    Read the ``so_survey.csv`` file and produce a report that shows the number of people from each country that responded.
    ~~~~



A similar but slightly more complicated problem is finding the 10 most common programming languages.  Its more complicated because the programming languages are represented as a string in a single column and so you will need to further process that string to split them apart and count them.

Counting the languages is one thing, but how do we get the 10 most popular?  We will cover this in detail later in the chapter but here is an example that shows you how to sort a dictionary by its values.  This is really such a common thing to do that it makes sense to show it to you now.

.. activecode:: act_dsort_ex

    myd = {'c':5, 'a': 1, 'b': 10}
    print(sorted(myd))
    sorted_keys = sorted(myd, key=myd.get, reverse=True)
    print(sorted_keys)
    for k in sorted_keys:
        print(k, myd[k])


.. activecode:: act_sac_2

    What are the ten most popular programming languages in the survey?
    Remember only to print out the top 10.
    ~~~~

Now we are going to make things a little more complicated.  Let us compute the average salary for all male programmers versus all female programmers.  Is the computer industry show signs of gender equity with respect to salary?

In order to calculate the average for each group we are going to have to accumulate all of the salaries for each group.  This is actually an even better example of split-apply-combine than the previous two examples.  Why?

1.  split -- we will have a dictionary with a key for each gender.  During the split phase rather than accumulating a single number we are going to accumulate a list of salaries.  Yes, a dictionary can have a string as a key and a list as its value.  When we finish the split phase we'll have a list of all of the salaries for each gender.

2.  apply -- Now we can calculate the average for each list in our dictionary.  We can either create a new dictionary with a key for each gender and the average as a single value, or we can replace the list with the average.  Notice that once we have the list of values for each group it is easy to to do all sorts of aggregate operations on the list.  We could find the max salary for each gender, the min salary for each gender.  Or even the median salary.

3. combine -- We have done this in step 2.

.. activecode:: act_sac_3

    Find the average salary for each gender.
    ~~~~


.. activecode:: act_sac_4

    Find the maximum and average salary for each country.
    ~~~~

**A bit harder**

**Filtering plus split-apply-combine**

We asked the question what is the most popular programming language for programmers that exercise 3-4 times per week.  To specifically answer this question you will need to include only the rows of the file that match the criteria of '3 - 4 times per week'.

.. activecode:: act_sac_5

    What is the most popular programming language for people that exercise 3-4 times per week?
    ~~~~

Once we have the list of all programming languages for this particular group, we can use our counting and sorting knowledge from the previous questions to come up with the top programming language.

**Creating a new column by mapping**

Finally we want to know if humanities majors are more or less satisfied with their jobs than computer science majors.  This means we want to filter out all the rows except those that indicate a humanities major or a computer science major.  But we also need to convert (map) the response to JobSatisfaction to a number so we can calculate an average.

the responses to Job satisfaction are as follows:

#. Extremely dissatisfied
#. Moderately dissatisfied
#. Slightly dissatisfied
#. Neither satisfied nor dissatisfied
#. Slightly satisfied
#. Moderately satisfied
#. Extremely satisfied

Using a dictionary we can map the text response to the ordinal value of the response.  With Extremely dissatisfied getting a value of 1 and Extremely satisfied getting a value of 7.

.. activecode:: act_sac_6

    Are people who majored in computer science more or less satisfied with their jobs than humanities majors?
    ~~~~



**Challenge Question**

We want to know whether exercise levels impact the choice of programming language.  In order to do this we want to calculate the most popular programming language(s) for each group.  The responses to the exercise question fall into four different groups:

* 1 - 2 times per week
* 3 - 4 times per week
* Daily or almost every day
* I don't typically exercise

The best way to count the programming languages for each group AS WE PROCESS the file -- during the split phase is to use a dictionary of dictionaries!  The key to the outer dictionary is the exercise group.  Each exercise group will have as its value a dictionary where its keys will be the names of the programming languages.

.. activecode:: act_sac_7

    What are the most popular programming language(s) for each group of people in different exercise level?
    ~~~~


Challenge:  A Better way to represent a Table
---------------------------------------------

In an earlier chapter we found that we could represent a table as a collection of lists, where we had one list for each column.  That is OK if we have only a few columns.  But what if we have a LOT of columns We can represent the table as a list of dictionaries.   Each row of the table will have a dictionary that looks something like this:  ``{'col1name': value, 'col2name': value ... }``  For our specific file the first row would look like:

.. code-block:: python

    {'Respondent': 51900,
    'Country': 'United Kingdom',
    'JobSatisfaction': 'Moderately satisfied',
    'UndergradMajor': 'Computer science, computer engineering, or software engineering',
    'ConvertedSalary': 94455.0,
    'Exercise': '3 - 4 times per week',
    'Gender': 'Male',
    'RaceEthnicity': 'White or of European descent',
    'EducationParents': 'Master’s degree (MA, MS, M.Eng., MBA, etc.)',
    'HoursOutside': '3 - 4 hours',
    'Age': '35 - 44 years old',
    'LastNewJob': 'Between 1 and 2 years ago',
    'LanguageWorkedWith': 'C;C#;Java;JavaScript;Objective-C;PHP;Swift;HTML;CSS'
    }

Can you load the file into a list of dictionaries?

.. activecode:: act_sac_8

    Read the file so_survey.csv into a list of dictionaries.
    ~~~~

With the file in this format you can pass the list of dictionaries to Altair and make a histogram of salaries to see the distribution.  You can add this on to the previous activecode.  If you want to load a list of dictionaries into an Altair Data object you can do it using the data parameter like this: ``Data(data=[{dictionary 1}, {dictionary 2}, ...])``.



Challenge: Ask your own Question
--------------------------------

A `description <https://www.kaggle.com/stackoverflow/stack-overflow-2018-developer-survey>`_ of the full data set will give you a good idea of what all the columns mean.  The stack overflow folks claim there are some interesting answers to questions about ethics as well as the future of AI.  But you may find something even more interesting.  Can you develop one or more questions that require the use of the split-apply-combine pattern to answer?

.. datafile:: allc_survey.csv
    :fromfile: allc_survey.csv


**Post Project Questions**

.. poll:: LearningZone_11b
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_11b
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_11b
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_11b
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...
