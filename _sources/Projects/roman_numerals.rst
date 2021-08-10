..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.


:skipreading:`True`

.. qnum::
    :prefix: DCCX-
    :start: 1

.. _roman_numerals:

🤔 Converting Roman Numerals
==============================


I took this picture on the island of `Gozo <https://en.wikipedia.org/wiki/Cittadella_(Gozo)>`_ at the citadel of the city of Vittorija. The island is a small island that is part of the country of Malta.

.. image:: Figures/The_Citadel.png

Malta has been conquered by just about everyone at one point or another in their history, including the Romans, who presumably gave us roman numerals, and example of which you can see above the arch in the picture.  But, there is a problem with this one.  Do you know what it is?

As I was standing there looking at it I said to my self "What kind of Roman numeral is MDCCCCIV !?  You are not supposed to have four of the same letter in a row.  That breaks the rules.  I'm pretty sure they were trying to represent the number 1904, The question is how would you correctly represent that if you followed the rules for roman numerals?

If you are not familiar with the rules let me tell you.

1.  Repeating a numeral up to three times represents the addition of the number.  For example the common III is 1+1+1 = 3
2.  Only I, X, C, and M can be repeated.  V, L, and D should not be as there is no reason to do so.  VV would simply be X and LL would be written as C
3. Writing numerals that decrease in values from left to right represents addition. For example MC represents 1000 + 100  = 1100 and XVI represents 10 + 5 + 1 or 16.
4. To write a number that would otherwise take repeating of a numeral 4 or more times there is a negation rule.  Writing a smaller numeral to the left of a larger numeral causes the sign of then number on the left to be negative. for example IV is -1 + 5 = 4.  Or MCMXIV is 1000 - 100 + 1000 + 10 - 1 + 5 or 1914.

Knowing all of that you can now re-write 1904 in a proper way.

.. fillintheblank:: act_rom1
    :casei:

    The correct roman numeral for 1904 is |blank| it is not MDCCCCIV.

    - :^MCMIV$: Is the correct answer
      :x: Make sure you review the rules I gave you.

.. dragndrop:: act_rom2
    :feedback: Make sure you follow all the rules.
    :match_1: MCD|||1400
    :match_2: MCMXCVIII|||1998
    :match_3: MCMXCIX|||1999
    :match_4: MMDXLIX|||2549
    :match_5: MMCCCXLV|||2345

    Match the roman numerals to the correct arabic numbers

Converting Roman to Arabic
--------------------------

Now that you are an expert in converting roman numerals to numbers its time to save yourself the trouble and write a program that does it for you. Here's an outline of what you should do.

1.  Ask the user to enter a roman numeral
2.  Validate the number to make sure it follows all the rules.  The number in the picture should cause you to print an error message.
3.  If the roman numeral is valid then you should convert it to its Arabic equivalent.
4.  Print out the roman numeral and its Arabic equivalent.

Hint:  You will want to start by using a dictionary to map each single character roman numeral to the correct Arabic number.

.. activecode:: act_rom3

    # Your code here


Converting Arabic To Roman
--------------------------

Can you write a program to go the opposite direction?  Given an Arabic number can you convert it to a roman numeral?  This program uses a special kind of dictionary that preserves the order so that if you iterate over the keys you know you are going to get them in the same order you created them.  (This is the default behavior for dictionaries in Python 3.6 and later, but not for our browser Python)

.. activecode:: act_rom_c1

    from collections import OrderedDict

    roman = OrderedDict([
    (1000, "M"),
    ( 900, "CM"),
    ( 500, "D"),
    ( 400, "CD"),
    ( 100, "C"),
    # Fill in the missing entries
    (   1, "I"),
    ])

    # The rest of your code here

.. shortanswer:: act_rom_ref1

    Can you explain why the dictionary used for this part uses the keys and values it does?  Why does it need to be ordered?  Why does this dictionary have more entries in it than the dictionary you used for part 1?


**Super Challenge:**

1.  Write a program that converts an incorrectly repeated number like CCCC into the proper form of CD
2.  Write a program that converts a correctly negated roman numeral into a non-negated incorrect equivalent.  For example IV becomes IIII
3.  If you can do the first two parts then you are ready to do addition of roman numerals WITHOUT converting them to Arabic first!  This one might take some extra research beyond what we have covered in class up to this point.

To add two roman numerals follow these steps:

1. Convert any negated prefixes to additive suffixes. So, for example, IX would be rewritten to VIIII.
2. Concatenate the two strings you want to add.
3. Sort the letters, large to small. (research required)

If you've made it this far you have *an* answer but its not the simplest answer. Keep going.

4. Do internal sums (e.g., replace "IIIII" with "V")
5. Convert back to subtractive prefixes. (e.g. replace "XIIII" with "XIV")

.. activecode:: act_rom_c2

    # Your code here


**Post Project Questions**

.. poll:: LearningZone_11a
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_11a
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_11a
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_11a
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...
