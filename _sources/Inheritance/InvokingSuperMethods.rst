..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
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

Here's the original Pet class again.

.. activecode:: inheritance_pet_class
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

And here's a subclass that overrides feed() by invoking the the parent class's feed() method; it then also executes an extra line of code. Note the somewhat inelegant way of invoking the parent class' method. We explicitly refer to Pet.feed to get the method/function object. We invoke it with parentheses. However, since we are not invoking the method the normal way, with <obj>.methodname, we have to explicitly pass an instance as the first parameter. In this case, the variable self in Dog.feed() will be bound to an instance of Dog, and so we can just pass self: ``Pet.feed(self)``.

.. activecode:: feed_me_example
    :nocanvas:
    :include: inheritance_pet_class

    from random import randrange

    class Dog(Pet):
        sounds = ['Woof', 'Ruff']

        def feed(self):
            Pet.feed(self)
            print("Arf! Thanks!")

    d1 = Dog("Astro")

    d1.feed()

.. note::

    There's a better way to invoke a superclass's method. Unfortunately, the implementation of python in our ActiveCode windows doesn't support it, so we aren't using it here. In that alternative method, we would call ``super().feed()``. This is nice because it's easier to read, and also because it puts the specification of the class that Dog inherits from in just one place, ``class Dog(Pet)``. Elsewhere, you just refer to ``super()`` and python takes care of looking up that the parent (super) class of Dog is Pet.

This technique is very often used with the ``__init__`` method for a subclass. Suppose that some extra instance variables are defined for the subclass. When you invoke the constructor, you pass all the regular parameters for the parent class, plus the extra ones for the subclass. The subclass' ``__init__`` method then stores the extra parameters in instance variables and calls the parent class'   ``__init__`` method to store the common parameters in instance variables and do any other initialization that it normally does.

Let's say we want to create a subclass of ``Pet``, called ``Bird``, and we want it to take an extra parameter, ``chirp_number``, with a default value of 2, and have an extra instance variable, ``self.chirp_number``. Then, we'll use this in the ``hi`` method to make more than one sound.

.. activecode:: super_methods_1
    :nocanvas:
    :include: inheritance_pet_class

    class Bird(Pet):
        sounds = ["chirp"]
        def __init__(self, name="Kitty", chirp_number=2):
            Pet.__init__(self, name) # call the parent class's constructor
            # basically, call the SUPER -- the parent version -- of the constructor, with all the parameters that it needs.
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
   :answer_a: 5
   :answer_b: ["Mrrp"]
   :answer_c: ["chirp"]
   :answer_d: Error
   :feedback_a: This would print if the code was print(b1.chirp_number).
   :feedback_b: We set b1 to be Bird('tweety', 5) above.  Bird is a subclass of Pet, which has ["Mrrp"] for sounds, but Bird has a different value for that class variable. The interpreter looks in the subclass first.
   :feedback_c: The interpeter finds the value in the class variable for the class Bird.
   :feedback_d: We ran set b1 to be Bird('tweety', 5) above.  Bird has a value set for the attribute sounds.
   :correct: c

   What will print when ``print(b1.sounds)`` is run?

.. mchoice:: question_inheritance_5
   :answer_a: Error when invoked
   :answer_b: The string would not print out but d1 would have its hunger reduced.
   :answer_c: The string would print but d1 would not have its hunger reduced.
   :answer_d: Nothing would be different. It is the same as the current code.
   :feedback_a: Since we are no longer calling the parent method in the subclass method definition, the actions defined in the parent method feed will not happen, and only Arf! Thanks! will be printed.
   :feedback_b: Remember that the Python interpreter checks for the existence of feed in the Dog class and looks for feed in Pet only if it isn't found in Dog.
   :feedback_c: Since we are no longer calling the parent Pet class's method in the Dog subclass's method definition, the class definition will override the parent method.
   :feedback_d: Remember that the Python interpreter checks for the existence of feed in the Dog class and looks for feed in Pet only if it isn't found in Dog.
   :correct: c
   
   For the Dog class defined in the earlier activecode window, what would happen when d1.feed() is run if the Pet.feed(self) line was deleted?

