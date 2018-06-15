..  Copyright (C)  Lauren Murphy, Jaclyn Cohen, Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Extra Exercises
===============


.. activecode:: ee_inheritance_01
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: Inheritance/inheritVarsAndMethods
   :tags: Inheritance/inheritVarsAndMethods.rst

   **1.** The class, ``Pokemon``, is provided below and describes a Pokemon and its leveling and evolving characteristics. An instance of the class is one pokemon that you create. ``Grass_Pokemon`` is a subclass that inherits from ``Pokemon`` but changes some aspects, for instance, the boost values are different. For the subclass ``Grass_Pokemon``, add another method called ``action`` that returns the string "[name of pokemon] knows a lot of different moves!". Create an instance of this class with the name as "Belle". Assign this instance to the variable ``p1``.
   ~~~~

   class Pokemon(object):
       attack = 12
       defense = 10
       health = 15
    
       def __init__(self, name, level = 5):
           self.name = name
           self.p_type = "Normal"
           self.level = level
       
       def train(self):
           self.update()
           self.attack_up()
           self.defense_up()
           self.health_up()
           self.level = self.level + 1
           if self.level%self.evolve == 0:
               return self.level, "Evolved!"
           else:
               return self.level
    
       def attack_up(self):
           self.attack = self.attack + self.attack_boost
           return self.attack
    
       def defense_up(self):
           self.defense = self.defense + self.defense_boost
           return self.defense
    
       def health_up(self):
           self.health = self.health + self.health_boost
           return self.health

       def update(self):
           self.health_boost = 5
           self.attack_boost = 3
           self.defense_boost = 2
           self.evolve = 10
        
       def __str__(self):
           self.update()
           return "Pokemon name: {}, Type: {}, Level: {}".format(self.name, self.p_type, self.level)

   class Grass_Pokemon(Pokemon):
       attack = 15
       defense = 14
       health = 12
    
       def update(self):
           self.health_boost = 6
           self.attack_boost = 2
           self.defense_boost = 3
           self.evolve = 12
        
       def moves(self):
           self.p_moves = ["razor leaf", "synthesis", "petal dance"]


   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOneA(self):
         self.assertEqual(p1.action(), "Belle knows a lot of different moves!", "Testing that action method is correct and p1 assigned to correct value")
      
   myTests().main()


.. activecode:: ee_inheritance_02
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: Inheritance/OverrideMethods
   :tags: Inheritance/inheritVarsAndMethods.rst,Inheritance/OverrideMethods.rst

   **2.** The attack strength for grass Pokemon does not change until they reach level 10. At level 10 and up, their attack strength increases by the attack_boost amount when they level. Modify the ``Grass_Pokemon`` subclass of ``Pokemon`` to reflect this change. To test, create an instance of the class with the name as "Bulby". Assign the instance to the variable ``p2``. Then, use ``Grass_Pokemon`` methods to train a the ``p2`` Grass_Pokemon instance until it reaches level 10.
   ~~~~

   class Pokemon(object):
       attack = 12
       defense = 10
       health = 15
    
       def __init__(self, name, level = 5):
           self.name = name
           self.p_type = "Normal"
           self.level = level
       
       def train(self):
           self.update()
           self.attack_up()
           self.defense_up()
           self.health_up()
           self.level = self.level + 1
           if self.level%self.evolve == 0:
               return self.level, "Evolved!"
           else:
               return self.level
    
       def attack_up(self):
           self.attack = self.attack + self.attack_boost
           return self.attack
    
       def defense_up(self):
           self.defense = self.defense + self.defense_boost
           return self.defense
    
       def health_up(self):
           self.health = self.health + self.health_boost
           return self.health

       def update(self):
           self.health_boost = 5
           self.attack_boost = 3
           self.defense_boost = 2
           self.evolve = 10
        
       def __str__(self):
           return "Pokemon name: {}, Type: {}, Level: {}".format(self.name, self.p_type, self.level)

   class Grass_Pokemon(Pokemon):
       attack = 15
       defense = 14
       health = 12
    
       def update(self):
           self.health_boost = 6
           self.attack_boost = 2
           self.defense_boost = 3
           self.evolve = 12
           self.p_type = "Grass"
        
       def moves(self):
           self.p_moves = ["razor leaf", "synthesis", "petal dance"]
           

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOneA(self):
         self.assertEqual(p2.__str__(), "Pokemon name: Bulby, Type: Grass, Level: 10", "Testing that p2 is assigned to correct value.")
      def testOneB(self):
         self.assertTrue(p2.attack_up() >= 17, "Testing that attack value is assigned to correct value at level 10.")
      
   myTests().main()


