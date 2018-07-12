..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: buildP-3-
   :start: 1

👩‍💻 Code one section at a time
================================

As a reminder, this is our prompt:

*Build a program that replicates a physical dictionary that you might use. The program should that take five different input from the user. Each input will have two words and we will build a dictionary where the words are the keys and values*.

We'll start to build up the sections one at a time now! First, we need to pick a name for the dictionary. We'll try to pick a clear name for each of these variables

.. activecode:: ac500_3_1
   
    # initialize a dictionary
    user_dictionary = {}
    print("---------- keys in user_dictionary: " + str(list(user_dictionary.keys())) + " ----------")

    # write a for loop that will iterate five times. I can use the range function for this!

    # in the for loop, I should ask for input from the user

    # next, I should separate the words

    # finally, I should add the key value pair to the dictionary

We picked the variable name ``user_dictionary`` because it will be a dictionary that is created by a user. Other names could be 
appropriate as well! Though it may seem unnecessary, we'll add a print statement to remind ourself that ``user_dictionary`` is empty.

Next we'll build up the for loop!

.. activecode:: ac500_3_2
   
    # initialize a dictionary
    user_dictionary = {}
    print("---------- keys in user_dictionary: " + str(list(user_dictionary.keys())) + " ----------")

    # write a for loop that will iterate five times. I can use the range function for this!
    for _ in range(5):
        print("---------- LOOP HAS STARTED ----------")
        # in the for loop, I should ask for input from the user

        # next, I should separate the words

        # finally, I should add the key value pair to the dictionary
        print("---------- LOOP HAS ENDED ----------")

If we want to make sure that the for loop is iterating five times then we can add these print statements to execute so that we 
can track the progress of the program.

Next, we'lll get the input from the user!

.. activecode:: ac500_3_3
   
    # initialize a dictionary
    user_dictionary = {}
    print("---------- keys in user_dictionary: " + str(list(user_dictionary.keys())) + " ----------")

    # write a for loop that will iterate five times. I can use the range function for this!
    for _ in range(5):
        print("---------- LOOP HAS STARTED ----------")
        # in the for loop, I should ask for input from the user
        response = input("Please enter two words to add to a dictionary. The first word is the definition, the second will be the word associated with it.")
        print("---------- The response: " + response + " ----------")

        # next, I should separate the words

        # finally, I should add the key value pair to the dictionary
        print("---------- LOOP HAS ENDED ----------")

Now we'll want to print out the response. We're expecting that it should be as string, so we should be able to add it to the print 
statement with other strings without any issue. If there is an issue, then something could be going wrong with how we are getting input 
from the user.

Now, we can separate the words so that we have our key and value to add to the dictionary!

.. activecode:: ac500_3_4
   
    # initialize a dictionary
    user_dictionary = {}
    print("---------- keys in user_dictionary: " + str(list(user_dictionary.keys())) + " ----------")

    # write a for loop that will iterate five times. I can use the range function for this!
    for _ in range(5):
        print("---------- LOOP HAS STARTED ----------")
        # in the for loop, I should ask for input from the user
        response = input("Please enter two words to add to a dictionary. The first word is the definition, the second will be the word associated with it.")
        print("---------- The response: " + response + " ----------")

        # next, I should separate the words
        separated_response = response.split()
        print("---------- The separated response: " + str(separated_response) + " ----------")
        response_key = separated_response[0]
        print("---------- The response key: " + response_key + " ----------")
        response_value = separated_response[1]
        print("---------- The response value: " + response_value + " ----------")

        # finally, I should add the key value pair to the dictionary
        print("---------- LOOP HAS ENDED ----------")

Here we know that ``response`` is a string that contains two words. We can use the split method to separate the words, which will give us 
a list. The first word will be the key and the second word will be the value, so we can use indexing to access that information. 

.. activecode:: ac500_3_5
   
    # initialize a dictionary
    user_dictionary = {}
    print("---------- keys in user_dictionary: " + str(list(user_dictionary.keys())) + " ----------")

    # write a for loop that will iterate five times. I can use the range function for this!
    for _ in range(5):
        print("---------- LOOP HAS STARTED ----------")
        # in the for loop, I should ask for input from the user
        response = input("Please enter two words to add to a dictionary. The first word is the definition, the second will be the word associated with it.")
        print("---------- The response: " + response + " ----------")

        # next, I should separate the words
        separated_response = response.split()
        print("---------- The separated response: " + str(separated_response) + " ----------")
        response_key = separated_response[0]
        print("---------- The response key: " + response_key + " ----------")
        response_value = separated_response[1]
        print("---------- The response value: " + response_value + " ----------")

        # finally, I should add the key value pair to the dictionary
        user_dictionary[response_key] = response_value
        print("---------- LOOP HAS ENDED ----------")

    print("---------- The user dictionary")
    print(user_dictionary)
    print("----------")

Finally, we add code to add the key and value pair into a dictionary. We can print out the final result of the dictionary once the for 
loop is over so that we can determine if it has been done correctly.
