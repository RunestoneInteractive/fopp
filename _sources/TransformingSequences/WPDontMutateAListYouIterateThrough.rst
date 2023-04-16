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

As well as accumulate a list by appending items:

.. activecode:: ac8_12_2

    colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
    initials = []

    for color in colors:
        initials.append(color[0])

    print(initials)

You may be tempted now to iterate through a list and accumulate some data into it or delete data from it as you're traversing the list, however that
often becomes very confusing. In the following code we will filter out all words that begin with P, B, or T.

.. codelens:: ac8_12_3

    colors = ["Red", "Purple", "Yellow"]

    for position in range(len(colors)):
        color = colors[position]
        print(color)
        if color[0] in ["P", "B", "T"]:
            del colors[position]

    print(colors)

In the code above, we iterated through the indexes, and deleted each item that begins with a bad letter.
However, we run into a problem because as we delete content from the list, the list
becomes shorter. Eventually, we have an issue indexing on line 4. Try stepping through it in codelens to see what's going on.

We can also try to accumulate a list that we're iterating through as well. What do you think will happen here?

.. codelens:: ac8_12_4

    colors = ["Red", "Orange", "Indigo"]

    for color in colors:
        if color[0] in ["A", "E", "I", "O", "U"]:
            colors.append(color)

        print(colors)

        if len(colors)>6:
            break

Now try stepping through this code.
When we come across a color that begins with a vowel, that color is added to the end of the list.
The python interpreter doesn't make a copy of the sequence at the beginning and iterate through that copy.
It actually asks for the next item in the sequence at the top of each iteration. But here we are adding a new item to the
end of the list before we get to the end of the list, so there's always a next item. We would have an infinite loop.

To prevent the infinite loop, we've added a break once the list has six strings in it. You'll learn about break and continue later in the book.

The main message here is that you should not mutate a list while you're iterating through it! You'll get errors, infinite loops, or, worse, semantic errors: your code may run and produce very surprising results.