.. activecode:: ee_inheritance_05
   :language: python
   :autograde: unittest
   :chatcodes:
   :practice: T
   :topics: Inheritance/inheritVarsAndMethods
   :tags: Inheritance/inheritVarsAndMethods.rst

   **3.** Along with the Pokemon parent class, we have also provided several subclasses. Write another method in the parent class that will be inherited by the subclasses called ``opponent`` that will show which type of pokemon the current type is weak against and strong against. It should return a tuple whose first item will be the value of weak and its second item will be the value of strong. For instance, if the p_type of the subclass is grass, fire will be assigned to the variable ``weak`` and water will be assigned to the variable ``strong``. Grass is weak against fire, but strong against water. Ghost is weak against dark but strong against psychic. Fire is weak against water but strong against grass. Finally, flying is weak against electric but strong against fighting.
   ~~~~

   class Pokemon():
       attack = 12
       defense = 10
       health = 15
    
       def __init__(self, name,level = 5):
           self.name = name
           self.p_type = "Normal"
           self.level = level
           self.weak = "Normal"
           self.strong = "Normal"
    
       def train(self):
           self.update()
           self.attack_up()
           self.defense_up()
           self.health_up()
           self.level = self.level + 1
           if self.level%self.evolve == 0:
               return self.level, "Evolved!"
           else:
               return self.level
    
       def attack_up(self):
           self.attack = self.attack + self.attack_boost
           return self.attack
    
       def defense_up(self):
           self.defense = self.defense + self.defense_boost
           return self.defense
    
       def health_up(self):
           self.health = self.health + self.health_boost
           return self.health

       def update(self):
           self.health_boost = 5
           self.attack_boost = 3
           self.defense_boost = 2
           self.evolve = 10
        
       def __str__(self):
           self.update()
           return "Pokemon name: {}, Type: {}, Level: {}".format(self.name, self.p_type, self.level)

       
    
   class Grass_Pokemon(Pokemon):
       attack = 15
       defense = 14
       health = 12
    
       def update(self):
           self.health_boost = 6
           self.attack_boost = 2
           self.defense_boost = 3
           self.evolve = 12
           self.p_type = "Grass"
    
   class Ghost_Pokemon(Pokemon):
        
       def update(self):
           self.health_boost = 3
           self.attack_boost = 4
           self.defense_boost = 3
           self.p_type = "Ghost"
        
   class Fire_Pokemon(Pokemon):
        
       def update(self):
           Pokemon.update(self)
           self.p_type = "Fire"

   class Flying_Pokemon(Pokemon):
       def update(self):
           Pokemon.update(self)
           self.p_type = "Flying"
  
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOneA(self):
         self.assertEqual(Grass_Pokemon("Buggy").opponent(), ("Fire", "Water"), "Testing that Grass weak and strong are assigned to correct values.")
      def testOneB(self):
         self.assertEqual(Fire_Pokemon("Buggy").opponent(), ("Water", "Grass"), "Testing that Fire weak and strong are assigned to correct values.")
      def testOneC(self):
         self.assertEqual(Ghost_Pokemon("Buggy").opponent(), ("Dark", "Psychic"), "Testing that Ghost weak and strong are assigned to correct values.")
      def testOneD(self):
         self.assertEqual(Flying_Pokemon("Buggy").opponent(), ("Electric", "Fighting"), "Testing that Flying weak and strong are assigned to correct values.")

   myTests().main()


