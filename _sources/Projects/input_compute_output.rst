..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.


:skipreading:`True`

.. _input_compute_output:

🤔 Input Compute Output
=========================

In this lesson we will use Python to do some calculations for us to solve some problems.  There are two important problem solving strategies that we will employ to help us along the way that you will find useful in many situations.

* Making and documenting some simplifying assumptions
* Solving a problem by Generalizing from a simpler version of the same problem

This lesson is also a good example of a common computational pattern called input compute output.  That is, we will ask the user to give us some input.  We use the input in making our computation, and then displaying the results for everyone to see.

.. reveal:: act_inst_1
    :instructoronly:
    :showtitle: Instructor Notes

    To give students an idea of where we want to end up, spend some time going through this fun `XKCD problem of how many punch cards <https://what-if.xkcd.com/63/>`_ would it take to store all of Google's data. If your students don't know what a punch card is,  this is a chance to give them a little history of computer science.  As you work through the example, make sure that you highlight the various guesses and assumptions that he makes as well as to emphasize that nobody really knows the answer to this question (not even the people at Google), what we are interested in is something sort of close, as well as the thought process that gets you to the answer.    Scientists and engineers make these kinds of estimations every day.  It is an important problem solving skill to be able to start with some rough guesses, get an answer, and then work on refining the guesses and answers over time.  Before Python people called these 'back of the napkin' calculations as they were often done over lunch while doing informal problem solving. These kinds of questions are very popular as interview questions so it is good to get comfortable with the way you answer them as early as you can.

    Part I -- Warm-up problem

    Note:  More advanced students could probably skip this and go straight to the trees problem (below).  The majority will benefit from this slower walkthrough.

    * After you have worked through the XKCD example, then work through a sample problem as a class by asking a simple question like How many minutes until fall/spring break?  You should talk with them about some questions that may arise.  How accurate do we want to be?  What will we use as the input ?

        * Let us agree that for this first problem, we will use as the input a number of weeks.  No fractions, just a simple number of weeks until the first break.

        * Next step, demonstrate good incremental programming technique by live coding a simple two line program:

    .. code-block:: python

        weeks = input("how many weeks until break?")
        print("there are ", weeks, " weeks until break")

    * Now, we know the number of weeks, how do we get from weeks to minutes?
    * Let's make it easy on ourselves and go from weeks to days.  We all know there are seven days it a week, so how could we refine the program we have above to tell us days?  Lets add two lines, and change the last line. Again, live code this.

    .. code-block:: python

        weeks = input("how many weeks until break?")
        DAYS_IN_WEEK = 7
        num_days = weeks * DAYS_IN_WEEK
        print("there are ", num_days, " days until break")

    OH OH! What happened!?  If you put in 7 weeks until break you got an output that looked like 7777777 ! That is definitely incorrect.  What is going on?  You are repeating the string!  This is a super common problem and so it is a good one to intentionally make for the class.

    The type of the variable weeks  is a string!  You need to convert the input to an integer using the ``int`` function.  Let's do that by adding another line to the program to make this very explicit and using reassignment.  Again

    .. code-block:: python

        weeks = input("how many weeks until break?")
        weeks = int(weeks)
        DAYS_IN_WEEK = 7
        num_days = weeks * DAYS_IN_WEEK
        print("there are ", num_days, " days until break")

    Great now we will get a better answer!  Keeping track of the types of things is very important.

    Before moving on its good to emphasize a couple of things in this program:

    In Python  the convention for constants is to have the ALL IN CAPS like we did for DAYS_IN_WEEK.  This makes it easy for people reading your program to know that DAYS_IN_WEEK is not going to change.  It is also better than just using 7 in the calculation because who knows what 7 might mean.  Using good variables helps document the code.

    Also note that the convention for variables -- things that might change -- is to use all lower case characters and separate words by _  Other programming languages use a capitalization convention where you capitalize each new word in the variable.  This is called CamelCase.  Pythonistas don't do CamelCase.

    So, after all this what would the next step be?  Let's agree that the next two steps will be:

    * We could go from days to hours
    * Then from hours to minutes

    * Now have your students code those next two steps on their own.  Make sure you walk around, look over shoulders,  and encourage everyone to do this.  You can't let them wait and just copy what you will do in a few minutes.  After you have given them some time to do this live code  the solution.


Here is an example of that pattern.

.. activecode:: act_ico_1


    years = input("Enter a number of years and I'll tell you how many minutes that is ")
    years = int(years)
    days = years * 365
    hours = days * 24
    minutes = hours * 60
    print(years, "years is ", minutes, "minutes")


**You Try**

1. Change the problem above to print the number of seconds
2. Change the problem above to go the other direction, given a number of seconds how many years?
3. Enance part 2 so that you print the number of years, months, days and minutes


How Many Trees?
---------------

Here is a question that a friend of mine likes to use as an interview question.  "How many trees are in the state of Washington?"  This may seem like an impossible question to answer, has anyone ever gone out and counted them all?  Of course not! But getting an exact answer is not the point of the problem solving exercise. With a question like this a good followup might be to ask with what degree of accuracy would like to know the answer? Just getting in the ballpark is pefectly fine for a question like this.   To actually compute an answer will require that you make some assumptions and guesses or estimations as you come up with an answer.  Hint, you might start by looking at a satellite view of the state.  You can also take a look at this `fun post <https://what-if.xkcd.com/63/>`_ by XKCD's Randal Monroe in which he uses this same kind of problem solving technique to answer the question "If all digital data were stored on punch cards, how big would Google's data warehouse be?"


.. activecode:: act_ico_2

    How many trees are in the state of Washington?
    ~~~~

When you have completed your answer be prepared to share it with the rest of the class along with your assumptions and guesses. It should be interesting to see the range of answers you and your classmates come up with.


How Many Handshakes?
--------------------

How many handshakes would it take for everyone in your class to shake hands with everyone else?  You should not shake hands with the any person twice and you don't shake your own hand.

The secret to solving this problem is to start small.  What if the class was only two people?  What if the class was only three people?  How about four? five?  Start writing down the results for these small numbers and see if you can figure out the pattern.  Once you see the pattern write a program where you ask the user for a number of people and then you compute the number of handshakes and print that number.  Try it out for the populations of your entire college, how about a city nearby?

.. activecode:: act_ico_3

    How many handshakes for all the people in your class?
    ~~~~




https://what-if.xkcd.com/63/



**Post Project Questions**

.. poll:: LearningZone_2
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_2
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_2
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_2
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...
