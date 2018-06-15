..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: inheritance-5-
   :start: 1

Tamagotchi Revisited
====================

Using what we know about class inheritance, we can make a new version of the Tamagotchi game, where you can adopt 
different types of pets that are slightly different from one another.

And now we can play the Tamagotchi game with some small changes, such that we can adopt different types of pets.

.. activecode:: ac20_5_1
    :nocanvas:

    import sys
    sys.setExecutionLimit(60000)
    from random import randrange

    class Pet(object):
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
            return state

        def hi(self):
            print(self.sounds[randrange(len(self.sounds))])
            self.update_boredom()

        def teach(self, word):
            self.sounds.append(word)
            self.update_boredom()

        def feed(self):
            self.update_hunger()

        def update_hunger(self):
            self.hunger = max(0, self.hunger - self.hunger_decrement)

        def update_boredom(self):
            self.boredom = max(0, self.boredom - self.boredom_decrement)

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

        def feed(self):
            Pet.feed(self)
            print("Arf! Thanks!")

    class Bird(Pet):
        sounds = ["chirp"]
        def __init__(self, name="Kitty", chirp_number=2):
            Pet.__init__(self, name) # call the parent class's constructor
            # basically, call the SUPER -- the parent version -- of the constructor, with all the parameters that it needs.
            self.chirp_number = chirp_number # now, also assign the new instance variable

        def hi(self):
            for i in range(self.chirp_number):
                print(self.sounds[randrange(len(self.sounds))])
            self.update_boredom()

    class Lab(Dog):
        def fetch(self):
            return "I found the tennis ball!"

        def hi(self):
            print(self.fetch())
            print(self.sounds[randrange(len(self.sounds))])

    class Poodle(Dog):
        def dance(self):
            return "Dancin' in circles like poodles do."

        def hi(self):
            print(self.dance())
            Dog.hi(self)

    def process_command(command, pets, pet_types = {'dog': Dog, 'lab': Lab, 'poodle': Poodle, 'cat': Cat, 'bird': Bird}):
        words = command.split()
        if len(words) > 0:
            command = words[0]
        else:
            command = None
        if command == "Quit":
            print("Exiting...")
            return None
        elif command == "Adopt" and len(words) > 1:
            name = words[1]
            if name in pets:
                return "You already have a pet with that name"
            else:
                try:
                    pet_type_name = words[2].lower()
                    pet_class = pet_types[pet_type_name]
                    pets[name] = pet_class(name)
                    return "Adopted {} {}.".format(pet_type_name, name)
                except Exception:
                    pets[name] = Pet(name)
                    return "Adopted generic Pet {}.".format(name)
        elif command == "Greet" and len(words) > 1:
            name = words[1]
            try:
                pets[name].hi()
                return "Greeted {}.".format(name)
            except:
                return "I didn't recognize that pet name. Please try again."
        elif command == "Teach" and len(words) > 2:
            name = words[1]
            word = words[2]
            if name not in pets:
                return "I didn't recognize that pet name. Please try again."
            else:
                pet = pets[name]
                pet.teach(word)
                return "Taught {} to {}.".format(word, name)
        elif command == "Feed" and len(words) > 1:
            name = words[1]
            try:
                pets[name].feed()
                return "Fed {}.".format(name)
            except:
                return "I didn't recognize that pet name. Please try again."
        else:
            return "I didn't understand that. Please try again."

    def advance_clock(pets):
        for pet in pets.values():
            pet.clock_tick()

    def status_string(pets):
        return "\n".join([p.__str__() for p in pets.values()])

    def play():
        animals = {}
        base_prompt = """
            Quit
            Adopt <petname_with_no_spaces> <pet_type - choose dog, cat, lab, poodle, bird, or another unknown pet type>
            Greet <petname>
            Teach <petname> <word>
            Feed <petname>

        Command: """
        feedback = ""
        done = False
        while not done:
            advance_clock(animals)
            prompt = '{}\n{}\n{}'.format(feedback,
                                         status_string(animals),
                                         base_prompt)
            cmd = input(prompt)
            feedback = process_command(cmd, animals)
            if not feedback:
                done = True

    play()