..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

..  shortname:: Sorting Instances
..  description:: Invoking sort and sorted on lists of instances.

.. qnum::
   :prefix: sort-instances-
   :start: 1
   
.. _sort_instances_chap:

Sorting Lists of Instances
==========================

You previously learned :ref:`how to sort lists <sort_chap>`. Sorting lists of instances of a class is not fundamentally different from sorting lists of objects of any other type. There are two main ways to sort lists of instances: (1) by providing a ``key`` function as a parameter to ``sorted()`` (or ``.sort()``) or by (2) defining a "comparison operator" that determines how two instances should be compared (specifically, given two instances, which one should come first). We will describe both ways here.

Approach 1: Sorting Lists of Instances with ``key``
---------------------------------------------------

Previously, you have seen how to provide such a function when sorting lists of other kinds of objects. For example, given a list of strings, you can sort them in ascending order of their lengths by passing a key parameter. Note that if you refer to a function by name, you give the name of the function without parentheses after it, because you want the function object itself. The sorted function will take care of calling the function, passing the current item in the list. Thus, in the example below, we write ``key=len`` and not ``key=len()``.

.. activecode:: sort_instances_1

   L = ["Cherry", "Apple", "Blueberry"]
   
   print(sorted(L, key=len))
   #alternative form using lambda, if you find that easier to understand
   print(sorted(L, key= lambda x: len(x)))   

When each of the items in a list is an instance of a class, you need to provide a function that takes one instance as an input, and returns a number. The instances will be sorted by their numbers.

.. activecode:: sort_instances_2

   class Fruit():
       def __init__(self, name, price):
           self.name = name
           self.price = price
                      
   L = [Fruit("Cherry", 10), Fruit("Apple", 5), Fruit("Blueberry", 20)]
   for f in sorted(L, key=lambda x: x.price):
       print(f.name)

Sometimes you will find it convenient to define a method for the class that does some computation on the data in an instance. In this case, our class is too simple to really illustrate that. But to simulate it, I've defined a method ``sort_priority`` that just returns the price that's stored in the instance. Now, that method, sort_priority takes one instance as input and returns a number. So it is exactly the kind of function we need to provide as the key parameter for sorted. Here it can get a little confusing: to refer to that method, without actually invoking it, you can refer to ``Fruit.sort_priority``. This is analogous to the code above that referred to ``len`` rather than invoking ``len()``.

.. activecode:: sort_instances_3

   class Fruit():
       def __init__(self, name, price):
           self.name = name
           self.price = price
           
       def sort_priority(self):
           return self.price
           
   L = [Fruit("Cherry", 10), Fruit("Apple", 5), Fruit("Blueberry", 20)]
   print("-----sorted by price, referencing a class method-----")
   for f in sorted(L, key=Fruit.sort_priority):
       print(f.name)
       
   print("---- one more way to do the same thing-----")
   for f in sorted(L, key=lambda x: x.sort_priority()):
       print(f.name)


Approach 2: Defining Sort Orders with Comparison Operators
----------------------------------------------------------

Another approach to sorting lists of instances is to specify a "comparison operator" for the class---a method that takes two instances as arguments and "decides" which should come first. One advantage of this approach is that you can call ``sorted`` on a list of instances **without** specifying a value for ``key`` and it will sort in the order you defined.

To do this, we can define a method named ``__lt__`` which stands for "less than". Note that this method starts and ends with two underscores. This signifies that it is a special method, just like ``__init__`` and ``__str__``. Our method, ``__lt__``, takes two instances as arguments: ``self`` and an argument for another instance. It returns ``True`` if the ``self`` instance should come before the other instance, and ``False`` otherwise. Normally, ``__lt__`` is called when we try to use the less than operator (``<``) on class instances; Python translates the expression ``a < b`` into ``a.__lt__(b)``. However, we can also use ``__lt__`` to decide which of two instances should come first in a sorted list. For example, if we wanted to sort instances of ``Fruit`` by prices names by default, we could define ``__lt__`` as follows:

.. activecode:: sort_instances_4
    class Fruit():
        def __init__(self, name, price):
            self.name = name
            self.price = price
           
        def __lt__(self, other): # other is another instance of Fruit
            return self.price < other.price
           
    cherry = Fruit("Cherry", 10)
    apple = Fruit("Apple", 5)
    blueberry = Fruit("Blueberry", 20)
    L = [cherry, apple, blueberry]

    print("-----sorted using comparison operator (without key)-----")
    for f in sorted(L):
        print(f)

    print(blueberry < cherry) # Equivalent to blueberry.__lt__(cherry) ; False

When we call ``sorted(L)`` without specifying a value for the ``key`` parameter, it will sort the items in the list using the ``__lt__`` method we defined. ``sorted()`` will automatically call the ``__lt__`` method, passing in two instances from the list. Calling ``__lt__`` when ``self`` is ``Fruit("Cherry", 10)`` and ``other`` is ``Fruit("Apple", 5)`` returns ``False`` (because the ``price`` of the cherry is not less than the price of the apple) so this means ``Apple`` should come before ``Cherry`` in the sorted list.

If we wanted to sort by names, we could define ``__lt__`` differently. *Note that when we call ``<`` on strings, it does an alphabetical comparison; ``"Apple" < "Cherry"`` is ``True``. We can take advantage of this in our ``__lt__`` method*:

.. activecode:: sort_instances_5
    class Fruit():
        def __init__(self, name, price):
            self.name = name
            self.price = price
           
        def __lt__(self, other): # other is another instance of Fruit
            return self.name < other.name # note we are comparing names
           
    cherry = Fruit("Cherry", 10)
    apple = Fruit("Apple", 5)
    blueberry = Fruit("Blueberry", 20)
    L = [cherry, apple, blueberry]

    print("-----sorted using comparison operator (without key)-----")
    for f in sorted(L):
        print(f)

    print(blueberry < cherry) # Equivalent to blueberry.__lt__(cherry) ; True