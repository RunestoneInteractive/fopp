..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: dictionaries-8-
   :start: 1

Dictionary Exercises
====================

.. activecode:: ac10_8_1
   :language: python
   :autograde: unittest

   **1.** At the halfway point during the Rio Olympics, the United States had 70 medals, Great Britain had 38 medals, China had 45 medals, Russia had 30 medals, and Germany had 17 medals. Create a dictionary assigned to the variable ``medal_count`` with the country names as the keys and the number of medals the country had as each key's value.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(medal_count.items()), sorted([('China', 45), ('Germany', 17), ('Great Britain', 38), ('Russia', 30), ('United States', 70)]), "Testing that the medal_count dictionary has the correct key-value pairs")

   myTests().main()


.. activecode:: ac10_8_2
   :language: python
   :autograde: unittest

   **1.1** Create a dictionary that keeps track of the USA's Olympic medal count. Each key of the dictionary should be the type of medal (gold, silver, or bronze) and each key's value should be the number of that type of medal the USA's won. Currently, the USA has 33 gold medals, 17 silver, and 12 bronze. Create a dictionary saved in the variable ``medals`` that reflects this information.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(medals.items()), sorted([("gold", 33), ("silver", 17), ("bronze", 12)]), "Testing that medals is correct.")

   myTests().main()


.. activecode:: ac10_8_3
   :language: python
   :autograde: unittest

   **1.2** You are keeping track of olympic medals for Italy in the 2016 Rio Summer Olympics! At the moment, Italy has 7 gold medals, 8 silver metals, and 6 bronze medals. Create a dictionary called ``olympics`` where the keys are the types of medals, and the values are the number of that type of medals that Italy has won so far.
   ~~~~

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(olympics.items()), sorted([('gold', 7), ('silver', 8), ('bronze', 6)]), "Testing that olympics was created correctly.")     

   myTests().main()


.. activecode:: ac10_8_4
   :language: python
   :autograde: unittest

   **2.** Given the dictionary ``swimmers``, add an additional key-value pair to the dictionary with ``"Phelps"`` as the key and the integer ``23`` as the value. Do not rewrite the entire dictionary.
   ~~~~

   swimmers = {'Manuel':4, 'Lochte':12, 'Adrian':7, 'Ledecky':5, 'Dirado':4}
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testTwo(self):
         self.assertEqual(sorted(swimmers.items()), sorted([('Adrian', 7), ('Dirado', 4), ('Manuel',4), ('Ledecky', 5), ('Lochte', 12), ('Phelps', 23)]), "Testing that swimmers is assigned to correct value.")

   myTests().main()


.. activecode:: ac10_8_5
   :language: python
   :autograde: unittest

   **2.1** Every four years, the summer Olympics are held in a different country. Add a key-value pair to the dictionary ``places`` that reflects that the 2016 Olympics were held in Brazil. Do not rewrite the entire dictionary to do this!
   ~~~~

   places = {"Australia":2000, "Greece":2004, "China":2008, "England":2012}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(places.items()), sorted([("Australia", 2000), ("Greece", 2004), ("China", 2008), ("England", 2012), ("Brazil", 2016)]), "Testing that places has been updated correctly.")

   myTests().main()


.. activecode:: ac10_8_6
   :language: python
   :autograde: unittest

   **2.2** Add the string "hockey" as a key to the dictionary ``sports_periods`` and assign it the value of 3. Do not rewrite the entire dictionary.
   ~~~~

   sports_periods = {'baseball': 9, 'basketball': 4, 'soccer': 4, 'cricket': 2}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(sports_periods.items()), sorted([('baseball', 9), ("basketball", 4), ('soccer', 4), ('cricket', 2), ('hockey', 3)]), "Testing that sports_period was created correctly.")


   myTests().main()


.. activecode:: ac10_8_7
   :language: python
   :autograde: unittest

   **3.** Update the value for "Phelps" in the dictionary ``swimmers`` to include his medals from the Rio Olympics by adding 5 to the current value (Phelps will now have 28 total medals). Do not rewrite the dictionary.
   ~~~~

   swimmers = {'Manuel':4, 'Lochte':12, 'Adrian':7, 'Ledecky':5, 'Dirado':4, 'Phelps':23}
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testThree(self):
         self.assertEqual(sorted(swimmers.items()), sorted([('Adrian', 7), ('Dirado', 4), ('Ledecky', 5), ('Lochte', 12), ('Phelps', 28), ('Manuel',4)]), "Testing that swimmers is assigned to correct values.")

   myTests().main()


.. activecode:: ac10_8_8
   :language: python
   :autograde: unittest

   **3.1** The dictionary ``golds`` contains information about how many gold medals each country won in the 2016 Olympics. But today, Spain won 2 more gold medals. Update ``golds`` to reflect this information.
   ~~~~

   golds = {"Italy": 12, "USA": 33, "Brazil": 15, "China": 27, "Spain": 19, "Canada": 22, "Argentina": 8, "England": 29}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(golds.items()), sorted([("Italy", 12), ("USA", 33), ("Brazil", 15), ("China", 27), ("Spain", 21), ("Canada", 22), ("Argentina", 8), ("England", 29)]), "Testing that golds has been updated correctly.")

   myTests().main()


