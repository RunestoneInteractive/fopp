🤔 Input Compute Output
=========================

In this lesson we will use Python to do some calculations for us to solve some problems.  There are two important problem solving strategies that we will employ to help us along the way that you will find useful in many situations.

* Making and documenting some simplifying assumptions
* Solving a problem by Generalizing from a simpler version of the same problem

This lesson is also a good example of a common computational pattern called input compute output.  That is, we will ask the user to give us some input.  We use the input in making our computation, and then displaying the results for everyone to see.

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