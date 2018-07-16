..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-7-
   :start: 1

Append versus Concatenate
-------------------------

The ``append`` method adds a new item to the end of a list. It is also possible to add a new item to the end of a list 
by using the concatenation operator. However, you need to be careful.

Consider the following example. The original list has 3 integers. We want to add the word "cat" to the end of the list.

.. activecode:: clens8_7_1

    origlist = [45,32,88]

    origlist.append("cat")

Here we have used ``append`` which simply modifies the list. In order to use concatenation, we need to 
write an assignment statement that uses the accumulator pattern::

    origlist = origlist + ["cat"]

Note that the word "cat" needs to be placed in a list since the concatenation operator needs two lists 
to do its work.

.. codelens:: clens8_7_2
    :python: py3

    origlist = [45,32,88]

    origlist = origlist + ["cat"]

It is also important to realize that with append, the original list is simply modified. On the other hand, 
with concatenation, an entirely new list is created.  This can be seen in the following codelens example 
where``newlist`` refers to a list which is a copy of the original list, ``origlist``, with the new item 
"cat" added to the end.  ``origlist`` still contains the three values it did before the concatenation. 
This is why the assignment operation is necessary as part of the accumulator pattern.

.. codelens:: clens8_7_3
    :python: py3

    origlist = [45,32,88]

    newlist = origlist + ["cat"]

This might be difficult to understand since these two lists appear to be the same. In Python, every object 
has a unique identification tag. Likewise, there is a built-in function that can be called on any object to return 
its unique id. The function is appropriately called ``id`` and takes a single parameter, the object that you are 
interested in knowing about. You can see in the example below that a real id is usually a very large integer value 
(corresponding to an address in memory). In the textbook though the number will likely be smaller.

.. sourcecode:: python

    >>> alist = [4, 5, 6]
    >>> id(alist)
    4300840544
    >>> 

.. activecode:: ac8_7_1

    origlist = [45,32,88]
    print("origlist:", origlist)
    print("the identifier:", id(origlist))             #id of the list before changes
    newlist = origlist + ['cat'] 
    print("newlist:", newlist)   
    print("the identifier:", id(newlist))              #id of the list after concatentation
    origlist.append('cat')
    print("origlist:", origlist)
    print("the identifier:", id(origlist))             #id of the list after append is used

Note how even though ``newlist`` and ``origlist`` appear the same, they have different identifiers.

We have previously described `x += 1` as a shorthand for `x = x + 1`. With lists, `+=` is actually a little different. In particular, `origlist += ["cat"] appends "cat" to the end of the original list object. If there is another alias for `origlist`, this can make a difference, as in the code below. See if you can follow (or, better yet, predict, changes in the reference diagram).

.. codelens:: clens8_7_2a
    :python: py3

    origlist = [45,32,88]
    aliaslist = origlist
    origlist += ["cat"]
    origlist = origlist + ["cow"]


We can use append or concatenate repeatedly to create new objects. If we had a string and wanted to make a new list, where each element in the list is a character in the string, where do you think you should start? In both cases, you'll need to first create a variable to store the new object.

.. activecode:: ac8_72

    st = "Warmth"
    a = []

Then, character by character, you can add to the empty list. The process looks different if you concatentate as compared to using append.

.. activecode:: ac8_7_3

    st = "Warmth"
    a = []
    b = a + [st[0]]
    c = b + [st[1]]
    d = c + [st[2]]
    e = d + [st[3]]
    f = e + [st[4]]
    g = f + [st[5]]
    print(g)

.. activecode:: ac8_7_4

    st = "Warmth"
    a = []
    a.append(st[0]) 
    a.append(st[1])
    a.append(st[2])
    a.append(st[3])
    a.append(st[4])
    a.append(st[5])
    print(a)

This might become tedious though, and difficult if the length of the string is long. 
Can you think of a better way to do this?

**Check your understanding**

.. mchoice:: question8_7_1
   :answer_a: [4,2,8,6,5,999]
   :answer_b: Error, you cannot concatenate a list with an integer.
   :correct: b
   :feedback_a: You cannot concatenate a list with an integer.
   :feedback_b: Yes, in order to perform concatenation you would need to write alist+[999].  You must have two lists.
   :practice: T

   What is printed by the following statements?
   
   .. code-block:: python

     alist = [4,2,8,6,5]
     alist = alist + 999
     print(alist)
