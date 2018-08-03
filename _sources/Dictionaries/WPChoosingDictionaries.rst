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

Now that you have experience using lists and dictionaries, you will have to decide which one is best to use in each situation. The following guidelines will help you to make that decision:

* When your data is not homogenous, a dictionary is often better. Writing code to deal with a list that contains multiple types is more difficult that writing code to deal with a dictionary with multiple types.
* When naming or labeling data makes it easier than relying on a consistent postion, then a dictionary is better than a list.
* If you want to repeatedly look up data that's connected, it's better to use a dicionary so that the information is connected as a key-value pair. The alternative is to use a list of tuples, but then you start using nested data. We'll teach you how to access that at a later time, but know that that's not the easiest struture to work with when you have the option of using dictionaries.

.. You'll see more complicated data structures later, but for now imagine data about U.S. states, which contains population data, the state name, the state capital, and the state abreviation. If you were to put that information in a list, then the order of each bit of data would have to be consistent. It may look like the following:

.. .. sourcecode python

..     data = [4779736, "Alabama", "Montgomery", "AL", 710231, "Alaska", "Juneau", "AK", 6392017, "Arizona", "Phoenix" , "AZ" ......]

.. In order to extract all population data for example, you would have to know that it was always the first piece of information about a state, and that each state had four pieces of information. Then you would need to figure out how to extract the information which might look something like this:

.. .. activecode ac10_10_1

..     data = [4779736, "Alabama", "Montgomery", "AL", 710231, "Alaska", "Juneau", "AK", 6392017, "Arizona", "Phoenix" , "AZ"]

..     position = 0

..     for info in data:
..         if position % 4 == 0:
..             print("Population of a State: " + str(data[position]))

.. If that same data was instead in a dictionary, then it could be structured in the following way:

.. .. sourcecode python

..     data = {"Alabama": 4779736,  "Montgomery", "AL", 710231, "Alaska", "Juneau", "AK", 6392017, "Arizona", "Phoenix" , "AZ" ......]


