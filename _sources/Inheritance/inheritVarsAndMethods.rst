..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Inheriting Variables and Methods
================================

.. index:: Mechanics of defining a subclass

Mechanics of Defining a Subclass
--------------------------------

We said that inheritance provides us a more elegant way of, for example, creating  ``Dog`` and ``Cat`` types, rather than making a very complex ``Pet`` class. In the abstract, this is pretty intuitive: all pets have certain things, but dogs are different from cats, which are different from birds. Going a step further, a Collie dog is different from a Labrador dog, for example. Inheritance provides us with an easy and elegant way to represent these differences.

Basically, it works by defining a new class, and using a special syntax to show what the new sub-class *inherits from* a super-class. So if you wanted to define a ``Dog`` class as a special kind of ``Pet``, you would say that the ``Dog`` type inherits from the ``Pet`` type. In the definition of the inherited class, you only need to specify the methods and instance variables that are different from the parent class (the **parent class**, or the **superclass**,  is what we may call the class that is *inherited from*. In the example we're discussing, ``Pet`` would be the superclass of ``Dog`` or ``Cat``).

Here is an example. Say we want to define a class ``Cat`` that inherits from ``Pet``. Assume we have the ``Pet`` class that we defined earlier.

We want the ``Cat`` type to be exactly the same as ``Pet``, *except* we want the sound cats to start out knowing "meow" instead of "mrrp", and we want the ``Cat`` class to have its own special method called ``chasing_rats``, which only ``Cat`` s have.

For reference, here's the original Tamagotchi code


.. activecode:: inheritance_cat_example
    :nocanvas:

    from random import randrange

    # Here's the original Pet class
    class Pet():
        boredom_decrement = 4
        hunger_decrement = 6
        boredom_threshold = 5
        hunger_threshold = 10
        sounds = ['Mrrp']
        def __init__(self, name = "Kitty"):
            self.name = name
            self.hunger = randrange(self.hunger_threshold)
            self.boredom = randrange(self.boredom_threshold)
            self.sounds = self.sounds[:]  # copy the class attribute, so that when we make changes to it, we won't affect the other Pets in the class

        def clock_tick(self):
            self.boredom += 1
            self.hunger += 1

        def mood(self):
            if self.hunger <= self.hunger_threshold and self.boredom <= self.boredom_threshold:
                return "happy"
            elif self.hunger > self.hunger_threshold:
                return "hungry"
            else:
                return "bored"

        def __str__(self):
            state = "     I'm " + self.name + ". "
            state += " I feel " + self.mood() + ". "
            # state += "Hunger %d Boredom %d Words %s" % (self.hunger, self.boredom, self.sounds)
            return state

        def hi(self):
            print(self.sounds[randrange(len(self.sounds))])
            self.reduce_boredom()

        def teach(self, word):
            self.sounds.append(word)
            self.reduce_boredom()

        def feed(self):
            self.reduce_hunger()

        def reduce_hunger(self):
            self.hunger = max(0, self.hunger - self.hunger_decrement)

        def reduce_boredom(self):
            self.boredom = max(0, self.boredom - self.boredom_decrement)

    # Here's the new definition of class Cat, a subclass of Pet.
    class Cat(Pet): # the class name that the new class inherits from goes in the parentheses, like so.
        sounds = ['Meow']

        def chasing_rats(self):
            return "What are you doing, Pinky? Taking over the world?!"


All we need is the few extra lines at the bottom of the ActiveCode window! The elegance of inheritance allows us to specify just the differences in the new, inherited class. In that extra code, we make sure the ``Cat`` class inherits from the ``Pet`` class. We do that by putting the word Pet in parentheses, ``class Cat(Pet):``. In the definition of the class ``Cat``, we only need to define the things that are different from the ones in the ``Pet`` class.

In this case, the only difference is that the class variable ``sounds`` starts out with the string ``"Meow"`` instead of the string ``"mrrp"``, and there is a new method ``chasing_rats``.

We can still use all the ``Pet`` methods in the ``Cat`` class, this way. You can call the ``__str__`` method on an instance of ``Cat`` to ``print`` an instance of ``Cat``, the same way you could call it on an instance of ``Pet``, and the same is true for the ``hi`` method -- it's the same for instances of ``Cat`` and ``Pet``. But the ``chasing_rats`` method is special: it's only usable on ``Cat`` instances, because ``Cat`` is a subclass of ``Pet`` which has that additional method.

In the original Tamagotchi game in the last chapter, you saw code that created instances of the ``Pet`` class. Now let's write a little bit of code that uses instances of the ``Pet`` class AND instances of the ``Cat`` class.

.. activecode:: tamagotchi_2
    :nocanvas:
    :include: inheritance_cat_example

    p1 = Pet("Fido")
    print(p1) # we've seen this stuff before!

    p1.feed()
    p1.hi()
    print(p1)

    cat1 = Cat("Fluffy")
    print(cat1) # this uses the same __str__ method as the Pets do

    cat1.feed() # Totally fine, because the cat class inherits from the Pet class!
    cat1.hi()
    print(cat1)

    print(cat1.chasing_rats()) 

    #print(p1.chasing_rats()) # This line will give us an error. The Pet class doesn't have this method!

And you can continue the inheritance tree. We inherited ``Cat`` from ``Pet``. Now say we want a subclass of ``Cat`` called ``Cheshire``. A Cheshire cat should inherit everything from ``Cat``, which means it inherits everything that ``Cat`` inherits from ``Pet``, too. But the ``Cheshire`` class has its own special method, ``smile``.

.. activecode:: inheritance_cheshire_example
    :nocanvas:
    :include: inheritance_cat_example

    class Cheshire(Cat): # this inherits from Cat, which inherits from Pet

        def smile(self): # this method is specific to instances of Cheshire
            print(":D :D :D")

    # Let's try it with instances.
    cat1 = Cat("Fluffy")
    cat1.feed() # Totally fine, because the cat class inherits from the Pet class!
    cat1.hi() # Uses the special Cat hello.
    print(cat1)

    print(cat1.chasing_rats())

    new_cat = Cheshire("Pumpkin") # create a Cheshire cat instance with name "Pumpkin"
    new_cat.hi() # same as Cat!
    new_cat.chasing_rats() # OK, because Cheshire inherits from Cat
    new_cat.smile() # Only for Cheshire instances (and any classes that you make inherit from Cheshire)

    # cat1.smile() # This line would give you an error, because the Cat class does not have this method!

    # None of the subclass methods can be used on the parent class, though.
    p1 = Pet("Teddy")
    p1.hi() # just the regular Pet hello
    #p1.chasing_rats() # This will give you an error -- this method doesn't exist on instances of the Pet class.
    #p1.smile() # This will give you an error, too. This method does not exist on instances of the Pet class.


How the interpreter looks up attributes
---------------------------------------

So what is happening in the Python interpreter when you write programs with classes, subclasses, and instances of both parent classes and subclasses?

**This is how the interpreter looks up attributes:**

1. First, it checks for an instance variable or an instance method by the name it's looking for.
2. If an instance variable or method by that name is not found, it checks for a class variable. (See the :ref:`previous chapter <class_and_instance_vars>` for an explanation of the difference between **instance variables** and **class variables**.)
3. If no class variable is found, it looks for a class variable in the parent class.
4. If no class variable is found, the interpreter looks for a class variable in THAT class's parent (the "grandparent" class).
5. This process goes on until the last ancestor is reached, at which point Python will signal an error.

Let's look at this with respect to some code.

Say you write the lines:

.. code:: python

    new_cat = Cheshire("Pumpkin")
    print(new_cat.name)

In the second line, after the instance is created, Python looks for the instance variable ``name`` in the ``new_cat`` instance.  In this case, it exists. The name on this instance of ``Cheshire`` is ``Pumpkin``. There you go!

When the following lines of code are written and executed:

.. code:: python

    cat1 = Cat("Sepia")
    cat1.hi()

The Python interpreter looks for ``hi`` in the instance of ``Cat``. It does not find it, because there's no statement of the form ``cat1.hi = ...``. (Be careful here -- if you *had* set an instance variable on Cat called ``hi`` it would be a bad idea, because you would not be able to use the **method** that it inherited anymore. We'll see more about this later.)

