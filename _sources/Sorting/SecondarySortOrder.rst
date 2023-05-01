..  Copyright (C) Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. _sort_stable:

.. qnum::
   :prefix: sort-5-
   :start: 1

Breaking Ties: Second Sorting
-----------------------------

What happens when two items are "tied" in the sort order? For example, suppose we sort a list of words by their lengths. 
Which five letter word will appear first?

The answer is that the python interpreter will sort the tied items in the same order they were in before the sorting. 

What if we wanted to sort them by some other property, say alphabetically, when the words were the same length? Python allows us to specify multiple conditions when we perform a sort by returning a tuple from a key function.

First, let's see how python sorts tuples. We've already seen that there's a built-in sort order, if we don't specify any key function. For numbers, it's lowest to highest. For strings, it's alphabetic order. For a sequence of tuples, the default sort order is based on the default sort order for the first elements of the tuples, with ties being broken by the second elements, and then third elements if necessary, etc. For example,

.. activecode:: ac18_5_0

    tups = [('A', 3, 2),
            ('C', 1, 4),
            ('B', 3, 1),
            ('A', 2, 4),
            ('C', 1, 2)]
    for tup in sorted(tups):
        print(tup)

In the code below, we are going to sort a list of fruit words first by their length, smallest to largest, and then alphabetically to break ties among words of the same length. To do that, we have the key function return a tuple whose first element is the length of the fruit's name, and second element is the fruit name itself.

.. activecode:: ac18_5_1

    fruits = ['peach', 'kiwi', 'apple', 'blueberry', 'papaya', 'mango', 'pear']
    new_order = sorted(fruits, key=lambda fruit_name: (len(fruit_name), fruit_name))
    for fruit in new_order:
        print(fruit)

Here, each word is evaluated first on it's length, then by its alphabetical order. Note that we could continue to specify other conditions by including more elements in the tuple.

What would happen though if we wanted to sort it by largest to smallest, and then by alphabetical order?

.. activecode:: ac18_5_2

    fruits = ['peach', 'kiwi', 'apple', 'blueberry', 'papaya', 'mango', 'pear']
    new_order = sorted(fruits, key=lambda fruit_name: (len(fruit_name), fruit_name), reverse=True)
    for fruit in new_order:
        print(fruit)

Do you see a problem here? Not only does it sort the words from largest to smallest, but also in reverse alphabetical order! Can you think of any ways you can solve this issue?

One solution is to add a negative sign in front of ``len(fruit_name)``, which will convert all positive numbers to negative, and all negative numbers to positive. As a result, the longest elements would be first and the shortest elements would be last.

.. activecode:: ac18_5_3

    fruits = ['peach', 'kiwi', 'apple', 'blueberry', 'papaya', 'mango', 'pear']
    new_order = sorted(fruits, key=lambda fruit_name: (-len(fruit_name), fruit_name))
    for fruit in new_order:
        print(fruit)
   
We can use this for any numerical value that we want to sort, however this will not work for strings.

**Check Your Understanding**

.. mchoice:: question18_5_1
      :answer_a: first city name (alphabetically), then temperature (lowest to highest)
      :answer_b: first temperature (highest to lowest), then city name (alphabetically)
      :answer_c: first city name (alphabetically), then temperature (highest to lowest)
      :answer_d: first temperature (lowest to highest), then city name (alphabetically)
      :feedback_a: Correct! First we sort alphabetically by city name, then by the temperature, from lowest to highest.
      :feedback_b: The order of the tuple matters. The first item in the tuple is the first condition used to sort.
      :feedback_c: Not quite, remember that by default, the sorted function will sort by alphabetical order, or lowest to highest. Is the reverse parameter set to True? Has a negative sign been used in the key parameter?
      :feedback_d: The order of the tuple matters. The first item in the tuple is the first condition used to sort.
      :correct: a
      :practice: T

      What will the sorted function sort by?

      .. code-block:: python

         weather = {'Reykjavik': {'temp':60, 'condition': 'rainy'}, 
                    'Buenos Aires': {'temp': 55, 'condition': 'cloudy'}, 
                    'Cairo': {'temp': 96, 'condition': 'sunny'}, 
                    'Berlin': {'temp': 89, 'condition': 'sunny'}, 
                    'Caloocan': {'temp': 78, 'condition': 'sunny'}}

         sorted_weather = sorted(weather, key=lambda w: (w, weather[w]['temp']))

.. mchoice:: question18_5_2
      :answer_a: first city name (reverse alphabetically), then temperature (lowest to highest)
      :answer_b: first temperature (highest to lowest), then city name (alphabetically)
      :answer_c: first city name (reverse alphabetically), then temperature (highest to lowest)
      :answer_d: first temperature (lowest to highest), then city name (alphabetically)
      :answer_e: first city name (alphabetically), then temperature (lowest to highest)
      :feedback_a: Correct! In this case, the reverse parameter will cause the city name to be sorted reverse alphabetically instead of alphabetically, and it will also negate the negative sign in front of the temperature.
      :feedback_b: The order of the tuple matters. The first item in the tuple is the first condition used to sort. Also, take note of the reverse parameter - what will it do in this instance?
      :feedback_c: Not quite - is the reverse parameter set to True? Has a negative sign been used in the key parameter? What happens when those are both used?
      :feedback_d: The order of the tuple matters. The first item in the tuple is the first condition used to sort. 
      :feedback_e: Not quite, remember that by default, the sorted function will sort by alphabetical order, or lowest to highest. Is the reverse parameter set to True? Has a negative sign been used in the key parameter?
      :correct: a
      :practice: T

      How will the following data be sorted?

      .. code-block:: python

         weather = {'Reykjavik': {'temp':60, 'condition': 'rainy'}, 
                    'Buenos Aires': {'temp': 55, 'condition': 'cloudy'}, 
                    'Cairo': {'temp': 96, 'condition': 'sunny'}, 
                    'Berlin': {'temp': 89, 'condition': 'sunny'}, 
                    'Caloocan': {'temp': 78, 'condition': 'sunny'}}

         sorted_weather = sorted(weather, key=lambda w: (w, -weather[w]['temp']), reverse=True)
