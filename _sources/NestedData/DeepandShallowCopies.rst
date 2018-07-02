..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: nested-5-
   :start: 1

Deep and Shallow Copies
=======================

Earlier when we discussed cloning and aliasing lists we had mentioned that simply cloning a list using [:] would take care of any issues 
with having two lists unintentially connected to each other. That was definitely true for making shallow copies (copying a list at the 
highest level), but as we get into nested data, and nested lists in particular, the rules become a bit more complicated. We can have second-level aliasing in these cases, which means we need to make deep copies.

When you copy a nested list, you do not also get copies of the internal lists. This means that if you perform a mutation operation on one 
of the original sublists, the copied version will also change. We can see this happen in the following nested list, which only has two levels.

.. activecode:: ac17_100_1

    original = [['dogs', 'puppies'], ['cats', "kittens"]]
    copied_version = original[:]
    print(copied_version)
    original[0].append(["canines"])
    print(original)
    print("-------- Now look at the copied version -----------")
    print(copied_version)

Assuming that you don't want to have aliased lists inside of your nested list, then you'll need to perform nested iteration.

.. activecode:: ac17_100_2

    original = [['dogs', 'puppies'], ['cats', "kittens"]]
    copied_version = []
    for l in original:
        copied_version.append(l[:])
    print(copied_version)
    original[0].append(["canines"])
    print(original)
    print("-------- Now look at the copied version -----------")
    print(copied_version)

This process above works fine when there are only two layers or levels in a nested list. However, if we want to make a copy of a nested 
list that has *more* than two levels, then we recommend using the ``copy`` module. In the ``copy`` module there is a method called 
``deepcopy`` that will take care of the operation for you.

.. sourcecode:: python

    original = [['canines', ['dogs', 'puppies']], ['felines', ['cats', 'kittens']]]
    deep_version = copy.deepcopy(original)

