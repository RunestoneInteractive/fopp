..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: dictionaries-3-
   :start: 1

Dictionary methods
==================

Dictionaries have a number of useful built-in methods.
The following table provides a summary and more details can be found in the
`Python Documentation <http://docs.python.org/3/library/stdtypes.html#mapping-types-dict>`_.

==========  ==============      =======================================================
Method      Parameters          Description
==========  ==============      =======================================================
keys        none                Returns a view of the keys in the dictionary
values      none                Returns a view of the values in the dictionary
items       none                Returns a view of the key-value pairs in the dictionary
get         key                 Returns the value associated with key; None otherwise
get         key,alt             Returns the value associated with key; alt otherwise
==========  ==============      =======================================================

As we saw earlier with strings and lists, dictionary methods use dot notation, which specifies the name of the method 
to the right of the dot and the name of the object on which to apply the method immediately to the left of the dot. 
For example, if ``x`` is a variable 
whose value is a dictionary, ``x.keys`` is the method object, and ``x.keys()`` invokes the method, returning a view of 
the value.

Iterating over Dictionaries
---------------------------

There are three ways to iterate over the contents of a dictionary. Let's take a moment to examine them.

The first technique involves iterating over the keys of the dictionary using the ``keys`` method. 
The ``keys`` method returns a collection of the keys in the dictionary.

.. activecode:: ac10_3_1
    
    inventory = {'apples': 430, 'bananas': 312, 'pears': 217, 'oranges': 525}  
  
    for akey in inventory.keys():     # the order in which we get the keys is not defined
        print("Got key", akey, "which maps to value", inventory[akey])     
       
    ks = list(inventory.keys())       # Make a list of all of the keys
    print(ks)                    
    print(ks[0])                      # Display the first key

Note the first line of the for loop::

    for akey in inventory.keys():

Each time through the loop, the loop variable ``akey`` is assigned a different key in the dictionary. In the loop body,
the value associated with the key is accessed by indexing the dictionary with ``akey`` using the expression
``inventory[akey]``. Note that the order in which the keys are assigned in the loop is not predictable. If you want to
visit the keys in alphabetic order, you must use the ``sorted`` function to produce a sorted collection of keys, like this::

    for akey in sorted(inventory.keys()):

It's so common to iterate over the keys in a dictionary that you can
omit the ``keys`` method call in the ``for`` loop --- iterating over
a dictionary implicitly iterates over its keys.

.. activecode:: ac10_3_2
    
    inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}  
    
    for k in inventory:     
        print("Got key", k)

The ``values`` method returns a collection of the values in the dictionary. Here's an example
that displays a list of the values:

.. activecode:: ac10_3_3a
    
    inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}  
    
    print(list(inventory.values()))

    for v in inventory.values():
        print("Got", v)

The ``items`` method returns a collection of tuples containing each key and its associated value. 
Take a look at this example that iterates over the dictionary using the ``items`` method:

.. activecode:: ac10_3_3b
    
    inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}  
    
    print(list(inventory.items()))

    for k, v in inventory.items():
        print("Got", k, "that maps to", v)

Take a close look at the first line of the for loop::

    for k, v in inventory.items():

Each time through the loop, ``k`` receives a key from the dictionary, and ``v`` receives its associated
value. That avoids the need to index the dictionary inside the loop body to access the value associated
with the key.

.. note::

    You may have noticed in the examples above that, to print the result of the ``keys()``, ``values()``, and
    ``items()`` methods, we used lines like this::

        print(list(inventory.keys())

    instead of this::

        print(inventory.keys())
    
    Technically, ``keys()``, ``values()``, and ``items()`` don't return actual lists. Like the ``range`` function described 
    previously, they return objects that produce the items one at a time, rather than producing and 
    storing all of them in advance as a list. If you need to perform an operation on the result of one of these methods such as
    extracting the first item, you must convert the result to a list using the ``list`` conversion function. For example, if you want to get the first key, 
    this won't work: ``inventory.keys()[0]``. You need to make the collection of keys into a real list before using 
    ``[0]`` to index into it: ``list(inventory.keys())[0]``.

Safely Retrieving Values
------------------------

Looking up a value in a dictionary is a potentially dangerous operation. When using the ``[]`` operator to access
a key, if the key is not present, a runtime error occurs. There are two ways to deal with this problem.
    
The first approach is to use the ``in`` and ``not in`` operators, which can test if a key is in the dictionary:

.. activecode:: ac10_3_4
    
    inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}
    print('apples' in inventory)
    print('cherries' in inventory)

    if 'bananas' in inventory:
        print(inventory['bananas'])
    else:
        print("We have no bananas")

