..  Copyright (C)  Google LLC, Runestone Interactive LLC
    This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.


:skipreading:`True`

.. _encryption:

🤔 Substitution Cipher
========================

.. qnum::
    :prefix: encrypt-
    :start: 1

Perhaps one of the earliest uses of computers was in the area of encrypting and decrypting secret messages.  the image below is a picture I took in the Deutsches Museum in Germany.  It is a picture of the german enigma machine.  The operator of this machine would type in a message using the keyboard, and the machine would output the encrypted version of the letter.  For example you might type the letter p but the machine would output the letter b.

.. image:: Figures/enigma.jpg
    :height: 200
    :align: center

The enigma machine was used by the Germans during World War II to encrypt orders for the movements of troops and german U-boats.  Alan Turing (one of the fathers of computer science) worked in England and built the Bombe, one of the first computers that decrypted the messages encrypted by the Enigma.  The efforts of Turing and his co-workers helped bring the war to an end and saved many thousands of lives.

.. fillintheblank:: act_enc_fb

    Here is a secret message ``clgubaebpxf`` we call this the ciphertext. Can you decode it using paper and pencil and enter the decrypted message which we call the plaintext in the following space:

    - :pythonrocks: Is the correct answer
      :x: Try again, here is a hint:  b == o

The enigma encrypted messages using a much more sophisticated code than the previous question.  The secret message I gave you uses a simple substitution cipher.  I have given you one hint but if you still don't have it This matching question will reveal a few more hints that should help you solve it.

The letters on the left correspond to the letters in the ciphertext and the letters on the right correspond to the plaintext.  Drag the letters on the left to their corresponding letters on the right.

.. dragndrop:: act_enc_match1
    :match_1: b|||o
    :match_2: c|||p
    :match_3: l|||y
    :match_4: g|||t


In this lab we will explore some simple encryption algorithms to both encrypt and decrypt messages.  This lab is fun to work with if you have a partner so that one of you can encrypt the message and the other can decrypt the message.  Both of you will have to get your program working in order to communicate effectively!

Caesar Cipher
-------------

A cipher is a secret or disguised way of writing, and a caesar cipher is one of the oldest ciphers and is attributed to Julius Caesar who used it in private correspondence.  The caesar cipher simply shifts each character by a fixed number of positions down the alphabet.  For example a shift of 5 turns A into F  If the shift takes you past then end of the alphabet for example a shift of 5 on the letter Y goes to Z, then A, B, C, D for a result of D.  If you are thinking of modulo arithmetic then you are definitely on to something!  A shift of 13 is very useful and was widely used in the early days of the internet to encrypt unsavory jokes that were posted to the alt.humor.funny newsgroups.  The Caesar cipher is often represented by two dials where you can turn the inner dial to match up the letters any way you would like.

.. image:: Figures/caesar_wheel.jpg

.. activecode:: act_rot13_ac_1

    Write a program that will encrypt the string referenced by the variable plaintext using the caesar cipher with a shift of 13.  Store the result in ciphertext.
    ~~~~
    plaintext = 'thequickbrownfoxjumpsoverthelazydog'
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertTrue('ciphertext' in self.getEditorText(), "you need a ciphertext variable")
            self.assertEqual(ciphertext, 'gurdhvpxoebjasbkwhzcfbiregurynmlqbt')

    MyTests().main()


The problem with the caesar cipher is that there are only 25 possible rotations.  If you are a clever spy it won't take you very long to write a python program that can try all possible combinations to unlock the plaintext message.  In fact, here is a new cipher text for you to unscramble.  I'll admit to you that it is using a caesar cipher but I won't tell you the shift.  Can you find the plaintext message and figure out how much the original message was shifted?  The art of breaking codes is called cryptology.

.. activecode:: act_rot13_ac_2

    Write a program that will figure out
    ~~~~
    ciphertext = 'dzeevjfkrlezkvuwffksrcctcls'


.. fillintheblank:: act_shift_fb

    What was the original shift?

    - :17: Is the correct answer!
      :9: Close, 9 is the amount you had to shift to get it back but its not symmetric.  Think about reversing the shift...
      :x: Try again, You should print out the amount you are rotating along with the string.  You'll need to find one that makes sense.


As you have just discovered, the Caesar cipher is not very secure.  Even in ancient times I'm sure with enough slave scientists working on the problem in parallel they could decrypt just about any message.  We might call the number of characters we shift the **key**.  As we have noted, there are only 26 possible keys!  However, if we agree that we can mix up the alphabet into any with the mixed up alphabet acting as the key then we have a much larger set to choose from and it becomes much much harder to break.  How many different arrangements of the letters in the alphabet are there? If you said 403,291,461,126,605,635,584,000,000 Then you are correct!  That is there are '26 factorial' possible arrangements for the alphabet.  Think of it like this: You have 26 letters to choose from as the first letter.  Then you have 25 letters to choose as the second and 24 letters for the third etc.  So, that is 26*25*24*23...*1  You can even write a loop and have python calculate that if you want.