Then it looks for hi as a class variable (or method) in the class Cat, and still doesn't find it.

Next, it looks for a class variable ``hi`` on the parent class of ``Cat``, ``Pet``. It finds that -- there's a **method** called ``hi`` on the class ``Pet``. Because of the ``()`` after ``hi``, the method is invoked. All is well.

However, for the following, it won't go so well

.. code:: python

    p1 = Pet("Teddy")
    p1.chasing_rats()

The Python interpreter looks for an instance variable or method called ``chasing_rats`` on the ``Pet`` class. It doesn't exist. ``Pet`` has no parent classes, so Python signals an error.

**Check your understanding**

.. mchoice:: question_inheritance_1
   :answer_a: 1
   :answer_b: 2
   :answer_c: 3
   :answer_d: 4
   :feedback_a: Neither Cheshire nor Cat defines an __init__ constructor method, so the grandaprent class, Pet, will have it's __init__ method called. Check how many instance variables it sets.
   :feedback_b: Neither Cheshire nor Cat defines an __init__ constructor method, so the grandaprent class, Pet, will have it's __init__ method called. Check how many instance variables it sets.
   :feedback_c: Neither Cheshire nor Cat defines an __init__ constructor method, so the grandaprent class, Pet, will have it's __init__ method called. Check how many instance variables it sets.
   :feedback_d: Neither Cheshire nor Cat defines an __init__ constructor method, so the grandaprent class, Pet, will have it's __init__ method called. That constructor method sets the instance variables name, hunger, boredom, and sounds.
   :correct: d
   
   After you run the code, ``new_cat = Cheshire("Cat1")``, how many instance variables exist for the new_cat instance of Cheshire?

