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
------------------

Dictionaries have a number of useful built-in methods.
The following table provides a summary and more details can be found in the
`Python Documentation <http://docs.python.org/py3k/library/stdtypes.html#mapping-types-dict>`_.

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
The empty parentheses in the case of ``keys`` indicate that this method takes no parameters. If ``x`` is a variable 
whose value is a dictionary, ``x.keys`` is the method object, and ``x.keys()`` invokes the method, returning a view of 
the value.

The keys method returns the keys, not necessarily in the same order they were added to the dictionary or any other 
particular order.

.. activecode:: ac10_3_1
    
    inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}  
  
    for akey in inventory.keys():     # the order in which we get the keys is not defined
        print("Got key", akey, "which maps to value", inventory[akey])     
       
    ks = list(inventory.keys())
    print(ks)

    
It's so common to iterate over the keys in a dictionary that you can
omit the ``keys`` method call in the ``for`` loop --- iterating over
a dictionary implicitly iterates over its keys.

.. activecode:: ac10_3_2
    
    inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}  
    
    for k in inventory:     
        print("Got key", k)

 
The ``values`` and ``items`` methods are similar to ``keys``. They return the objects which can be iterated over. Note 
that the item objects are tuples containing the key and the associated value.

.. activecode:: ac10_3_3
    
    inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}  
    
    print(list(inventory.values()))
    print(list(inventory.items()))

    for k in inventory:
        print("Got",k,"that maps to",inventory[k])

.. note::

    Technically, .keys(), .values(), and .items() don't return actual lists. Like the range function described 
    previously, in python 3 they return objects that produce the items one at a time, rather than producing and 
    storing all of them in advance as a list. Unless the dictionary has a whole lot of keys, this won't make a 
    difference for performance. In any case, as with the range function, it is safe for you to think of them as 
    returning lists, for most purposes. For the python interpreter built into this textbook, they actually do produce 
    lists. In a native python interpreter, if you print out ``type(inventory.keys())``, you will find that it is 
    something other than an actual list. If you want to get the first key, ``inventory.keys()[0]`` works in the online 
    textbook, but in a real python interpreter, you need to make the collection of keys into a real list before using 
    ``[0]`` to index into it: ``list(inventory.keys())[0]``.
    
The ``in`` and ``not in`` operators can test if a key is in the dictionary:

.. activecode:: ac10_3_4
    
    inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}
    print('apples' in inventory)
    print('cherries' in inventory)

    if 'bananas' in inventory:
        print(inventory['bananas'])
    else:
        print("We have no bananas")
     

This operator can be very useful since looking up a non-existent key in a dictionary causes a runtime error.

The ``get`` method allows us to access the value associated with a key, similar to the ``[ ]`` operator. The important 
difference is that ``get`` will not cause a runtime error if the key is not present. It will instead return None. 
There exists a variation of ``get`` that allows a second parameter that serves as an alternative return value in the 
case where the key is not present. This can be seen in the final example below. In this case, since "cherries" is not 
a key, return 0 (instead of None).

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

.. activecode:: ac10_3_6
   :language: python
   :autograde: unittest
   :practice: T

   **5.** Every four years, the summer Olympics are held in a different country. Add a key-value pair to the dictionary ``places`` that reflects that the 2016 Olympics were held in Brazil. Do not rewrite the entire dictionary to do this!
   ~~~~

   places = {"Australia":2000, "Greece":2004, "China":2008, "England":2012}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(places.items()), sorted([("Australia", 2000), ("Greece", 2004), ("China", 2008), ("England", 2012), ("Brazil", 2016)]), "Testing that places has been updated correctly.")

   myTests().main()

.. activecode:: ac10_3_7
   :language: python
   :autograde: unittest
   :practice: T

   **6.** We have a dictionary of the specific events that Italy has won medals in and the number of medals they have won for each event. Assign to the variable ``events`` a list of the keys from the dictionary ``medal_events``. Do not hard code this.
   ~~~~

   medal_events = {'Shooting': 7, 'Fencing': 4, 'Judo': 2, 'Swimming': 3, 'Diving': 2}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(events), sorted(['Shooting', 'Fencing', 'Judo', 'Swimming', "Diving"]), "Testing that events was created correctly")   

   myTests().main()