Scrambled Key
-------------

:math:`403 e 10^{24}` is a pretty very big number,  if you could try 100 different arrangements a second how long would it take to try them all?  Moving to this system will make our encryption algorithm a bit more difficult.  But its not too hard if you think of it this way:  Suppose we have our plaintext alphabet as 'abcdefghijklmnopqrstuvwxyz'  For our caesar cipher instead of doing modulo arithmetic suppose we created a second version of the alphabet but rotated by thirteen 'nopqrstuvwxyzabcdefghijklm'  Lets put them right on top of each other so we can see the correspondence::

    abcdefghijklmnopqrstuvwxyz
    nopqrstuvwxyzabcdefghijklm

Now to encrypt our message we just need to find the letter in the top row and replace it by the letter on the bottom row.  This strategy will work for any possible arrangement of the alphabet.  Another benefit of this strategy is that we could also include spaces or even punctuation.  As long as our 'alphabet' and our key are the same length.

.. activecode:: act_scramble_ac_3

    Write a program that will encrypt the plaintext.  Store your encrypted message in the variable ciphertext.
    ~~~~
    alphabet = 'abcdefghijklmnopqrstuvwxyz '
    key = 'mwgp bdzxrylacsokjfhtnueivq'
    plaintext = 'of shoes and ships and sealing wax of cabbages and kings'
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(ciphertext, 'sbqfzs fqmcpqfzxofqmcpqf mlxcdqumeqsbqgmwwmd fqmcpqyxcdf')

    MyTests().main()


.. activecode:: act_scramble_ac_4

    Now write a program program that will decrypt the ciphertext.  Store your decrypted message in the variable plaintext.
    ~~~~
    alphabet = 'abcdefghijklmnopqrstuvwxyz '
    key = 'mwgp bdzxrylacsokjfhtnueivq'
    ciphertext = 'hz qftcqumfqfzxcxcdqscqhz qf mqfzxcxcdquxhzqmllqzxfqaxdzh'
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(plaintext, 'the sun was shining on the sea shining with all his might')

    MyTests().main()

Now test yourself a bit further.

.. activecode:: act_scramble_ac_5

    Write a program that asks the user to enter a key (scrambled alphabet) and a message to encrypt or decrypt.  If you work with a partner one can work on decrypting and the other can work on encrypting.  Your program should output either the encrypted or decrypted message.  If you are the encrypter then email the encrypted message to your partner for them to decrypt.  If you are working alone then store the decrypted message in a variable to decrypt.
    ~~~~
    # your code here

Password to Key (challenge)
---------------------------

Finally, only a few truly amazing people are going to remember a random ording of 26 letters.  We would like to have a way to use a password of around 7 characters.  How can we use a password to scramble our alphabet into some order?  Its not as bad as you might think at first.  Do the following:

1.  Remove any duplicate letters from the password.
2.  Now split the alphabet into two halves  The letters up to and including the last letter in the password and the rest of the alphabet.
3.  Remove any letters in your password from the the two halves of the alphabet.
4. The key is the concatenation of the password (without duplicate letters) followed by the second part of the split alphabet followed by the first part of the alphabet.

.. activecode:: act_pw_ac_1

    implement the algorithm outlined above assuming that the user entered 'password' for their password.  Store the key in a variable called 'key'.  For testing purposes we will assume that no spaces or punctuation are included in the alphabet or the password.
    ~~~~
    password = 'password'
    # your code here
    ====
    from unittest.gui import TestCaseGui

    class MyTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(key, 'paswordefghijklmnqtuvxyzbc')

    MyTests().main()


Finally, work with your partner so that you can ask for a password and a message, using the password, construct the key, encrypt/decrypt the message and then print out the result.

.. activecode:: act_pw_ac_2

    # your code here



**Post Project Questions**

.. poll:: LearningZone_9a
    :option_1: Comfort Zone
    :option_2: Learning Zone
    :option_3: Panic Zone

    During this project I was primarily in my...

.. poll:: Time_9a
    :option_1: Very little time
    :option_2: A reasonable amount of time
    :option_3: More time than is reasonable

    Completing this project took...

.. poll:: TaskValue_9a
    :option_1: Don't seem worth learning
    :option_2: May be worth learning
    :option_3: Are definitely worth learning

    Based on my own interests and needs, the things taught in this project...

.. poll:: Expectancy_9a
    :option_1: Definitely within reach
    :option_2: Within reach if I try my hardest
    :option_3: Out of reach no matter how hard I try

    For me to master the things taught in this project feels...
