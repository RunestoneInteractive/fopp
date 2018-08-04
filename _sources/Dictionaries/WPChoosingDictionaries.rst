..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: dictionaries-10-
   :start: 1

👩‍💻 When to use a dictionary
------------------------------

Now that you have experience using lists and dictionaries, you will have to decide which one is best to use in each situation. The following guidelines will help you recognize when a dictionary will be beneficial:

* When a piece of data consists of a set of properties of a single item, a dictionary is often better. You could try to keep track mentally that the zip code property is at index 2 in a list, but your code will be easier to read and you will make fewer mistakes if you can look up `mydiction['zipcode']` than if you look up `mylst[2]`.
* When you have a collection of data pairs, and you will often have to look up one of the pairs based on its first value, it is better to use a dictionary than a list of (key, value) tuples. With a dictionary, you can find the value for any (key, value) tuple by looking up the key. With a list of tuples you would need to iterate through the list, examining each pair to see if it had the key that you want.
* On the other hand, if you will have a collection of data pairs where multiple pairs share the same first data element, then you can't use a dictionary, because a dictionary requires all the keys to be distinct from each other.

.. You'll see more complicated data structures later, but for now imagine data about U.S. states, which contains population data, the state name, the state capital, and the state abreviation. If you were to put the information about each state in a list, then the order of each bit of data would have to be consistent. It might look like the following:

.. .. sourcecode python

.. data = [4779736, "Alabama", "Montgomery", "AL", 710231, "Alaska", "Juneau", "AK", 6392017, "Arizona", "Phoenix" , "AZ" ......]

.. In order to extract all population data for example, you would have to know that it was always the first piece of information about a state, and that each state had four pieces of information. Then you would need to figure out how to extract the information which might look something like this:

.. .. activecode ac10_10_1

..     data = [4779736, "Alabama", "Montgomery", "AL", 710231, "Alaska", "Juneau", "AK", 6392017, "Arizona", "Phoenix" , "AZ"]

..     position = 0

..     for info in data:
..         if position % 4 == 0:
..             print("Population of a State: " + str(data[position]))

.. If the population was instead in a dictionary, then we could have a dictionary for looking up population counts and another for looking up abbreviations, as illustrated below. (Later in the course, we will see nested data structures, which would allow us to have a single dictionary, each of whose values was a list or a dictionary.)

.. .. sourcecode python

..     state_populations = {"Alabama": 4779736, "Alaska": 710231 "Arizona" : 6392017,  ...}
..     state_abbreviations = {"Alabama": "AL", "Alaska": "AL", "Arizona": "AZ",  ...}




