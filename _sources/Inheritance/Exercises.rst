..  Copyright (C)  Paul Resnick.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

:skipreading:`True`

Exercises
=========

For exercises, you can expand the Tamagotchi game even further. Try these out.

Here's *all* the code we just saw for our new and improved game, with a few additions. You can run this and play the game again.

#.

    .. tabbed:: q1

        .. tab:: Question

           .. actex:: tamagotchi_exercises
              :nocanvas:

              #. Change the above code to allow you to adopt a Tiger pet (that you're about to create). HINT: look at the ``whichtype`` function, and think about what's happening in the code for that function.

              #. Now, modify the code to define a new class, ``Tiger``. The ``Tiger`` class should inherit from the ``Cat`` class, but its default meow count should be ``5``, not ``3``, and it should have an extra instance method, ``roar``, that prints out the string ``ROOOOOAR!``. 

              #. Next, modify the code so that when the ``hi`` method is called for the ``Tiger`` class, the ``roar`` method is called. HINT: You'll have to call one instance method inside another, and you'll have to redefine a method for the ``Tiger`` class. See the **overriding methods** section. 

              #. Now, modify the code to define another new class, ``Retriever``. This class should inherit from ``Lab``. It should be exactly like ``Lab``, except instead of printing just ``I found the tennis ball!`` when the ``fetch`` method is called, it should say ``I found the tennis ball! I can fetch anything!``.

              #. Add your own new pets and modifications as you like -- remember, to use them in the game, you'll also have to alter the ``whichtype`` function so they can be used in game play. Otherwise, you'll have different classes that may work just fine, but you won't see the effects in the game, since the code that actually makes the game play is found in the second half of the provided code (look for the ``while`` loop!).
              ~~~~
              from random import randrange

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

              class Dog(Pet):
                  # in the Dog class, Dog pets should express their hunger and boredom differently than generic Pets
                  def mood(self):
                      if self.hunger <= self.hunger_threshold and self.boredom <= self.boredom_threshold:
                          return "happy, arf! Happy"
                      elif self.hunger > self.hunger_threshold:
                          return "hungry already, arrrf"
                      else:
                          return "bored, so you should play with me"

              class Cat(Pet):
                  # in the Cat class, cats express their hunger and boredom a little differently, too. They also have an extra instance, variable meow_count.
                  def __init__(self, name="Fluffy", meow_count=3):
                      Pet.__init__(self, name)
                      self.meow_count = meow_count

                  def hi(self):
                      for i in range(self.meow_count):
                          print(self.sounds[randrange(len(self.sounds))])
                      self.reduce_boredom()

                  def mood(self):
                      if self.hunger <= self.hunger_threshold and self.boredom <= self.boredom_threshold:
                          return "happy, I suppose"
                      elif self.hunger > self.hunger_threshold:
                          return "mmmm...hungry"
                      else:
                          return "a bit bored"

              class Lab(Dog):
                  def fetch(self):
                      return "I found the tennis ball!"

                  def hi(self):
                      print(self.sounds[randrange(len(self.sounds))] + self.fetch())

              class Poodle(Dog):
                  def dance(self):
                      return "Dancin' in circles like poodles do."

                  def hi(self):
                      print(self.dance())
                      Dog.hi(self)

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


              def whichone(petlist, name):
                  for pet in petlist:
                      if pet.name == name:
                          return pet
                  return None # no pet matched

              pet_types = {'dog': Dog, 'lab': Lab, 'poodle': Poodle, 'cat': Cat, 'bird': Bird}
              def whichtype(adopt_type="general pet"):
                  return pet_types.get(adopt_type.lower(), Pet)

              def play():
                  animals = []

                  option = ""
                  base_prompt = """
                      Quit
                      Adopt <petname_with_no_spaces> <adopt_type - choose dog, cat, lab, poodle, or another unknown pet type>
                      Greet <petname>
                      Teach <petname> <word>
                      Feed <petname>

                      Choice: """
                  feedback = ""
                  while True:
                      action = input(feedback + "\n" + base_prompt)
                      feedback = ""
                      words = action.split()
                      if len(words) > 0:
                          command = words[0]
                      else:
                          command = None
                      if command == "Quit":
                          print("Exiting...")
                          return
                      elif command == "Adopt" and len(words) > 1:
                          if whichone(animals, words[1]):
                              feedback += "You already have a pet with that name\n"
                          else:
                              # figure out which class it should be
                              if len(words) > 2:
                                  Cl = whichtype(words[2])
                              else:
                                  Cl = Pet
                              # Make an instance of that class and append it
                              animals.append(Cl(words[1]))
                      elif command == "Greet" and len(words) > 1:
                          pet = whichone(animals, words[1])
                          if not pet:
                              feedback += "I didn't recognize that pet name. Please try again.\n"
                              print()
                          else:
                              pet.hi()
                      elif command == "Teach" and len(words) > 2:
                          pet = whichone(animals, words[1])
                          if not pet:
                              feedback += "I didn't recognize that pet name. Please try again."
                          else:
                              pet.teach(words[2])
                      elif command == "Feed" and len(words) > 1:
                          pet = whichone(animals, words[1])
                          if not pet:
                              feedback += "I didn't recognize that pet name. Please try again."
                          else:
                              pet.feed()
                      else:
                          feedback+= "I didn't understand that. Please try again."

                      for pet in animals:
                          pet.clock_tick()
                          feedback += "\n" + pet.__str__()

              import sys
              sys.setExecutionLimit(60000)
              play()


Contributed Exercises
~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    {% for q in questions: %}
        <div class='oneq full-width'>
            {{ q['htmlsrc']|safe }}
        </div>
    {% endfor %}
