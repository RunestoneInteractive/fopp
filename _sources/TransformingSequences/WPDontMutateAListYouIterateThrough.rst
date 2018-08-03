..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-12-
   :start: 1

👩‍💻  Don’t Mutate A List That You Are Iterating Through
=========================================================

So far we've shown you how to iterate through a list:

.. activecode:: ac8_12_1

    colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]

    for color in colors:
        print(color)

As well as accumulate a list or delete one!

.. activecode:: ac8_12_2

    colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
    initials = []

    for color in colors:
        initials.append(color[0])

    print(initials)

You may be tempted now to iterate through a list and accumulate some data into it or delete data from it, however that 
often becomes very confusing. In the following code we will filter out all words that begin with P, B, or T.

.. activecode:: ac8_12_3

    colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Purple", "Pink", "Brown", "Teal", "Turquois", "Peach", "Beige"]

    for position in range(len(colors)):
        color = colors[position]
        print(color)
        if color[0] in ["P", "B", "T"]:
            del colors[position]

    print(colors)

In the code above, we iterated through ``range(len(colors))`` because it made it easier to locate the position of the 
item in the list and delete it. However, we run into a problem because as we delete content from the list, the list 
becomes shorter. Not only do we have an issue indexing on line 4 after a certain point, but we also skip over some strings because they've been moved around. To see this more easily, try walking through this code in codelens. Note that each time we iterate through the list python does not reevaluate the iterator variable.

We can also try to accumulate a list that we're iterating through as well. What do you think will happen here?

.. activecode:: ac8_12_4

    colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]

    for color in colors:
        if color[0] in ["A", "E", "I", "O", "U"]:
            colors.append(color)

    print(colors)

Though there is not an error, the behavior may not be expected. When we come across a color that begins with a vowel, 
that color is added to the end of the list. Again, because Python does not reevaluate the iterator variable we are not 
stuck adding colors that start with vowels for an infinite number of times. That's good in this case! Ultimately though, 
it can be confusing to write code like this. We would not recommend iterating over an object that you will be mutating 
within the same iteration.

.. ac8_12_3

..    colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Purple", "Pink", "Brown", "Teal", "Turquois", "Peach", "Beige"]

..    for color in colors:
..        if color[0] in ["P", "B", "T"]:
..
..            # we need to find the position of the string in the list.
..            position = colors.index(color)
..            del colors[position]

..    print(colors)
