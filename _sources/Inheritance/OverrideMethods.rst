..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Overriding Methods
==================

If a method is defined for a class, and also defined for its parent class, the subclass' method is called and not the parent's. This follows from the rules for looking up attributes that you saw in the previous section.

We can use the same idea to understand overriding methods.

Let's return to our idea of making Cats, Dogs, and other pets generate a string for their "mood" differently.

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

Now let's make two subclasses, Dog and Cat. Dogs are always happy unless they are bored *and* hungry. Cats, on the other hand, are happy only if they are fed and if their boredom level is in a narrow range and, even then, only with probability 1/2.

.. activecode:: inheritance_override
    :nocanvas:
    :include: inheritance_pet_class

    class Cat(Pet):
        sounds = ['Meow']

        def mood(self):
            if self.hunger > self.hunger_threshold:
                return "hungry"
            if self.boredom <2:
                return "grumpy; leave me alone"
            elif self.boredom > self.boredom_threshold:
                return "bored"
            elif randrange(2) == 0:
                return "randomly annoyed"
            else:
                return "happy"

    class Dog(Pet):
        sounds = ['Woof', 'Ruff']

        def mood(self):
            if (self.hunger > self.hunger_threshold) and (self.boredom > self.boredom_threshold):
                return "bored and hungry"
            else:
                return "happy"

    c1 = Cat("Fluffy")
    d1 = Dog("Astro")

    c1.boredom = 1
    print(c1.mood())
    c1.boredom = 3
    for i in range(10):
        print(c1.mood())
    print(d1.mood())