.. mchoice:: question_inheritance_2
   :answer_a: I am a purrrfect creature.
   :answer_b: Error
   :answer_c: Pumpkin
   :answer_d: Nothing. There’s no print statement.
   :feedback_a: another_cat is an instance of Siamese, so its song() method is invoked.
   :feedback_b: another_cat is an instance of Siamese, so its song() method is invoked.
   :feedback_c: This would print if the statement was print new_cat.name.
   :feedback_d: There is a print statement in the method definition.
   :correct: a

   What would print after running the following code:

   .. code-block:: python

     new_cat = Cheshire("Cat1”)
     class Siamese(Cat):
       def song(self):
         print("I am a purrrfect creature.")
     another_cat = Siamese("Cat2")
     another_cat.song()


.. mchoice:: question_inheritance_3
   :answer_a: We are Siamese if you please. We are Siamese if you don’t please.
   :answer_b: Error
   :answer_c: Cat1
   :answer_d: Nothing. There’s no print statement.
   :feedback_a: You cannot invoke methods defined in the Siamese class on an instance of the Cheshire class. Both are subclasses of Cat, but Cheshire is not a subclass of Siamese, so it doesn't inherit its methods.
   :feedback_b: You cannot invoke methods defined in the Siamese class on an instance of the Cheshire class. Both are subclasses of Cat, but Cheshire is not a subclass of Siamese, so it doesn't inherit its methods.
   :feedback_c: This would print if the statement was print new_cat.name.
   :feedback_d: There is a print statement in the method definition for Siamese.
   :correct: b

   What would print after running the following code:

   .. code-block:: python

     new_cat = Cheshire("Cat1”)
     class Siamese(Cat):
       def song(self):
         print("I am a purrrfect creature.")
     another_cat = Siamese("Cat2")
     new_cat.song()