.. activecode:: ac10_8_9
   :language: python
   :autograde: unittest

   **4.** Create a list of the countries that are in the dictionary ``golds``, and assign that list to the variable name ``countries``. Do not hard code this.
   ~~~~

   golds = {"Italy": 12, "USA": 33, "Brazil": 15, "China": 27, "Spain": 19, "Canada": 22, "Argentina": 8, "England": 29}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(countries), sorted(["Italy", "USA", "Brazil", "China", "Spain", "Canada", "Argentina", "England"]), "Testing that countries has been created correctly.")

   myTests().main()


.. activecode:: ac10_8_10
   :language: python
   :autograde: unittest

   **5.** We have a dictionary of the specific events that Italy has won medals in and the number of medals they have won for each event. Assign to the variable ``events`` a list of the keys from the dictionary ``medal_events``. Do not hard code this.
   ~~~~

   medal_events = {'Shooting': 7, 'Fencing': 4, 'Judo': 2, 'Swimming': 3, 'Diving': 2}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(sorted(events), sorted(['Shooting', 'Fencing', 'Judo', 'Swimming', "Diving"]), "Testing that events was created correctly")   

   myTests().main()


.. activecode:: ac10_8_11
   :language: python
   :autograde: unittest

   **6.** Provided is the dictionary, ``medal_count``, which lists countries and their respective medal count at the halfway point in the 2016 Rio Olympics. Using dictionary mechanics, assign the medal count value for ``"Belarus"`` to the variable ``belarus``. Do not hardcode this.
   ~~~~

   medal_count = {'United States': 70, 'Great Britain':38, 'China':45, 'Russia':30, 'Germany':17, 'Italy':22, 'France': 22, 'Japan':26, 'Australia':22, 'South Korea':14, 'Hungary':12, 'Netherlands':10, 'Spain':5, 'New Zealand':8, 'Canada':13, 'Kazakhstan':8, 'Colombia':4, 'Switzerland':5, 'Belgium':4, 'Thailand':4, 'Croatia':3, 'Iran':3, 'Jamaica':3, 'South Africa':7, 'Sweden':6, 'Denmark':7, 'North Korea':6, 'Kenya':4, 'Brazil':7, 'Belarus':4, 'Cuba':5, 'Poland':4, 'Romania':4, 'Slovenia':3, 'Argentina':2, 'Bahrain':2, 'Slovakia':2, 'Vietnam':2, 'Czech Republic':6, 'Uzbekistan':5}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testSix(self):
         self.assertEqual(belarus, 4, "Testing that belarus is assigned the correct value.")

   myTests().main()


.. activecode:: ac10_8_12
   :language: python
   :autograde: unittest

   **6.1** The dictionary ``total_golds`` contains the total number of gold medals that countries have won over the course of history. Use dictionary mechanics to find the number of golds Chile has won, and assign that number to the variable name ``chile_golds``. Do not hard code this!
   ~~~~

   total_golds = {"Italy": 114, "Germany": 782, "Pakistan": 10, "Sweden": 627, "USA": 2681, "Zimbabwe": 8, "Greece": 111, "Mongolia": 24, "Brazil": 108, "Croatia": 34, "Algeria": 15, "Switzerland": 323, "Yugoslavia": 87, "China": 526, "Egypt": 26, "Norway": 477, "Spain": 133, "Australia": 480, "Slovakia": 29, "Canada": 22, "New Zealand": 100, "Denmark": 180, "Chile": 13, "Argentina": 70, "Thailand": 24, "Cuba": 209, "Uganda": 7,  "England": 806, "Denmark": 180, "Ukraine": 122, "Bahamas": 12}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(chile_golds, 13, "Testing that chile_golds has been set correctly.")

   myTests().main()


.. activecode:: ac10_8_13
   :language: python
   :autograde: unittest

   **6.2** Provided is a dictionary called ``US_medals`` which has the first 70 metals that the United States has won in 2016, and in which category they have won it in. Using dictionary mechanics, assign the value of the key ``"Fencing"`` to a variable ``fencing_value``. Remember, do not hard code this.
   ~~~~

   US_medals = {"Swimming": 33, "Gymnastics": 6, "Track & Field": 6, "Tennis": 3, "Judo": 2, "Rowing": 2, "Shooting": 3, "Cycling - Road": 1, "Fencing": 4, "Diving": 2, "Archery": 2, "Cycling - Track": 1, "Equestrian": 2, "Golf": 1, "Weightlifting": 1}

   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testOne(self):
         self.assertEqual(fencing_value, US_medals.get("Fencing"), "Testing that fencing_value was set correctly.")        

   myTests().main()
