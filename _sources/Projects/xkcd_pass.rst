..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.

:skipreading:`True`

.. _xkcd_pass:

🤔 Generating a Password XKCD Style
=====================================

Nobody likes to change their password, and its always hard trying to come up with a new password.  In this lab we'll solve that problem using a solution posed by the popular XKCD comic.

.. image:: https://imgs.xkcd.com/comics/password_strength.png
    :alt: XKCD Password

Lets start by creating a traditional random password composed of numbers, letters, and a few special characters.

.. activecode:: act_xkcdp_1

    letters = "abcdefghijklmnopqrstuvwxyz"
    caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    numbers = "1234567890"

    # Make an 8 letter password by combining characters from the three strings


Next you follow the XKCD model of selecting four random words and concatenating them together to for our password.

.. activecode:: act_xkcdp_2

    nouns = ['tissue', 'processor', 'headquarters', 'favorite', 'cure', 'ideology', 'funeral', 'engine', 'isolation', 'perception', 'hat', 'mountain', 'session', 'case', 'legislature', 'consent', 'spread', 'shot', 'direction', 'data', 'tragedy', 'illness', 'serving', 'mess', 'resistance', 'basis', 'kitchen', 'mine', 'temple', 'mass', 'dot', 'final', 'chair', 'picture', 'wish', 'transfer', 'profession', 'suggestion', 'purse', 'rabbit', 'disaster', 'evil', 'shorts', 'tip', 'patrol', 'fragment', 'assignment', 'view', 'bottle', 'acquisition', 'origin', 'lesson', 'Bible', 'act', 'constitution', 'standard', 'status', 'burden', 'language', 'voice', 'border', 'statement', 'personnel', 'shape', 'computer', 'quality', 'colony', 'traveler', 'merit', 'puzzle', 'poll', 'wind', 'shelter', 'limit', 'talent']
    verbs = ['represent', 'warm', 'whisper', 'consider', 'rub', 'march', 'claim', 'fill', 'present', 'complain', 'offer', 'provoke', 'yield', 'shock', 'purchase', 'seek', 'operate', 'persist', 'inspire', 'conclude', 'transform', 'add', 'boast', 'gather', 'manage', 'escape', 'handle', 'transfer', 'tune', 'born', 'decrease', 'impose', 'adopt', 'suppose', 'sell', 'disappear', 'join', 'rock', 'appreciate', 'express', 'finish', 'modify', 'keep', 'invest', 'weaken', 'speed', 'discuss', 'facilitate', 'question', 'date', 'coordinate', 'repeat', 'relate', 'advise', 'arrest', 'appeal', 'clean', 'disagree', 'guard', 'gaze', 'spend', 'owe', 'wait', 'unfold', 'back', 'waste', 'delay', 'store', 'balance', 'compete', 'bake', 'employ', 'dip', 'frown', 'insert']
    adjs = ['busy', 'closer', 'national', 'pale', 'encouraging', 'historical', 'extreme', 'cruel', 'expensive', 'comfortable', 'steady', 'necessary', 'isolated', 'deep', 'bad', 'free', 'voluntary', 'informal', 'loud', 'key', 'extra', 'wise', 'improved', 'mad', 'willing', 'actual', 'OK', 'gray', 'little', 'religious', 'municipal', 'just', 'psychological', 'essential', 'perfect', 'intense', 'blue', 'following', 'Asian', 'shared', 'rare', 'developmental', 'uncomfortable', 'interesting', 'environmental', 'amazing', 'unhappy', 'horrible', 'philosophical', 'American']

    # Make a four word password by combining words from the list of nouns, verbs and adjs



Of course that does not make the IT department of most colleges and businesses happy.  They still want you to have at least one capital letter and a number in your password.  We'll learn more about this in a couple of chapters but it is easy to replace parts of a string with a different string using the replace method.  For example ``"pool".replace('o', 'e')`` gives us ``peel``  Once you have your final password you can replace some letters with number substitutions.  For example its common to replace the letter l with the number 1 or the letter e with the number 3 or the o with a 0.  You can get creative.  You can also easily capitalize a word using ``"myword".capitalize()`` Once you feel confident that you understand the code below you can use this activecode to make your password comply with standard procedures to include special characters.

.. activecode:: act_xkcd_3

    word = "pool"
    word = word.replace('o', 'e')
    print(word)
    word = word.capitalize()
    print(word)




**Challenge**

This last part goes beyond what you have covered in the book so far, but I'll give you the extra code you need. You will probably be able to figure out what it does and this is kind of a fun preview of things to come.

Lets suppose you DO have a 4 character password composed only of lower case letters.  How many guesses would it take you to guess the password?  You can actually write a program to create a four character string and compare it to the known password.  If we put this process inside a loop we can keep track and see how many guesses it takes us to find the matching password.

.. activecode:: act_xkcd_4

    import random
    import sys
    sys.setExecutionLimit(60000) # 60 seconds
    my_password = "abcd"
    guess_num = 0
    done = False
    while not done:

        guessed_pw = ""
        # your code here

        if guessed_pw == my_password:
            print("found it after ", guess_num, " tries")
            done = True


You will see that the number of guesses can vary pretty widely.  from less than 10,000 to over 500,000!  What happens if you increase the length to 5 characters?  Or what happens if you allow your four character password to include numbers or upper case letters?  all of these changes definitely increase the complexity of the password and therefore the number of tries.  Each of these changes increases the number of possible passwords.  Can you calculate the number of possible four letter passwords using just the 26 letters of the alphabet and 4 letters in the password?  How does that change if you allow 26 letters plus 10 digits?  Now what if you have an 8 character password?

.. activecode:: act_xkcd_5

My MacBook Pro averages around 16,300 guesses per second.  If you assume that you will on average have to try about 1/2 of the possible combinations, how long will it take to crack an 8 letter password with upper case letters, lower case letters, and 10 possible digits?


**Post Project Questions**

.. poll:: LearningZone_6
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_6
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_6
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_6
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...
