..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: nested-9-
   :start: 1

👩‍💻 Structuring Nested Data
-----------------------------

When constructing your own nested data, it is a good idea to keep the structure consistent across each level. For example, 
if you have a list of dictionaries, then each dictionary should have the same structure, meaning the same keys and the same type of value associated with a particular key in all the dictionaries. The reason
for this is because any deviation in the structure that is used will require extra code to handle those special cases. The 
more the structure deviates, the more you will have to use special cases.

For example, let's reconsider this nested iteration, but suppose not all the items in the outer list are lists.

.. activecode:: ac17_50_1
    :language: python

    nested1 = [1, 2, ['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h']]
    for x in nested1:
        print("level1: ")
        for y in x:
            print("     level2: {}".format(y))

Now the nested iteration fails.

We can solve this with special casing, a conditional that checks the type.

.. activecode:: ac17_50_2
    :language: python

    nested1 = [1, 2, ['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h']]
    for x in nested1:
        print("level1: ")
        if type(x) is list:
            for y in x:
                print("     level2: {}".format(y))
        else:
            print(x)

You can imagine how many special case if-thens we'd need, and how complicated the code would get, if we had many layers of nesting but not always a consistent structure.