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


👩‍💻 When to use Lamba vs Function
-----------------------------------

Though you can often use a lambda expression and function interchangeably when sorting, it's generally best to use lambda expressions until the process is too complicated, and then a function should be used. For example, in the following example, we'll be sorting a dictionary by the values, specifically how many strings in the values start with "S", from largest to smallest. Before you read one of the solutions when using a function, can you think of how to do this with lambda?

.. activecode:: ac18_6_1

    def howtosort(di):
        startswith = 0
        for item in di:
            if item[0] == "S":
                startswith += 1
        return startswith

    data = {"Michigan": ["Ann Arbor", "Traverse City", "Lansing", "Kalamazoo"], "Washington": ["Seattle", "Tacoma", "Olympia", "Vancouver"], "Minnesota": ["St. Paul", "Minneapolis", "Saint Cloud", "Stillwater"]}

    sorted_data = sorted(data, key = howtosort, reverse = True)

We *could* also do this with a lambda expression, but the way to do so becomes more clear only once it's been done as a regular function. It could have been too difficult to think of without having done so.

.. activecode:: ac18_6_2

    def howtosort(di):
        startswith = 0
        for item in di:
            if item[0] == "S":
                startswith += 1
        return startswith

    data = {"Michigan": ["Ann Arbor", "Traverse City", "Lansing", "Kalamazoo"], "Washington": ["Seattle", "Tacoma", "Olympia", "Vancouver"], "Minnesota": ["St. Paul", "Minneapolis", "Saint Cloud", "Stillwater"]}

    sorted_data = sorted(data, key = lambda x: len([word for word in x if word[0] == "S"]), reverse = True)

There will be other situations that are more complicated than this. In some cases, they may be too complicated to solve with a lambda expression at all! 