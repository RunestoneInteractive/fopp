..  Copyright (C)  Lauren Murphy, Jaclyn Cohen, Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Chapter Assessment
==================

.. activecode:: ee_inheritance_01
   :tags: Inheritance/inheritVarsAndMethods.rst
   :practice: T
   :autograde: unittest
   :topics: Inheritance/inheritVarsAndMethods

   The class, ``Pokemon``, is provided below and describes a Pokemon and its leveling and evolving characteristics. An instance of the class is one pokemon that you create.
   
   ``Grass_Pokemon`` is a subclass that inherits from ``Pokemon`` but changes some aspects, for instance, the boost values are different.
   
   For the subclass ``Grass_Pokemon``, add another method called ``action`` that returns the string ``"[name of pokemon] knows a lot of different moves!"``. Create an instance of this class with the ``name`` as ``"Belle"``. Assign this instance to the variable ``p1``.
   ~~~~
   class Pokemon(object):
       attack = 12
       defense = 10
       health = 15
       p_type = "Normal"
    
       def __init__(self, name, level = 5):
           self.name = name
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
   :tags: Inheritance/inheritVarsAndMethods.rst, Inheritance/OverrideMethods.rst
   :practice: T
   :autograde: unittest
   :topics: Inheritance/OverrideMethods

   Modify the ``Grass_Pokemon`` subclass so that the attack strength for ``Grass_Pokemon`` instances does not change until they reach level 10. At level 10 and up, their attack strength should increase by the ``attack_boost`` amount when they are trained.
   
   To test, create an instance of the class with the name as ``"Bulby"``. Assign the instance to the variable ``p2``. Create another instance of the ``Grass_Pokemon`` class with the name set to ``"Pika"`` and assign that instance to the variable ``p3``. Then, use ``Grass_Pokemon`` methods to train the ``p3`` ``Grass_Pokemon`` instance until it reaches at least level 10.
   ~~~~
   class Pokemon(object):
       attack = 12
       defense = 10
       health = 15
       p_type = "Normal"
    
       def __init__(self, name, level = 5):
           self.name = name
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
       p_type = "Grass"
    
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
         self.assertEqual(p2.__str__(), "Pokemon name: Bulby, Type: Grass, Level: 5", "Testing that p2 is assigned to correct value.")
      def testOneB(self):
         self.assertTrue(p3.attack_up() >= 17, "Testing that attack value is assigned to correct value at level 10.")
      
   myTests().main()

.. activecode:: ee_inheritance_05
   :tags: Inheritance/inheritVarsAndMethods.rst
   :autograde: unittest
   
   Along with the ``Pokemon`` parent class, we have also provided several subclasses. Write another method in the parent class that will be inherited by the subclasses. Call it ``opponent``. It should return which type of pokemon the current type is weak and strong against, as a tuple.

   - **Grass** is weak against *Fire* and strong against *Water*
   - **Ghost** is weak against *Dark* and strong against *Psychic*
   - **Fire** is weak against *Water* and strong against *Grass*
   - **Flying** is weak against *Electric* and strong against *Fighting*
   
   For example, if the ``p_type`` of the subclass is ``'Grass'``, ``.opponent()`` should return the tuple ``('Fire', 'Water')``
   ~~~~
   class Pokemon():
       attack = 12
       defense = 10
       health = 15
       p_type = "Normal"
    
       def __init__(self, name,level = 5):
           self.name = name
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
       p_type = "Grass"
    
       def update(self):
           self.health_boost = 6
           self.attack_boost = 2
           self.defense_boost = 3
           self.evolve = 12
    
   class Ghost_Pokemon(Pokemon):
       p_type = "Ghost"
        
       def update(self):
           self.health_boost = 3
           self.attack_boost = 4
           self.defense_boost = 3
        
   class Fire_Pokemon(Pokemon):
       p_type = "Fire"

   class Flying_Pokemon(Pokemon):
       p_type = "Flying"
  
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


