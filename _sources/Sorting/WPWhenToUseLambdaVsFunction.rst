..  Copyright (C) Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: sort-6-
   :start: 1


👩‍💻 When to use Lambda vs Function
------------------------------------

Though you can often use a lambda expression and function interchangeably when sorting, it's generally best to use lambda expressions until the process is too complicated, and then a function should be used. For example, in the following examples, we'll be sorting a dictionary's keys by properties of its values. Each key is a state name and each value is a list of city names.

For our first sort order, we want to sort the states in order by the length of the first city name. Here, it's pretty easy to compute that property. If ``cities`` is a list of city strings, ``len(cities[0])`` is the length of the first city name. Thus, we can use a lambda expression:

.. activecode:: ac18_6_1

    data = {"Michigan": ["Ann Arbor", "Traverse City", "Lansing", "Kalamazoo"], "Washington": ["Seattle", "Tacoma", "Olympia", "Vancouver"], "Minnesota": ["St. Paul", "Minneapolis", "Saint Cloud", "Stillwater"]}

    sorted_data = sorted(data, key = lambda cities: len(cities[0]))

For our second sort order, the property we want to sort by is the number of cities that begin with the letter 'S'. The function defining this property is harder to express, requiring a filter and count accumulation pattern. So we are better off defining a separate, named function.

.. activecode:: ac18_6_2

    def s_cities_count(city_list):
        ct = 0
        for city in city_list:
            if city[0] == "S":
                ct += 1
        return ct

    data = {"Michigan": ["Ann Arbor", "Traverse City", "Lansing", "Kalamazoo"], "Washington": ["Seattle", "Tacoma", "Olympia", "Vancouver"], "Minnesota": ["St. Paul", "Minneapolis", "Saint Cloud", "Stillwater"]}

    sorted_data = sorted(data, key = s_cities_count)

At this point in the course, we don't even know how to do such a filter and accumulation as part of a lambda expression. There is a way, using something called list comprehensions, but we haven't covered that yet.

There will be other situations that are more complicated than this. In some cases, they may be too complicated to solve with a lambda expression at all! 