The second approach is to use the ``get`` method. ``get`` retrieves the value associated with a key, similar to the ``[]`` operator. The important 
difference is that ``get`` will not cause a runtime error if the key is not present. It will instead return the value ``None``. 
There exists a variation of ``get`` that allows a second parameter that serves as an alternative return value in the 
case where the key is not present. This can be seen in the final example below. In this case, since "cherries" is not 
a key, ``get`` returns 0 (instead of None).

.. activecode:: ac10_3_5
    
    inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}
    
    print(inventory.get("apples"))    
    print(inventory.get("cherries"))

    print(inventory.get("cherries",0))



**Check your understanding**

.. mchoice:: question10_3_1
   :answer_a: 2
   :answer_b: 0.5
   :answer_c: bear
   :answer_d: Error, divide is not a valid operation on dictionaries.
   :correct: a
   :feedback_a: get returns the value associated with a given key so this divides 12 by 6.
   :feedback_b: 12 is divided by 6, not the other way around.
   :feedback_c: Take another look at the example for get above.  get returns the value associated with a given key.
   :feedback_d: The integer division operator is being used on the values returned from the get method, not on the dictionary.

   What is printed by the following statements?
   
   .. sourcecode:: python

     mydict = {"cat":12, "dog":6, "elephant":23, "bear":20}
     answer = mydict.get("cat")//mydict.get("dog")
     print(answer)
   
.. mchoice:: question10_3_2
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Yes, dog is a key in the dictionary.
   :feedback_b: The in operator returns True if a key is in the dictionary, False otherwise.
   :practice: T

   What is printed by the following statements?
   
   .. sourcecode:: python

     mydict = {"cat":12, "dog":6, "elephant":23, "bear":20}
     print("dog" in mydict)


.. mchoice:: question10_3_3
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: 23 is a value in the dictionary, not a key.  
   :feedback_b: Yes, the in operator returns True if a key is in the dictionary, False otherwise.
   :practice: T

   What is printed by the following statements?
   
   .. sourcecode:: python

      mydict = {"cat":12, "dog":6, "elephant":23, "bear":20}
      print(23 in mydict)

.. mchoice:: question10_3_4
   :answer_a: 18
   :answer_b: 43
   :answer_c: 0
   :answer_d: 61
   :correct: b
   :feedback_a: Add the values that have keys longer than 3 characters, not those with exactly 3 characters.
   :feedback_b: Yes, the for statement iterates over the keys. It adds the values of the keys that have length greater than 3.
   :feedback_c: This is the accumulator pattern. Total starts at 0 but then changes as the iteration proceeds.
   :feedback_d: Not all the values are added together. The if statement only chooses some of them.
   :practice: T

   What is printed by the following statements?
   
   .. sourcecode:: python

      total = 0
      mydict = {"cat":12, "dog":6, "elephant":23, "bear":20}
      for akey in mydict:
         if len(akey) > 3:
            total = total + mydict[akey]
      print(total)

.. tabbed:: tabbed_ac10_3_7

    .. tab:: Question

        .. activecode:: ac10_3_7
            :language: python
            :autograde: unittest
            :practice: T

            **5.** We have a dictionary of the specific events that Italy has won medals in and the number of medals they have won for each event. Assign to the variable ``events`` a list of the keys from the dictionary ``medal_events``. Use a dictionary method and cast to a list; do not hard code or accumulate a list via iteration.

            ~~~~
            medal_events = {'Shooting': 7, 'Fencing': 4, 'Judo': 2, 'Swimming': 3, 'Diving': 2}

            =====

            from unittest.gui import TestCaseGui

            class myTests(TestCaseGui):

                def testOne(self):
                    self.assertEqual(type(events), list, "Testing that events is a list")   
                    self.assertEqual(sorted(events), sorted(medal_events), "Testing that events was created correctly")
                    self.assertNotIn('[', self.getEditorText(), "Hard coding or accumulation detected; use a dictionary method instead")

            myTests().main()

    .. tab:: Answer

        Add the following line::

            events = list(medal_events.keys())