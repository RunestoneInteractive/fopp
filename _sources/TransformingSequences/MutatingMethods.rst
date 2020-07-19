..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: seqmut-6-
   :start: 1

Mutating Methods
================

You've seen some methods already, like the ``count`` and ``index`` methods. Methods are either 
mutating or non-mutating. Mutating methods are ones that change the object after the method has been 
used. Non-mutating methods do not change the object after the method has been used.

The ``count`` and ``index`` methods are both non-mutating. Count returns the number of occurrences of 
the argument given but does not change the original string or list. Similarly, index returns the 
leftmost occurrence of the argument but does not change the original string or list. Below we'll talk 
about list methods in general. Keep an eye out for methods that are mutating!

List Methods
------------

The dot operator can also be used to access built-in methods of list objects.  
``append`` is a list method which adds the argument passed to it to the end of
the list. Continuing with this example, we show several other list methods.  Many of them are
easy to understand.  

.. activecode:: ac8_6_1

    mylist = []
    mylist.append(5)
    mylist.append(27)
    mylist.append(3)
    mylist.append(12)
    print(mylist)

    mylist.insert(1, 12)
    print(mylist)
    print(mylist.count(12))

    print(mylist.index(3))
    print(mylist.count(5))

    mylist.reverse()
    print(mylist)

    mylist.sort()
    print(mylist)

    mylist.remove(5)
    print(mylist)

    lastitem = mylist.pop()
    print(lastitem)
    print(mylist)

There are two ways to use the ``pop`` method.  The first, with no parameter, will remove and return the
last item of the list. If you provide a parameter for the position, ``pop`` will remove and return the
item at that position. Either way the list is changed.

The following table provides a summary of the list methods shown above. The column labeled ``result`` 
gives an explanation as to what the return value is as it relates to the new value of the list. The 
word **mutator** means that the list is changed by the method but nothing is returned (actually 
``None`` is returned). A **hybrid** method is one that not only changes the list but also returns a 
value as its result. Finally, if the result is simply a return, then the list is unchanged by the 
method.

Be sure to experiment with these methods to gain a better understanding of what they do.



==========  ==============  ============  ================================================
Method      Parameters       Result       Description
==========  ==============  ============  ================================================
append      item            mutator       Adds a new item to the end of a list
insert      position, item  mutator       Inserts a new item at the position given
pop         none            hybrid        Removes and returns the last item
pop         position        hybrid        Removes and returns the item at position
sort        none            mutator       Modifies a list to be sorted
reverse     none            mutator       Modifies a list to be in reverse order
index       item            return idx    Returns the position of first occurrence of item
count       item            return ct     Returns the number of occurrences of item
remove      item            mutator       Removes the first occurrence of item
==========  ==============  ============  ================================================


Details for these and others can be found in the 
`Python Documentation <http://docs.python.org/py3k/library/stdtypes.html#sequence-types-str-bytes-bytearray-list-tuple-range>`_.

It is important to remember that methods like ``append``, ``sort``,  and ``reverse`` all return 
``None``. They change the list; they don't produce a new list. So, while we did reassignment to 
increment a number, as in ``x = x + 1``, doing the analogous thing with these operations will lose 
the entire list contents (see line 8 below).

.. activecode:: ac8_6_2

    mylist = []
    mylist.append(5)
    mylist.append(27)
    mylist.append(3)
    mylist.append(12)
    print(mylist)

    mylist = mylist.sort()   #probably an error
    print(mylist)

**Check your understanding**

.. mchoice:: question8_6_1
   :answer_a: [4,2,8,6,5,False,True]
   :answer_b: [4,2,8,6,5,True,False]
   :answer_c: [True,False,4,2,8,6,5]
   :correct: b
   :feedback_a: True was added first, then False was added last.
   :feedback_b: Yes, each item is added to the end of the list.
   :feedback_c: append adds at the end, not the beginning.
   :practice: T

   What is printed by the following statements?
   
   .. code-block:: python

     alist = [4,2,8,6,5]
     alist.append(True)
     alist.append(False)
     print(alist)
