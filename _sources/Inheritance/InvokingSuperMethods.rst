..  Copyright (C)  Paul Resnick and Steve Oney.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".



Invoking the Parent Class's Method
==================================

Sometimes the parent class has a useful method, but you just need to execute a little extra code when running the subclass's method. You can override the parent class's method in the subclass's method with the same name, but also invoke the parent class's method. Here's how.

Say you wanted the ``Dog`` subclass of ``Pet`` to say "Arf! Thanks!" when the ``feed`` method is called, as well as executing the code in the original method.

Here's the original ``Pet`` class again.

.. activecode:: inheritance_pet_class_copy
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
            print("Called Pet.feed()")
            self.reduce_hunger()

        def reduce_hunger(self):
            self.hunger = max(0, self.hunger - self.hunger_decrement)

        def reduce_boredom(self):
            self.boredom = max(0, self.boredom - self.boredom_decrement)

And here's a subclass that overrides ``feed()`` by invoking the the parent class's ``feed()`` method; it then also executes an extra line of code. It does this by calling the built-in function ``super()``. The ``super()`` function returns a special object that allows you to invoke the method of the parent class. So to call the parent class's ``feed()`` method (``Pet.feed()``), we say ``super().feed()``.


.. activecode:: feed_me_example
    :nocanvas:
    :include: inheritance_pet_class_copy

    from random import randrange

    class Dog(Pet):
        sounds = ['Woof', 'Ruff']

        def feed(self):
            super().feed()
            print("Arf! Thanks!")

    d1 = Dog("Astro")

    d1.feed()

.. note::
    Another way to invoke the parent's method is to explicitly refer to the parent class' method and invoke it on the instance. So, in this case, we could say ``Pet.feed(self)``. This is a little more explicit, but it's also a little less flexible. If we later change the name of the parent class, we'd have to change it in all the subclasses. Also, if we later change the class hierarchy, so that ``Dog`` is a subclass of some other class, we'd have to change the code in all the subclasses. So, it's better to use ``super()``.


This technique is very often used with the ``__init__`` method for a subclass. Suppose that some extra instance variables are defined for the subclass. When you invoke the constructor, you pass all the regular parameters for the parent class, plus the extra ones for the subclass. The subclass' ``__init__`` method then stores the extra parameters in instance variables and calls the parent class'   ``__init__`` method to store the common parameters in instance variables and do any other initialization that it normally does.

Let's say we want to create a subclass of ``Pet``, called ``Bird``, and we want it to take an extra parameter, ``chirp_number``, with a default value of ``2``, and have an extra instance variable, ``self.chirp_number``. Then, we'll use this in the ``hi`` method to make more than one sound.

.. activecode:: super_methods_1
    :nocanvas:
    :include: inheritance_pet_class_copy

    class Bird(Pet):
        sounds = ["chirp"]
        def __init__(self, name="Kitty", chirp_number=2):
            super().__init__(name) # call the parent class's constructor
            self.chirp_number = chirp_number # now, also assign the new instance variable

        def hi(self):
            for i in range(self.chirp_number):
                print(self.sounds[randrange(len(self.sounds))])
            self.reduce_boredom()

    b1 = Bird('tweety', 5)
    b1.teach("Polly wanna cracker")
    b1.hi()

**Check your understanding**

.. mchoice:: question_inheritance_4
   :answer_a: 7
   :answer_b: ["Mrrp"]
   :answer_c: ["chirp"]
   :answer_d: Error
   :feedback_a: This would print if the code was print(b2.chirp_number).
   :feedback_b: We set b2 to be Bird('Sunny', 7) above.  Bird is a subclass of Pet, which has ["Mrrp"] for sounds, but Bird has a different value for that class variable. The interpreter looks in the subclass first.
   :feedback_c: The interpeter finds the value in the class variable for the class Bird.
   :feedback_d: We ran set b2 to be Bird('Sunny', 7) above.  Bird has a value set for the attribute sounds.
   :correct: c

   What will the following code print (assuming we use the above definitions of ``Bird`` and ``Pet``)::

    b2 = Bird('Sunny', 7)
    print(b2.sounds)

.. mchoice:: question_inheritance_5
   :answer_a: Error when invoked
   :answer_b: The string "Arf! Thanks!" would not print out but d1 would still have its hunger reduced.
   :answer_c: The string "Arf! Thanks!" would still print out but d1 would not have its hunger reduced.
   :answer_d: Nothing would be different. It is the same as the current code.
   :feedback_a: Since we are no longer calling the parent method in the subclass method definition, the actions defined in the parent method feed will not happen, and only Arf! Thanks! will be printed.
   :feedback_b: Remember that the Python interpreter checks for the existence of feed in the Dog class and looks for feed in Pet only if it isn't found in Dog.
   :feedback_c: Since we are no longer calling the parent Pet class's method in the Dog subclass's method definition, the class definition will override the parent method.
   :feedback_d: Remember that the Python interpreter checks for the existence of feed in the Dog class and looks for feed in Pet only if it isn't found in Dog.
   :correct: c
   
   For the ``Dog`` class defined in the earlier activecode window, what would happen when ``d1.feed()`` is run if the ``super().feed()`` line was deleted?

